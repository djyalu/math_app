export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  subtopics: Array<{
    id: string;
    title: string;
    concepts: string[];
  }>;
}

export interface Lesson {
  id: string;
  topicId: string;
  title: string;
  content: string;
  order: number;
}

export interface Practice {
  id: string;
  topicId: string;
  chapterNumber: number;
  title: string;
  problems: Problem[];
}

export interface Problem {
  id: string;
  question: string;
  answer: string;
  explanation: string;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  hints: string[];
} 