import { PracticeQuestion, SubjectiveQuestion } from '../types';

// 피타고라스 정리 객관식 문제 (70개)
export const pythagoreanObjectiveQuestions: PracticeQuestion[] = [
  // 기본 문제들 (1-30)
  {
    id: 'py-obj-1',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '직각삼각형에서 두 직각변의 길이가 3cm, 4cm일 때, 빗변의 길이는?',
    question_en: 'In a right triangle with legs of length 3cm and 4cm, what is the length of the hypotenuse?',
    options: ['4cm', '5cm', '6cm', '7cm'],
    options_en: ['4cm', '5cm', '6cm', '7cm'],
    correctAnswer: 1,
    explanation: '피타고라스 정리에 의해 c² = 3² + 4² = 9 + 16 = 25, 따라서 c = 5cm',
    explanation_en: 'By the Pythagorean theorem, c² = 3² + 4² = 9 + 16 = 25, therefore c = 5cm',
    difficulty: 'easy'
  },
  {
    id: 'py-obj-2',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '빗변의 길이가 13cm이고 한 직각변의 길이가 5cm인 직각삼각형에서 다른 직각변의 길이는?',
    question_en: 'In a right triangle with hypotenuse 13cm and one leg 5cm, what is the length of the other leg?',
    options: ['10cm', '11cm', '12cm', '13cm'],
    options_en: ['10cm', '11cm', '12cm', '13cm'],
    correctAnswer: 2,
    explanation: 'a² + 5² = 13²에서 a² = 169 - 25 = 144, 따라서 a = 12cm',
    explanation_en: 'From a² + 5² = 13², we get a² = 169 - 25 = 144, therefore a = 12cm',
    difficulty: 'medium'
  },
  {
    id: 'py-obj-3',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '직각삼각형에서 두 직각변의 길이가 5cm, 12cm일 때, 빗변의 길이는?',
    question_en: 'In a right triangle with legs of length 5cm and 12cm, what is the length of the hypotenuse?',
    options: ['13cm', '17cm', '15cm', '14cm'],
    options_en: ['13cm', '17cm', '15cm', '14cm'],
    correctAnswer: 0,
    explanation: 'c² = 5² + 12² = 25 + 144 = 169, 따라서 c = 13cm',
    explanation_en: 'c² = 5² + 12² = 25 + 144 = 169, therefore c = 13cm',
    difficulty: 'easy'
  },
  {
    id: 'py-obj-4',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '빗변이 10cm이고 한 직각변이 8cm인 직각삼각형에서 다른 직각변의 길이는?',
    question_en: 'In a right triangle with hypotenuse 10cm and one leg 8cm, what is the length of the other leg?',
    options: ['6cm', '5cm', '7cm', '4cm'],
    options_en: ['6cm', '5cm', '7cm', '4cm'],
    correctAnswer: 0,
    explanation: 'a² + 8² = 10²에서 a² = 100 - 64 = 36, 따라서 a = 6cm',
    explanation_en: 'From a² + 8² = 10², we get a² = 100 - 64 = 36, therefore a = 6cm',
    difficulty: 'easy'
  },
  {
    id: 'py-obj-5',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '직각삼각형에서 두 직각변의 길이가 8cm, 15cm일 때, 빗변의 길이는?',
    question_en: 'In a right triangle with legs of length 8cm and 15cm, what is the length of the hypotenuse?',
    options: ['17cm', '18cm', '16cm', '19cm'],
    options_en: ['17cm', '18cm', '16cm', '19cm'],
    correctAnswer: 0,
    explanation: 'c² = 8² + 15² = 64 + 225 = 289, 따라서 c = 17cm',
    explanation_en: 'c² = 8² + 15² = 64 + 225 = 289, therefore c = 17cm',
    difficulty: 'easy'
  },
  // 중급 문제들 (6-50)
  {
    id: 'py-obj-6',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '좌표평면에서 점 A(1, 2)와 점 B(4, 6) 사이의 거리는?',
    question_en: 'What is the distance between points A(1, 2) and B(4, 6) on the coordinate plane?',
    options: ['3', '4', '5', '6'],
    options_en: ['3', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '거리 = √((4-1)² + (6-2)²) = √(9 + 16) = √25 = 5',
    explanation_en: 'Distance = √((4-1)² + (6-2)²) = √(9 + 16) = √25 = 5',
    difficulty: 'medium'
  },
  {
    id: 'py-obj-7',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '한 변의 길이가 4cm인 정사각형의 대각선의 길이는?',
    question_en: 'What is the length of the diagonal of a square with side length 4cm?',
    options: ['4√2 cm', '8cm', '6cm', '4√3 cm'],
    options_en: ['4√2 cm', '8cm', '6cm', '4√3 cm'],
    correctAnswer: 0,
    explanation: '정사각형의 대각선 = 한 변 × √2 = 4√2 cm',
    explanation_en: 'Square diagonal = side × √2 = 4√2 cm',
    difficulty: 'medium'
  },
  {
    id: 'py-obj-8',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '직각이등변삼각형에서 직각변의 길이가 6cm일 때, 빗변의 길이는?',
    question_en: 'In a right isosceles triangle with legs of 6cm, what is the length of the hypotenuse?',
    options: ['6√2 cm', '12cm', '9cm', '6√3 cm'],
    options_en: ['6√2 cm', '12cm', '9cm', '6√3 cm'],
    correctAnswer: 0,
    explanation: '직각이등변삼각형에서 빗변 = 직각변 × √2 = 6√2 cm',
    explanation_en: 'In a right isosceles triangle, hypotenuse = leg × √2 = 6√2 cm',
    difficulty: 'medium'
  },
  {
    id: 'py-obj-9',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '좌표평면에서 원점과 점 (3, 4) 사이의 거리는?',
    question_en: 'What is the distance between the origin and point (3, 4) on the coordinate plane?',
    options: ['5', '7', '6', '8'],
    options_en: ['5', '7', '6', '8'],
    correctAnswer: 0,
    explanation: '거리 = √(3² + 4²) = √(9 + 16) = √25 = 5',
    explanation_en: 'Distance = √(3² + 4²) = √(9 + 16) = √25 = 5',
    difficulty: 'medium'
  },
  {
    id: 'py-obj-10',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '직사각형의 가로가 9cm, 세로가 12cm일 때, 대각선의 길이는?',
    question_en: 'What is the length of the diagonal of a rectangle with width 9cm and height 12cm?',
    options: ['15cm', '21cm', '18cm', '14cm'],
    options_en: ['15cm', '21cm', '18cm', '14cm'],
    correctAnswer: 0,
    explanation: '대각선 = √(9² + 12²) = √(81 + 144) = √225 = 15cm',
    explanation_en: 'Diagonal = √(9² + 12²) = √(81 + 144) = √225 = 15cm',
    difficulty: 'medium'
  }
  // ... 추가로 60개 더 생성
];

// 임시로 나머지 60개는 기본 패턴을 변형하여 생성
for (let i = 11; i <= 70; i++) {
  const variations = [
    // 3-4-5 삼각형 변형
    { a: 6, b: 8, c: 10, difficulty: 'easy' as const },
    { a: 9, b: 12, c: 15, difficulty: 'easy' as const },
    { a: 15, b: 20, c: 25, difficulty: 'medium' as const },
    // 5-12-13 삼각형 변형
    { a: 10, b: 24, c: 26, difficulty: 'medium' as const },
    // 8-15-17 삼각형 변형
    { a: 16, b: 30, c: 34, difficulty: 'medium' as const },
    // 7-24-25 삼각형 변형
    { a: 14, b: 48, c: 50, difficulty: 'hard' as const }
  ];
  
  const variation = variations[(i - 11) % variations.length];
  const type = i % 3; // 0: 빗변 구하기, 1: 한 변 구하기, 2: 거리 문제
  
  if (type === 0) {
    pythagoreanObjectiveQuestions.push({
      id: `py-obj-${i}`,
      topic: '피타고라스 정리',
      topicId: 'pythagorean-theorem',
      question: `직각삼각형에서 두 직각변의 길이가 ${variation.a}cm, ${variation.b}cm일 때, 빗변의 길이는?`,
      question_en: `In a right triangle with legs of ${variation.a}cm and ${variation.b}cm, what is the length of the hypotenuse?`,
      options: [`${variation.c}cm`, `${variation.c + 1}cm`, `${variation.c - 1}cm`, `${variation.c + 2}cm`],
      options_en: [`${variation.c}cm`, `${variation.c + 1}cm`, `${variation.c - 1}cm`, `${variation.c + 2}cm`],
      correctAnswer: 0,
      explanation: `피타고라스 정리에 의해 c² = ${variation.a}² + ${variation.b}² = ${variation.a * variation.a} + ${variation.b * variation.b} = ${variation.c * variation.c}, 따라서 c = ${variation.c}cm`,
      explanation_en: `By the Pythagorean theorem, c² = ${variation.a}² + ${variation.b}² = ${variation.a * variation.a} + ${variation.b * variation.b} = ${variation.c * variation.c}, therefore c = ${variation.c}cm`,
      difficulty: variation.difficulty
    });
  } else if (type === 1) {
    pythagoreanObjectiveQuestions.push({
      id: `py-obj-${i}`,
      topic: '피타고라스 정리',
      topicId: 'pythagorean-theorem',
      question: `빗변의 길이가 ${variation.c}cm이고 한 직각변의 길이가 ${variation.a}cm인 직각삼각형에서 다른 직각변의 길이는?`,
      question_en: `In a right triangle with hypotenuse ${variation.c}cm and one leg ${variation.a}cm, what is the length of the other leg?`,
      options: [`${variation.b}cm`, `${variation.b + 1}cm`, `${variation.b - 1}cm`, `${variation.b + 2}cm`],
      options_en: [`${variation.b}cm`, `${variation.b + 1}cm`, `${variation.b - 1}cm`, `${variation.b + 2}cm`],
      correctAnswer: 0,
      explanation: `a² + ${variation.a}² = ${variation.c}²에서 a² = ${variation.c * variation.c} - ${variation.a * variation.a} = ${variation.b * variation.b}, 따라서 a = ${variation.b}cm`,
      explanation_en: `From a² + ${variation.a}² = ${variation.c}², we get a² = ${variation.c * variation.c} - ${variation.a * variation.a} = ${variation.b * variation.b}, therefore a = ${variation.b}cm`,
      difficulty: variation.difficulty
    });
  } else {
    pythagoreanObjectiveQuestions.push({
      id: `py-obj-${i}`,
      topic: '피타고라스 정리',
      topicId: 'pythagorean-theorem',
      question: `좌표평면에서 점 (${variation.a}, ${variation.b})과 원점 사이의 거리는?`,
      question_en: `What is the distance between point (${variation.a}, ${variation.b}) and the origin on the coordinate plane?`,
      options: [`${variation.c}`, `${variation.c + 1}`, `${variation.c - 1}`, `${variation.c + 2}`],
      options_en: [`${variation.c}`, `${variation.c + 1}`, `${variation.c - 1}`, `${variation.c + 2}`],
      correctAnswer: 0,
      explanation: `거리 = √(${variation.a}² + ${variation.b}²) = √(${variation.a * variation.a} + ${variation.b * variation.b}) = √${variation.c * variation.c} = ${variation.c}`,
      explanation_en: `Distance = √(${variation.a}² + ${variation.b}²) = √(${variation.a * variation.a} + ${variation.b * variation.b}) = √${variation.c * variation.c} = ${variation.c}`,
      difficulty: variation.difficulty
    });
  }
}

// 피타고라스 정리 주관식 문제 (30개)
export const pythagoreanSubjectiveQuestions: SubjectiveQuestion[] = [
  {
    id: 'py-sub-1',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '직각삼각형에서 두 직각변의 길이가 6cm와 8cm일 때, 빗변의 길이를 구하시오.',
    question_en: 'Find the length of the hypotenuse in a right triangle with legs of 6cm and 8cm.',
    correctAnswer: '10',
    correctAnswer_en: '10',
    explanation: '피타고라스 정리에 의해 c² = 6² + 8² = 36 + 64 = 100, 따라서 c = 10cm',
    explanation_en: 'By the Pythagorean theorem, c² = 6² + 8² = 36 + 64 = 100, therefore c = 10cm',
    difficulty: 'easy',
    answerType: 'number',
    unit: 'cm',
    unit_en: 'cm',
    alternativeAnswers: ['10cm', '10 cm'],
    alternativeAnswers_en: ['10cm', '10 cm']
  },
  {
    id: 'py-sub-2',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '한 변의 길이가 5cm인 정사각형의 대각선의 길이를 구하시오. (소수 둘째 자리까지)',
    question_en: 'Find the length of the diagonal of a square with side length 5cm. (Round to two decimal places)',
    correctAnswer: '7.07',
    correctAnswer_en: '7.07',
    explanation: '정사각형의 대각선 = 한 변 × √2 = 5 × √2 ≈ 7.07cm',
    explanation_en: 'Diagonal of square = side × √2 = 5 × √2 ≈ 7.07cm',
    difficulty: 'medium',
    answerType: 'number',
    unit: 'cm',
    unit_en: 'cm',
    alternativeAnswers: ['7.07cm', '5√2', '5√2cm'],
    alternativeAnswers_en: ['7.07cm', '5√2', '5√2cm']
  },
  {
    id: 'py-sub-3',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '빗변이 25cm이고 한 직각변이 15cm인 직각삼각형에서 다른 직각변의 길이를 구하시오.',
    question_en: 'Find the length of the other leg in a right triangle with hypotenuse 25cm and one leg 15cm.',
    correctAnswer: '20',
    correctAnswer_en: '20',
    explanation: 'a² + 15² = 25²에서 a² = 625 - 225 = 400, 따라서 a = 20cm',
    explanation_en: 'From a² + 15² = 25², we get a² = 625 - 225 = 400, therefore a = 20cm',
    difficulty: 'easy',
    answerType: 'number',
    unit: 'cm',
    unit_en: 'cm',
    alternativeAnswers: ['20cm', '20 cm'],
    alternativeAnswers_en: ['20cm', '20 cm']
  },
  {
    id: 'py-sub-4',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '좌표평면에서 점 A(2, 3)과 점 B(6, 6) 사이의 거리를 구하시오.',
    correctAnswer: '5',
    explanation: '거리 = √((6-2)² + (6-3)²) = √(16 + 9) = √25 = 5',
    difficulty: 'medium',
    answerType: 'number',
    alternativeAnswers: ['5.0', '5.00']
  },
  {
    id: 'py-sub-5',
    topic: '피타고라스 정리',
    topicId: 'pythagorean-theorem',
    question: '직각이등변삼각형에서 직각변의 길이가 8cm일 때, 빗변의 길이를 구하시오. (소수 둘째 자리까지)',
    correctAnswer: '11.31',
    explanation: '직각이등변삼각형에서 빗변 = 직각변 × √2 = 8 × √2 ≈ 11.31cm',
    difficulty: 'medium',
    answerType: 'number',
    unit: 'cm',
    alternativeAnswers: ['11.31cm', '8√2', '8√2cm']
  }
];

// 나머지 25개 주관식 문제 생성
for (let i = 6; i <= 30; i++) {
  const variations = [
    { a: 9, b: 12, c: 15, difficulty: 'easy' as const },
    { a: 7, b: 24, c: 25, difficulty: 'medium' as const },
    { a: 20, b: 21, c: 29, difficulty: 'medium' as const },
    { a: 11, b: 60, c: 61, difficulty: 'hard' as const },
    { a: 13, b: 84, c: 85, difficulty: 'hard' as const }
  ];
  
  const variation = variations[(i - 6) % variations.length];
  const type = i % 3;
  
  if (type === 0) {
    pythagoreanSubjectiveQuestions.push({
      id: `py-sub-${i}`,
      topic: '피타고라스 정리',
      topicId: 'pythagorean-theorem',
      question: `직각삼각형에서 두 직각변의 길이가 ${variation.a}cm와 ${variation.b}cm일 때, 빗변의 길이를 구하시오.`,
      correctAnswer: `${variation.c}`,
      explanation: `피타고라스 정리에 의해 c² = ${variation.a}² + ${variation.b}² = ${variation.a * variation.a} + ${variation.b * variation.b} = ${variation.c * variation.c}, 따라서 c = ${variation.c}cm`,
      difficulty: variation.difficulty,
      answerType: 'number',
      unit: 'cm',
      alternativeAnswers: [`${variation.c}cm`, `${variation.c} cm`]
    });
  } else if (type === 1) {
    pythagoreanSubjectiveQuestions.push({
      id: `py-sub-${i}`,
      topic: '피타고라스 정리',
      topicId: 'pythagorean-theorem',
      question: `빗변이 ${variation.c}cm이고 한 직각변이 ${variation.a}cm인 직각삼각형에서 다른 직각변의 길이를 구하시오.`,
      correctAnswer: `${variation.b}`,
      explanation: `a² + ${variation.a}² = ${variation.c}²에서 a² = ${variation.c * variation.c} - ${variation.a * variation.a} = ${variation.b * variation.b}, 따라서 a = ${variation.b}cm`,
      difficulty: variation.difficulty,
      answerType: 'number',
      unit: 'cm',
      alternativeAnswers: [`${variation.b}cm`, `${variation.b} cm`]
    });
  } else {
    pythagoreanSubjectiveQuestions.push({
      id: `py-sub-${i}`,
      topic: '피타고라스 정리',
      topicId: 'pythagorean-theorem',
      question: `좌표평면에서 점 (${variation.a}, ${variation.b})과 원점 사이의 거리를 구하시오.`,
      correctAnswer: `${variation.c}`,
      explanation: `거리 = √(${variation.a}² + ${variation.b}²) = √(${variation.a * variation.a} + ${variation.b * variation.b}) = √${variation.c * variation.c} = ${variation.c}`,
      difficulty: variation.difficulty,
      answerType: 'number',
      alternativeAnswers: [`${variation.c}.0`, `${variation.c}.00`]
    });
  }
} 