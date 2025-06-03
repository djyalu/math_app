import emailjs from '@emailjs/browser';
import CryptoJS from 'crypto-js';

// EmailJS 설정 (실제 프로덕션에서는 환경변수로 관리)
const EMAIL_CONFIG = {
  SERVICE_ID: 'service_mathmaster', // EmailJS 서비스 ID
  TEMPLATE_ID: 'template_lockout_alert', // EmailJS 템플릿 ID  
  PUBLIC_KEY: 'your_emailjs_public_key', // EmailJS 공개키
  ADMIN_EMAIL: 'go41@naver.com',
  SECRET_KEY: 'mathmaster_unlock_secret_2024'
};

// 잠금 해제 토큰 생성
export const generateUnlockToken = (): string => {
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substr(2, 9);
  const payload = `${timestamp}_${randomId}`;
  
  // 토큰을 암호화
  const encrypted = CryptoJS.AES.encrypt(payload, EMAIL_CONFIG.SECRET_KEY).toString();
  return encodeURIComponent(encrypted);
};

// 토큰 검증
export const validateUnlockToken = (token: string): boolean => {
  try {
    const decoded = decodeURIComponent(token);
    const decrypted = CryptoJS.AES.decrypt(decoded, EMAIL_CONFIG.SECRET_KEY);
    const payload = decrypted.toString(CryptoJS.enc.Utf8);
    
    if (!payload) return false;
    
    const [timestamp] = payload.split('_');
    const tokenTime = parseInt(timestamp);
    const now = Date.now();
    
    // 토큰 유효 시간: 24시간
    const TOKEN_VALIDITY = 24 * 60 * 60 * 1000;
    
    return (now - tokenTime) <= TOKEN_VALIDITY;
  } catch (error) {
    console.error('Token validation error:', error);
    return false;
  }
};

// 잠금 알림 이메일 전송
export const sendLockoutNotification = async (attemptDetails: {
  timestamp: number;
  userAgent: string;
  ipAddress?: string;
}): Promise<boolean> => {
  try {
    // 잠금 해제 토큰 생성
    const unlockToken = generateUnlockToken();
    const unlockUrl = `${window.location.origin}/unlock-account?token=${unlockToken}`;
    
    // 이메일 템플릿 매개변수
    const templateParams = {
      to_email: EMAIL_CONFIG.ADMIN_EMAIL,
      subject: '[MathMaster] 계정 잠금 알림',
      timestamp: new Date(attemptDetails.timestamp).toLocaleString('ko-KR'),
      user_agent: attemptDetails.userAgent,
      ip_address: attemptDetails.ipAddress || '알 수 없음',
      unlock_url: unlockUrl,
      app_name: 'MathMaster - Think! Mathematics G3',
      lockout_duration: '15분',
      max_attempts: '5회'
    };

    console.log('🔐 Unlock token generated:', unlockToken);
    console.log('🔗 Unlock URL:', unlockUrl);

    // 개발 모드에서는 실제 이메일 전송 없이 콘솔에만 로그
    if (process.env.NODE_ENV === 'development') {
      console.log('📧 [DEV MODE] Email would be sent with params:', templateParams);
      console.log(`
📧 =============== 이메일 내용 ===============
받는 사람: ${EMAIL_CONFIG.ADMIN_EMAIL}
제목: ${templateParams.subject}

안녕하세요,

MathMaster 애플리케이션에서 계정 잠금이 발생했습니다.

■ 잠금 정보:
- 발생 시간: ${templateParams.timestamp}
- 브라우저: ${templateParams.user_agent}
- IP 주소: ${templateParams.ip_address}
- 최대 시도 횟수: ${templateParams.max_attempts} 초과
- 잠금 시간: ${templateParams.lockout_duration}

■ 계정 잠금 해제:
아래 링크를 클릭하여 즉시 계정 잠금을 해제할 수 있습니다:
${templateParams.unlock_url}

※ 이 링크는 24시간 동안 유효합니다.

감사합니다.
${templateParams.app_name}
========================================
      `);
      
      // 개발 모드에서는 항상 성공으로 처리
      return true;
    }

    // 실제 이메일 전송 (프로덕션에서만)
    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    console.log('✅ Email sent successfully:', response);
    return true;

  } catch (error) {
    console.error('❌ Failed to send lockout notification email:', error);
    return false;
  }
};

// 브라우저 정보 수집
export const getBrowserInfo = () => {
  return {
    userAgent: navigator.userAgent,
    timestamp: Date.now(),
    // 실제 IP는 서버에서만 가져올 수 있으므로 클라이언트에서는 제외
  };
}; 