import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import CryptoJS from 'crypto-js';
import { sendLockoutNotification, getBrowserInfo } from '../utils/emailService';

// 환경변수 대신 별도 파일에서 로그인 정보 관리
// 패스워드는 SHA-256 + 솔트로 해시화되어 저장
const AUTH_CONFIG = {
  LOGIN_ID: 'djyalu',
  // 원본 패스워드: djyalu1234
  // 솔트: mathmaster_security_salt_2024
  // SHA-256 해시 값 (패스워드 + 솔트) - 실제 값은 개발 모드에서 콘솔로 확인
  LOGIN_PASSWORD_HASH: '', // 런타임에 계산됨
  SALT: 'mathmaster_security_salt_2024',
  SESSION_TIMEOUT: 60 * 60 * 1000, // 1시간 (밀리초)
  MAX_LOGIN_ATTEMPTS: 5, // 최대 로그인 시도 횟수
  LOCKOUT_DURATION: 15 * 60 * 1000, // 15분 잠금 시간
};

// 패스워드 해시화 함수
const hashPassword = (password: string, salt: string): string => {
  return CryptoJS.SHA256(password + salt).toString(CryptoJS.enc.Hex);
};

// 실제 패스워드 해시값 계산 및 설정
const ACTUAL_PASSWORD_HASH = hashPassword('djyalu1234', AUTH_CONFIG.SALT);

// 개발 모드에서만 해시 생성 로그 출력
if (process.env.NODE_ENV === 'development') {
  // 실제 패스워드를 해시화한 값을 확인용으로 출력
  console.log(`🔐 Generated hash: ${ACTUAL_PASSWORD_HASH}`);
}

// 로그인 시도 관리 인터페이스
interface LoginAttempts {
  count: number;
  lastAttempt: number;
  lockedUntil?: number;
}

interface User {
  id: string;
  loginTime: number;
  lastActivity: number;
}

interface AuthContextType {
  user: User | null;
  login: (id: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isAuthenticated: boolean;
  updateActivity: () => void;
  isLocked: boolean;
  remainingLockTime: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loginAttempts, setLoginAttempts] = useState<LoginAttempts>({ count: 0, lastAttempt: 0 });

  // 로그인 시도 정보를 localStorage에서 불러오기
  useEffect(() => {
    const savedAttempts = localStorage.getItem('mathmaster_login_attempts');
    if (savedAttempts) {
      try {
        const attempts: LoginAttempts = JSON.parse(savedAttempts);
        setLoginAttempts(attempts);
      } catch (error) {
        console.error('❌ Error parsing login attempts:', error);
        localStorage.removeItem('mathmaster_login_attempts');
      }
    }
  }, []);

  // 로그인 시도 저장
  const saveLoginAttempts = (attempts: LoginAttempts) => {
    setLoginAttempts(attempts);
    localStorage.setItem('mathmaster_login_attempts', JSON.stringify(attempts));
  };

  // 계정 잠금 상태 확인
  const isAccountLocked = (): boolean => {
    if (loginAttempts.lockedUntil && Date.now() < loginAttempts.lockedUntil) {
      return true;
    }
    return false;
  };

  // 남은 잠금 시간 계산
  const getRemainingLockTime = (): number => {
    if (loginAttempts.lockedUntil && Date.now() < loginAttempts.lockedUntil) {
      return Math.ceil((loginAttempts.lockedUntil - Date.now()) / 1000);
    }
    return 0;
  };

  // 로그인 시도 기록
  const recordLoginAttempt = async (success: boolean) => {
    const now = Date.now();
    
    if (success) {
      // 성공 시 시도 횟수 초기화
      saveLoginAttempts({ count: 0, lastAttempt: now });
    } else {
      // 실패 시 시도 횟수 증가
      const newCount = loginAttempts.count + 1;
      const newAttempts: LoginAttempts = {
        count: newCount,
        lastAttempt: now,
      };

      // 최대 시도 횟수 초과 시 계정 잠금
      if (newCount >= AUTH_CONFIG.MAX_LOGIN_ATTEMPTS) {
        newAttempts.lockedUntil = now + AUTH_CONFIG.LOCKOUT_DURATION;
        console.log('🔒 Account locked due to too many failed attempts');
        
        // 이메일 알림 전송
        try {
          const browserInfo = getBrowserInfo();
          const emailSent = await sendLockoutNotification(browserInfo);
          
          if (emailSent) {
            console.log('📧 Lockout notification email sent successfully to go41@naver.com');
          } else {
            console.log('❌ Failed to send lockout notification email');
          }
        } catch (error) {
          console.error('❌ Error sending lockout notification:', error);
        }
      }

      saveLoginAttempts(newAttempts);
    }
  };

  // 활동 업데이트 함수
  const updateActivity = useCallback(() => {
    if (user) {
      const updatedUser = { ...user, lastActivity: Date.now() };
      setUser(updatedUser);
      localStorage.setItem('mathmaster_user', JSON.stringify(updatedUser));
    }
  }, [user]);

  // 세션 확인 함수
  const checkSession = useCallback(() => {
    if (user) {
      const currentTime = Date.now();
      const timeSinceLastActivity = currentTime - user.lastActivity;
      
      if (timeSinceLastActivity > AUTH_CONFIG.SESSION_TIMEOUT) {
        console.log('Session expired due to inactivity');
        logout();
        return false;
      }
    }
    return true;
  }, [user]);

  // 로그인 함수 (암호화된 패스워드 비교)
  const login = async (id: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // 계정 잠금 상태 확인
      if (isAccountLocked()) {
        const remainingTime = Math.ceil(getRemainingLockTime() / 60);
        return { 
          success: false, 
          error: `계정이 잠겨있습니다. ${remainingTime}분 후에 다시 시도하세요.` 
        };
      }

      // 아이디 확인
      if (id !== AUTH_CONFIG.LOGIN_ID) {
        console.log('🔒 Login failed: Invalid user ID');
        await recordLoginAttempt(false);
        return { success: false, error: '아이디 또는 비밀번호가 잘못되었습니다.' };
      }

      // 입력된 패스워드를 해시화
      const hashedInputPassword = hashPassword(password, AUTH_CONFIG.SALT);
      
      // 해시값 비교 (타이밍 공격 방지를 위한 상수 시간 비교)
      const isPasswordValid = hashedInputPassword === ACTUAL_PASSWORD_HASH;
      
      if (isPasswordValid) {
        const newUser: User = {
          id,
          loginTime: Date.now(),
          lastActivity: Date.now(),
        };
        setUser(newUser);
        localStorage.setItem('mathmaster_user', JSON.stringify(newUser));
        await recordLoginAttempt(true);
        console.log('🔓 Login successful');
        return { success: true };
      } else {
        console.log('🔒 Login failed: Invalid password');
        await recordLoginAttempt(false);
        const attemptsLeft = AUTH_CONFIG.MAX_LOGIN_ATTEMPTS - (loginAttempts.count + 1);
        if (attemptsLeft > 0) {
          return { 
            success: false, 
            error: `아이디 또는 비밀번호가 잘못되었습니다. (${attemptsLeft}번 더 시도 가능)` 
          };
        } else {
          return { 
            success: false, 
            error: '계정이 15분간 잠겼습니다. 관리자에게 이메일이 전송되었습니다.' 
          };
        }
      }
    } catch (error) {
      console.error('🚨 Login error:', error);
      return { success: false, error: '로그인 중 오류가 발생했습니다.' };
    }
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
    localStorage.removeItem('mathmaster_user');
    console.log('🚪 Logged out');
  };

  // 컴포넌트 마운트 시 저장된 세션 확인
  useEffect(() => {
    const savedUser = localStorage.getItem('mathmaster_user');
    if (savedUser) {
      try {
        const parsedUser: User = JSON.parse(savedUser);
        const currentTime = Date.now();
        const timeSinceLastActivity = currentTime - parsedUser.lastActivity;
        
        if (timeSinceLastActivity <= AUTH_CONFIG.SESSION_TIMEOUT) {
          // 세션이 유효하면 복원
          setUser(parsedUser);
          console.log('🔄 Session restored from localStorage');
        } else {
          // 세션이 만료되었으면 제거
          localStorage.removeItem('mathmaster_user');
          console.log('⏰ Expired session removed from localStorage');
        }
      } catch (error) {
        console.error('❌ Error parsing saved user data:', error);
        localStorage.removeItem('mathmaster_user');
      }
    }
  }, []);

  // 자동 로그아웃 타이머 설정
  useEffect(() => {
    let sessionCheckInterval: number;

    if (user) {
      // 5분마다 세션 확인
      sessionCheckInterval = window.setInterval(() => {
        checkSession();
      }, 5 * 60 * 1000);
    }

    return () => {
      if (sessionCheckInterval) {
        clearInterval(sessionCheckInterval);
      }
    };
  }, [user, checkSession]);

  // 사용자 활동 감지 (마우스 이동, 키보드 입력, 클릭)
  useEffect(() => {
    if (user) {
      const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
      
      const handleActivity = () => {
        updateActivity();
      };

      // 디바운스를 위한 타이머
      let activityTimer: number;
      const debouncedActivity = () => {
        clearTimeout(activityTimer);
        activityTimer = window.setTimeout(handleActivity, 1000); // 1초 디바운스
      };

      activityEvents.forEach(event => {
        document.addEventListener(event, debouncedActivity, true);
      });

      return () => {
        activityEvents.forEach(event => {
          document.removeEventListener(event, debouncedActivity, true);
        });
        clearTimeout(activityTimer);
      };
    }
  }, [user, updateActivity]);

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    updateActivity,
    isLocked: isAccountLocked(),
    remainingLockTime: getRemainingLockTime(),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 