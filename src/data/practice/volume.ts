import { Practice } from '../types';

export const volumePractice: Practice = {
  id: 'solid-geometry-practice',
  topicId: 'volume-surface-area',
  chapterNumber: 11,
  title: '입체도형 연습 문제',
  problems: [
    {
      id: 'p11-1',
      question: '밑면의 반지름이 5cm이고 높이가 12cm인 원기둥의 부피를 구하시오.',
      answer: '약 942.48cm³',
      explanation: '원기둥의 부피 = πr²h\n= π × 5² × 12\n≈ 942.48',
      difficulty: 'basic',
      hints: [
        '원기둥의 부피 공식을 사용하세요',
        '밑면의 넓이를 먼저 구합니다',
        '밑면의 넓이에 높이를 곱합니다'
      ]
    },
    {
      id: 'p11-2',
      question: '한 변의 길이가 4cm인 정육면체를 물에 넣었을 때, 수면이 몇 cm 올라갈까? (수조의 밑면 넓이는 24cm²이다)',
      answer: '약 2.67cm',
      explanation: '정육면체의 부피 = 4³ = 64cm³\n높이 변화 = 부피/수조 밑면적\n= 64/24 ≈ 2.67',
      difficulty: 'advanced',
      hints: [
        '정육면체의 부피를 먼저 구하세요',
        '물의 부피 변화는 정육면체의 부피와 같습니다',
        '부피 = 밑면적 × 높이 공식을 변형해보세요'
      ]
    },
    {
      id: 'p11-3',
      question: '반지름이 3cm인 구의 겉넓이와 부피를 구하시오.',
      answer: '겉넓이: 113.10cm², 부피: 113.10cm³',
      explanation: '구의 겉넓이 = 4πr² = 4π × 3² ≈ 113.10cm²\n구의 부피 = (4/3)πr³ = (4/3)π × 3³ ≈ 113.10cm³',
      difficulty: 'basic',
      hints: [
        '구의 겉넓이 공식: 4πr²',
        '구의 부피 공식: (4/3)πr³',
        'π는 3.14159로 계산하세요'
      ]
    },
    {
      id: 'p11-4',
      question: '밑면이 한 변 6cm인 정사각형이고 높이가 8cm인 각기둥의 겉넓이를 구하시오.',
      answer: '336cm²',
      explanation: '윗면과 아랫면의 넓이 = 6 × 6 × 2 = 72cm²\n옆면의 넓이 = 6 × 8 × 4 = 192cm²\n전체 겉넓이 = 336cm²',
      difficulty: 'intermediate',
      hints: [
        '윗면과 아랫면은 같은 크기의 정사각형입니다',
        '옆면은 모두 같은 크기의 직사각형입니다',
        '전체 겉넓이는 모든 면의 넓이의 합입니다'
      ]
    },
    {
      id: 'p11-5',
      question: '밑면의 반지름이 4cm이고 높이가 9cm인 원뿔의 부피를 구하시오.',
      answer: '약 150.80cm³',
      explanation: '원뿔의 부피 = (1/3)πr²h\n= (1/3) × π × 4² × 9\n≈ 150.80',
      difficulty: 'intermediate',
      hints: [
        '원뿔의 부피는 같은 밑면과 높이를 가진 원기둥 부피의 1/3입니다',
        '원뿔의 부피 공식: (1/3)πr²h',
        '계산 순서: 반지름의 제곱 → π 곱하기 → 높이 곱하기 → 3으로 나누기'
      ]
    },
    {
      id: 'p11-6',
      question: '반지름이 5cm인 반구의 겉넓이를 구하시오. (곡면과 밑면을 모두 포함)',
      answer: '235.62cm²',
      explanation: '반구의 곡면 넓이 = 2πr² = 157.08cm²\n밑면 넓이 = πr² = 78.54cm²\n전체 겉넓이 = 235.62cm²',
      difficulty: 'intermediate',
      hints: [
        '반구의 곡면 넓이는 구의 겉넓이의 절반입니다',
        '밑면은 원의 넓이입니다',
        '전체 겉넓이는 곡면과 밑면의 넓이의 합입니다'
      ]
    },
    {
      id: 'p11-7',
      question: '높이가 10cm이고 밑면의 반지름이 3cm인 원기둥을 밑면에 평행하게 자를 때, 잘린 단면의 넓이는 얼마인가?',
      answer: '28.27cm²',
      explanation: '원기둥을 밑면에 평행하게 자르면 단면은 밑면과 같은 크기의 원이 됩니다.\n단면의 넓이 = πr² = π × 3² ≈ 28.27cm²',
      difficulty: 'basic',
      hints: [
        '원기둥의 단면은 원입니다',
        '단면의 반지름은 밑면의 반지름과 같습니다',
        '원의 넓이 공식을 사용하세요'
      ]
    },
    {
      id: 'p11-8',
      question: '정육면체의 대각선의 길이가 6√3cm일 때, 이 정육면체의 부피를 구하시오.',
      answer: '216cm³',
      explanation: '정육면체의 대각선의 길이를 d, 한 변의 길이를 a라 하면\nd = a√3\n6√3 = a√3\na = 6\n부피 = a³ = 216',
      difficulty: 'advanced',
      hints: [
        '정육면체의 대각선과 한 변의 관계를 생각해보세요',
        '대각선의 길이는 한 변의 길이의 √3배입니다',
        '부피는 한 변의 길이의 세제곱입니다'
      ]
    },
    {
      id: 'p11-9',
      question: '밑면의 반지름이 5cm이고 높이가 12cm인 원기둥을 축에 평행한 평면으로 잘랐을 때, 단면이 가장 큰 직사각형이 되도록 하려면 평면은 원기둥의 중심축으로부터 얼마나 떨어져 있어야 하는가?',
      answer: '0cm (중심축을 지나는 평면)',
      explanation: '원기둥을 축에 평행한 평면으로 자르면 직사각형이 됩니다.\n이때 직사각형의 넓이는 높이(12cm)와 현의 길이의 곱입니다.\n현의 길이는 중심축을 지날 때(지름) 최대가 됩니다.',
      difficulty: 'advanced',
      hints: [
        '단면은 직사각형입니다',
        '직사각형의 높이는 원기둥의 높이와 같습니다',
        '직사각형의 밑변은 원의 현의 길이입니다'
      ]
    },
    {
      id: 'p11-10',
      question: '부피가 같은 원기둥과 원뿔이 있다. 원기둥의 높이가 원뿔의 3배일 때, 원기둥의 반지름과 원뿔의 반지름의 비를 구하시오.',
      answer: '1:√3',
      explanation: '원기둥의 부피 = πr₁²h₁, 원뿔의 부피 = (1/3)πr₂²h₂\n부피가 같으므로 πr₁²h₁ = (1/3)πr₂²h₂\nh₁ = 3h₂이므로\nr₁²:r₂² = 1:3\n따라서 r₁:r₂ = 1:√3',
      difficulty: 'advanced',
      hints: [
        '원기둥과 원뿔의 부피 공식을 사용하세요',
        '부피가 같다는 조건을 식으로 나타내세요',
        '높이의 비를 대입하여 반지름의 비를 구하세요'
      ]
    }
  ]
}; 