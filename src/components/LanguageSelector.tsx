import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'ko' as Language, name: '한국어', flag: '🇰🇷' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' }
  ];

  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
        <Globe className="h-4 w-4 text-gray-600" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="bg-transparent border-none outline-none cursor-pointer text-sm font-medium"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector; 