import React, { createContext, useContext, useState, useEffect } from 'react';
import { lessons, Lesson } from '../data/lessons';
import { useTopic } from './TopicContext';
import type { Topic } from './TopicContext';

interface LessonContextType {
  lessons: Lesson[];
  currentLesson: Lesson | null;
  setCurrentLesson: (lesson: Lesson | null) => void;
  getLessonsByTopic: (topicId: string) => Lesson[];
  getLessonsBySubtopic: (subtopicId: string) => Lesson[];
  getNextLesson: (currentLessonId: string) => Lesson | null;
  isLessonCompleted: (lessonId: string) => boolean;
  markLessonAsCompleted: (lessonId: string) => void;
  getLastAccessedTopics: () => Topic[];
  updateLastAccessed: (topicId: string) => void;
  getLastAccessTime: (topicId: string) => Date | null;
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

export const useLessonContext = () => {
  const context = useContext(LessonContext);
  if (!context) {
    throw new Error('useLesson must be used within a LessonProvider');
  }
  return context;
};

export const LessonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [lastAccessed, setLastAccessed] = useState<string[]>([]);
  const [lastAccessTimes, setLastAccessTimes] = useState<Record<string, Date>>({});
  const { topics } = useTopic();

  // Load last accessed topics and times from localStorage on mount
  useEffect(() => {
    const storedTopics = localStorage.getItem('lastAccessedTopics');
    const storedTimes = localStorage.getItem('lastAccessTimes');
    
    if (storedTopics) {
      setLastAccessed(JSON.parse(storedTopics));
    }
    
    if (storedTimes) {
      const parsedTimes = JSON.parse(storedTimes);
      // Convert ISO strings back to Date objects
      const convertedTimes: Record<string, Date> = {};
      Object.entries(parsedTimes).forEach(([id, time]) => {
        convertedTimes[id] = new Date(time as string);
      });
      setLastAccessTimes(convertedTimes);
    }
  }, []);

  // Save to localStorage whenever lastAccessed or lastAccessTimes changes
  useEffect(() => {
    localStorage.setItem('lastAccessedTopics', JSON.stringify(lastAccessed));
  }, [lastAccessed]);

  useEffect(() => {
    localStorage.setItem('lastAccessTimes', JSON.stringify(lastAccessTimes));
  }, [lastAccessTimes]);

  const getLessonsByTopic = (topicId: string) => {
    return lessons.filter(lesson => lesson.topicId === topicId);
  };

  const getLessonsBySubtopic = (subtopicId: string) => {
    return lessons.filter(lesson => lesson.subtopicId === subtopicId);
  };

  const getNextLesson = (currentLessonId: string) => {
    const currentIndex = lessons.findIndex(lesson => lesson.id === currentLessonId);
    if (currentIndex === -1 || currentIndex === lessons.length - 1) return null;
    return lessons[currentIndex + 1];
  };

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.has(lessonId);
  };

  const markLessonAsCompleted = (lessonId: string) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const updateLastAccessed = (topicId: string) => {
    setLastAccessed(prev => {
      const filtered = prev.filter(id => id !== topicId);
      return [topicId, ...filtered].slice(0, 5); // Keep only last 5 accessed topics
    });
    
    setLastAccessTimes(prev => ({
      ...prev,
      [topicId]: new Date()
    }));
  };

  const getLastAccessTime = (topicId: string) => {
    return lastAccessTimes[topicId] || null;
  };

  const getLastAccessedTopics = () => {
    return lastAccessed
      .map(id => topics.find(topic => topic.id === id))
      .filter((topic): topic is Topic => topic !== undefined);
  };

  const value = {
    lessons,
    currentLesson,
    setCurrentLesson,
    getLessonsByTopic,
    getLessonsBySubtopic,
    getNextLesson,
    isLessonCompleted,
    markLessonAsCompleted,
    getLastAccessedTopics,
    updateLastAccessed,
    getLastAccessTime,
  };

  return (
    <LessonContext.Provider value={value}>
      {children}
    </LessonContext.Provider>
  );
};

export const useLesson = useLessonContext; 