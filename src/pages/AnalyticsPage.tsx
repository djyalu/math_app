import React, { useState, useEffect, useMemo } from 'react';
import { 
  BarChart2, 
  Clock, 
  TrendingUp, 
  Calendar, 
  CheckCircle, 
  XCircle,
  Award,
  Activity,
  BookOpen,
  Target,
  Filter,
  Eye
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTopic } from '../contexts/TopicContext';
import { useProgress } from '../contexts/ProgressContext';
import { getStudyTimes, StudyTime, formatStudyTime } from '../utils/timeTracker';

interface AnalyticsData {
  totalStudyHours: number;
  totalSessions: number;
  avgSessionTime: number;
  problemsSolved: number;
  accuracyRate: number;
  topicAnalytics: {
    topicId: string;
    title: string;
    studyMinutes: number;
    correctAnswers: number;
    incorrectAnswers: number;
    accuracyRate: number;
    color: string;
  }[];
  dailyActivity: {
    date: string;
    studyMinutes: number;
    sessions: number;
  }[];
}

const AnalyticsPage = () => {
  const { t } = useLanguage();
  const { topics } = useTopic();
  const { progress, getPracticeAnalytics } = useProgress();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [studyTimes, setStudyTimes] = useState<StudyTime[]>([]);

  // Load study times data
  useEffect(() => {
    const times = getStudyTimes();
    setStudyTimes(times);
  }, []);

  // Calculate analytics data
  const analyticsData = useMemo<AnalyticsData>(() => {
    // Filter data by selected date if specified
    const filterByDate = (date: string) => {
      if (!selectedDate) return true;
      return date.startsWith(selectedDate);
    };

    // Calculate total study time
    const totalStudyMinutes = studyTimes
      .filter(st => filterByDate(st.lastStudied))
      .reduce((sum, st) => sum + st.totalMinutes, 0);
    
    // Calculate total sessions (each topic access counts as a session)
    const totalSessions = studyTimes
      .filter(st => filterByDate(st.lastStudied) && st.totalMinutes > 0)
      .length;

    // Calculate average session time
    const avgSessionTime = totalSessions > 0 ? totalStudyMinutes / totalSessions : 0;

    // Calculate total problems solved and accuracy from progress data
    let totalCorrect = 0;
    let totalQuizzes = 0;
    let totalProblemsAnswered = 0;
    
    Object.entries(progress).forEach(([topicId, topicProgress]) => {
      if (topicProgress.practiceResults && topicProgress.practiceResults.length > 0) {
        // Use enhanced practice results if available with date filtering
        const practiceAnalytics = getPracticeAnalytics(topicId, selectedDate);
        totalCorrect += practiceAnalytics.correctAnswers;
        totalProblemsAnswered += practiceAnalytics.totalAnswered;
      } else if (topicProgress.quizScores.length > 0) {
        // Fallback to legacy quiz scores
        const correctAnswers = topicProgress.quizScores.reduce((sum, score) => sum + score, 0);
        totalCorrect += correctAnswers;
        totalQuizzes += topicProgress.quizScores.length * 100; // Assuming each quiz is out of 100
      }
    });

    const accuracyRate = totalProblemsAnswered > 0 ? (totalCorrect / totalProblemsAnswered) * 100 : 
                        totalQuizzes > 0 ? (totalCorrect / totalQuizzes) * 100 : 0;

    // Calculate per-topic analytics
    const topicAnalytics = topics.map(topic => {
      const studyTime = studyTimes.find(st => st.topicId === topic.id);
      const topicProgress = progress[topic.id];
      
      let correctAnswers = 0;
      let totalAnswers = 0;
      
      if (topicProgress) {
        if (topicProgress.practiceResults && topicProgress.practiceResults.length > 0) {
          // Use enhanced practice results if available with date filtering
          const practiceAnalytics = getPracticeAnalytics(topic.id, selectedDate);
          correctAnswers = practiceAnalytics.correctAnswers;
          totalAnswers = practiceAnalytics.totalAnswered;
        } else if (topicProgress.quizScores.length > 0) {
          // Fallback to legacy quiz scores
          correctAnswers = topicProgress.quizScores.reduce((sum, score) => sum + score, 0);
          totalAnswers = topicProgress.quizScores.length * 100;
        }
      }

      return {
        topicId: topic.id,
        title: topic.title,
        studyMinutes: studyTime && filterByDate(studyTime.lastStudied) ? studyTime.totalMinutes : 0,
        correctAnswers,
        incorrectAnswers: totalAnswers - correctAnswers,
        accuracyRate: totalAnswers > 0 ? (correctAnswers / totalAnswers) * 100 : 0,
        color: topic.color
      };
    });

    // Add random practice analytics if available
    const randomPracticeProgress = progress['random-practice'];
    const randomPracticeStudyTime = studyTimes.find(st => st.topicId === 'random-practice');
    
    if (randomPracticeProgress && (randomPracticeProgress.practiceResults?.length || randomPracticeProgress.quizScores.length)) {
      let correctAnswers = 0;
      let totalAnswers = 0;
      
      if (randomPracticeProgress.practiceResults && randomPracticeProgress.practiceResults.length > 0) {
        const practiceAnalytics = getPracticeAnalytics('random-practice', selectedDate);
        correctAnswers = practiceAnalytics.correctAnswers;
        totalAnswers = practiceAnalytics.totalAnswered;
      } else if (randomPracticeProgress.quizScores.length > 0) {
        correctAnswers = randomPracticeProgress.quizScores.reduce((sum, score) => sum + score, 0);
        totalAnswers = randomPracticeProgress.quizScores.length * 100;
      }

      topicAnalytics.push({
        topicId: 'random-practice',
        title: '랜덤 연습',
        studyMinutes: randomPracticeStudyTime && filterByDate(randomPracticeStudyTime.lastStudied) ? randomPracticeStudyTime.totalMinutes : 0,
        correctAnswers,
        incorrectAnswers: totalAnswers - correctAnswers,
        accuracyRate: totalAnswers > 0 ? (correctAnswers / totalAnswers) * 100 : 0,
        color: '#6366f1' // indigo color for random practice
      });
    }

    // Generate daily activity data for the last 7 days
    const dailyActivity = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayStudyTimes = studyTimes.filter(st => 
        st.lastStudied.startsWith(dateStr) && st.totalMinutes > 0
      );
      
      dailyActivity.push({
        date: dateStr,
        studyMinutes: dayStudyTimes.reduce((sum, st) => sum + st.totalMinutes, 0),
        sessions: dayStudyTimes.length
      });
    }

    return {
      totalStudyHours: totalStudyMinutes / 60,
      totalSessions,
      avgSessionTime,
      problemsSolved: Object.values(progress).reduce((sum, tp) => {
        if (tp.practiceResults && tp.practiceResults.length > 0) {
          // Apply date filtering to practice results count
          let filteredResults = tp.practiceResults;
          if (selectedDate) {
            filteredResults = tp.practiceResults.filter(result => {
              try {
                // Ensure timestamp is a Date object
                const timestamp = result.timestamp instanceof Date ? result.timestamp : new Date(result.timestamp);
                const resultDate = timestamp.toISOString().split('T')[0];
                return resultDate === selectedDate;
              } catch (e) {
                console.error('Error parsing date in analytics:', e);
                return false;
              }
            });
          }
          return sum + filteredResults.length;
        }
        return sum + tp.quizScores.length;
      }, 0),
      accuracyRate,
      topicAnalytics,
      dailyActivity
    };
  }, [studyTimes, topics, progress, selectedDate]);

  // Get top performing and needs improvement topics based on accuracy rate
  const strongTopics = analyticsData.topicAnalytics
    .filter(topic => topic.accuracyRate >= 80 && topic.correctAnswers + topic.incorrectAnswers > 0) // 80% 이상이고 문제를 푼 적이 있는 단원
    .sort((a, b) => b.accuracyRate - a.accuracyRate);

  const improvementTopics = analyticsData.topicAnalytics
    .filter(topic => topic.accuracyRate < 80 && topic.correctAnswers + topic.incorrectAnswers > 0) // 80% 미만이고 문제를 푼 적이 있는 단원
    .sort((a, b) => a.accuracyRate - b.accuracyRate); // 정답률이 낮은 순으로 정렬

  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">{t('analytics.title')}</h1>
        
        {/* Date Filter */}
        <div className="flex items-center space-x-2">
          <Filter size={18} className="text-gray-500" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            title={t('analytics.selectDate')}
          />
          {selectedDate && (
            <button
              onClick={() => setSelectedDate('')}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              모든 날짜
            </button>
          )}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">{t('analytics.hoursStudied')}</p>
              <p className="text-2xl font-bold">{analyticsData.totalStudyHours.toFixed(1)}</p>
            </div>
            <Clock size={32} className="text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">{t('analytics.totalSessions')}</p>
              <p className="text-2xl font-bold">{analyticsData.totalSessions}</p>
            </div>
            <Activity size={32} className="text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">{t('analytics.problemsSolved')}</p>
              <p className="text-2xl font-bold">{analyticsData.problemsSolved}</p>
            </div>
            <Target size={32} className="text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">{t('analytics.accuracyRate')}</p>
              <p className="text-2xl font-bold">{analyticsData.accuracyRate.toFixed(1)}%</p>
            </div>
            <Award size={32} className="text-orange-200" />
          </div>
        </div>
      </div>

      {/* Daily Activity Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart2 size={24} className="mr-2 text-blue-500" />
          {t('analytics.weeklyActivity')}
        </h2>
        <div className="flex items-end space-x-2 h-32">
          {analyticsData.dailyActivity.map((day, index) => {
            const maxHeight = Math.max(...analyticsData.dailyActivity.map(d => d.studyMinutes));
            const height = maxHeight > 0 ? (day.studyMinutes / maxHeight) * 100 : 0;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                  style={{ height: `${height}%`, minHeight: day.studyMinutes > 0 ? '4px' : '0px' }}
                  title={`${formatDate(day.date)}: ${day.studyMinutes}분`}
                />
                <span className="text-xs text-gray-500 mt-1">
                  {formatDate(day.date)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Topic Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Topic Progress */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen size={24} className="mr-2 text-green-500" />
            {t('analytics.topicProgress')}
          </h2>
          <div className="space-y-4">
            {analyticsData.topicAnalytics
              .filter(topic => topic.studyMinutes > 0)
              .sort((a, b) => b.studyMinutes - a.studyMinutes)
              .map((topic) => (
                <div key={topic.topicId} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: topic.color }}
                    />
                    <span className="font-medium">{topic.title}</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {formatStudyTime(topic.studyMinutes, (key) => {
                      if (key === 'time.minutes' || key === 'time.hours') return t(key);
                      return key;
                    })}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Understanding Analysis */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp size={24} className="mr-2 text-purple-500" />
            {t('analytics.understanding')}
          </h2>
          
          {/* Strong Topics */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-green-600 mb-2 flex items-center">
              <CheckCircle size={16} className="mr-1" />
              {t('analytics.strongTopics')}
            </h3>
            <div className="space-y-2">
              {strongTopics.length > 0 ? strongTopics.map((topic) => (
                <div key={topic.topicId} className="flex items-center justify-between text-sm">
                  <span>{topic.title}</span>
                  <span className="text-green-600 font-medium">{topic.accuracyRate.toFixed(1)}%</span>
                </div>
              )) : (
                <p className="text-gray-500 text-sm">{t('analytics.noData')}</p>
              )}
            </div>
          </div>

          {/* Needs Improvement */}
          <div>
            <h3 className="text-sm font-semibold text-orange-600 mb-2 flex items-center">
              <XCircle size={16} className="mr-1" />
              {t('analytics.needsImprovement')}
            </h3>
            <div className="space-y-2">
              {improvementTopics.length > 0 ? improvementTopics.map((topic) => (
                <div key={topic.topicId} className="flex items-center justify-between text-sm">
                  <span>{topic.title}</span>
                  <span className="text-orange-600 font-medium">{topic.accuracyRate.toFixed(1)}%</span>
                </div>
              )) : (
                <p className="text-gray-500 text-sm">{t('analytics.noData')}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Topic Analytics Table */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Eye size={24} className="mr-2 text-indigo-500" />
          {t('analytics.practiceResults')}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">단원</th>
                <th className="text-center py-3 px-4 font-semibold">{t('analytics.studyTime')}</th>
                <th className="text-center py-3 px-4 font-semibold">{t('analytics.correctAnswers')}</th>
                <th className="text-center py-3 px-4 font-semibold">{t('analytics.incorrectAnswers')}</th>
                <th className="text-center py-3 px-4 font-semibold">{t('analytics.accuracyRate')}</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.topicAnalytics.map((topic) => (
                <tr key={topic.topicId} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: topic.color }}
                      />
                      <span>{topic.title}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4">
                    {formatStudyTime(topic.studyMinutes, (key) => {
                      if (key === 'time.minutes' || key === 'time.hours') return t(key);
                      return key;
                    })}
                  </td>
                  <td className="text-center py-3 px-4 text-green-600">
                    {topic.correctAnswers}
                  </td>
                  <td className="text-center py-3 px-4 text-red-600">
                    {topic.incorrectAnswers}
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className={`font-medium ${
                      topic.accuracyRate >= 80 ? 'text-green-600' :
                      topic.accuracyRate >= 60 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {topic.accuracyRate > 0 ? `${topic.accuracyRate.toFixed(1)}%` : '-'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage; 