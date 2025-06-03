import React from 'react';
import { Link } from 'react-router-dom';
import { practices } from '../data/practice';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navigation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">MathMaster</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-gray-900 flex items-center">
                {t('nav.practice')} <span className="ml-1">▼</span>
              </button>
              
              <div className="absolute right-0 w-64 mt-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {practices.map((practice) => (
                    <Link
                      key={practice.id}
                      to={`/practice/${practice.topicId}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {practice.title} (Chapter {practice.chapterNumber})
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 