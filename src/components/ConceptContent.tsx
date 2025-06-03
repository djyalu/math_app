import React, { useState } from 'react';
import { Book, BookOpen, AlertTriangle, Video, Link as LinkIcon } from 'lucide-react';
import type { ConceptContent as ConceptContentType } from '../data/types';
import { useLanguage } from '../contexts/LanguageContext';

interface ConceptContentProps {
  content: ConceptContentType;
}

const ConceptContent: React.FC<ConceptContentProps> = ({ content }) => {
  const [showExample, setShowExample] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const { t, language } = useLanguage();

  // 다국어 헬퍼 함수들
  const getTitle = () => language === 'en' && content.title_en ? content.title_en : content.title;
  const getDescription = () => language === 'en' && content.description_en ? content.description_en : content.description;
  const getExplanation = () => language === 'en' && content.explanation_en ? content.explanation_en : content.explanation;
  const getKeyPoints = () => language === 'en' && content.keyPoints_en ? content.keyPoints_en : content.keyPoints;
  const getCommonMistakes = () => language === 'en' && content.commonMistakes_en ? content.commonMistakes_en : content.commonMistakes;
  
  const getExampleProblem = (example: ConceptContentType['examples'][0]) => language === 'en' && example.problem_en ? example.problem_en : example.problem;
  const getExampleExplanation = (example: ConceptContentType['examples'][0]) => language === 'en' && example.explanation_en ? example.explanation_en : example.explanation;
  
  const getResourceTitle = (resource: NonNullable<ConceptContentType['additionalResources']>[0]) => language === 'en' && resource.title_en ? resource.title_en : resource.title;
  const getVisualAidDescription = (aid: NonNullable<ConceptContentType['visualAids']>[0]) => language === 'en' && aid.description_en ? aid.description_en : aid.description;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      {/* 개념 헤더 */}
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold mb-2">{getTitle()}</h2>
        <p className="text-gray-600">{getDescription()}</p>
      </div>

      {/* 개념 설명 */}
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <Book className="text-blue-600 mt-1 mr-3" size={20} />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">{t('practice.explanation')}</h3>
              <p className="text-blue-900 whitespace-pre-line">{getExplanation()}</p>
            </div>
          </div>
        </div>

        {/* 핵심 포인트 */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2 flex items-center">
            <BookOpen className="mr-2" size={18} />
            {t('lesson.keyPoints')}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {getKeyPoints().map((point, index) => (
              <li key={index} className="text-green-900">{point}</li>
            ))}
          </ul>
        </div>

        {/* 예제 */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">{t('lesson.examples')}</h3>
          {content.examples.map((example, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div 
                className="cursor-pointer"
                onClick={() => {
                  setShowExample(showExample === index ? null : index);
                  setShowSolution(false);
                }}
              >
                <h4 className="font-medium mb-2">
                  {t('lesson.example')} {index + 1}
                </h4>
                <p>{getExampleProblem(example)}</p>
              </div>
              
              {showExample === index && (
                <div className="mt-4 space-y-4">
                  <button
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg w-full"
                    onClick={() => setShowSolution(!showSolution)}
                  >
                    {showSolution 
                      ? t('lesson.hideSolution')
                      : t('lesson.showSolution')
                    }
                  </button>
                  
                  {showSolution && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">
                        {t('problems.answer')}: {example.solution}
                      </p>
                      <p className="text-gray-700 whitespace-pre-line">{getExampleExplanation(example)}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 시각 자료 */}
        {content.visualAids && content.visualAids.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('lesson.visualAids')}</h3>
            {content.visualAids.map((aid, index) => (
              <div key={index} className="border rounded-lg p-4">
                <p className="text-gray-600 mb-2">{getVisualAidDescription(aid)}</p>
                {aid.type === 'image' && (
                  <img src={aid.url} alt={getVisualAidDescription(aid)} className="max-w-full h-auto rounded" />
                )}
                {aid.type === 'interactive' && (
                  <a href={aid.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    {t('lesson.interactiveTool')}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 자주하는 실수 */}
        {content.commonMistakes && (
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2 flex items-center">
              <AlertTriangle className="mr-2" size={18} />
              {t('lesson.commonMistakes')}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {getCommonMistakes().map((mistake, index) => (
                <li key={index} className="text-red-900">{mistake}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 추가 자료 */}
        {content.additionalResources && (
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
              <LinkIcon className="mr-2" size={18} />
              {t('video.additionalResources')}
            </h3>
            <div className="space-y-2">
              {content.additionalResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  className="flex items-center text-purple-700 hover:text-purple-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.type === 'video' ? (
                    <Video className="mr-2" size={16} />
                  ) : (
                    <LinkIcon className="mr-2" size={16} />
                  )}
                  {getResourceTitle(resource)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConceptContent; 