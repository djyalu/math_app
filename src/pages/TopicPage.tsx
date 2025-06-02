import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, PenTool, Video } from 'lucide-react';
import { useTopic } from '../contexts/TopicContext';
import { useProgress } from '../contexts/ProgressContext';
import IconSelector from '../components/ui/IconSelector';
import { useLesson } from '../contexts/LessonContext';
import type { Topic } from '../contexts/TopicContext';

const TopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { topics, getTopicById, setCurrentTopic } = useTopic();
  const { updateProgress } = useProgress();
  const { getLessonsByTopic, isLessonCompleted, updateLastAccessed } = useLesson();
  const [topic, setTopic] = useState<Topic | null>(null);
  
  const lessons = topicId ? getLessonsByTopic(topicId) : [];
  
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
  }, [topicId, getTopicById, setCurrentTopic, updateProgress, updateLastAccessed]);
  
  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">주제를 찾을 수 없습니다</h2>
        <p>선택한 주제가 존재하지 않습니다.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Topic Header */}
      <div 
        className="bg-white rounded-xl shadow-sm p-6 border-l-4"
        style={{ borderLeftColor: topic.color }}
      >
        <div className="flex items-start">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mr-5"
            style={{ backgroundColor: `${topic.color}20` }}
          >
            <IconSelector name={topic.icon} size={32} color={topic.color} />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{topic.title}</h1>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <div className="flex space-x-4">
              <Link
                to={`/practice/${topic.id}`}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
              >
                <PenTool size={18} />
                <span>연습 문제</span>
              </Link>
              <Link
                to={`/video/${topic.id}`}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
              >
                <Video size={18} />
                <span>학습 동영상</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Content */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">Key Concepts</h2>
        </div>
        
        <div className="divide-y">
          {topic.subtopics.map((subtopic) => {
            const subtopicLessons = lessons.filter(lesson => lesson.subtopicId === subtopic.id);
            
            return (
              <div key={subtopic.id} className="px-6 py-4">
                <h3 className="font-medium text-lg mb-2">{subtopic.title}</h3>
                <div className="space-y-4">
                  {subtopic.concepts.map((concept, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-4 h-4 mt-1 rounded-full bg-gray-200 flex-shrink-0" />
                      <p>{concept}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-4">
                  {subtopicLessons.map(lesson => (
                    <Link
                      key={lesson.id}
                      to={`/lesson/${lesson.id}`}
                      className={`block p-4 rounded-lg border ${
                        isLessonCompleted(lesson.id)
                          ? 'bg-green-50 border-green-200'
                          : 'bg-white border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-gray-600">{lesson.description}</p>
                      <div className="mt-2 flex items-center text-sm">
                        <span className="text-gray-500">
                          예상 학습 시간: {lesson.estimatedTime}분
                        </span>
                        {isLessonCompleted(lesson.id) && (
                          <span className="ml-4 text-green-600">완료됨</span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Related Topics */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Related Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics
            .filter(t => t.id !== topic.id)
            .slice(0, 3)
            .map(relatedTopic => (
              <Link 
                key={relatedTopic.id}
                to={`/topic/${relatedTopic.id}`}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all flex items-center"
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: `${relatedTopic.color}20` }}
                >
                  <IconSelector name={relatedTopic.icon} size={20} color={relatedTopic.color} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{relatedTopic.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-1">{relatedTopic.description}</p>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TopicPage;