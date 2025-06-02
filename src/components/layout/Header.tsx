import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTopic } from '../../contexts/TopicContext';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const location = useLocation();
  const { getTopicById } = useTopic();
  
  const getPageTitle = () => {
    const path = location.pathname;
    
    if (path === '/') {
      return '홈';
    }
    
    if (path.startsWith('/topic/')) {
      const topicId = path.split('/').pop();
      if (topicId) {
        const topic = getTopicById(topicId);
        return topic ? topic.title : '주제';
      }
      return '주제';
    }
    
    if (path.startsWith('/practice/')) {
      const topicId = path.split('/').pop();
      if (topicId && topicId !== 'quiz') {
        const topic = getTopicById(topicId);
        return topic ? `연습: ${topic.title}` : '연습 문제';
      }
      return '연습 문제';
    }
    
    if (path.startsWith('/visualizer/')) {
      const type = path.split('/').pop();
      if (type === 'geometry') return '기하학 시각화';
      if (type === 'trigonometry') return '삼각비 시각화';
      if (type === 'statistics') return '통계 시각화';
      return '시각화 도구';
    }
    
    if (path === '/progress') {
      return '나의 진도';
    }
    
    return 'MathMaster';
  };

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {children}
          <h1 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline text-sm text-gray-600">
            Think! Mathematics G3 8th Edition
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;