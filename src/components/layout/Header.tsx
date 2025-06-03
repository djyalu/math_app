import React from 'react';
import { useLocation } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useTopic } from '../../contexts/TopicContext';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../LanguageSelector';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const location = useLocation();
  const { getTopicById } = useTopic();
  const { logout, user } = useAuth();
  const { t } = useLanguage();
  
  const getPageTitle = () => {
    const path = location.pathname;
    
    if (path === '/') {
      return t('nav.home');
    }
    
    if (path.startsWith('/topic/')) {
      const topicId = path.split('/').pop();
      if (topicId) {
        const topic = getTopicById(topicId);
        return topic ? topic.title : t('nav.topics');
      }
      return t('nav.topics');
    }
    
    if (path.startsWith('/practice/')) {
      const topicId = path.split('/').pop();
      if (topicId && topicId !== 'quiz') {
        const topic = getTopicById(topicId);
        return topic ? `${t('nav.practice')}: ${topic.title}` : t('nav.practice');
      }
      return t('nav.practice');
    }
    
    if (path.startsWith('/visualizer/')) {
      const type = path.split('/').pop();
      if (type === 'geometry') return t('visualizer.geometry.title');
      if (type === 'trigonometry') return t('visualizer.trigonometry.title');
      if (type === 'statistics') return t('visualizer.statistics.title');
      return t('visualizer.default.title');
    }
    
    if (path === '/progress') {
      return t('progress.title');
    }
    
    if (path === '/analytics') {
      return t('analytics.title');
    }
    
    return 'MathMaster';
  };

  const handleLogout = () => {
    if (window.confirm(t('auth.sessionExpired'))) {
      logout();
    }
  };

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {children}
          <h1 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          
          {user && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="hidden md:inline">
                {user.id}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title={t('auth.logout')}
              >
                <LogOut size={16} />
                <span className="hidden md:inline">{t('auth.logout')}</span>
              </button>
            </div>
          )}
          
          <span className="hidden lg:inline text-sm text-gray-500">
            Think! Mathematics G3 8th Edition
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;