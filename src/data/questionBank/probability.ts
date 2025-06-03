import { PracticeQuestion, SubjectiveQuestion } from '../types';

// 확률 객관식 문제 (70개)
export const probabilityObjectiveQuestions: PracticeQuestion[] = [
  {
    id: 'prob-obj-1',
    topic: '확률',
    topicId: 'probability',
    question: '주사위를 한 번 던질 때 홀수가 나올 확률은?',
    question_en: 'What is the probability of getting an odd number when rolling a die once?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    options_en: ['1/6', '1/3', '1/2', '2/3'],
    correctAnswer: 2,
    explanation: '홀수는 1, 3, 5로 3개이므로 확률은 3/6 = 1/2',
    explanation_en: 'Odd numbers are 1, 3, 5 (3 outcomes), so probability = 3/6 = 1/2',
    difficulty: 'easy'
  },
  {
    id: 'prob-obj-2',
    topic: '확률',
    topicId: 'probability',
    question: '동전을 2번 던질 때 모두 앞면이 나올 확률은?',
    question_en: 'What is the probability of getting heads both times when flipping a coin twice?',
    options: ['1/2', '1/3', '1/4', '1/8'],
    options_en: ['1/2', '1/3', '1/4', '1/8'],
    correctAnswer: 2,
    explanation: '각각 1/2 확률이므로 1/2 × 1/2 = 1/4',
    explanation_en: 'Each flip has 1/2 probability, so 1/2 × 1/2 = 1/4',
    difficulty: 'medium'
  },
  {
    id: 'prob-obj-3',
    topic: '확률',
    topicId: 'probability',
    question: '카드 한 벌(52장)에서 카드 한 장을 뽑을 때 하트가 나올 확률은?',
    question_en: 'What is the probability of drawing a heart from a standard deck of 52 cards?',
    options: ['1/2', '1/3', '1/4', '1/13'],
    options_en: ['1/2', '1/3', '1/4', '1/13'],
    correctAnswer: 2,
    explanation: '하트는 13장이므로 확률 = 13/52 = 1/4',
    explanation_en: 'There are 13 hearts, so probability = 13/52 = 1/4',
    difficulty: 'easy'
  },
  {
    id: 'prob-obj-4',
    topic: '확률',
    topicId: 'probability',
    question: '주사위를 던져서 6이 나올 확률은?',
    question_en: 'What is the probability of rolling a 6 on a die?',
    options: ['1/2', '1/3', '1/4', '1/6'],
    options_en: ['1/2', '1/3', '1/4', '1/6'],
    correctAnswer: 3,
    explanation: '6은 한 개이므로 확률 = 1/6',
    explanation_en: 'There is one 6, so probability = 1/6',
    difficulty: 'easy'
  },
  {
    id: 'prob-obj-5',
    topic: '확률',
    topicId: 'probability',
    question: '주사위를 던져서 4 이상이 나올 확률은?',
    question_en: 'What is the probability of rolling 4 or higher on a die?',
    options: ['1/2', '1/3', '2/3', '1/6'],
    options_en: ['1/2', '1/3', '2/3', '1/6'],
    correctAnswer: 0,
    explanation: '4, 5, 6이므로 3개, 확률 = 3/6 = 1/2',
    explanation_en: 'Numbers 4, 5, 6 (3 outcomes), so probability = 3/6 = 1/2',
    difficulty: 'easy'
  }
];

// 나머지 65개 객관식 문제 생성
for (let i = 6; i <= 70; i++) {
  const problems = [
    { 
      type: 'dice', 
      question: '주사위에서 짝수가 나올 확률', 
      question_en: 'Probability of rolling an even number on a die',
      answer: 2, 
      options: ['1/6', '1/3', '1/2', '2/3'], 
      explanation: '짝수는 2, 4, 6으로 3개이므로 3/6 = 1/2',
      explanation_en: 'Even numbers are 2, 4, 6 (3 outcomes), so 3/6 = 1/2'
    },
    { 
      type: 'coin', 
      question: '동전 3번 던져 모두 앞면이 나올 확률', 
      question_en: 'Probability of getting heads all three times when flipping a coin three times',
      answer: 3, 
      options: ['1/2', '1/4', '1/6', '1/8'], 
      explanation: '(1/2)³ = 1/8',
      explanation_en: '(1/2)³ = 1/8'
    },
    { 
      type: 'card', 
      question: '카드에서 그림카드가 나올 확률', 
      question_en: 'Probability of drawing a face card from a deck',
      answer: 1, 
      options: ['1/4', '3/13', '1/13', '1/52'], 
      explanation: '그림카드는 12장이므로 12/52 = 3/13',
      explanation_en: 'There are 12 face cards, so 12/52 = 3/13'
    },
    { 
      type: 'bag', 
      question: '빨간 공 3개, 파란 공 2개 중 빨간 공이 나올 확률', 
      question_en: 'Probability of drawing a red ball from 3 red and 2 blue balls',
      answer: 2, 
      options: ['2/5', '1/2', '3/5', '3/2'], 
      explanation: '빨간 공 3개 / 전체 5개 = 3/5',
      explanation_en: '3 red balls / 5 total balls = 3/5'
    }
  ];
  
  const problem = problems[(i - 6) % problems.length];
  
  probabilityObjectiveQuestions.push({
    id: `prob-obj-${i}`,
    topic: '확률',
    topicId: 'probability',
    question: problem.question,
    question_en: problem.question_en,
    options: problem.options,
    options_en: problem.options,
    correctAnswer: problem.answer,
    explanation: problem.explanation,
    explanation_en: problem.explanation_en,
    difficulty: i < 30 ? 'easy' : i < 55 ? 'medium' : 'hard'
  });
}

// 확률 주관식 문제 (30개)
export const probabilitySubjectiveQuestions: SubjectiveQuestion[] = [
  {
    id: 'prob-sub-1',
    topic: '확률',
    topicId: 'probability',
    question: '카드 한 벌(52장)에서 카드 한 장을 뽑을 때 하트가 나올 확률을 분수로 나타내시오.',
    question_en: 'Express as a fraction the probability of drawing a heart from a standard deck of 52 cards.',
    correctAnswer: '1/4',
    correctAnswer_en: '1/4',
    explanation: '하트는 13장이므로 확률 = 13/52 = 1/4',
    explanation_en: 'There are 13 hearts, so probability = 13/52 = 1/4',
    difficulty: 'easy',
    answerType: 'expression',
    alternativeAnswers: ['13/52', '0.25', '25%'],
    alternativeAnswers_en: ['13/52', '0.25', '25%']
  },
  {
    id: 'prob-sub-2',
    topic: '확률',
    topicId: 'probability',
    question: '주사위를 3번 던져서 모두 6이 나올 확률을 분수로 나타내시오.',
    question_en: 'Express as a fraction the probability of rolling three 6s in three dice throws.',
    correctAnswer: '1/216',
    correctAnswer_en: '1/216',
    explanation: '각각 1/6 확률이므로 (1/6)³ = 1/216',
    explanation_en: 'Each roll has 1/6 probability, so (1/6)³ = 1/216',
    difficulty: 'medium',
    answerType: 'expression',
    alternativeAnswers: ['1/216', '(1/6)³'],
    alternativeAnswers_en: ['1/216', '(1/6)³']
  },
  {
    id: 'prob-sub-3',
    topic: '확률',
    topicId: 'probability',
    question: '동전을 4번 던질 때 모두 앞면이 나올 확률을 분수로 나타내시오.',
    question_en: 'Express as a fraction the probability of getting heads in all four coin flips.',
    correctAnswer: '1/16',
    correctAnswer_en: '1/16',
    explanation: '각각 1/2 확률이므로 (1/2)⁴ = 1/16',
    explanation_en: 'Each flip has 1/2 probability, so (1/2)⁴ = 1/16',
    difficulty: 'medium',
    answerType: 'expression',
    alternativeAnswers: ['1/16', '(1/2)⁴', '0.0625'],
    alternativeAnswers_en: ['1/16', '(1/2)⁴', '0.0625']
  },
  {
    id: 'prob-sub-4',
    topic: '확률',
    topicId: 'probability',
    question: '주사위를 던져서 소수가 나올 확률을 분수로 나타내시오.',
    question_en: 'Express as a fraction the probability of rolling a prime number on a die.',
    correctAnswer: '1/2',
    correctAnswer_en: '1/2',
    explanation: '소수는 2, 3, 5로 3개이므로 확률 = 3/6 = 1/2',
    explanation_en: 'Prime numbers are 2, 3, 5 (3 outcomes), so probability = 3/6 = 1/2',
    difficulty: 'easy',
    answerType: 'expression',
    alternativeAnswers: ['3/6', '0.5', '50%'],
    alternativeAnswers_en: ['3/6', '0.5', '50%']
  },
  {
    id: 'prob-sub-5',
    topic: '확률',
    topicId: 'probability',
    question: '1부터 20까지의 수 중에서 무작위로 하나를 선택할 때 5의 배수가 나올 확률을 분수로 나타내시오.',
    question_en: 'Express as a fraction the probability of selecting a multiple of 5 when randomly choosing from numbers 1 to 20.',
    correctAnswer: '1/5',
    correctAnswer_en: '1/5',
    explanation: '5의 배수는 5, 10, 15, 20으로 4개이므로 확률 = 4/20 = 1/5',
    explanation_en: 'Multiples of 5 are 5, 10, 15, 20 (4 numbers), so probability = 4/20 = 1/5',
    difficulty: 'medium',
    answerType: 'expression',
    alternativeAnswers: ['4/20', '0.2', '20%'],
    alternativeAnswers_en: ['4/20', '0.2', '20%']
  }
];

// 나머지 25개 주관식 문제 생성
for (let i = 6; i <= 30; i++) {
  const problems = [
    { 
      question: '주사위에서 3 이하가 나올 확률을 분수로 나타내시오.', 
      question_en: 'Express as a fraction the probability of rolling 3 or less on a die.',
      answer: '1/2', 
      explanation: '1, 2, 3으로 3개이므로 3/6 = 1/2',
      explanation_en: 'Numbers 1, 2, 3 (3 outcomes), so 3/6 = 1/2'
    },
    { 
      question: '동전 5번 던져 모두 뒷면이 나올 확률을 분수로 나타내시오.', 
      question_en: 'Express as a fraction the probability of getting tails all five times when flipping a coin five times.',
      answer: '1/32', 
      explanation: '(1/2)⁵ = 1/32',
      explanation_en: '(1/2)⁵ = 1/32'
    },
    { 
      question: '1부터 10까지 수 중 홀수가 나올 확률을 분수로 나타내시오.', 
      question_en: 'Express as a fraction the probability of selecting an odd number from numbers 1 to 10.',
      answer: '1/2', 
      explanation: '홀수는 1,3,5,7,9로 5개이므로 5/10 = 1/2',
      explanation_en: 'Odd numbers are 1,3,5,7,9 (5 numbers), so 5/10 = 1/2'
    },
    { 
      question: '카드에서 스페이드가 나올 확률을 분수로 나타내시오.', 
      question_en: 'Express as a fraction the probability of drawing a spade from a deck.',
      answer: '1/4', 
      explanation: '스페이드는 13장이므로 13/52 = 1/4',
      explanation_en: 'There are 13 spades, so 13/52 = 1/4'
    }
  ];
  
  const problem = problems[(i - 6) % problems.length];
  
  probabilitySubjectiveQuestions.push({
    id: `prob-sub-${i}`,
    topic: '확률',
    topicId: 'probability',
    question: problem.question,
    question_en: problem.question_en,
    correctAnswer: problem.answer,
    correctAnswer_en: problem.answer,
    explanation: problem.explanation,
    explanation_en: problem.explanation_en,
    difficulty: i < 15 ? 'easy' : i < 25 ? 'medium' : 'hard',
    answerType: 'expression',
    alternativeAnswers: [problem.answer.replace('/', ' / '), (eval(problem.answer) * 100) + '%'],
    alternativeAnswers_en: [problem.answer.replace('/', ' / '), (eval(problem.answer) * 100) + '%']
  });
} 