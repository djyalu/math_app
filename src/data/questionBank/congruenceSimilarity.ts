import { PracticeQuestion, SubjectiveQuestion } from '../types';

// 합동과 닮음 객관식 문제 (70개)
export const congruenceSimilarityObjectiveQuestions: PracticeQuestion[] = [
  {
    id: 'cs-obj-1',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '두 삼각형이 합동이 되는 조건이 아닌 것은?',
    question_en: 'Which is NOT a condition for two triangles to be congruent?',
    options: ['SSS', 'SAS', 'ASA', 'SSA'],
    options_en: ['SSS', 'SAS', 'ASA', 'SSA'],
    correctAnswer: 3,
    explanation: 'SSA는 삼각형의 합동 조건이 아닙니다. 올바른 조건은 SSS, SAS, ASA입니다.',
    explanation_en: 'SSA is not a condition for triangle congruence. The correct conditions are SSS, SAS, and ASA.',
    difficulty: 'easy'
  },
  {
    id: 'cs-obj-2',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '두 삼각형의 닮음비가 3:2일 때, 넓이의 비는?',
    question_en: 'If the similarity ratio of two triangles is 3:2, what is the ratio of their areas?',
    options: ['3:2', '6:4', '9:4', '27:8'],
    options_en: ['3:2', '6:4', '9:4', '27:8'],
    correctAnswer: 2,
    explanation: '닮음비가 3:2일 때, 넓이의 비는 3²:2² = 9:4',
    explanation_en: 'When the similarity ratio is 3:2, the area ratio is 3²:2² = 9:4',
    difficulty: 'medium'
  },
  {
    id: 'cs-obj-3',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '두 삼각형의 닮음비가 2:5일 때, 부피의 비는?',
    question_en: 'If the similarity ratio of two triangles is 2:5, what is the ratio of their volumes?',
    options: ['2:5', '4:25', '8:125', '6:15'],
    options_en: ['2:5', '4:25', '8:125', '6:15'],
    correctAnswer: 2,
    explanation: '닮음비가 2:5일 때, 부피의 비는 2³:5³ = 8:125',
    explanation_en: 'When the similarity ratio is 2:5, the volume ratio is 2³:5³ = 8:125',
    difficulty: 'medium'
  },
  {
    id: 'cs-obj-4',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: 'AAA 조건은 삼각형의 무엇을 판정하는 조건인가?',
    question_en: 'The AAA condition is used to determine what property of triangles?',
    options: ['합동', '닮음', '합동과 닮음 모두', '해당 없음'],
    options_en: ['Congruence', 'Similarity', 'Both congruence and similarity', 'None'],
    correctAnswer: 1,
    explanation: 'AAA 조건은 삼각형의 닮음을 판정하는 조건입니다.',
    explanation_en: 'The AAA condition is used to determine triangle similarity.',
    difficulty: 'easy'
  },
  {
    id: 'cs-obj-5',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '두 닮은 도형의 대응하는 변의 비가 1:3일 때, 둘레의 비는?',
    question_en: 'If the ratio of corresponding sides of two similar figures is 1:3, what is the ratio of their perimeters?',
    options: ['1:3', '1:6', '1:9', '1:27'],
    options_en: ['1:3', '1:6', '1:9', '1:27'],
    correctAnswer: 0,
    explanation: '닮은 도형에서 둘레의 비는 대응하는 변의 비와 같습니다.',
    explanation_en: 'In similar figures, the ratio of perimeters equals the ratio of corresponding sides.',
    difficulty: 'easy'
  }
];

// 나머지 65개 객관식 문제 생성
for (let i = 6; i <= 70; i++) {
  const ratios = [
    { a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }, { a: 1, b: 3 }, 
    { a: 2, b: 5 }, { a: 3, b: 5 }, { a: 4, b: 5 }
  ];
  const ratio = ratios[(i - 6) % ratios.length];
  const type = i % 4; // 0: 넓이비, 1: 부피비, 2: 둘레비, 3: 합동조건
  
  if (type === 0) {
    congruenceSimilarityObjectiveQuestions.push({
      id: `cs-obj-${i}`,
      topic: '합동과 닮음',
      topicId: 'congruence-similarity',
      question: `두 삼각형의 닮음비가 ${ratio.a}:${ratio.b}일 때, 넓이의 비는?`,
      question_en: `If the similarity ratio of two triangles is ${ratio.a}:${ratio.b}, what is the ratio of their areas?`,
      options: [
        `${ratio.a}:${ratio.b}`,
        `${ratio.a * 2}:${ratio.b * 2}`,
        `${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
        `${ratio.a * ratio.a * ratio.a}:${ratio.b * ratio.b * ratio.b}`
      ],
      options_en: [
        `${ratio.a}:${ratio.b}`,
        `${ratio.a * 2}:${ratio.b * 2}`,
        `${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
        `${ratio.a * ratio.a * ratio.a}:${ratio.b * ratio.b * ratio.b}`
      ],
      correctAnswer: 2,
      explanation: `닮음비가 ${ratio.a}:${ratio.b}일 때, 넓이의 비는 ${ratio.a}²:${ratio.b}² = ${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
      explanation_en: `When the similarity ratio is ${ratio.a}:${ratio.b}, the area ratio is ${ratio.a}²:${ratio.b}² = ${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
      difficulty: i < 30 ? 'easy' : i < 55 ? 'medium' : 'hard'
    });
  } else if (type === 1) {
    congruenceSimilarityObjectiveQuestions.push({
      id: `cs-obj-${i}`,
      topic: '합동과 닮음',
      topicId: 'congruence-similarity',
      question: `두 입체도형의 닮음비가 ${ratio.a}:${ratio.b}일 때, 부피의 비는?`,
      question_en: `If the similarity ratio of two solid figures is ${ratio.a}:${ratio.b}, what is the ratio of their volumes?`,
      options: [
        `${ratio.a}:${ratio.b}`,
        `${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
        `${ratio.a * ratio.a * ratio.a}:${ratio.b * ratio.b * ratio.b}`,
        `${ratio.a * 3}:${ratio.b * 3}`
      ],
      options_en: [
        `${ratio.a}:${ratio.b}`,
        `${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
        `${ratio.a * ratio.a * ratio.a}:${ratio.b * ratio.b * ratio.b}`,
        `${ratio.a * 3}:${ratio.b * 3}`
      ],
      correctAnswer: 2,
      explanation: `닮음비가 ${ratio.a}:${ratio.b}일 때, 부피의 비는 ${ratio.a}³:${ratio.b}³ = ${ratio.a * ratio.a * ratio.a}:${ratio.b * ratio.b * ratio.b}`,
      explanation_en: `When the similarity ratio is ${ratio.a}:${ratio.b}, the volume ratio is ${ratio.a}³:${ratio.b}³ = ${ratio.a * ratio.a * ratio.a}:${ratio.b * ratio.b * ratio.b}`,
      difficulty: i < 30 ? 'easy' : i < 55 ? 'medium' : 'hard'
    });
  } else if (type === 2) {
    congruenceSimilarityObjectiveQuestions.push({
      id: `cs-obj-${i}`,
      topic: '합동과 닮음',
      topicId: 'congruence-similarity',
      question: `두 닮은 도형의 대응하는 변의 비가 ${ratio.a}:${ratio.b}일 때, 둘레의 비는?`,
      question_en: `If the ratio of corresponding sides of two similar figures is ${ratio.a}:${ratio.b}, what is the ratio of their perimeters?`,
      options: [
        `${ratio.a}:${ratio.b}`,
        `${ratio.a * 2}:${ratio.b * 2}`,
        `${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
        `${ratio.a + 1}:${ratio.b + 1}`
      ],
      options_en: [
        `${ratio.a}:${ratio.b}`,
        `${ratio.a * 2}:${ratio.b * 2}`,
        `${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
        `${ratio.a + 1}:${ratio.b + 1}`
      ],
      correctAnswer: 0,
      explanation: `닮은 도형에서 둘레의 비는 대응하는 변의 비와 같으므로 ${ratio.a}:${ratio.b}`,
      explanation_en: `In similar figures, the perimeter ratio equals the side ratio: ${ratio.a}:${ratio.b}`,
      difficulty: i < 30 ? 'easy' : i < 55 ? 'medium' : 'hard'
    });
  } else {
    const conditions = ['SSS', 'SAS', 'ASA', 'SSA', 'AAA', 'RHS'];
    const validConditions = ['SSS', 'SAS', 'ASA'];
    const condition = conditions[(i - 6) % conditions.length];
    
    congruenceSimilarityObjectiveQuestions.push({
      id: `cs-obj-${i}`,
      topic: '합동과 닮음',
      topicId: 'congruence-similarity',
      question: `${condition} 조건은 삼각형의 합동을 판정할 수 있는가?`,
      question_en: `Can the ${condition} condition be used to determine triangle congruence?`,
      options: ['예', '아니오', '경우에 따라', '알 수 없음'],
      options_en: ['Yes', 'No', 'Sometimes', 'Unknown'],
      correctAnswer: validConditions.includes(condition) ? 0 : 1,
      explanation: validConditions.includes(condition) 
        ? `${condition}는 삼각형의 합동 조건입니다.`
        : `${condition}는 삼각형의 합동 조건이 아닙니다.`,
      explanation_en: validConditions.includes(condition)
        ? `${condition} is a valid condition for triangle congruence.`
        : `${condition} is not a valid condition for triangle congruence.`,
      difficulty: i < 30 ? 'easy' : i < 55 ? 'medium' : 'hard'
    });
  }
}

// 합동과 닮음 주관식 문제 (30개)
export const congruenceSimilaritySubjectiveQuestions: SubjectiveQuestion[] = [
  {
    id: 'cs-sub-1',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '두 삼각형의 닮음비가 2:3일 때, 넓이의 비를 구하시오.',
    question_en: 'If the similarity ratio of two triangles is 2:3, find the ratio of their areas.',
    correctAnswer: '4:9',
    correctAnswer_en: '4:9',
    explanation: '닮음비가 2:3일 때, 넓이의 비는 2²:3² = 4:9',
    explanation_en: 'When the similarity ratio is 2:3, the area ratio is 2²:3² = 4:9',
    difficulty: 'easy',
    answerType: 'expression',
    alternativeAnswers: ['4 : 9', '4/9'],
    alternativeAnswers_en: ['4 : 9', '4/9']
  },
  {
    id: 'cs-sub-2',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '닮음비가 3:5인 두 삼각형에서 작은 삼각형의 넓이가 18㎠일 때, 큰 삼각형의 넓이를 구하시오.',
    question_en: 'If two triangles have a similarity ratio of 3:5 and the smaller triangle has an area of 18 cm², find the area of the larger triangle.',
    correctAnswer: '50',
    correctAnswer_en: '50',
    explanation: '넓이의 비는 9:25이므로 18 × (25/9) = 50㎠',
    explanation_en: 'The area ratio is 9:25, so 18 × (25/9) = 50 cm²',
    difficulty: 'medium',
    answerType: 'number',
    unit: '㎠',
    unit_en: 'cm²',
    alternativeAnswers: ['50㎠', '50 ㎠'],
    alternativeAnswers_en: ['50 cm²', '50cm²']
  },
  {
    id: 'cs-sub-3',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '두 입체도형의 닮음비가 1:4일 때, 부피의 비를 구하시오.',
    question_en: 'If the similarity ratio of two solid figures is 1:4, find the ratio of their volumes.',
    correctAnswer: '1:64',
    correctAnswer_en: '1:64',
    explanation: '닮음비가 1:4일 때, 부피의 비는 1³:4³ = 1:64',
    explanation_en: 'When the similarity ratio is 1:4, the volume ratio is 1³:4³ = 1:64',
    difficulty: 'medium',
    answerType: 'expression',
    alternativeAnswers: ['1 : 64', '1/64'],
    alternativeAnswers_en: ['1 : 64', '1/64']
  },
  {
    id: 'cs-sub-4',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '닮음비가 2:7인 두 원에서 작은 원의 넓이가 12π㎠일 때, 큰 원의 넓이를 구하시오.',
    question_en: 'If two circles have a similarity ratio of 2:7 and the smaller circle has an area of 12π cm², find the area of the larger circle.',
    correctAnswer: '147π',
    correctAnswer_en: '147π',
    explanation: '넓이의 비는 4:49이므로 12π × (49/4) = 147π㎠',
    explanation_en: 'The area ratio is 4:49, so 12π × (49/4) = 147π cm²',
    difficulty: 'hard',
    answerType: 'expression',
    unit: '㎠',
    unit_en: 'cm²',
    alternativeAnswers: ['147π㎠', '147π ㎠'],
    alternativeAnswers_en: ['147π cm²', '147πcm²']
  },
  {
    id: 'cs-sub-5',
    topic: '합동과 닮음',
    topicId: 'congruence-similarity',
    question: '두 정육면체의 모서리의 비가 3:8일 때, 부피의 비를 구하시오.',
    question_en: 'If the edge ratio of two cubes is 3:8, find the ratio of their volumes.',
    correctAnswer: '27:512',
    correctAnswer_en: '27:512',
    explanation: '닮음비가 3:8일 때, 부피의 비는 3³:8³ = 27:512',
    explanation_en: 'When the similarity ratio is 3:8, the volume ratio is 3³:8³ = 27:512',
    difficulty: 'medium',
    answerType: 'expression',
    alternativeAnswers: ['27 : 512', '27/512'],
    alternativeAnswers_en: ['27 : 512', '27/512']
  }
];

// 나머지 25개 주관식 문제 생성
for (let i = 6; i <= 30; i++) {
  const ratios = [
    { a: 1, b: 3 }, { a: 2, b: 5 }, { a: 3, b: 7 }, { a: 4, b: 9 }, { a: 1, b: 4 }
  ];
  const ratio = ratios[(i - 6) % ratios.length];
  const type = i % 3; // 0: 넓이비, 1: 부피비, 2: 둘레비
  
  if (type === 0) {
    congruenceSimilaritySubjectiveQuestions.push({
      id: `cs-sub-${i}`,
      topic: '합동과 닮음',
      topicId: 'congruence-similarity',
      question: `두 삼각형의 닮음비가 ${ratio.a}:${ratio.b}일 때, 넓이의 비를 구하시오.`,
      question_en: `If the similarity ratio of two triangles is ${ratio.a}:${ratio.b}, find the ratio of their areas.`,
      correctAnswer: `${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
      correctAnswer_en: `${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
      explanation: `닮음비가 ${ratio.a}:${ratio.b}일 때, 넓이의 비는 ${ratio.a}²:${ratio.b}² = ${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
      explanation_en: `When the similarity ratio is ${ratio.a}:${ratio.b}, the area ratio is ${ratio.a}²:${ratio.b}² = ${ratio.a * ratio.a}:${ratio.b * ratio.b}`,
      difficulty: i < 15 ? 'easy' : i < 25 ? 'medium' : 'hard',
      answerType: 'expression',
      alternativeAnswers: [`${ratio.a * ratio.a} : ${ratio.b * ratio.b}`, `${ratio.a * ratio.a}/${ratio.b * ratio.b}`],
      alternativeAnswers_en: [`${ratio.a * ratio.a} : ${ratio.b * ratio.b}`, `${ratio.a * ratio.a}/${ratio.b * ratio.b}`]
    });
  } else if (type === 1) {
    congruenceSimilaritySubjectiveQuestions.push({
      id: `cs-sub-${i}`,
      topic: '합동과 닮음',
      topicId: 'congruence-similarity',
      question: `두 입체도형의 닮음비가 ${ratio.a}:${ratio.b}일 때, 부피의 비를 구하시오.`,
      question_en: `If the similarity ratio of two solid figures is ${ratio.a}:${ratio.b}, find the ratio of their volumes.`,
      correctAnswer: `${ratio.a ** 3}:${ratio.b ** 3}`,
      correctAnswer_en: `${ratio.a ** 3}:${ratio.b ** 3}`,
      explanation: `닮음비가 ${ratio.a}:${ratio.b}일 때, 부피의 비는 ${ratio.a}³:${ratio.b}³ = ${ratio.a ** 3}:${ratio.b ** 3}`,
      explanation_en: `When the similarity ratio is ${ratio.a}:${ratio.b}, the volume ratio is ${ratio.a}³:${ratio.b}³ = ${ratio.a ** 3}:${ratio.b ** 3}`,
      difficulty: i < 15 ? 'easy' : i < 25 ? 'medium' : 'hard',
      answerType: 'expression',
      alternativeAnswers: [`${ratio.a ** 3} : ${ratio.b ** 3}`, `${ratio.a ** 3}/${ratio.b ** 3}`],
      alternativeAnswers_en: [`${ratio.a ** 3} : ${ratio.b ** 3}`, `${ratio.a ** 3}/${ratio.b ** 3}`]
    });
  } else {
    congruenceSimilaritySubjectiveQuestions.push({
      id: `cs-sub-${i}`,
      topic: '합동과 닮음',
      topicId: 'congruence-similarity',
      question: `두 닮은 도형의 대응하는 변의 비가 ${ratio.a}:${ratio.b}일 때, 둘레의 비를 구하시오.`,
      question_en: `If the ratio of corresponding sides of two similar figures is ${ratio.a}:${ratio.b}, find the ratio of their perimeters.`,
      correctAnswer: `${ratio.a}:${ratio.b}`,
      correctAnswer_en: `${ratio.a}:${ratio.b}`,
      explanation: `닮은 도형에서 둘레의 비는 대응하는 변의 비와 같으므로 ${ratio.a}:${ratio.b}`,
      explanation_en: `In similar figures, the perimeter ratio equals the side ratio: ${ratio.a}:${ratio.b}`,
      difficulty: i < 15 ? 'easy' : i < 25 ? 'medium' : 'hard',
      answerType: 'expression',
      alternativeAnswers: [`${ratio.a} : ${ratio.b}`, `${ratio.a}/${ratio.b}`],
      alternativeAnswers_en: [`${ratio.a} : ${ratio.b}`, `${ratio.a}/${ratio.b}`]
    });
  }
} 