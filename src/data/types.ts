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

export interface ConceptContent {
  id: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  explanation: string;
  explanation_en?: string;
  examples: {
    problem: string;
    problem_en?: string;
    solution: string;
    explanation: string;
    explanation_en?: string;
  }[];
  visualAids?: {
    type: 'image' | 'interactive' | 'iframe';
    url: string;
    description: string;
    description_en?: string;
    width?: string;
    height?: string;
  }[];
  keyPoints: string[];
  keyPoints_en?: string[];
  commonMistakes: string[];
  commonMistakes_en?: string[];
  additionalResources?: {
    title: string;
    title_en?: string;
    url: string;
    type: 'article' | 'video' | 'interactive';
  }[];
}

export interface PracticeQuestion {
  id: string;
  topic: string;
  topicId: string;
  question: string;
  question_en?: string;
  options: string[];
  options_en?: string[];
  correctAnswer: number;
  explanation: string;
  explanation_en?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface SubjectiveQuestion {
  id: string;
  topic: string;
  topicId: string;
  question: string;
  question_en?: string;
  correctAnswer: string;
  correctAnswer_en?: string;
  explanation: string;
  explanation_en?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  answerType: 'number' | 'expression' | 'text';
  unit?: string;
  unit_en?: string;
  keywords?: string[];
  keywords_en?: string[];
  alternativeAnswers?: string[];
  alternativeAnswers_en?: string[];
} 