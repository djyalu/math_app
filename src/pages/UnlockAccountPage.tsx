import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Unlock, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { validateUnlockToken } from '../utils/emailService';

const UnlockAccountPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [isProcessing, setIsProcessing] = useState(true);
  const [unlockResult, setUnlockResult] = useState<'success' | 'error' | 'invalid'>('error');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const processUnlock = async () => {
      const token = searchParams.get('token');
      
      if (!token) {
        setUnlockResult('invalid');
        setMessage('잠금 해제 토큰이 없습니다.');
        setIsProcessing(false);
        return;
      }

      try {
        // 토큰 검증
        const isValidToken = validateUnlockToken(token);
        
        if (!isValidToken) {
          setUnlockResult('invalid');
          setMessage('잠금 해제 토큰이 유효하지 않거나 만료되었습니다.');
          setIsProcessing(false);
          return;
        }

        // 잠금 해제 처리
        localStorage.removeItem('mathmaster_login_attempts');
        
        setUnlockResult('success');
        setMessage('계정 잠금이 성공적으로 해제되었습니다.');
        
        console.log('🔓 Account unlocked successfully via email link');
        
      } catch (error) {
        console.error('❌ Error processing unlock:', error);
        setUnlockResult('error');
        setMessage('잠금 해제 처리 중 오류가 발생했습니다.');
      }
      
      setIsProcessing(false);
    };

    processUnlock();
  }, [searchParams]);

  const handleGoToLogin = () => {
    navigate('/');
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white border-opacity-20 max-w-md w-full">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">계정 잠금 해제 중...</h1>
            <p className="text-gray-600">잠시만 기다려주세요.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white border-opacity-20 max-w-md w-full">
        <div className="text-center">
          {/* 결과 아이콘 */}
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ${
            unlockResult === 'success' 
              ? 'bg-gradient-to-br from-green-500 to-green-600' 
              : 'bg-gradient-to-br from-red-500 to-red-600'
          }`}>
            {unlockResult === 'success' ? (
              <CheckCircle className="h-10 w-10 text-white" />
            ) : unlockResult === 'invalid' ? (
              <XCircle className="h-10 w-10 text-white" />
            ) : (
              <Unlock className="h-10 w-10 text-white" />
            )}
          </div>

          {/* 제목 */}
          <h1 className={`text-2xl font-bold mb-4 ${
            unlockResult === 'success' ? 'text-green-800' : 'text-red-800'
          }`}>
            {unlockResult === 'success' ? '잠금 해제 완료' : '잠금 해제 실패'}
          </h1>

          {/* 메시지 */}
          <p className={`mb-6 text-sm leading-relaxed ${
            unlockResult === 'success' ? 'text-green-700' : 'text-red-700'
          }`}>
            {message}
          </p>

          {/* 추가 안내 */}
          {unlockResult === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-green-800 text-sm">
                이제 정상적으로 로그인하실 수 있습니다.
              </p>
            </div>
          )}

          {unlockResult === 'invalid' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
              <p className="text-yellow-800 text-sm">
                토큰이 만료되었거나 잘못된 링크입니다.<br/>
                15분 대기 후 다시 로그인을 시도하거나,<br/>
                새로운 잠금 해제 이메일을 요청하세요.
              </p>
            </div>
          )}

          {/* 버튼 */}
          <button
            onClick={handleGoToLogin}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium flex items-center justify-center space-x-2"
          >
            <ArrowLeft size={18} />
            <span>로그인 페이지로 돌아가기</span>
          </button>
        </div>

        {/* 푸터 */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs">
            MathMaster - Think! Mathematics G3 8th Edition
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnlockAccountPage; 