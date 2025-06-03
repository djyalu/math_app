import React, { useState, useEffect } from 'react';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

const LoginPage: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, isLocked, remainingLockTime } = useAuth();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // 로딩 애니메이션을 위한 약간의 지연
      await new Promise(resolve => setTimeout(resolve, 800));

      const result = await login(id, password);
      
      if (!result.success) {
        setError(result.error || t('auth.invalidCredentials'));
        setPassword(''); // 비밀번호 필드 초기화
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('로그인 중 오류가 발생했습니다.');
    }
    
    setIsLoading(false);
  };

  // 실시간 잠금 시간 업데이트
  const [lockTimeDisplay, setLockTimeDisplay] = useState(remainingLockTime);
  
  useEffect(() => {
    if (isLocked && remainingLockTime > 0) {
      const interval = setInterval(() => {
        setLockTimeDisplay(prev => Math.max(0, prev - 1));
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isLocked, remainingLockTime]);

  const formatLockTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* 배경 애니메이션 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300 bg-opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 bg-opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* 떠다니는 수학 기호들 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 text-white text-opacity-20 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>π</div>
        <div className="absolute top-32 right-32 text-white text-opacity-20 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>∑</div>
        <div className="absolute bottom-40 left-40 text-white text-opacity-20 text-5xl animate-bounce" style={{ animationDelay: '2s' }}>∞</div>
        <div className="absolute bottom-20 right-20 text-white text-opacity-20 text-4xl animate-bounce" style={{ animationDelay: '3s' }}>√</div>
        <div className="absolute top-1/2 left-10 text-white text-opacity-20 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>∫</div>
        <div className="absolute top-1/3 right-10 text-white text-opacity-20 text-4xl animate-bounce" style={{ animationDelay: '2.5s' }}>α</div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white border-opacity-20">
          {/* 로고 섹션 */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lock className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">MathMaster</h1>
            <p className="text-gray-600">{t('auth.welcomeMessage')}</p>
          </div>

          {/* 로그인 폼 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 아이디 입력 */}
            <div className="space-y-2">
              <label htmlFor="id" className="text-sm font-medium text-gray-700 flex items-center">
                <User className="h-4 w-4 mr-2" />
                {t('auth.userId')}
              </label>
              <input
                id="id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                placeholder={t('auth.enterUserId')}
                required
                disabled={isLoading}
              />
            </div>

            {/* 비밀번호 입력 */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center">
                <Lock className="h-4 w-4 mr-2" />
                {t('auth.password')}
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder={t('auth.enterPassword')}
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* 에러 메시지 */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-sm text-center">{error}</p>
              </div>
            )}

            {/* 계정 잠금 상태 표시 */}
            {isLocked && lockTimeDisplay > 0 && (
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Lock className="h-5 w-5 text-orange-600" />
                  <div className="text-center">
                    <p className="text-orange-800 font-medium text-sm">계정이 일시적으로 잠겼습니다</p>
                    <p className="text-orange-600 text-xs mt-1">
                      {formatLockTime(lockTimeDisplay)} 후에 다시 시도하세요
                    </p>
                  </div>
                </div>
                
                {/* 개발자용 잠금 해제 버튼 */}
                <div className="text-center mt-3 pt-3 border-t border-orange-200">
                  <p className="text-xs text-orange-600 mb-2">개발자 모드: 테스트용 즉시 해제</p>
                  <button
                    onClick={() => {
                      localStorage.removeItem('mathmaster_login_attempts');
                      window.location.reload();
                    }}
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs rounded-lg transition-colors shadow-sm"
                  >
                    🔓 잠금 즉시 해제
                  </button>
                </div>
              </div>
            )}

            {/* 로그인 버튼 */}
            <button
              type="submit"
              disabled={isLoading || !id || !password || isLocked}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg font-medium text-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  {t('auth.loggingIn')}
                </div>
              ) : isLocked ? (
                '계정 잠금됨'
              ) : (
                t('auth.login')
              )}
            </button>
          </form>

          {/* 추가 정보 */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              {t('auth.secureLogin')}
            </p>
          </div>
        </div>

        {/* 푸터 */}
        <div className="text-center mt-6">
          <p className="text-white text-opacity-80 text-sm">
            Think! Mathematics G3 8th Edition
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 