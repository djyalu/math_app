import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTopic } from './TopicContext';

type TopicProgress = {
  topicId: string;
  completed: number;
  total: number;
  lastActivity: Date;
  quizScores: number[];
};

type ProgressContextType = {
  progress: Record<string, TopicProgress>;
  updateProgress: (topicId: string, completed: number, total: number) => void;
  addQuizScore: (topicId: string, score: number) => void;
  getTopicProgress: (topicId: string) => number;
  getOverallProgress: () => number;
  resetProgress: (topicId?: string) => void;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const { topics } = useTopic();
  const [progress, setProgress] = useState<Record<string, TopicProgress>>({});

  // Initialize progress for all topics
  useEffect(() => {
    const initialProgress: Record<string, TopicProgress> = {};
    topics.forEach(topic => {
      if (!progress[topic.id]) {
        initialProgress[topic.id] = {
          topicId: topic.id,
          completed: 0,
          total: topic.subtopics.reduce((sum, subtopic) => sum + subtopic.concepts.length, 0),
          lastActivity: new Date(),
          quizScores: []
        };
      }
    });
    
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
        const topic = topics.find(t => t.id === topicId);
        if (!topic) return prev;
        
        return {
          ...rest,
          [topicId]: {
            topicId,
            completed: 0,
            total: topic.subtopics.reduce((sum, subtopic) => sum + subtopic.concepts.length, 0),
            lastActivity: new Date(),
            quizScores: []
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
          quizScores: []
        };
      });
      setProgress(initialProgress);
      localStorage.removeItem('mathProgress');
    }
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      updateProgress, 
      addQuizScore,
      getTopicProgress,
      getOverallProgress,
      resetProgress
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