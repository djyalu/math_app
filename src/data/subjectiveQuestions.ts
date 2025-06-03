import { SubjectiveQuestion } from './types';

export const subjectiveQuestions: SubjectiveQuestion[] = [
  // 피타고라스 정리
  {
    id: 'py-sub-1',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '직각삼각형에서 두 직각변의 길이가 6cm와 8cm일 때, 빗변의 길이를 구하시오.',
    correctAnswer: '10',
    explanation: '피타고라스 정리에 의해 c² = 6² + 8² = 36 + 64 = 100, 따라서 c = 10cm',
    difficulty: 'easy',
    answerType: 'number',
    unit: 'cm',
    alternativeAnswers: ['10cm', '10 cm']
  },
  {
    id: 'py-sub-2',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '한 변의 길이가 5cm인 정사각형의 대각선의 길이를 구하시오. (소수 둘째 자리까지)',
    correctAnswer: '7.07',
    explanation: '정사각형의 대각선 = 한 변 × √2 = 5 × √2 ≈ 7.07cm',
    difficulty: 'medium',
    answerType: 'number',
    unit: 'cm',
    alternativeAnswers: ['7.07cm', '5√2', '5√2cm']
  },
  
  // 삼각비
  {
    id: 'tr-sub-1',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'tan 45°의 값을 구하시오.',
    correctAnswer: '1',
    explanation: '특수각 45°에서 tan 45° = 1',
    difficulty: 'easy',
    answerType: 'number',
    alternativeAnswers: ['1.0', '1.00']
  },
  {
    id: 'tr-sub-2',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: '직각삼각형에서 한 예각이 30°이고 인접변이 12cm일 때, 대변의 길이를 구하시오. (소수 첫째 자리까지)',
    correctAnswer: '6.9',
    explanation: 'tan 30° = 1/√3이므로 대변 = 12 × tan 30° = 12 × (1/√3) ≈ 6.9cm',
    difficulty: 'medium',
    answerType: 'number',
    unit: 'cm',
    alternativeAnswers: ['6.9cm', '4√3', '4√3cm']
  },
  
  // 합동과 닮음
  {
    id: 'cs-sub-1',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '두 삼각형의 닮음비가 2:3일 때, 넓이의 비를 구하시오.',
    correctAnswer: '4:9',
    explanation: '닮음비가 2:3일 때, 넓이의 비는 2²:3² = 4:9',
    difficulty: 'easy',
    answerType: 'expression',
    alternativeAnswers: ['4 : 9', '4/9']
  },
  {
    id: 'cs-sub-2',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '닮음비가 3:5인 두 삼각형에서 작은 삼각형의 넓이가 18㎠일 때, 큰 삼각형의 넓이를 구하시오.',
    correctAnswer: '50',
    explanation: '넓이의 비는 9:25이므로 18 × (25/9) = 50㎠',
    difficulty: 'medium',
    answerType: 'number',
    unit: '㎠',
    alternativeAnswers: ['50㎠', '50 ㎠']
  },
  
  // 입체도형
  {
    id: 'vs-sub-1',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '한 모서리의 길이가 5cm인 정육면체의 겉넓이를 구하시오.',
    correctAnswer: '150',
    explanation: '정육면체의 겉넓이 = 6 × 5² = 6 × 25 = 150㎠',
    difficulty: 'easy',
    answerType: 'number',
    unit: '㎠',
    alternativeAnswers: ['150㎠', '150 ㎠']
  },
  {
    id: 'vs-sub-2',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '반지름이 4cm, 높이가 9cm인 원기둥의 부피를 구하시오. (π = 3.14)',
    correctAnswer: '452.16',
    explanation: '원기둥의 부피 = πr²h = 3.14 × 4² × 9 = 452.16㎤',
    difficulty: 'medium',
    answerType: 'number',
    unit: '㎤',
    alternativeAnswers: ['452.16㎤', '452.16 ㎤', '144π', '144π㎤']
  },
  
  // 확률
  {
    id: 'pr-sub-1',
    topic: '확률',
    topicId: 'probability',
    question: '카드 한 벌(52장)에서 카드 한 장을 뽑을 때 하트가 나올 확률을 분수로 나타내시오.',
    correctAnswer: '1/4',
    explanation: '하트는 13장이므로 확률 = 13/52 = 1/4',
    difficulty: 'easy',
    answerType: 'expression',
    alternativeAnswers: ['13/52', '0.25', '25%']
  },
  {
    id: 'pr-sub-2',
    topic: '확률',
    topicId: 'probability',
    question: '주사위를 3번 던져서 모두 6이 나올 확률을 분수로 나타내시오.',
    correctAnswer: '1/216',
    explanation: '각각 1/6 확률이므로 (1/6)³ = 1/216',
    difficulty: 'medium',
    answerType: 'expression',
    alternativeAnswers: ['1/216', '(1/6)³']
  },
  
  // 통계
  {
    id: 'st-sub-1',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 3, 7, 5, 9, 6의 표준편차를 구하시오. (소수 첫째 자리까지)',
    correctAnswer: '2.2',
    explanation: '평균 = 6, 분산 = 4.8, 표준편차 = √4.8 ≈ 2.2',
    difficulty: 'medium',
    answerType: 'number',
    alternativeAnswers: ['2.19', '2.20']
  },
  {
    id: 'st-sub-2',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 10, 15, 20, 25, 30의 범위를 구하시오.',
    correctAnswer: '20',
    explanation: '범위 = 최댓값 - 최솟값 = 30 - 10 = 20',
    difficulty: 'easy',
    answerType: 'number',
    alternativeAnswers: ['20.0', '20.00']
  }
]; 