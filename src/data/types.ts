export interface Practice {
  id: string;
  topicId: string;
  chapterNumber: number;
  title: string;
  problems: Array<{
    id: string;
    question: string;
    answer: string;
    explanation: string;
    difficulty: 'basic' | 'intermediate' | 'advanced';
    hints: string[];
  }>;
} 