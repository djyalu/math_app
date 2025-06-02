import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  PenTool,
  Clock,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { useTopic } from '../contexts/TopicContext';
import { useProgress } from '../contexts/ProgressContext';
import { useLesson } from '../contexts/LessonContext';

const HomePage = () => {
  const { topics } = useTopic();
  const { getOverallProgress, getTopicProgress, resetProgress } = useProgress();
  const { getLastAccessedTopics, getLastAccessTime } = useLesson();
  
  const overallProgress = getOverallProgress();
  
  // Get recently accessed topics based on last access time
  const recentTopics = getLastAccessedTopics() || topics.slice(0, 3);

  // Format relative time
  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}일 전`;
    if (hours > 0) return `${hours}시간 전`;
    if (minutes > 0) return `${minutes}분 전`;
    return '방금 전';
  };

  // Get random practice problem
  const getRandomPracticePath = () => {
    const practiceTypes = ['pythagorean', 'trigonometric', 'solid', 'probability', 'statistics'];
    const randomType = practiceTypes[Math.floor(Math.random() * practiceTypes.length)];
    return `/practice/${randomType}`;
  };

  const handleResetProgress = (topicId?: string) => {
    if (window.confirm(topicId ? '이 주제의 진도를 초기화하시겠습니까?' : '모든 진도를 초기화하시겠습니까?')) {
      resetProgress(topicId);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold mb-2">Welcome to MathMaster</h1>
            <p className="text-blue-100 mb-4">
              Your interactive learning companion for Think! Mathematics G3 8th Edition
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/topic/congruence-similarity" 
                className="flex items-center bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <BookOpen size={18} className="mr-2" />
                Start Learning
              </Link>
              <Link 
                to={getRandomPracticePath()} 
                className="flex items-center bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <PenTool size={18} className="mr-2" />
                Random Practice
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-blue-400 stroke-current"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-white stroke-current"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                  strokeDasharray={`${overallProgress * 2.51} 251`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-2xl font-bold">{overallProgress}%</span>
                <button 
                  onClick={() => handleResetProgress()}
                  className="mt-2 text-sm flex items-center hover:text-blue-200"
                >
                  <RefreshCw size={14} className="mr-1" />
                  초기화
                </button>
              </div>
            </div>
            <p className="text-center mt-2 text-blue-100">Overall Progress</p>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <Clock size={18} className="text-gray-500" />
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          {recentTopics.length > 0 ? (
            <div className="divide-y">
              {recentTopics.map((topic) => {
                const lastAccessed = getLastAccessTime(topic.id);
                return (
                  <div key={topic.id} className="py-3 first:pt-0 last:pb-0">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                          style={{ backgroundColor: `${topic.color}20` }}
                        >
                          <BookOpen size={16} style={{ color: topic.color }} />
                        </div>
                        <div>
                          <p className="font-medium">{topic.title}</p>
                          <div className="flex items-center text-sm text-gray-600">
                            <span>Progress: {getTopicProgress(topic.id)}%</span>
                            {lastAccessed && (
                              <span className="ml-2 text-gray-400">
                                · {formatRelativeTime(lastAccessed)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleResetProgress(topic.id)}
                          className="text-gray-400 hover:text-gray-600"
                          title="진도 초기화"
                        >
                          <RefreshCw size={16} />
                        </button>
                        <Link 
                          to={`/topic/${topic.id}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center py-4 text-gray-500">
              No recent activity. Start learning to track your progress!
            </p>
          )}
        </div>
      </section>

      {/* Topics Overview */}
      <section>
        <h2 className="text-xl font-semibold mb-4">All Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <Link 
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-2">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: `${topic.color}20` }}
                >
                  <BookOpen style={{ color: topic.color }} size={20} />
                </div>
                <h3 className="font-medium">{topic.title}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${getTopicProgress(topic.id)}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;