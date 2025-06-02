import { Practice } from '../types';

export const solidPractice: Practice = {
  id: 'solid-practice',
  topicId: 'solid-geometry',
  chapterNumber: 4,
  title: '입체도형 연습 문제',
  problems: [
    // Basic Level Problems
    {
      id: 'sg-p1',
      question: '한 변의 길이가 5cm인 정육면체의 겉넓이를 구하시오.',
      answer: '150㎠',
      explanation: '정육면체의 겉넓이 = 한 변의 길이² × 6\n= 5² × 6 = 25 × 6 = 150',
      difficulty: 'basic',
      hints: ['정육면체의 면은 모두 같은 크기의 정사각형입니다', '면의 개수를 세어보세요']
    },
    {
      id: 'sg-p2',
      question: '밑면의 반지름이 3cm, 높이가 8cm인 원기둥의 부피를 구하시오.',
      answer: '72π㎤',
      explanation: '원기둥의 부피 = 밑면의 넓이 × 높이\n= πr² × h = π × 3² × 8 = 72π',
      difficulty: 'basic',
      hints: ['원기둥의 부피 공식을 떠올려보세요', '밑면의 넓이를 먼저 구하세요']
    },
    {
      id: 'sg-p3',
      question: '한 변의 길이가 4cm인 정육면체의 대각선의 길이를 구하시오.',
      answer: '4√3cm',
      explanation: '정육면체의 대각선의 길이 = a√3 (a는 한 변의 길이)\n= 4√3',
      difficulty: 'basic',
      hints: ['정육면체의 대각선 공식을 사용하세요', '한 변의 길이를 대입하세요']
    },
    {
      id: 'sg-p4',
      question: '밑면의 반지름이 5cm, 높이가 12cm인 원기둥의 겉넓이를 구하시오.',
      answer: '170π㎠',
      explanation: '원기둥의 겉넓이 = 2πr² + 2πrh\n= 2π × 5² + 2π × 5 × 12\n= 50π + 120π = 170π',
      difficulty: 'basic',
      hints: ['원기둥의 겉넓이는 밑면과 옆면의 넓이의 합입니다', '밑면은 2개입니다']
    },
    {
      id: 'sg-p5',
      question: '밑면의 반지름이 6cm, 높이가 8cm인 원뿔의 부피를 구하시오.',
      answer: '96π㎤',
      explanation: '원뿔의 부피 = (1/3) × 밑면의 넓이 × 높이\n= (1/3) × π × 6² × 8 = 96π',
      difficulty: 'basic',
      hints: ['원뿔의 부피는 같은 밑면과 높이를 가진 원기둥 부피의 1/3입니다', '순서대로 계산하세요']
    },

    // Intermediate Level Problems
    {
      id: 'sg-p6',
      question: '반지름이 4cm인 구의 부피를 구하시오.',
      answer: '256π/3㎤',
      explanation: '구의 부피 = (4/3)πr³\n= (4/3)π × 4³\n= (4/3)π × 64 = 256π/3',
      difficulty: 'intermediate',
      hints: ['구의 부피 공식을 사용하세요', '반지름의 세제곱을 계산하세요']
    },
    {
      id: 'sg-p7',
      question: '밑면의 반지름이 5cm, 높이가 12cm인 원뿔의 모선의 길이를 구하시오.',
      answer: '13cm',
      explanation: '모선의 길이² = 반지름² + 높이²\n= 5² + 12² = 25 + 144 = 169\n모선의 길이 = 13',
      difficulty: 'intermediate',
      hints: ['피타고라스 정리를 사용하세요', '반지름과 높이로 직각삼각형을 만드세요']
    },
    {
      id: 'sg-p8',
      question: '한 변의 길이가 6cm인 정육면체를 밑면에 평행한 평면으로 자를 때, 잘린 단면의 모양과 그 넓이를 구하시오.',
      answer: '정사각형, 36㎠',
      explanation: '정육면체를 밑면에 평행하게 자르면 정사각형이 됩니다.\n넓이 = 6² = 36',
      difficulty: 'intermediate',
      hints: ['평행한 평면으로 자르면 어떤 모양이 될까요?', '단면의 한 변의 길이는 원래 정육면체의 한 변의 길이와 같습니다']
    },
    {
      id: 'sg-p9',
      question: '반지름이 3cm인 구의 겉넓이를 구하시오.',
      answer: '36π㎠',
      explanation: '구의 겉넓이 = 4πr²\n= 4π × 3² = 4π × 9 = 36π',
      difficulty: 'intermediate',
      hints: ['구의 겉넓이 공식을 사용하세요', '반지름의 제곱을 계산하세요']
    },
    {
      id: 'sg-p10',
      question: '밑면의 반지름이 4cm, 높이가 3cm인 원기둥의 부피와 겉넓이를 구하시오.',
      answer: '부피: 48π㎤, 겉넓이: 88π㎠',
      explanation: '부피 = πr²h = π × 4² × 3 = 48π\n겉넓이 = 2πr² + 2πrh = 2π × 16 + 2π × 4 × 3 = 32π + 56π = 88π',
      difficulty: 'intermediate',
      hints: ['부피와 겉넓이 공식을 각각 사용하세요', '계산을 순서대로 하세요']
    },

    // Advanced Level Problems
    {
      id: 'sg-p11',
      question: '밑면의 반지름이 5cm, 높이가 12cm인 원뿔의 겉넓이를 구하시오. (모선의 길이는 13cm)',
      answer: '90π㎠',
      explanation: '원뿔의 겉넓이 = πr² + πrs (s는 모선의 길이)\n= π × 5² + π × 5 × 13\n= 25π + 65π = 90π',
      difficulty: 'advanced',
      hints: ['원뿔의 겉넓이는 밑면과 옆면의 넓이의 합입니다', '옆면의 넓이는 πrs입니다']
    },
    {
      id: 'sg-p12',
      question: '한 변의 길이가 4cm인 정육면체를 대각선이 포함된 평면으로 자를 때, 단면의 모양과 넓이를 구하시오.',
      answer: '직사각형, 16√2㎠',
      explanation: '단면은 직사각형이 되고,\n가로 = 4√2cm (대각선)\n세로 = 4cm\n넓이 = 4√2 × 4 = 16√2',
      difficulty: 'advanced',
      hints: ['대각선이 포함된 평면으로 자르면 어떤 모양이 될까요?', '대각선의 길이를 구하세요']
    },
    {
      id: 'sg-p13',
      question: '밑면의 반지름이 3cm인 원기둥이 있다. 이 원기둥의 부피가 54π㎤일 때, 높이를 구하시오.',
      answer: '6cm',
      explanation: '54π = πr²h\n54π = π × 9 × h\nh = 6',
      difficulty: 'advanced',
      hints: ['원기둥의 부피 공식을 사용하세요', '방정식을 세워 높이를 구하세요']
    },
    {
      id: 'sg-p14',
      question: '반지름이 r인 구의 부피와 겉넓이의 비를 구하시오.',
      answer: 'r:3',
      explanation: '부피 = (4/3)πr³\n겉넓이 = 4πr²\n부피:겉넓이 = (4/3)πr³:4πr² = r:3',
      difficulty: 'advanced',
      hints: ['구의 부피와 겉넓이 공식을 사용하세요', '비를 가장 간단한 형태로 나타내세요']
    },
    {
      id: 'sg-p15',
      question: '밑면의 반지름이 4cm인 원기둥과 원뿔의 높이가 모두 9cm일 때, 원기둥과 원뿔의 부피의 비를 구하시오.',
      answer: '3:1',
      explanation: '원기둥의 부피 = πr²h = 144π\n원뿔의 부피 = (1/3)πr²h = 48π\n144π:48π = 3:1',
      difficulty: 'advanced',
      hints: ['각각의 부피 공식을 사용하세요', '비를 가장 간단한 정수비로 나타내세요']
    },
    {
      id: 'sg-p16',
      question: '한 변의 길이가 a인 정육면체의 대각선과 모서리가 이루는 각을 θ라 할 때, cos θ의 값을 구하시오.',
      answer: '1/√3',
      explanation: '대각선의 길이는 a√3\n코사인은 인접변/빗변\ncos θ = a/(a√3) = 1/√3',
      difficulty: 'advanced',
      hints: ['대각선의 길이 공식을 사용하세요', '코사인 정의를 적용하세요']
    },
    {
      id: 'sg-p17',
      question: '밑면의 반지름이 5cm, 높이가 12cm인 원뿔을 밑면에 평행하게 높이의 1/3 지점에서 잘랐을 때, 단면의 반지름을 구하시오.',
      answer: '3.33cm',
      explanation: '닮음비는 4:6 = 2:3\n단면의 반지름:밑면의 반지름 = 2:3\n5 × (2/3) ≈ 3.33',
      difficulty: 'advanced',
      hints: ['평행한 단면은 원입니다', '닮음비를 이용하세요']
    },
    {
      id: 'sg-p18',
      question: '반지름이 3cm인 구를 중심을 지나는 평면으로 잘랐을 때, 단면의 넓이를 구하시오.',
      answer: '9π㎠',
      explanation: '중심을 지나는 평면으로 자르면 최대 원이 됩니다.\n원의 넓이 = πr² = π × 3² = 9π',
      difficulty: 'advanced',
      hints: ['중심을 지나는 단면은 어떤 모양일까요?', '단면의 반지름은 구의 반지름과 같습니다']
    },
    {
      id: 'sg-p19',
      question: '밑면의 반지름이 6cm인 원기둥의 겉넓이가 216π㎠일 때, 이 원기둥의 높이를 구하시오.',
      answer: '9cm',
      explanation: '216π = 2πr² + 2πrh\n216π = 2π × 36 + 2π × 6h\n216π = 72π + 12πh\n144π = 12πh\nh = 9',
      difficulty: 'advanced',
      hints: ['원기둥의 겉넓이 공식을 사용하세요', '방정식을 세워 높이를 구하세요']
    },
    {
      id: 'sg-p20',
      question: '반지름이 r인 구의 내부에 밑면의 반지름이 r/2인 원기둥을 넣으려고 한다. 이때 원기둥의 최대 높이를 구하시오.',
      answer: '2r',
      explanation: '원기둥의 대각선이 구의 지름과 같아야 합니다.\n2r = √((r)² + h²)\n4r² = r² + h²\nh = 2r',
      difficulty: 'advanced',
      hints: [
        '원기둥이 구 안에 들어가려면 어떤 조건이 필요할까요?',
        '피타고라스 정리를 사용하세요',
        '방정식을 풀어 높이를 구하세요'
      ]
    }
  ]
}; 