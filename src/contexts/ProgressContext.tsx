import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTopic } from './TopicContext';

type TopicProgress = {
  topicId: string;
  completed: number;
  total: number;
  lastActivity: Date;
  quizScores: number[];
  practiceResults?: PracticeResult[];
};

type PracticeResult = {
  questionId: string;
  isCorrect: boolean;
  score: number;
  timestamp: Date;
  difficulty: 'easy' | 'medium' | 'hard';
  questionType: 'multiple-choice' | 'subjective';
};

type PracticeAnalytics = {
  totalAnswered: number;
  correctAnswers: number;
  incorrectAnswers: number;
  accuracyRate: number;
  averageScore: number;
  difficultyBreakdown: {
    easy: { correct: number; total: number; };
    medium: { correct: number; total: number; };
    hard: { correct: number; total: number; };
  };
};

type ProgressContextType = {
  progress: Record<string, TopicProgress>;
  updateProgress: (topicId: string, completed: number, total: number) => void;
  addQuizScore: (topicId: string, score: number) => void;
  addPracticeResult: (topicId: string, result: PracticeResult) => void;
  getTopicProgress: (topicId: string) => number;
  getOverallProgress: () => number;
  resetProgress: (topicId?: string) => void;
  getPracticeAnalytics: (topicId?: string, filterDate?: string) => PracticeAnalytics;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const { topics } = useTopic();
  const [progress, setProgress] = useState<Record<string, TopicProgress>>({});

  // Initialize progress for all topics
  useEffect(() => {
    const initialProgress: Record<string, TopicProgress> = {};
    
    // Initialize regular topics
    topics.forEach(topic => {
      if (!progress[topic.id]) {
        initialProgress[topic.id] = {
          topicId: topic.id,
          completed: 0,
          total: topic.subtopics.reduce((sum, subtopic) => sum + subtopic.concepts.length, 0),
          lastActivity: new Date(),
          quizScores: [],
          practiceResults: []
        };
      }
    });
    
    // Initialize random practice topic
    if (!progress['random-practice']) {
      initialProgress['random-practice'] = {
        topicId: 'random-practice',
        completed: 0,
        total: 100, // Arbitrary number for random practice
        lastActivity: new Date(),
        quizScores: [],
        practiceResults: []
      };
    }
    
    if (Object.keys(initialProgress).length > 0) {
      setProgress(prev => ({
        ...prev,
        ...initialProgress
      }));
    }
  }, [topics]);

  // Load progress from localStorage on initial render
  useEffect(() => {
    const savedProgress = localStorage.getItem('mathProgress');
    if (savedProgress) {
      try {
        const parsedProgress = JSON.parse(savedProgress);
        // Convert string dates back to Date objects
        Object.keys(parsedProgress).forEach(key => {
          parsedProgress[key].lastActivity = new Date(parsedProgress[key].lastActivity);
        });
        setProgress(prev => ({
          ...prev,
          ...parsedProgress
        }));
      } catch (e) {
        console.error('Failed to parse saved progress', e);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(progress).length > 0) {
      localStorage.setItem('mathProgress', JSON.stringify(progress));
    }
  }, [progress]);

  const updateProgress = (topicId: string, completed: number, total: number) => {
    setProgress(prev => {
      const existingProgress = prev[topicId] || { 
        topicId, 
        completed: 0, 
        total, 
        lastActivity: new Date(), 
        quizScores: [] 
      };
      
      return {
        ...prev,
        [topicId]: {
          ...existingProgress,
          completed: Math.min(completed, total),
          total,
          lastActivity: new Date()
        }
      };
    });
  };

  const addQuizScore = (topicId: string, score: number) => {
    setProgress(prev => {
      const existingProgress = prev[topicId] || { 
        topicId, 
        completed: 0, 
        total: topics.find(t => t.id === topicId)?.subtopics.reduce((sum, s) => sum + s.concepts.length, 0) || 1, 
        lastActivity: new Date(), 
        quizScores: [] 
      };
      
      return {
        ...prev,
        [topicId]: {
          ...existingProgress,
          quizScores: [...existingProgress.quizScores, score],
          lastActivity: new Date()
        }
      };
    });
  };

  const addPracticeResult = (topicId: string, result: PracticeResult) => {
    setProgress(prev => {
      const existingProgress = prev[topicId] || { 
        topicId, 
        completed: 0, 
        total: topics.find(t => t.id === topicId)?.subtopics.reduce((sum, s) => sum + s.concepts.length, 0) || 1, 
        lastActivity: new Date(), 
        quizScores: [],
        practiceResults: []
      };
      
      return {
        ...prev,
        [topicId]: {
          ...existingProgress,
          practiceResults: [...(existingProgress.practiceResults || []), result],
          lastActivity: new Date()
        }
      };
    });
  };

  const getTopicProgress = (topicId: string) => {
    const topicProgress = progress[topicId];
    if (!topicProgress) return 0;
    return Math.round((topicProgress.completed / topicProgress.total) * 100);
  };

  const getOverallProgress = () => {
    const totalCompleted = Object.values(progress).reduce((sum, topic) => sum + topic.completed, 0);
    const totalItems = Object.values(progress).reduce((sum, topic) => sum + topic.total, 0);
    
    if (totalItems === 0) return 0;
    return Math.round((totalCompleted / totalItems) * 100);
  };

  const resetProgress = (topicId?: string) => {
    if (topicId) {
      // Reset specific topic
      setProgress(prev => {
        const { [topicId]: _, ...rest } = prev;
        
        if (topicId === 'random-practice') {
          return {
            ...rest,
            [topicId]: {
              topicId: 'random-practice',
              completed: 0,
              total: 100,
              lastActivity: new Date(),
              quizScores: [],
              practiceResults: []
            }
          };
        }
        
        const topic = topics.find(t => t.id === topicId);
        if (!topic) return prev;
        
        return {
          ...rest,
          [topicId]: {
            topicId,
            completed: 0,
            total: topic.subtopics.reduce((sum, subtopic) => sum + subtopic.concepts.length, 0),
            lastActivity: new Date(),
            quizScores: [],
            practiceResults: []
          }
        };
      });
    } else {
      // Reset all progress
      const initialProgress: Record<string, TopicProgress> = {};
      topics.forEach(topic => {
        initialProgress[topic.id] = {
          topicId: topic.id,
          completed: 0,
          total: topic.subtopics.reduce((sum, subtopic) => sum + subtopic.concepts.length, 0),
          lastActivity: new Date(),
          quizScores: [],
          practiceResults: []
        };
      });
      
      // Add random practice
      initialProgress['random-practice'] = {
        topicId: 'random-practice',
        completed: 0,
        total: 100,
        lastActivity: new Date(),
        quizScores: [],
        practiceResults: []
      };
      
      setProgress(initialProgress);
      localStorage.removeItem('mathProgress');
    }
  };

  const getPracticeAnalytics = (topicId?: string, filterDate?: string) => {
    const topicProgress = progress[topicId || ''];
    if (!topicProgress || !topicProgress.practiceResults) {
      return {
        totalAnswered: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        accuracyRate: 0,
        averageScore: 0,
        difficultyBreakdown: {
          easy: { correct: 0, total: 0 },
          medium: { correct: 0, total: 0 },
          hard: { correct: 0, total: 0 }
        }
      };
    }

    let results = topicProgress.practiceResults;
    
    // Apply date filter if specified
    if (filterDate) {
      results = results.filter(result => {
        const resultDate = result.timestamp.toISOString().split('T')[0];
        return resultDate === filterDate;
      });
    }

    const totalAnswered = results.length;
    if (totalAnswered === 0) {
      return {
        totalAnswered: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        accuracyRate: 0,
        averageScore: 0,
        difficultyBreakdown: {
          easy: { correct: 0, total: 0 },
          medium: { correct: 0, total: 0 },
          hard: { correct: 0, total: 0 }
        }
      };
    }

    const correctAnswers = results.filter(r => r.isCorrect).length;
    const incorrectAnswers = totalAnswered - correctAnswers;
    const accuracyRate = Math.round((correctAnswers / totalAnswered) * 100);
    const averageScore = Math.round(results.reduce((sum, r) => sum + r.score, 0) / totalAnswered);

    const difficultyBreakdown = results.reduce((breakdown, result) => {
      if (!breakdown[result.difficulty]) {
        breakdown[result.difficulty] = { correct: 0, total: 0 };
      }
      breakdown[result.difficulty].total++;
      if (result.isCorrect) {
        breakdown[result.difficulty].correct++;
      }
      return breakdown;
    }, { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } });

    return {
      totalAnswered,
      correctAnswers,
      incorrectAnswers,
      accuracyRate,
      averageScore,
      difficultyBreakdown
    };
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      updateProgress, 
      addQuizScore,
      addPracticeResult,
      getTopicProgress,
      getOverallProgress,
      resetProgress,
      getPracticeAnalytics
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};