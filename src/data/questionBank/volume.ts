import { PracticeQuestion, SubjectiveQuestion } from '../types';

// 입체도형 객관식 문제 (70개)
export const volumeObjectiveQuestions: PracticeQuestion[] = [
  {
    id: 'vol-obj-1',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '한 모서리의 길이가 6cm인 정육면체의 부피는?',
    question_en: 'What is the volume of a cube with edge length 6cm?',
    options: ['36㎤', '108㎤', '216㎤', '324㎤'],
    options_en: ['36 cm³', '108 cm³', '216 cm³', '324 cm³'],
    correctAnswer: 2,
    explanation: '정육면체의 부피 = 6³ = 216㎤',
    explanation_en: 'Volume of cube = 6³ = 216 cm³',
    difficulty: 'easy'
  },
  {
    id: 'vol-obj-2',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '반지름이 3cm인 구의 부피는? (π = 3.14)',
    question_en: 'What is the volume of a sphere with radius 3cm? (π = 3.14)',
    options: ['36π㎤', '48π㎤', '54π㎤', '72π㎤'],
    options_en: ['36π cm³', '48π cm³', '54π cm³', '72π cm³'],
    correctAnswer: 0,
    explanation: '구의 부피 = (4/3)πr³ = (4/3)π × 3³ = (4/3)π × 27 = 36π㎤',
    explanation_en: 'Volume of sphere = (4/3)πr³ = (4/3)π × 3³ = (4/3)π × 27 = 36π cm³',
    difficulty: 'medium'
  },
  {
    id: 'vol-obj-3',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '밑면의 반지름이 4cm, 높이가 6cm인 원기둥의 부피는?',
    question_en: 'What is the volume of a cylinder with base radius 4cm and height 6cm?',
    options: ['96π㎤', '48π㎤', '72π㎤', '144π㎤'],
    options_en: ['96π cm³', '48π cm³', '72π cm³', '144π cm³'],
    correctAnswer: 0,
    explanation: '원기둥의 부피 = πr²h = π × 4² × 6 = 96π㎤',
    explanation_en: 'Volume of cylinder = πr²h = π × 4² × 6 = 96π cm³',
    difficulty: 'easy'
  },
  {
    id: 'vol-obj-4',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '밑면의 반지름이 3cm, 높이가 8cm인 원뿔의 부피는?',
    question_en: 'What is the volume of a cone with base radius 3cm and height 8cm?',
    options: ['24π㎤', '36π㎤', '48π㎤', '72π㎤'],
    options_en: ['24π cm³', '36π cm³', '48π cm³', '72π cm³'],
    correctAnswer: 0,
    explanation: '원뿔의 부피 = (1/3)πr²h = (1/3)π × 3² × 8 = 24π㎤',
    explanation_en: 'Volume of cone = (1/3)πr²h = (1/3)π × 3² × 8 = 24π cm³',
    difficulty: 'medium'
  },
  {
    id: 'vol-obj-5',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '한 모서리의 길이가 4cm인 정육면체의 겉넓이는?',
    question_en: 'What is the surface area of a cube with edge length 4cm?',
    options: ['64㎠', '96㎠', '128㎠', '144㎠'],
    options_en: ['64 cm²', '96 cm²', '128 cm²', '144 cm²'],
    correctAnswer: 1,
    explanation: '정육면체의 겉넓이 = 6 × 4² = 6 × 16 = 96㎠',
    explanation_en: 'Surface area of cube = 6 × 4² = 6 × 16 = 96 cm²',
    difficulty: 'easy'
  }
];

// 나머지 65개 객관식 문제 생성
for (let i = 6; i <= 70; i++) {
  const cubeShapes = [3, 5, 7, 8, 9, 10];
  const cylShapes = [{r: 2, h: 8}, {r: 3, h: 10}, {r: 4, h: 12}];
  
  const shapeType = i % 3; // 0: cube, 1: cylinder, 2: rectangular
  
  if (shapeType === 0) {
    const edge = cubeShapes[(i - 6) % cubeShapes.length];
    const volume = edge ** 3;
    const surface = 6 * edge ** 2;
    const calcType = i % 2; // 0: 부피, 1: 겉넓이
    
    volumeObjectiveQuestions.push({
      id: `vol-obj-${i}`,
      topic: '입체도형',
      topicId: 'volume-surface-area',
      question: `한 모서리의 길이가 ${edge}cm인 정육면체의 ${calcType === 0 ? '부피' : '겉넓이'}는?`,
      question_en: `What is the ${calcType === 0 ? 'volume' : 'surface area'} of a cube with edge length ${edge}cm?`,
      options: calcType === 0 
        ? [`${volume}㎤`, `${volume + 50}㎤`, `${volume - 50}㎤`, `${volume * 2}㎤`]
        : [`${surface}㎠`, `${surface + 24}㎠`, `${surface - 24}㎠`, `${surface * 2}㎠`],
      options_en: calcType === 0 
        ? [`${volume} cm³`, `${volume + 50} cm³`, `${volume - 50} cm³`, `${volume * 2} cm³`]
        : [`${surface} cm²`, `${surface + 24} cm²`, `${surface - 24} cm²`, `${surface * 2} cm²`],
      correctAnswer: 0,
      explanation: calcType === 0 
        ? `정육면체의 부피 = ${edge}³ = ${volume}㎤`
        : `정육면체의 겉넓이 = 6 × ${edge}² = ${surface}㎠`,
      explanation_en: calcType === 0 
        ? `Volume of cube = ${edge}³ = ${volume} cm³`
        : `Surface area of cube = 6 × ${edge}² = ${surface} cm²`,
      difficulty: i < 30 ? 'easy' : i < 55 ? 'medium' : 'hard'
    });
  } else if (shapeType === 1) {
    const cyl = cylShapes[(i - 6) % cylShapes.length];
    const calcType = i % 2; // 0: 부피, 1: 겉넓이
    
    volumeObjectiveQuestions.push({
      id: `vol-obj-${i}`,
      topic: '입체도형',
      topicId: 'volume-surface-area',
      question: `반지름 ${cyl.r}cm, 높이 ${cyl.h}cm인 원기둥의 ${calcType === 0 ? '부피' : '겉넓이'}는?`,
      question_en: `What is the ${calcType === 0 ? 'volume' : 'surface area'} of a cylinder with radius ${cyl.r}cm and height ${cyl.h}cm?`,
      options: calcType === 0 
        ? [`${cyl.r**2 * cyl.h}π㎤`, `${(cyl.r**2 * cyl.h) + 50}π㎤`, `${(cyl.r**2 * cyl.h) - 50}π㎤`, `${(cyl.r**2 * cyl.h) * 2}π㎤`]
        : [`${2 * cyl.r * (cyl.r + cyl.h)}π㎠`, `${2 * cyl.r * (cyl.r + cyl.h) + 20}π㎠`, `${2 * cyl.r * (cyl.r + cyl.h) - 20}π㎠`, `${2 * cyl.r * (cyl.r + cyl.h) * 2}π㎠`],
      options_en: calcType === 0 
        ? [`${cyl.r**2 * cyl.h}π cm³`, `${(cyl.r**2 * cyl.h) + 50}π cm³`, `${(cyl.r**2 * cyl.h) - 50}π cm³`, `${(cyl.r**2 * cyl.h) * 2}π cm³`]
        : [`${2 * cyl.r * (cyl.r + cyl.h)}π cm²`, `${2 * cyl.r * (cyl.r + cyl.h) + 20}π cm²`, `${2 * cyl.r * (cyl.r + cyl.h) - 20}π cm²`, `${2 * cyl.r * (cyl.r + cyl.h) * 2}π cm²`],
      correctAnswer: 0,
      explanation: calcType === 0 
        ? `원기둥의 부피 = πr²h = π × ${cyl.r}² × ${cyl.h} = ${cyl.r**2 * cyl.h}π㎤`
        : `원기둥의 겉넓이 = 2πr(r+h) = 2π × ${cyl.r} × (${cyl.r}+${cyl.h}) = ${2 * cyl.r * (cyl.r + cyl.h)}π㎠`,
      explanation_en: calcType === 0 
        ? `Volume of cylinder = πr²h = π × ${cyl.r}² × ${cyl.h} = ${cyl.r**2 * cyl.h}π cm³`
        : `Surface area of cylinder = 2πr(r+h) = 2π × ${cyl.r} × (${cyl.r}+${cyl.h}) = ${2 * cyl.r * (cyl.r + cyl.h)}π cm²`,
      difficulty: i < 30 ? 'easy' : i < 55 ? 'medium' : 'hard'
    });
  }
}

// 입체도형 주관식 문제 (30개)
export const volumeSubjectiveQuestions: SubjectiveQuestion[] = [
  {
    id: 'vol-sub-1',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '한 모서리의 길이가 5cm인 정육면체의 겉넓이를 구하시오.',
    question_en: 'Find the surface area of a cube with edge length 5cm.',
    correctAnswer: '150',
    correctAnswer_en: '150',
    explanation: '정육면체의 겉넓이 = 6 × 5² = 6 × 25 = 150㎠',
    explanation_en: 'Surface area of cube = 6 × 5² = 6 × 25 = 150 cm²',
    difficulty: 'easy',
    answerType: 'number',
    unit: '㎠',
    unit_en: 'cm²',
    alternativeAnswers: ['150㎠', '150 ㎠'],
    alternativeAnswers_en: ['150 cm²', '150cm²']
  },
  {
    id: 'vol-sub-2',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '반지름이 4cm, 높이가 9cm인 원기둥의 부피를 구하시오. (π = 3.14)',
    question_en: 'Find the volume of a cylinder with radius 4cm and height 9cm. (π = 3.14)',
    correctAnswer: '452.16',
    correctAnswer_en: '452.16',
    explanation: '원기둥의 부피 = πr²h = 3.14 × 4² × 9 = 452.16㎤',
    explanation_en: 'Volume of cylinder = πr²h = 3.14 × 4² × 9 = 452.16 cm³',
    difficulty: 'medium',
    answerType: 'number',
    unit: '㎤',
    unit_en: 'cm³',
    alternativeAnswers: ['452.16㎤', '452.16 ㎤', '144π', '144π㎤'],
    alternativeAnswers_en: ['452.16 cm³', '452.16cm³', '144π', '144π cm³']
  },
  {
    id: 'vol-sub-3',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '반지름이 6cm인 구의 부피를 구하시오. (π를 사용하여 답하시오)',
    question_en: 'Find the volume of a sphere with radius 6cm. (Use π in your answer)',
    correctAnswer: '288π',
    correctAnswer_en: '288π',
    explanation: '구의 부피 = (4/3)πr³ = (4/3)π × 6³ = (4/3)π × 216 = 288π㎤',
    explanation_en: 'Volume of sphere = (4/3)πr³ = (4/3)π × 6³ = (4/3)π × 216 = 288π cm³',
    difficulty: 'medium',
    answerType: 'expression',
    unit: '㎤',
    unit_en: 'cm³',
    alternativeAnswers: ['288π㎤', '288π ㎤'],
    alternativeAnswers_en: ['288π cm³', '288πcm³']
  },
  {
    id: 'vol-sub-4',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '밑면의 반지름이 8cm, 높이가 15cm인 원뿔의 부피를 구하시오. (π를 사용하여 답하시오)',
    question_en: 'Find the volume of a cone with base radius 8cm and height 15cm. (Use π in your answer)',
    correctAnswer: '320π',
    correctAnswer_en: '320π',
    explanation: '원뿔의 부피 = (1/3)πr²h = (1/3)π × 8² × 15 = (1/3)π × 960 = 320π㎤',
    explanation_en: 'Volume of cone = (1/3)πr²h = (1/3)π × 8² × 15 = (1/3)π × 960 = 320π cm³',
    difficulty: 'medium',
    answerType: 'expression',
    unit: '㎤',
    unit_en: 'cm³',
    alternativeAnswers: ['320π㎤', '320π ㎤'],
    alternativeAnswers_en: ['320π cm³', '320πcm³']
  },
  {
    id: 'vol-sub-5',
    topic: '입체도형',
    topicId: 'volume-surface-area',
    question: '가로 12cm, 세로 8cm, 높이 5cm인 직육면체의 부피를 구하시오.',
    question_en: 'Find the volume of a rectangular prism with length 12cm, width 8cm, and height 5cm.',
    correctAnswer: '480',
    correctAnswer_en: '480',
    explanation: '직육면체의 부피 = 가로 × 세로 × 높이 = 12 × 8 × 5 = 480㎤',
    explanation_en: 'Volume of rectangular prism = length × width × height = 12 × 8 × 5 = 480 cm³',
    difficulty: 'easy',
    answerType: 'number',
    unit: '㎤',
    unit_en: 'cm³',
    alternativeAnswers: ['480㎤', '480 ㎤'],
    alternativeAnswers_en: ['480 cm³', '480cm³']
  }
];

// 나머지 25개 주관식 문제 생성
for (let i = 6; i <= 30; i++) {
  const cubeEdges = [6, 7, 8, 9, 10];
  const rects = [{w: 10, h: 6, d: 8}, {w: 12, h: 5, d: 7}, {w: 9, h: 8, d: 6}];
  
  const shapeType = i % 2; // 0: cube, 1: rectangular
  
  if (shapeType === 0) {
    const edge = cubeEdges[(i - 6) % cubeEdges.length];
    const volume = edge ** 3;
    const surface = 6 * edge ** 2;
    const calcType = i % 2; // 0: 부피, 1: 겉넓이
    
    volumeSubjectiveQuestions.push({
      id: `vol-sub-${i}`,
      topic: '입체도형',
      topicId: 'volume-surface-area',
      question: `한 모서리의 길이가 ${edge}cm인 정육면체의 ${calcType === 0 ? '부피' : '겉넓이'}를 구하시오.`,
      question_en: `Find the ${calcType === 0 ? 'volume' : 'surface area'} of a cube with edge length ${edge}cm.`,
      correctAnswer: calcType === 0 ? `${volume}` : `${surface}`,
      correctAnswer_en: calcType === 0 ? `${volume}` : `${surface}`,
      explanation: calcType === 0 
        ? `정육면체의 부피 = ${edge}³ = ${volume}㎤`
        : `정육면체의 겉넓이 = 6 × ${edge}² = ${surface}㎠`,
      explanation_en: calcType === 0 
        ? `Volume of cube = ${edge}³ = ${volume} cm³`
        : `Surface area of cube = 6 × ${edge}² = ${surface} cm²`,
      difficulty: i < 15 ? 'easy' : i < 25 ? 'medium' : 'hard',
      answerType: 'number',
      unit: calcType === 0 ? '㎤' : '㎠',
      unit_en: calcType === 0 ? 'cm³' : 'cm²',
      alternativeAnswers: calcType === 0 
        ? [`${volume}㎤`, `${volume} ㎤`] 
        : [`${surface}㎠`, `${surface} ㎠`],
      alternativeAnswers_en: calcType === 0 
        ? [`${volume} cm³`, `${volume}cm³`] 
        : [`${surface} cm²`, `${surface}cm²`]
    });
  } else {
    const rect = rects[(i - 6) % rects.length];
    const volume = rect.w * rect.h * rect.d;
    const surface = 2 * (rect.w * rect.h + rect.h * rect.d + rect.d * rect.w);
    const calcType = i % 2; // 0: 부피, 1: 겉넓이
    
    volumeSubjectiveQuestions.push({
      id: `vol-sub-${i}`,
      topic: '입체도형',
      topicId: 'volume-surface-area',
      question: `가로 ${rect.w}cm, 세로 ${rect.h}cm, 높이 ${rect.d}cm인 직육면체의 ${calcType === 0 ? '부피' : '겉넓이'}를 구하시오.`,
      question_en: `Find the ${calcType === 0 ? 'volume' : 'surface area'} of a rectangular prism with length ${rect.w}cm, width ${rect.h}cm, and height ${rect.d}cm.`,
      correctAnswer: calcType === 0 ? `${volume}` : `${surface}`,
      correctAnswer_en: calcType === 0 ? `${volume}` : `${surface}`,
      explanation: calcType === 0 
        ? `직육면체의 부피 = ${rect.w} × ${rect.h} × ${rect.d} = ${volume}㎤`
        : `직육면체의 겉넓이 = 2(${rect.w}×${rect.h} + ${rect.h}×${rect.d} + ${rect.d}×${rect.w}) = ${surface}㎠`,
      explanation_en: calcType === 0 
        ? `Volume of rectangular prism = ${rect.w} × ${rect.h} × ${rect.d} = ${volume} cm³`
        : `Surface area of rectangular prism = 2(${rect.w}×${rect.h} + ${rect.h}×${rect.d} + ${rect.d}×${rect.w}) = ${surface} cm²`,
      difficulty: i < 15 ? 'easy' : i < 25 ? 'medium' : 'hard',
      answerType: 'number',
      unit: calcType === 0 ? '㎤' : '㎠',
      unit_en: calcType === 0 ? 'cm³' : 'cm²',
      alternativeAnswers: calcType === 0 
        ? [`${volume}㎤`, `${volume} ㎤`] 
        : [`${surface}㎠`, `${surface} ㎠`],
      alternativeAnswers_en: calcType === 0 
        ? [`${volume} cm³`, `${volume}cm³`] 
        : [`${surface} cm²`, `${surface}cm²`]
    });
  }
} 