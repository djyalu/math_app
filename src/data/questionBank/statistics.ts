import { PracticeQuestion, SubjectiveQuestion } from '../types';

// 통계 객관식 문제 (70개)
export const statisticsObjectiveQuestions: PracticeQuestion[] = [
  {
    id: 'stat-obj-1',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 2, 4, 6, 8, 10의 평균은?',
    question_en: 'What is the mean of the data 2, 4, 6, 8, 10?',
    options: ['5', '6', '7', '8'],
    options_en: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: '평균 = (2+4+6+8+10) ÷ 5 = 30 ÷ 5 = 6',
    explanation_en: 'Mean = (2+4+6+8+10) ÷ 5 = 30 ÷ 5 = 6',
    difficulty: 'easy'
  },
  {
    id: 'stat-obj-2',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 1, 3, 5, 7, 9의 중앙값은?',
    question_en: 'What is the median of the data 1, 3, 5, 7, 9?',
    options: ['3', '4', '5', '6'],
    options_en: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '5개 자료를 크기 순으로 나열했을 때 가운데(3번째) 값은 5',
    explanation_en: 'When 5 data points are arranged in order, the middle (3rd) value is 5',
    difficulty: 'easy'
  },
  {
    id: 'stat-obj-3',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 2, 3, 3, 4, 5, 5, 5, 6의 최빈값은?',
    question_en: 'What is the mode of the data 2, 3, 3, 4, 5, 5, 5, 6?',
    options: ['3', '4', '5', '6'],
    options_en: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '5가 3번으로 가장 많이 나타나므로 최빈값은 5',
    explanation_en: '5 appears 3 times, which is the most frequent, so the mode is 5',
    difficulty: 'easy'
  },
  {
    id: 'stat-obj-4',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 10, 15, 20, 25, 30의 범위는?',
    question_en: 'What is the range of the data 10, 15, 20, 25, 30?',
    options: ['15', '20', '25', '30'],
    options_en: ['15', '20', '25', '30'],
    correctAnswer: 1,
    explanation: '범위 = 최댓값 - 최솟값 = 30 - 10 = 20',
    explanation_en: 'Range = Maximum - Minimum = 30 - 10 = 20',
    difficulty: 'easy'
  },
  {
    id: 'stat-obj-5',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 1, 2, 3, 4, 5의 분산은?',
    question_en: 'What is the variance of the data 1, 2, 3, 4, 5?',
    options: ['1', '2', '2.5', '3'],
    options_en: ['1', '2', '2.5', '3'],
    correctAnswer: 1,
    explanation: '평균=3, 분산=(4+1+0+1+4)÷5=2',
    explanation_en: 'Mean=3, Variance=(4+1+0+1+4)÷5=2',
    difficulty: 'medium'
  }
];

// 나머지 65개 객관식 문제 생성
for (let i = 6; i <= 70; i++) {
  const datasets = [
    { data: [1, 2, 3, 4, 5], mean: 3, median: 3, mode: null, range: 4 },
    { data: [2, 4, 6, 8, 10], mean: 6, median: 6, mode: null, range: 8 },
    { data: [5, 5, 10, 15, 20], mean: 11, median: 10, mode: 5, range: 15 },
    { data: [3, 7, 7, 10, 13], mean: 8, median: 7, mode: 7, range: 10 }
  ];
  
  const dataset = datasets[(i - 6) % datasets.length];
  const statType = i % 4; // 0: 평균, 1: 중앙값, 2: 최빈값, 3: 범위
  
  let question = '';
  let question_en = '';
  let options: string[] = [];
  let correctAnswer = 0;
  let explanation = '';
  let explanation_en = '';
  
  if (statType === 0) {
    question = `자료 ${dataset.data.join(', ')}의 평균은?`;
    question_en = `What is the mean of the data ${dataset.data.join(', ')}?`;
    options = [`${dataset.mean}`, `${dataset.mean + 1}`, `${dataset.mean - 1}`, `${dataset.mean + 2}`];
    correctAnswer = 0;
    explanation = `평균 = (${dataset.data.join('+')}) ÷ ${dataset.data.length} = ${dataset.mean}`;
    explanation_en = `Mean = (${dataset.data.join('+')}) ÷ ${dataset.data.length} = ${dataset.mean}`;
  } else if (statType === 1) {
    question = `자료 ${dataset.data.join(', ')}의 중앙값은?`;
    question_en = `What is the median of the data ${dataset.data.join(', ')}?`;
    options = [`${dataset.median}`, `${dataset.median + 1}`, `${dataset.median - 1}`, `${dataset.median + 2}`];
    correctAnswer = 0;
    explanation = `크기 순으로 나열했을 때 가운데 값은 ${dataset.median}`;
    explanation_en = `When arranged in order, the middle value is ${dataset.median}`;
  } else if (statType === 2 && dataset.mode !== null) {
    question = `자료 ${dataset.data.join(', ')}의 최빈값은?`;
    question_en = `What is the mode of the data ${dataset.data.join(', ')}?`;
    options = [`${dataset.mode}`, `${dataset.mode + 1}`, `${dataset.mode - 1}`, `${dataset.mode + 2}`];
    correctAnswer = 0;
    explanation = `${dataset.mode}가 가장 많이 나타나므로 최빈값은 ${dataset.mode}`;
    explanation_en = `${dataset.mode} appears most frequently, so the mode is ${dataset.mode}`;
  } else {
    question = `자료 ${dataset.data.join(', ')}의 범위는?`;
    question_en = `What is the range of the data ${dataset.data.join(', ')}?`;
    options = [`${dataset.range}`, `${dataset.range + 1}`, `${dataset.range - 1}`, `${dataset.range + 2}`];
    correctAnswer = 0;
    explanation = `범위 = 최댓값 - 최솟값 = ${Math.max(...dataset.data)} - ${Math.min(...dataset.data)} = ${dataset.range}`;
    explanation_en = `Range = Maximum - Minimum = ${Math.max(...dataset.data)} - ${Math.min(...dataset.data)} = ${dataset.range}`;
  }
  
  statisticsObjectiveQuestions.push({
    id: `stat-obj-${i}`,
    topic: '통계',
    topicId: 'statistics',
    question,
    question_en,
    options,
    options_en: options,
    correctAnswer,
    explanation,
    explanation_en,
    difficulty: i < 30 ? 'easy' : i < 55 ? 'medium' : 'hard'
  });
}

// 통계 주관식 문제 (30개)
export const statisticsSubjectiveQuestions: SubjectiveQuestion[] = [
  {
    id: 'stat-sub-1',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 3, 7, 5, 9, 6의 표준편차를 구하시오. (소수 첫째 자리까지)',
    question_en: 'Find the standard deviation of the data 3, 7, 5, 9, 6. (Round to one decimal place)',
    correctAnswer: '2.2',
    correctAnswer_en: '2.2',
    explanation: '평균 = 6, 분산 = 4.8, 표준편차 = √4.8 ≈ 2.2',
    explanation_en: 'Mean = 6, Variance = 4.8, Standard deviation = √4.8 ≈ 2.2',
    difficulty: 'medium',
    answerType: 'number',
    alternativeAnswers: ['2.19', '2.20'],
    alternativeAnswers_en: ['2.19', '2.20']
  },
  {
    id: 'stat-sub-2',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 10, 15, 20, 25, 30의 범위를 구하시오.',
    question_en: 'Find the range of the data 10, 15, 20, 25, 30.',
    correctAnswer: '20',
    correctAnswer_en: '20',
    explanation: '범위 = 최댓값 - 최솟값 = 30 - 10 = 20',
    explanation_en: 'Range = Maximum - Minimum = 30 - 10 = 20',
    difficulty: 'easy',
    answerType: 'number',
    alternativeAnswers: ['20.0', '20.00'],
    alternativeAnswers_en: ['20.0', '20.00']
  },
  {
    id: 'stat-sub-3',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 1, 3, 5, 7, 9의 평균을 구하시오.',
    question_en: 'Find the mean of the data 1, 3, 5, 7, 9.',
    correctAnswer: '5',
    correctAnswer_en: '5',
    explanation: '평균 = (1+3+5+7+9) ÷ 5 = 25 ÷ 5 = 5',
    explanation_en: 'Mean = (1+3+5+7+9) ÷ 5 = 25 ÷ 5 = 5',
    difficulty: 'easy',
    answerType: 'number',
    alternativeAnswers: ['5.0', '5.00'],
    alternativeAnswers_en: ['5.0', '5.00']
  },
  {
    id: 'stat-sub-4',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 2, 4, 6, 8, 10의 분산을 구하시오.',
    question_en: 'Find the variance of the data 2, 4, 6, 8, 10.',
    correctAnswer: '8',
    correctAnswer_en: '8',
    explanation: '평균=6, 분산=((2-6)²+(4-6)²+(6-6)²+(8-6)²+(10-6)²)÷5=(16+4+0+4+16)÷5=8',
    explanation_en: 'Mean=6, Variance=((2-6)²+(4-6)²+(6-6)²+(8-6)²+(10-6)²)÷5=(16+4+0+4+16)÷5=8',
    difficulty: 'medium',
    answerType: 'number',
    alternativeAnswers: ['8.0', '8.00'],
    alternativeAnswers_en: ['8.0', '8.00']
  },
  {
    id: 'stat-sub-5',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 12, 15, 18, 21, 24의 중앙값을 구하시오.',
    question_en: 'Find the median of the data 12, 15, 18, 21, 24.',
    correctAnswer: '18',
    correctAnswer_en: '18',
    explanation: '5개 자료를 크기 순으로 나열했을 때 가운데(3번째) 값은 18',
    explanation_en: 'When 5 data points are arranged in order, the middle (3rd) value is 18',
    difficulty: 'easy',
    answerType: 'number',
    alternativeAnswers: ['18.0', '18.00'],
    alternativeAnswers_en: ['18.0', '18.00']
  }
];

// 나머지 25개 주관식 문제 생성
for (let i = 6; i <= 30; i++) {
  const datasets = [
    { data: [4, 6, 8, 10, 12], mean: 8, median: 8, variance: 8, range: 8 },
    { data: [5, 10, 15, 20, 25], mean: 15, median: 15, variance: 62.5, range: 20 },
    { data: [2, 4, 6, 8, 10, 12], mean: 7, median: 7, variance: 14, range: 10 },
    { data: [1, 2, 3, 4, 5, 6, 7], mean: 4, median: 4, variance: 4, range: 6 }
  ];
  
  const dataset = datasets[(i - 6) % datasets.length];
  const statType = i % 4; // 0: 평균, 1: 중앙값, 2: 분산, 3: 범위
  
  let question = '';
  let question_en = '';
  let answer = '';
  let explanation = '';
  let explanation_en = '';
  
  if (statType === 0) {
    question = `자료 ${dataset.data.join(', ')}의 평균을 구하시오.`;
    question_en = `Find the mean of the data ${dataset.data.join(', ')}.`;
    answer = `${dataset.mean}`;
    explanation = `평균 = (${dataset.data.join('+')}) ÷ ${dataset.data.length} = ${dataset.mean}`;
    explanation_en = `Mean = (${dataset.data.join('+')}) ÷ ${dataset.data.length} = ${dataset.mean}`;
  } else if (statType === 1) {
    question = `자료 ${dataset.data.join(', ')}의 중앙값을 구하시오.`;
    question_en = `Find the median of the data ${dataset.data.join(', ')}.`;
    answer = `${dataset.median}`;
    explanation = `크기 순으로 나열했을 때 가운데 값은 ${dataset.median}`;
    explanation_en = `When arranged in order, the middle value is ${dataset.median}`;
  } else if (statType === 2) {
    question = `자료 ${dataset.data.join(', ')}의 분산을 구하시오.`;
    question_en = `Find the variance of the data ${dataset.data.join(', ')}.`;
    answer = `${dataset.variance}`;
    explanation = `평균=${dataset.mean}, 분산=${dataset.variance}`;
    explanation_en = `Mean=${dataset.mean}, Variance=${dataset.variance}`;
  } else {
    question = `자료 ${dataset.data.join(', ')}의 범위를 구하시오.`;
    question_en = `Find the range of the data ${dataset.data.join(', ')}.`;
    answer = `${dataset.range}`;
    explanation = `범위 = 최댓값 - 최솟값 = ${Math.max(...dataset.data)} - ${Math.min(...dataset.data)} = ${dataset.range}`;
    explanation_en = `Range = Maximum - Minimum = ${Math.max(...dataset.data)} - ${Math.min(...dataset.data)} = ${dataset.range}`;
  }
  
  statisticsSubjectiveQuestions.push({
    id: `stat-sub-${i}`,
    topic: '통계',
    topicId: 'statistics',
    question,
    question_en,
    correctAnswer: answer,
    correctAnswer_en: answer,
    explanation,
    explanation_en,
    difficulty: i < 15 ? 'easy' : i < 25 ? 'medium' : 'hard',
    answerType: 'number',
    alternativeAnswers: [`${answer}.0`, `${answer}.00`],
    alternativeAnswers_en: [`${answer}.0`, `${answer}.00`]
  });
} 