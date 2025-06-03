import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, PenTool, Video, Clock } from 'lucide-react';
import { useTopic } from '../contexts/TopicContext';
import { useProgress } from '../contexts/ProgressContext';
import IconSelector from '../components/ui/IconSelector';
import { useLesson } from '../contexts/LessonContext';
import type { Topic } from '../contexts/TopicContext';
import ConceptContent from '../components/ConceptContent';
import { allConcepts } from '../data/concepts';
import { useStudyTimeTracker, formatStudyTime } from '../utils/timeTracker';
import { useLanguage } from '../contexts/LanguageContext';
import { lessons } from '../data/lessons';

const TopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { topics, getTopicById, setCurrentTopic } = useTopic();
  const { updateProgress } = useProgress();
  const { updateLastAccessed } = useLesson();
  const { t } = useLanguage();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  
  // 시간 추적 추가
  const { currentMinutes } = useStudyTimeTracker(topicId || '');
  
  // 번역이 적용된 시간 포맷팅
  const formatCurrentTime = () => formatStudyTime(currentMinutes, (key: string) => {
    try {
      // TranslationKeys 타입에 맞는 키인지 확인하고 번역
      if (key === 'time.minutes' || key === 'time.hours') {
        return t(key);
      }
      return key;
    } catch {
      return key;
    }
  });

  // 예상 학습 시간 계산 함수
  const getEstimatedTime = () => {
    if (!topicId) return 0;
    const topicLessons = lessons.filter(lesson => lesson.topicId === topicId);
    if (topicLessons.length === 0) return 5; // 기본값 5분
    
    const totalTime = topicLessons.reduce((sum, lesson) => sum + lesson.estimatedTime, 0);
    return Math.round(totalTime / topicLessons.length); // 평균 시간
  };

  // 시간 포맷팅 함수 (다국어 지원)
  const formatEstimatedTime = (minutes: number) => {
    const timeUnit = t('time.minutes');
    return `${minutes}${timeUnit}`;
  };
  
  // 현재 토픽에 해당하는 개념 컨텐츠 가져오기
  const getConceptContent = () => {
    if (!topicId) return null;
    return allConcepts[topicId] || null;
  };

  const conceptContent = getConceptContent();
  
  // 서브토픽에 해당하는 개념 컨텐츠 필터링 - 더 정확한 매칭
  const getSubtopicConcepts = (subtopicId: string) => {
    if (!conceptContent) return [];
    
    // 서브토픽별 매칭 로직
    const subtopicMapping: { [key: string]: string[] } = {
      'pt-1': ['understanding'],
      'pt-2': ['applications'],
      'tr-1': ['understanding'],
      'tr-2': ['applications'],
      'cs-1': ['triangle-congruence'],
      'cs-2': ['triangle-similarity'],
      'vs-1': ['understanding'],
      'vs-2': ['applications'],
      'prob-1': ['basic-understanding'],
      'prob-2': ['experimental-understanding'],
      'stat-1': ['data-representation-understanding'],
      'stat-2': ['central-tendency-understanding'],
      // 확률과 통계의 3번째 섹션 추가
      'basic-concepts': ['basic-understanding'],
      'experimental-probability': ['experimental-understanding'],
      'applications': ['applications-understanding'],
      'data-representation': ['data-representation-understanding'],
      'central-tendency': ['central-tendency-understanding'],
      'data-analysis': ['data-analysis-understanding']
    };

    const matchingTypes = subtopicMapping[subtopicId] || [];
    return conceptContent.filter(content => 
      matchingTypes.some(type => content.id.includes(type))
    );
  };

  useEffect(() => {
    if (!topicId) return;
    
    const currentTopic = getTopicById(topicId);
    if (currentTopic) {
      setTopic(currentTopic);
      setCurrentTopic(currentTopic);
      updateProgress(currentTopic.id, 1, currentTopic.subtopics?.length * 3 || 1);
      updateLastAccessed(currentTopic.id);
    }

    return () => {
      setCurrentTopic(null);
    };
  }, [topicId]);

  useEffect(() => {
    // 언어가 변경될 때 토픽 정보 업데이트
    if (topicId) {
      const updatedTopic = getTopicById(topicId);
      if (updatedTopic) {
        setTopic(updatedTopic);
      }
    }
  }, [topics, topicId, getTopicById]);

  if (!topic) {
    return <div className="p-4">{t('common.error')}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* 주제 헤더 */}
      <div className="bg-white rounded-xl shadow-sm p-6 border-l-4" style={{ borderLeftColor: topic.color }}>
        <div className="flex items-start">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mr-5"
            style={{ backgroundColor: `${topic.color}20` }}
          >
            <IconSelector icon={topic.icon} className="w-8 h-8" style={{ color: topic.color }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold">{topic.title}</h1>
              <div className="flex items-center space-x-2 text-blue-600">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">{formatCurrentTime()}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <Link
                  to={`/practice/${topic.id}`}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                >
                  <PenTool size={18} />
                  <span>{t('practice.title')}</span>
                </Link>
                <Link
                  to={`/video/${topic.id}`}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                >
                  <Video size={18} />
                  <span>{t('nav.videos')}</span>
                </Link>
              </div>
              <div className="text-sm text-gray-500">
                {formatEstimatedTime(getEstimatedTime())}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 학습 개념 */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">{t('nav.topics')}</h2>
        </div>
        
        <div className="divide-y">
          {topic.subtopics.map((subtopic) => {
            const isSelected = selectedSubtopic === subtopic.id;
            const subtopicConcepts = getSubtopicConcepts(subtopic.id);
            
            return (
              <div key={subtopic.id} className="px-6 py-4">
                <div 
                  className="cursor-pointer"
                  onClick={() => setSelectedSubtopic(isSelected ? null : subtopic.id)}
                >
                  <h3 className="font-medium text-lg mb-2 flex items-center justify-between">
                    <span>{subtopic.title}</span>
                    <ChevronRight 
                      size={20} 
                      className={`transform transition-transform ${isSelected ? 'rotate-90' : ''}`}
                    />
                  </h3>
                </div>
                
                {isSelected && subtopicConcepts && subtopicConcepts.length > 0 && (
                  <div className="mt-4 space-y-6">
                    {subtopicConcepts.map((content) => (
                      <ConceptContent key={content.id} content={content} />
                    ))}
                  </div>
                )}
                
                <div className="space-y-4 mt-2">
                  {subtopic.concepts.map((concept, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-4 h-4 mt-1 rounded-full bg-gray-200 flex-shrink-0" />
                      <p>{concept}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 관련 연습 문제 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">{t('practice.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to={`/practice/${topic.id}/objective`}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-medium mb-2">{t('practice.multipleChoice')}</h3>
            <p className="text-gray-600 text-sm">{t('practice.multipleChoice')}</p>
          </Link>
          <Link
            to={`/practice/${topic.id}/subjective`}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-medium mb-2">{t('practice.subjective')}</h3>
            <p className="text-gray-600 text-sm">{t('practice.subjective')}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;