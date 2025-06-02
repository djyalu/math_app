import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Think! Mathematics G3 - 학습 지원 플랫폼</p>
        <div className="mt-2 md:mt-0 flex space-x-4">
          <span>도움말</span>
          <span>개인정보 처리방침</span>
          <span>이용약관</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;