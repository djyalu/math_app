import { PracticeQuestion } from './types';
import { subjectiveQuestions } from './subjectiveQuestions';

export const practiceQuestions: PracticeQuestion[] = [
  // 피타고라스 정리
  {
    id: 'py-1',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '직각삼각형에서 두 직각변의 길이가 3cm, 4cm일 때, 빗변의 길이는?',
    options: ['4cm', '5cm', '6cm', '7cm'],
    correctAnswer: 1,
    explanation: '피타고라스 정리에 의해 c² = 3² + 4² = 9 + 16 = 25, 따라서 c = 5cm',
    difficulty: 'easy'
  },
  {
    id: 'py-2',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '빗변의 길이가 13cm이고 한 직각변의 길이가 5cm인 직각삼각형에서 다른 직각변의 길이는?',
    options: ['10cm', '11cm', '12cm', '13cm'],
    correctAnswer: 2,
    explanation: 'a² + 5² = 13²에서 a² = 169 - 25 = 144, 따라서 a = 12cm',
    difficulty: 'medium'
  },
  
  // 삼각비
  {
    id: 'tr-1',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'sin 30°의 값은?',
    options: ['1/2', '√2/2', '√3/2', '1'],
    correctAnswer: 0,
    explanation: '특수각 30°에서 sin 30° = 1/2',
    difficulty: 'easy'
  },
  {
    id: 'tr-2',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: '직각삼각형에서 한 예각이 60°이고 빗변이 10cm일 때, 이 각의 대변의 길이는?',
    options: ['5cm', '5√2cm', '5√3cm', '10cm'],
    correctAnswer: 2,
    explanation: 'sin 60° = √3/2이므로 대변 = 10 × √3/2 = 5√3cm',
    difficulty: 'medium'
  },
  
  // 합동과 닮음
  {
    id: 'cs-1',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '두 삼각형이 합동이 되는 조건이 아닌 것은?',
    options: ['SSS', 'SAS', 'ASA', 'SSA'],
    correctAnswer: 3,
    explanation: 'SSA는 삼각형의 합동 조건이 아닙니다. 올바른 조건은 SSS, SAS, ASA입니다.',
    difficulty: 'easy'
  },
  {
    id: 'cs-2',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '두 삼각형의 닮음비가 3:2일 때, 넓이의 비는?',
    options: ['3:2', '6:4', '9:4', '27:8'],
    correctAnswer: 2,
    explanation: '닮음비가 3:2일 때, 넓이의 비는 3²:2² = 9:4',
    difficulty: 'medium'
  },
  
  // 입체도형
  {
    id: 'vs-1',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '한 모서리의 길이가 6cm인 정육면체의 부피는?',
    options: ['36㎤', '108㎤', '216㎤', '324㎤'],
    correctAnswer: 2,
    explanation: '정육면체의 부피 = 6³ = 216㎤',
    difficulty: 'easy'
  },
  {
    id: 'vs-2',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '반지름이 3cm인 구의 부피는? (π = 3.14)',
    options: ['36π㎤', '48π㎤', '54π㎤', '72π㎤'],
    correctAnswer: 0,
    explanation: '구의 부피 = (4/3)πr³ = (4/3)π × 3³ = (4/3)π × 27 = 36π㎤',
    difficulty: 'medium'
  },
  
  // 확률
  {
    id: 'pr-1',
    topic: '확률',
    topicId: 'probability',
    question: '주사위를 한 번 던질 때 홀수가 나올 확률은?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correctAnswer: 2,
    explanation: '홀수는 1, 3, 5로 3개이므로 확률은 3/6 = 1/2',
    difficulty: 'easy'
  },
  {
    id: 'pr-2',
    topic: '확률',
    topicId: 'probability',
    question: '동전을 2번 던질 때 모두 앞면이 나올 확률은?',
    options: ['1/2', '1/3', '1/4', '1/8'],
    correctAnswer: 2,
    explanation: '각각 1/2 확률이므로 1/2 × 1/2 = 1/4',
    difficulty: 'medium'
  },
  
  // 통계
  {
    id: 'st-1',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 2, 4, 6, 8, 10의 평균은?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 1,
    explanation: '평균 = (2+4+6+8+10) ÷ 5 = 30 ÷ 5 = 6',
    difficulty: 'easy'
  },
  {
    id: 'st-2',
    topic: '통계',
    topicId: 'statistics',
    question: '자료 1, 3, 5, 7, 9의 중앙값은?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '5개 자료를 크기 순으로 나열했을 때 가운데(3번째) 값은 5',
    difficulty: 'easy'
  },
  
  // 추가 어려운 문제들
  {
    id: 'py-3',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '좌표평면에서 점 A(1, 2)와 점 B(4, 6) 사이의 거리는?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '거리 = √((4-1)² + (6-2)²) = √(9 + 16) = √25 = 5',
    difficulty: 'hard'
  },
  {
    id: 'tr-3',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'cos² 30° + sin² 30°의 값은?',
    options: ['1/2', '√3/2', '1', '3/2'],
    correctAnswer: 2,
    explanation: 'cos² θ + sin² θ = 1 (삼각함수의 기본 항등식)',
    difficulty: 'hard'
  },
  {
    id: 'pr-3',
    topic: '확률',
    topicId: 'probability',
    question: '빨간 공 3개, 파란 공 2개가 들어있는 상자에서 공을 2개 뽑을 때 서로 다른 색일 확률은? (복원하지 않음)',
    options: ['3/5', '6/10', '3/10', '1/2'],
    correctAnswer: 1,
    explanation: '전체 경우의 수 C(5,2) = 10, 서로 다른 색인 경우 3×2 = 6, 확률 = 6/10 = 3/5',
    difficulty: 'hard'
  }
];

// 모든 문제를 합친 배열 (객관식 + 주관식)
export const allQuestions = [...practiceQuestions, ...subjectiveQuestions.map(q => ({
  ...q,
  options: [], // 주관식이므로 options는 빈 배열
  correctAnswer: -1, // 주관식이므로 correctAnswer는 -1
  type: 'subjective' as const
}))];

export { subjectiveQuestions }; 