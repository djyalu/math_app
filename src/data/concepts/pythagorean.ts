import { ConceptContent } from '../types';

export const pythagoreanConcepts: ConceptContent[] = [
  {
    id: 'pythagorean-theorem-understanding',
    title: '피타고라스 정리의 이해',
    title_en: 'Understanding the Pythagorean Theorem',
    description: '피타고라스 정리의 기본 개념, 직각삼각형의 성질, 정리의 증명을 학습합니다.',
    description_en: 'Learn the basic concepts of the Pythagorean theorem, properties of right triangles, and proof of the theorem.',
    explanation: `피타고라스 정리의 기본 개념과 증명을 이해합니다:

1. 기본 개념
- 직각삼각형에서 빗변을 c, 나머지 두 변을 a, b라고 할 때: a² + b² = c²
- 이는 직각삼각형에서만 성립하는 특별한 성질입니다.

2. 직각삼각형의 성질
- 한 각이 90°인 삼각형입니다.
- 빗변은 직각을 마주보는 변이며, 항상 가장 깁니다.
- 두 직각삼각형이 합동이면 대응하는 변의 길이가 같습니다.

3. 정리의 증명
다양한 방법으로 증명이 가능합니다:
- 넓이 비교를 통한 증명: 세 변을 각각 한 변으로 하는 정사각형의 넓이 비교
- 닮음을 이용한 증명: 직각삼각형을 두 개의 작은 직각삼각형으로 분할
- 대수적 증명: 좌표평면 위에서의 거리 계산
- 벡터를 이용한 증명: 내적의 성질 활용`,
    explanation_en: `Understand the basic concepts and proof of the Pythagorean theorem:

1. Basic Concept
- For a right triangle with legs a and b, and hypotenuse c: a² + b² = c²
- This is a special property that only applies to right triangles.

2. Properties of Right Triangles
- A triangle with one 90° angle.
- The hypotenuse is the side opposite the right angle and is always the longest side.
- If two right triangles are congruent, their corresponding sides are equal.

3. Proof of the Theorem
Can be proven in various ways:
- Area comparison proof: Compare areas of squares with each side as one side
- Similar triangles proof: Divide right triangle into two smaller right triangles
- Algebraic proof: Distance calculation on coordinate plane
- Vector proof: Using properties of dot product`,
    examples: [
      {
        problem: '직각삼각형에서 한 변의 길이가 3, 다른 한 변의 길이가 4일 때, 빗변의 길이를 구하시오.',
        problem_en: 'In a right triangle, if one leg has length 3 and the other leg has length 4, find the length of the hypotenuse.',
        solution: '5',
        explanation: 'a² + b² = c²에서 3² + 4² = c², 즉 9 + 16 = c²이므로 c² = 25, 따라서 c = 5',
        explanation_en: 'Using a² + b² = c², we have 3² + 4² = c², so 9 + 16 = c², therefore c² = 25, and c = 5'
      },
      {
        problem: '빗변의 길이가 13이고 한 변의 길이가 5인 직각삼각형에서 나머지 한 변의 길이를 구하시오.',
        problem_en: 'In a right triangle with hypotenuse 13 and one leg of length 5, find the length of the other leg.',
        solution: '12',
        explanation: 'a² + b² = c²에서 5² + b² = 13², 즉 25 + b² = 169이므로 b² = 144, 따라서 b = 12',
        explanation_en: 'Using a² + b² = c², we have 5² + b² = 13², so 25 + b² = 169, therefore b² = 144, and b = 12'
      }
    ],
    keyPoints: [
      '피타고라스 정리는 직각삼각형에서만 성립합니다',
      '빗변은 항상 가장 긴 변입니다',
      'a² + b² = c² 공식을 정확히 기억해야 합니다',
      '역으로, 세 변의 길이가 피타고라스 정리를 만족하면 직각삼각형입니다'
    ],
    keyPoints_en: [
      'The Pythagorean theorem only applies to right triangles',
      'The hypotenuse is always the longest side',
      'Remember the formula a² + b² = c² accurately',
      'Conversely, if three side lengths satisfy the Pythagorean theorem, it forms a right triangle'
    ],
    commonMistakes: [
      '직각이 아닌 삼각형에 피타고라스 정리를 적용하는 실수',
      '빗변을 잘못 찾는 실수 (직각의 대변이 빗변)',
      '제곱근을 구할 때 음수 값을 포함하는 실수',
      '단위를 맞추지 않고 계산하는 실수'
    ],
    commonMistakes_en: [
      'Applying the Pythagorean theorem to non-right triangles',
      'Incorrectly identifying the hypotenuse (it\'s opposite the right angle)',
      'Including negative values when taking square roots',
      'Calculating without matching units'
    ],
    additionalResources: [
      {
        title: '피타고라스 정리 시각적 증명',
        title_en: 'Visual Proof of Pythagorean Theorem',
        url: '#',
        type: 'interactive' as const
      },
      {
        title: '역사 속의 피타고라스',
        title_en: 'Pythagoras in History',
        url: '#',
        type: 'article' as const
      }
    ]
  },
  
  {
    id: 'pythagorean-applications',
    title: '피타고라스 정리의 활용',
    title_en: 'Applications of the Pythagorean Theorem',
    description: '실생활과 수학 문제에서 피타고라스 정리를 활용하는 방법을 배웁니다.',
    description_en: 'Learn how to apply the Pythagorean theorem in real-life situations and mathematical problems.',
    explanation: `피타고라스 정리의 다양한 활용법을 익힙니다:

1. 거리 계산
- 두 점 사이의 직선 거리
- 좌표평면에서의 거리
- 3차원 공간에서의 거리

2. 실생활 활용
- 건축과 설계
- 항해와 지도
- 운동과 게임

3. 고급 활용
- 삼각함수와의 연결
- 벡터의 크기 계산
- 기하학적 증명`,
    explanation_en: `Learn various applications of the Pythagorean theorem:

1. Distance Calculations
- Straight-line distance between two points
- Distance in coordinate plane
- Distance in 3D space

2. Real-life Applications
- Architecture and design
- Navigation and maps
- Sports and games

3. Advanced Applications
- Connection with trigonometric functions
- Vector magnitude calculations
- Geometric proofs`,
    examples: [
      {
        problem: '좌표평면에서 점 A(1, 2)와 점 B(4, 6) 사이의 거리를 구하시오.',
        problem_en: 'Find the distance between points A(1, 2) and B(4, 6) in the coordinate plane.',
        solution: '5',
        explanation: '거리 = √[(4-1)² + (6-2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5',
        explanation_en: 'Distance = √[(4-1)² + (6-2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5'
      }
    ],
    keyPoints: [
      '좌표평면에서 거리 공식: d = √[(x₂-x₁)² + (y₂-y₁)²]',
      '실생활 문제에서 직각삼각형을 찾는 것이 중요',
      '단위 변환에 주의해야 함',
      '근삿값과 정확한 값을 구분해야 함'
    ],
    keyPoints_en: [
      'Distance formula in coordinate plane: d = √[(x₂-x₁)² + (y₂-y₁)²]',
      'Important to identify right triangles in real-life problems',
      'Pay attention to unit conversions',
      'Distinguish between approximate and exact values'
    ],
    commonMistakes: [
      '좌표를 잘못 대입하는 실수',
      '제곱근을 계산할 때 실수',
      '실생활 문제를 수학 문제로 변환하지 못하는 실수',
      '단위를 고려하지 않는 실수'
    ],
    commonMistakes_en: [
      'Incorrectly substituting coordinates',
      'Errors in calculating square roots',
      'Failure to convert real-life problems to mathematical problems',
      'Not considering units'
    ]
  }
]; 