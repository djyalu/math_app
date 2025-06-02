import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  ArrowRight, 
  Calendar, 
  Award, 
  TrendingUp,
  Clock,
  BookOpen
} from 'lucide-react';
import { useTopic } from '../contexts/TopicContext';
import { useProgress } from '../contexts/ProgressContext';

const ProgressPage = () => {
  const { topics } = useTopic();
  const { progress, getCompletionPercentage, getOverallProgress } = useProgress();
  
  const overallProgress = getOverallProgress();
  
  // Calculate total study time (this would be more sophisticated in a real app)
  const totalStudyMinutes = Object.values(progress).reduce((sum, topic) => {
    return sum + topic.quizScores.length * 10; // Assume 10 minutes per quiz
  }, 0);
  
  const totalHours = Math.floor(totalStudyMinutes / 60);
  const remainingMinutes = totalStudyMinutes % 60;
  
  // Get top performance topic
  const getTopPerformanceTopic = () => {
    let topTopic = null;
    let highestScore = 0;
    
    Object.entries(progress).forEach(([topicId, topicProgress]) => {
      if (topicProgress.quizScores.length > 0) {
        const avgScore = topicProgress.quizScores.reduce((sum, score) => sum + score, 0) / topicProgress.quizScores.length;
        if (avgScore > highestScore) {
          highestScore = avgScore;
          topTopic = topics.find(t => t.id === topicId);
        }
      }
    });
    
    return { topic: topTopic, score: highestScore };
  };
  
  const topPerformance = getTopPerformanceTopic();
  
  // Determine the most recent activity
  const getRecentActivity = () => {
    let mostRecentDate = new Date(0); // Start with oldest possible date
    let recentTopic = null;
    
    Object.entries(progress).forEach(([topicId, topicProgress]) => {
      if (topicProgress.lastActivity > mostRecentDate) {
        mostRecentDate = topicProgress.lastActivity;
        recentTopic = topics.find(t => t.id === topicId);
      }
    });
    
    return { topic: recentTopic, date: mostRecentDate };
  };
  
  const recentActivity = getRecentActivity();
  
  // Format date for display
  const formatDate = (date: Date) => {
    if (date.getTime() === 0) return 'Never';
    
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-6">My Learning Progress</h1>
      
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <TrendingUp className="text-blue-600" size={20} />
            </div>
            <h2 className="font-semibold">Overall Progress</h2>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200 stroke-current"
                  strokeWidth="10"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-blue-600 stroke-current"
                  strokeWidth="10"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                  strokeDasharray={`${overallProgress * 2.51} 251`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">{overallProgress}%</span>
              </div>
            </div>
            <p className="text-center mt-2 text-gray-600">Complete</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <Award className="text-green-600" size={20} />
            </div>
            <h2 className="font-semibold">Top Performance</h2>
          </div>
          
          {topPerformance.topic ? (
            <div>
              <div className="flex items-center mb-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-2"
                  style={{ backgroundColor: `${topPerformance.topic.color}20` }}
                >
                  <BookOpen size={16} style={{ color: topPerformance.topic.color }} />
                </div>
                <h3 className="font-medium">{topPerformance.topic.title}</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Average Score</span>
                <span className="text-lg font-semibold text-green-600">{topPerformance.score.toFixed(0)}%</span>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 text-center py-4">
              No quiz scores yet. Start practicing!
            </p>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <Clock className="text-purple-600" size={20} />
            </div>
            <h2 className="font-semibold">Study Time</h2>
          </div>
          
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">
              {totalHours}<span className="text-lg">{remainingMinutes > 0 ? `:${remainingMinutes}` : ''}</span>
            </p>
            <p className="text-gray-600 mt-1">
              {totalHours === 1 ? 'Hour' : 'Hours'}
              {remainingMinutes > 0 ? ` ${remainingMinutes} ${remainingMinutes === 1 ? 'Minute' : 'Minutes'}` : ''}
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Last active: {recentActivity.topic ? formatDate(recentActivity.date) : 'Never'}
            </p>
          </div>
        </div>
      </div>
      
      {/* Topic Progress */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b px-6 py-4 flex justify-between items-center">
          <h2 className="font-semibold text-lg">Topic Progress</h2>
          <BarChart2 size={20} className="text-gray-500" />
        </div>
        
        <div className="divide-y">
          {topics.map((topic) => {
            const completionPercentage = getCompletionPercentage(topic.id);
            const topicProgress = progress[topic.id];
            
            return (
              <div key={topic.id} className="px-6 py-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: `${topic.color}20` }}
                    >
                      <BookOpen size={16} style={{ color: topic.color }} />
                    </div>
                    <h3 className="font-medium">{topic.title}</h3>
                  </div>
                  <Link 
                    to={`/topic/${topic.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div 
                    className="h-2.5 rounded-full progress-bar" 
                    style={{ 
                      width: `${completionPercentage}%`, 
                      backgroundColor: topic.color 
                    }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{completionPercentage}% complete</span>
                  <span className="text-gray-600">
                    Last activity: {topicProgress ? formatDate(topicProgress.lastActivity) : 'Never'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Activity Calendar (simplified) */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Activity Calendar</h2>
          <Calendar size={20} className="text-gray-500" />
        </div>
        
        <div className="text-center py-8 text-gray-600">
          <p>Detailed activity calendar would be shown here</p>
          <p className="text-sm text-gray-500 mt-2">Tracking your daily learning consistency</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;