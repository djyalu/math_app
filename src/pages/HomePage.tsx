import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  PenTool,
  Clock,
  ArrowRight,
  RefreshCw,
  Triangle,
  Calculator,
  Shapes,
  Box,
  TrendingUp,
  BarChart3,
  Shuffle,
  Activity,
  GraduationCap
} from 'lucide-react';
import { useTopic } from '../contexts/TopicContext';
import { useProgress } from '../contexts/ProgressContext';
import { useLanguage } from '../contexts/LanguageContext';
import { getStudyTimes, StudyTime, clearAllStudyTimes, clearTopicStudyTime } from '../utils/timeTracker';

type Activity = {
  type: 'topic';
  topic: {
    id: string;
    title: string;
    color: string;
  };
  studyTime: StudyTime;
  lastStudied: Date;
} | {
  type: 'random-practice';
  studyTime: StudyTime;
  lastStudied: Date;
};

const HomePage = () => {
  const { topics } = useTopic();
  const { resetProgress } = useProgress();
  const { t } = useLanguage();
  
  const [studyTimes, setStudyTimes] = useState<StudyTime[]>([]);
  
  // localStorage 변화를 감지하여 studyTimes 업데이트
  useEffect(() => {
    const updateStudyTimes = () => {
      const times = getStudyTimes();
      setStudyTimes(times);
    };

    // 초기 로드
    updateStudyTimes();

    // localStorage 변화 감지
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'math_study_times') {
        updateStudyTimes();
      }
    };

    // 사용자 정의 이벤트로 localStorage 변화 감지 (같은 탭에서의 변화)
    const handleCustomStorageChange = () => {
      updateStudyTimes();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('localStorageChange', handleCustomStorageChange);

    // 5초마다 강제 업데이트 (실시간 감지)
    const interval = setInterval(updateStudyTimes, 5000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorageChange', handleCustomStorageChange);
      clearInterval(interval);
    };
  }, []);
  
  // 디버깅: 학습 시간 데이터 확인
  React.useEffect(() => {
    console.log('Study times:', studyTimes);
    console.log('Total minutes:', studyTimes.reduce((total, st) => total + st.totalMinutes, 0));
    
    // localStorage에서 직접 데이터 확인
    const rawData = localStorage.getItem('math_study_times');
    console.log('Raw localStorage data:', rawData);
    
    // 각 학습 시간 데이터 상세 확인
    studyTimes.forEach(st => {
      console.log(`Topic: ${st.topicId}, Minutes: ${st.totalMinutes}, Last: ${st.lastStudied}`);
    });
  }, [studyTimes]);
  
  // 총 학습 시간 계산
  const getTotalStudyMinutes = () => {
    return studyTimes.reduce((total, studyTime) => total + studyTime.totalMinutes, 0);
  };

  // 시간 기반 상대적 완료율 계산
  const getTimeBasedProgress = (topicId: string) => {
    const topicTime = studyTimes.find(st => st.topicId === topicId);
    const topicMinutes = topicTime ? topicTime.totalMinutes : 0;
    
    // 가장 많이 학습한 시간을 찾기
    const maxMinutes = Math.max(...studyTimes.map(st => st.totalMinutes), 1); // 최소 1분으로 설정
    
    // 상대적 비율 계산 (0-100%)
    return Math.round((topicMinutes / maxMinutes) * 100);
  };

  // 랜덤 연습의 학습 시간도 포함하여 최근 활동 생성
  const getRecentActivities = (): Activity[] => {
    const activities: Activity[] = [];
    
    // 모든 토픽의 학습 시간 추가 (1분 미만이라도 기록이 있으면 포함)
    topics.forEach(topic => {
      const studyTime = studyTimes.find(st => st.topicId === topic.id);
      if (studyTime) { // totalMinutes > 0 조거 제거하여 1분 미만도 포함
        activities.push({
          type: 'topic',
          topic,
          studyTime,
          lastStudied: new Date(studyTime.lastStudied)
        });
      }
    });
    
    // 랜덤 연습 학습 시간 추가
    const randomPracticeTime = studyTimes.find(st => st.topicId === 'random-practice');
    if (randomPracticeTime) { // totalMinutes > 0 조거 제거
      activities.push({
        type: 'random-practice',
        studyTime: randomPracticeTime,
        lastStudied: new Date(randomPracticeTime.lastStudied)
      });
    }
    
    // 최근 학습 순으로 정렬
    return activities
      .sort((a, b) => b.lastStudied.getTime() - a.lastStudied.getTime())
      .slice(0, 5); // 최대 5개만 표시
  };

  // Format relative time
  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}${t('time.days')} ${t('time.ago')}`;
    if (hours > 0) return `${hours}${t('time.hours')} ${t('time.ago')}`;
    if (minutes > 0) return `${minutes}${t('time.minutes')} ${t('time.ago')}`;
    return t('time.justNow');
  };

  const handleResetProgress = (topicId?: string) => {
    if (window.confirm(topicId ? t('alert.resetTopic') : t('alert.resetAll'))) {
      // 기존 progress 초기화
      resetProgress(topicId);
      
      // 시간 추적 시스템 초기화
      if (topicId) {
        clearTopicStudyTime(topicId);
      } else {
        clearAllStudyTimes();
      }
      
      console.log(`🔴 Reset completed for ${topicId ? `topic: ${topicId}` : 'all topics'}`);
    }
  };

  const recentActivities = getRecentActivities();
  const totalStudyMinutes = getTotalStudyMinutes();

  // 토픽 이름을 번역하는 함수
  const getTopicName = (topicId: string) => {
    const topicMappings: { [key: string]: string } = {
      'pythagorean-theorem': t('topic.pythagoreantheorem'),
      'trigonometric-ratios': t('topic.trigonometricratios'),
      'congruence-similarity': t('topic.congruencesimilarity'),
      'volume-surface-area': t('topic.volumesurfacearea'),
      'probability': t('topic.probability'),
      'statistics': t('topic.statistics')
    };
    
    return topicMappings[topicId] || topics.find(topic => topic.id === topicId)?.title || topicId;
  };

  // 시간 포맷팅 함수 (다국어 지원)
  const formatStudyTimeI18n = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes}${t('time.minutes')}`;
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      if (remainingMinutes === 0) {
        return `${hours}${t('time.hours')}`;
      } else {
        return `${hours}${t('time.hours')} ${remainingMinutes}${t('time.minutes')}`;
      }
    }
  };

  // 주제별 아이콘 매핑 함수
  const getTopicIcon = (topicId: string) => {
    const iconMap: { [key: string]: any } = {
      'pythagorean-theorem': Triangle,        // 피타고라스 정리 - 삼각형
      'trigonometric-ratios': Calculator,     // 삼각비 - 계산기
      'congruence-similarity': Shapes,        // 합동과 닮음 - 도형
      'volume-surface-area': Box,             // 입체도형 - 박스
      'probability': TrendingUp,              // 확률 - 그래프
      'statistics': BarChart3,                // 통계 - 막대그래프
      'random-practice': Shuffle              // 랜덤 연습 - 셔플
    };
    
    return iconMap[topicId] || BookOpen;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="space-y-8 animate-fadeIn">
        {/* Welcome Section - 컴팩트한 배너 */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 text-white relative overflow-hidden shadow-2xl">
          {/* 배경 패턴 */}
          <div className="absolute inset-0 bg-white bg-opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between relative z-10">
            <div className="flex-1 mb-4 lg:mb-0">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                <h1 className="text-2xl md:text-3xl font-bold">{t('home.welcome')}</h1>
                <div className="flex items-center space-x-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  <span>✨</span>
                  <span>{t('home.victoryMessage')}</span>
                  <span>🏆</span>
                </div>
              </div>
              <p className="text-blue-100 mb-4 text-base leading-relaxed">
                {t('home.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/topic/congruence-similarity" 
                  className="flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <BookOpen size={18} className="mr-2" />
                  {t('home.startLearning')}
                </Link>
                <Link 
                  to="/random-practice" 
                  className="flex items-center justify-center bg-blue-700 text-white hover:bg-blue-800 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <PenTool size={18} className="mr-2" />
                  {t('home.randomPractice')}
                </Link>
              </div>
            </div>
            
            {/* 캐릭터와 학습 시간을 함께 배치 */}
            <div className="flex items-center space-x-10 lg:ml-8">
              {/* 컴팩트한 캐릭터 섹션 */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <div className="relative">
                    <div className="text-4xl animate-bounce" style={{ animationDuration: '2s' }}>👩‍🎓</div>
                    <div className="absolute -top-1 -right-1 text-yellow-300 animate-ping text-sm">✨</div>
                    <div className="absolute -bottom-1 -left-1 text-blue-300 animate-pulse text-sm">💫</div>
                  </div>
                </div>
                
                {/* 컴팩트한 말풍선 */}
                <div className="absolute -top-2 -right-6 bg-white text-blue-600 px-3 py-2 rounded-xl text-xs font-bold shadow-lg animate-pulse border-2 border-blue-200">
                  <div className="flex items-center space-x-1">
                    <span>{t('home.encouragement')}</span>
                    <span className="animate-bounce">💪</span>
                  </div>
                  <div className="absolute -bottom-1 left-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
                
                {/* 떠다니는 수학 기호들 - 더 작게 */}
                <div className="absolute top-2 left-2 text-yellow-400 animate-bounce text-lg" style={{ animationDelay: '0.5s' }}>π</div>
                <div className="absolute top-4 right-6 text-green-400 animate-bounce text-lg" style={{ animationDelay: '1s' }}>∑</div>
                <div className="absolute bottom-4 left-6 text-purple-400 animate-bounce text-lg" style={{ animationDelay: '1.5s' }}>∞</div>
              </div>
              
              {/* 학습 시간 표시 - 캐릭터 오른쪽에 배치 */}
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center border border-white border-opacity-30 min-w-[160px]">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-semibold text-sm">{t('home.totalStudyTime')}</span>
                </div>
                <div className="text-2xl font-bold mb-2">
                  {totalStudyMinutes > 0 ? formatStudyTimeI18n(totalStudyMinutes) : `0${t('time.minutes')}`}
                </div>
                <button 
                  onClick={() => handleResetProgress()}
                  className="text-xs flex items-center justify-center hover:text-blue-200 transition-colors bg-white bg-opacity-20 px-3 py-1 rounded-full mx-auto"
                >
                  <RefreshCw size={12} className="mr-1" />
                  {t('home.reset')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-300 to-purple-400 rounded-lg flex items-center justify-center mr-3 shadow-md">
                <Activity size={18} className="text-white" />
              </div>
              {t('home.recentActivity')}
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 backdrop-blur-sm">
            {recentActivities.length > 0 ? (
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const TopicIcon = activity.type === 'topic' ? getTopicIcon(activity.topic.id) : Shuffle;
                  return (
                    <div key={index} className="group p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 bg-gradient-to-r from-gray-50 to-blue-50">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform"
                            style={{ 
                              background: activity.type === 'topic' 
                                ? `linear-gradient(135deg, ${activity.topic.color}40, ${activity.topic.color}80)` 
                                : 'linear-gradient(135deg, #a78bfa40, #8b5cf680)' 
                            }}
                          >
                            <TopicIcon size={20} className="text-gray-700" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">
                              {activity.type === 'topic' 
                                ? getTopicName(activity.topic.id)
                                : t('topic.randomPractice')}
                            </p>
                            <div className="flex items-center text-sm text-gray-600 space-x-4">
                              <div className="flex items-center bg-white px-2 py-1 rounded-full shadow-sm">
                                <Clock size={12} className="mr-1" />
                                <span className="font-medium">
                                  {t('home.totalStudyTime')}: {activity.studyTime.totalMinutes > 0 
                                    ? formatStudyTimeI18n(activity.studyTime.totalMinutes)
                                    : t('time.lessThanMinute')}
                                </span>
                              </div>
                              <span className="text-gray-400">
                                · {formatRelativeTime(activity.lastStudied)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {activity.type === 'topic' && (
                            <button
                              onClick={() => handleResetProgress(activity.topic.id)}
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title={t('home.reset')}
                            >
                              <RefreshCw size={16} />
                            </button>
                          )}
                          <Link 
                            to={activity.type === 'topic' ? `/topic/${activity.topic.id}` : '/random-practice'}
                            className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
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
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-12 w-12 text-blue-400" />
                </div>
                <p className="text-gray-500 mb-2 text-lg font-medium">{t('home.noActivity')}</p>
                <p className="text-sm text-gray-400">{t('home.noActivityDesc')}</p>
                <div className="mt-4">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Topics Overview */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-lg flex items-center justify-center mr-3 shadow-md">
                <GraduationCap size={18} className="text-white" />
              </div>
              {t('home.allTopics')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {topics.map((topic) => {
              const topicStudyTime = studyTimes.find(st => st.topicId === topic.id);
              const timeProgress = getTimeBasedProgress(topic.id);
              const TopicIcon = getTopicIcon(topic.id);
              return (
                <Link 
                  key={topic.id}
                  to={`/topic/${topic.id}`}
                  className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-blue-200"
                >
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform"
                      style={{ background: `linear-gradient(135deg, ${topic.color}40, ${topic.color}80)` }}
                    >
                      <TopicIcon className="text-gray-700" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                        {getTopicName(topic.id)}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                      <Clock size={12} className="mr-1" />
                      <span className="font-medium">
                        {topicStudyTime && topicStudyTime.totalMinutes > 0 
                          ? formatStudyTimeI18n(topicStudyTime.totalMinutes)
                          : `0${t('time.minutes')}`}
                      </span>
                    </div>
                    {timeProgress > 0 && (
                      <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-full">
                        {t('home.relativeProgress')}: {timeProgress}%
                      </span>
                    )}
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      <div
                        className="h-3 rounded-full transition-all duration-500 shadow-sm"
                        style={{ 
                          width: `${timeProgress}%`,
                          background: `linear-gradient(90deg, ${topic.color}, ${topic.color}80)`
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 rounded-full animate-pulse" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;