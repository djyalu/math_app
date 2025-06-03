import { PracticeQuestion, SubjectiveQuestion } from '../types';

// 삼각비 객관식 문제 (70개)
export const trigonometryObjectiveQuestions: PracticeQuestion[] = [
  {
    id: 'tri-obj-1',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'sin 30°의 값은?',
    question_en: 'What is the value of sin 30°?',
    options: ['1/2', '√2/2', '√3/2', '1'],
    options_en: ['1/2', '√2/2', '√3/2', '1'],
    correctAnswer: 0,
    explanation: '특수각 30°에서 sin 30° = 1/2',
    explanation_en: 'For the special angle 30°, sin 30° = 1/2',
    difficulty: 'easy'
  },
  {
    id: 'tri-obj-2',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'cos 60°의 값은?',
    question_en: 'What is the value of cos 60°?',
    options: ['1/2', '√2/2', '√3/2', '1'],
    options_en: ['1/2', '√2/2', '√3/2', '1'],
    correctAnswer: 0,
    explanation: '특수각 60°에서 cos 60° = 1/2',
    explanation_en: 'For the special angle 60°, cos 60° = 1/2',
    difficulty: 'easy'
  },
  {
    id: 'tri-obj-3',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'tan 45°의 값은?',
    question_en: 'What is the value of tan 45°?',
    options: ['1/2', '√2/2', '√3/2', '1'],
    options_en: ['1/2', '√2/2', '√3/2', '1'],
    correctAnswer: 3,
    explanation: '특수각 45°에서 tan 45° = 1',
    explanation_en: 'For the special angle 45°, tan 45° = 1',
    difficulty: 'easy'
  },
  {
    id: 'tri-obj-4',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'sin 60°의 값은?',
    question_en: 'What is the value of sin 60°?',
    options: ['1/2', '√2/2', '√3/2', '1'],
    options_en: ['1/2', '√2/2', '√3/2', '1'],
    correctAnswer: 2,
    explanation: '특수각 60°에서 sin 60° = √3/2',
    explanation_en: 'For the special angle 60°, sin 60° = √3/2',
    difficulty: 'easy'
  },
  {
    id: 'tri-obj-5',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'cos 45°의 값은?',
    question_en: 'What is the value of cos 45°?',
    options: ['1/2', '√2/2', '√3/2', '1'],
    options_en: ['1/2', '√2/2', '√3/2', '1'],
    correctAnswer: 1,
    explanation: '특수각 45°에서 cos 45° = √2/2',
    explanation_en: 'For the special angle 45°, cos 45° = √2/2',
    difficulty: 'easy'
  },
  {
    id: 'tri-obj-6',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'tan 60°의 값은?',
    question_en: 'What is the value of tan 60°?',
    options: ['1/2', '√2/2', '√3', '1'],
    options_en: ['1/2', '√2/2', '√3', '1'],
    correctAnswer: 2,
    explanation: '특수각 60°에서 tan 60° = √3',
    explanation_en: 'For the special angle 60°, tan 60° = √3',
    difficulty: 'easy'
  },
  {
    id: 'tri-obj-7',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'cos 30°의 값은?',
    question_en: 'What is the value of cos 30°?',
    options: ['1/2', '√2/2', '√3/2', '1'],
    options_en: ['1/2', '√2/2', '√3/2', '1'],
    correctAnswer: 2,
    explanation: '특수각 30°에서 cos 30° = √3/2',
    explanation_en: 'For the special angle 30°, cos 30° = √3/2',
    difficulty: 'easy'
  },
  {
    id: 'tri-obj-8',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'tan 30°의 값은?',
    question_en: 'What is the value of tan 30°?',
    options: ['1/√3', '√2/2', '√3/3', '1'],
    options_en: ['1/√3', '√2/2', '√3/3', '1'],
    correctAnswer: 2,
    explanation: '특수각 30°에서 tan 30° = 1/√3 = √3/3',
    explanation_en: 'For the special angle 30°, tan 30° = 1/√3 = √3/3',
    difficulty: 'medium'
  },
  {
    id: 'tri-obj-9',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'sin² 30° + cos² 30°의 값은?',
    question_en: 'What is the value of sin² 30° + cos² 30°?',
    options: ['1/2', '√3/2', '1', '3/2'],
    options_en: ['1/2', '√3/2', '1', '3/2'],
    correctAnswer: 2,
    explanation: 'sin² θ + cos² θ = 1 (삼각함수의 기본 항등식)',
    explanation_en: 'sin² θ + cos² θ = 1 (fundamental trigonometric identity)',
    difficulty: 'medium'
  },
  {
    id: 'tri-obj-10',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: '직각삼각형에서 한 예각이 60°이고 빗변이 10cm일 때, 이 각의 대변의 길이는?',
    question_en: 'In a right triangle with one acute angle of 60° and hypotenuse of 10cm, what is the length of the opposite side?',
    options: ['5cm', '5√2cm', '5√3cm', '10cm'],
    options_en: ['5cm', '5√2cm', '5√3cm', '10cm'],
    correctAnswer: 2,
    explanation: 'sin 60° = √3/2이므로 대변 = 10 × √3/2 = 5√3cm',
    explanation_en: 'Since sin 60° = √3/2, opposite side = 10 × √3/2 = 5√3cm',
    difficulty: 'medium'
  }
];

// 나머지 60개 객관식 문제 생성
for (let i = 11; i <= 70; i++) {
  const angles = [30, 45, 60] as const;
  const functions = ['sin', 'cos', 'tan'] as const;
  const angle = angles[(i - 11) % angles.length];
  const func = functions[Math.floor((i - 11) / angles.length) % functions.length];
  
  const values: Record<typeof functions[number], Record<typeof angles[number], string>> = {
    sin: { 30: '1/2', 45: '√2/2', 60: '√3/2' },
    cos: { 30: '√3/2', 45: '√2/2', 60: '1/2' },
    tan: { 30: '√3/3', 45: '1', 60: '√3' }
  };
  
  trigonometryObjectiveQuestions.push({
    id: `tri-obj-${i}`,
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: `${func} ${angle}°의 값은?`,
    question_en: `What is the value of ${func} ${angle}°?`,
    options: ['1/2', '√2/2', '√3/2', '1', '√3', '√3/3'].slice(0, 4),
    options_en: ['1/2', '√2/2', '√3/2', '1', '√3', '√3/3'].slice(0, 4),
    correctAnswer: 0,
    explanation: `특수각 ${angle}°에서 ${func} ${angle}° = ${values[func][angle]}`,
    explanation_en: `For the special angle ${angle}°, ${func} ${angle}° = ${values[func][angle]}`,
    difficulty: i < 30 ? 'easy' : i < 55 ? 'medium' : 'hard'
  });
}

// 삼각비 주관식 문제 (30개)
export const trigonometrySubjectiveQuestions: SubjectiveQuestion[] = [
  {
    id: 'tri-sub-1',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'tan 45°의 값을 구하시오.',
    question_en: 'Find the value of tan 45°.',
    correctAnswer: '1',
    correctAnswer_en: '1',
    explanation: '특수각 45°에서 tan 45° = 1',
    explanation_en: 'For the special angle 45°, tan 45° = 1',
    difficulty: 'easy',
    answerType: 'number',
    alternativeAnswers: ['1.0', '1.00'],
    alternativeAnswers_en: ['1.0', '1.00']
  },
  {
    id: 'tri-sub-2',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: '직각삼각형에서 한 예각이 30°이고 인접변이 12cm일 때, 대변의 길이를 구하시오. (소수 첫째 자리까지)',
    question_en: 'In a right triangle with one acute angle of 30° and adjacent side of 12cm, find the length of the opposite side. (Round to one decimal place)',
    correctAnswer: '6.9',
    correctAnswer_en: '6.9',
    explanation: 'tan 30° = 1/√3이므로 대변 = 12 × tan 30° = 12 × (1/√3) ≈ 6.9cm',
    explanation_en: 'Since tan 30° = 1/√3, opposite side = 12 × tan 30° = 12 × (1/√3) ≈ 6.9cm',
    difficulty: 'medium',
    answerType: 'number',
    unit: 'cm',
    unit_en: 'cm',
    alternativeAnswers: ['6.9cm', '4√3', '4√3cm'],
    alternativeAnswers_en: ['6.9cm', '4√3', '4√3cm']
  },
  {
    id: 'tri-sub-3',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'sin 60°의 값을 분수로 나타내시오.',
    question_en: 'Express the value of sin 60° as a fraction.',
    correctAnswer: '√3/2',
    correctAnswer_en: '√3/2',
    explanation: '특수각 60°에서 sin 60° = √3/2',
    explanation_en: 'For the special angle 60°, sin 60° = √3/2',
    difficulty: 'easy',
    answerType: 'expression',
    alternativeAnswers: ['(√3)/2', 'sqrt(3)/2'],
    alternativeAnswers_en: ['(√3)/2', 'sqrt(3)/2']
  },
  {
    id: 'tri-sub-4',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: 'cos 30°의 값을 소수로 나타내시오. (소수 셋째 자리까지)',
    question_en: 'Express the value of cos 30° as a decimal. (Round to three decimal places)',
    correctAnswer: '0.866',
    correctAnswer_en: '0.866',
    explanation: 'cos 30° = √3/2 ≈ 0.866',
    explanation_en: 'cos 30° = √3/2 ≈ 0.866',
    difficulty: 'medium',
    answerType: 'number',
    alternativeAnswers: ['0.8660', '√3/2'],
    alternativeAnswers_en: ['0.8660', '√3/2']
  },
  {
    id: 'tri-sub-5',
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: '직각삼각형에서 빗변이 20cm이고 한 예각이 60°일 때, 이 각의 인접변의 길이를 구하시오.',
    question_en: 'In a right triangle with hypotenuse 20cm and one acute angle of 60°, find the length of the adjacent side.',
    correctAnswer: '10',
    correctAnswer_en: '10',
    explanation: 'cos 60° = 1/2이므로 인접변 = 20 × cos 60° = 20 × 1/2 = 10cm',
    explanation_en: 'Since cos 60° = 1/2, adjacent side = 20 × cos 60° = 20 × 1/2 = 10cm',
    difficulty: 'medium',
    answerType: 'number',
    unit: 'cm',
    unit_en: 'cm',
    alternativeAnswers: ['10cm', '10 cm'],
    alternativeAnswers_en: ['10cm', '10 cm']
  }
];

// 나머지 25개 주관식 문제 생성
for (let i = 6; i <= 30; i++) {
  const angles = [30, 45, 60] as const;
  const functions = ['sin', 'cos', 'tan'] as const;
  const angle = angles[(i - 6) % angles.length];
  const func = functions[Math.floor((i - 6) / angles.length) % functions.length];
  
  const values: Record<typeof functions[number], Record<typeof angles[number], string>> = {
    sin: { 30: '0.5', 45: '0.707', 60: '0.866' },
    cos: { 30: '0.866', 45: '0.707', 60: '0.5' },
    tan: { 30: '0.577', 45: '1', 60: '1.732' }
  };
  
  trigonometrySubjectiveQuestions.push({
    id: `tri-sub-${i}`,
    topic: '삼각비',
    topicId: 'trigonometric-ratios',
    question: `${func} ${angle}°의 값을 소수로 나타내시오. (소수 셋째 자리까지)`,
    question_en: `Express the value of ${func} ${angle}° as a decimal. (Round to three decimal places)`,
    correctAnswer: values[func][angle],
    correctAnswer_en: values[func][angle],
    explanation: `특수각 ${angle}°에서 ${func} ${angle}° ≈ ${values[func][angle]}`,
    explanation_en: `For the special angle ${angle}°, ${func} ${angle}° ≈ ${values[func][angle]}`,
    difficulty: i < 15 ? 'easy' : i < 25 ? 'medium' : 'hard',
    answerType: 'number',
    alternativeAnswers: [`${values[func][angle]}0`, values[func][angle].replace('.', '')],
    alternativeAnswers_en: [`${values[func][angle]}0`, values[func][angle].replace('.', '')]
  });
} 