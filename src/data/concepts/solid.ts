import { ConceptContent } from '../types';

export const solidConcepts: ConceptContent[] = [
  {
    id: 'solid-geometry-understanding',
    title: '입체도형의 이해',
    title_en: 'Understanding Solid Geometry',
    description: '다양한 입체도형의 구성 요소와 성질을 학습합니다.',
    description_en: 'Learn the components and properties of various solid figures.',
    explanation: `입체도형의 기본 개념을 이해합니다:

1. 입체도형의 구성 요소
- 면: 입체도형을 이루는 평면
- 모서리: 두 면이 만나는 선분
- 꼭짓점: 세 개 이상의 모서리가 만나는 점
- 밑면: 입체도형의 아래쪽 면
- 옆면: 밑면이 아닌 면

2. 주요 입체도형의 종류
각기둥과 각뿔:
- 각기둥: 두 개의 평행한 다각형과 직사각형들로 이루어진 도형
- 각뿔: 다각형 밑면과 삼각형 옆면들로 이루어진 도형

원기둥과 원뿔:
- 원기둥: 두 개의 평행한 원과 곡면으로 이루어진 도형
- 원뿔: 원형 밑면과 곡면으로 이루어진 도형

구:
- 한 점에서 같은 거리에 있는 점들의 집합
- 중심과 반지름으로 결정됨

3. 입체도형의 성질
- 오일러의 정리: V(꼭짓점 수) - E(모서리 수) + F(면의 수) = 2
- 정다면체는 5종류만 존재
- 대칭성과 회전체 성질
- 평행과 수직 관계`,
    explanation_en: `Understand the basic concepts of solid geometry:

1. Components of Solid Figures
- Face: A flat surface that forms part of a solid figure
- Edge: A line segment where two faces meet
- Vertex: A point where three or more edges meet
- Base: The bottom face of a solid figure
- Lateral face: A face that is not a base

2. Types of Major Solid Figures
Prisms and Pyramids:
- Prism: A figure composed of two parallel polygons and rectangles
- Pyramid: A figure composed of a polygonal base and triangular lateral faces

Cylinders and Cones:
- Cylinder: A figure composed of two parallel circles and a curved surface
- Cone: A figure composed of a circular base and a curved surface

Sphere:
- A set of points at the same distance from a center point
- Determined by center and radius

3. Properties of Solid Figures
- Euler's formula: V(vertices) - E(edges) + F(faces) = 2
- Only 5 types of regular polyhedra exist
- Symmetry and rotational solid properties
- Parallel and perpendicular relationships`,
    examples: [
      {
        problem: '한 모서리의 길이가 4cm인 정육면체의 꼭짓점, 모서리, 면의 개수를 구하시오.',
        problem_en: 'Find the number of vertices, edges, and faces of a cube with edge length 4cm.',
        solution: '꼭짓점 8개, 모서리 12개, 면 6개',
        explanation: `1. 정육면체는 6개의 정사각형으로 이루어져 있습니다.
2. 각 꼭짓점에서 3개의 모서리가 만납니다.
3. 각 모서리는 2개의 면이 만나는 선분입니다.
4. 오일러의 정리로 확인: 8 - 12 + 6 = 2`,
        explanation_en: `1. A cube consists of 6 squares.
2. Three edges meet at each vertex.
3. Each edge is where two faces meet.
4. Check with Euler's formula: 8 - 12 + 6 = 2`
      }
    ],
    visualAids: [
      {
        type: 'image' as const,
        url: '/images/solid-geometry-basics.png',
        description: '다양한 입체도형의 구성 요소를 보여주는 도형',
        description_en: 'Diagrams showing components of various solid figures'
      }
    ],
    keyPoints: [
      '입체도형은 면, 모서리, 꼭짓점으로 구성됩니다.',
      '오일러의 정리는 모든 다면체에 성립합니다.',
      '회전체는 평면도형을 회전시켜 만들 수 있습니다.',
      '대칭성은 입체도형의 중요한 성질입니다.'
    ],
    keyPoints_en: [
      'Solid figures are composed of faces, edges, and vertices.',
      'Euler\'s formula applies to all polyhedra.',
      'Solids of revolution can be formed by rotating plane figures.',
      'Symmetry is an important property of solid figures.'
    ],
    commonMistakes: [
      '면, 모서리, 꼭짓점의 개수를 잘못 세는 실수',
      '회전체의 모양을 잘못 예측하는 실수',
      '평행과 수직 관계를 잘못 파악하는 실수'
    ],
    commonMistakes_en: [
      'Incorrectly counting faces, edges, and vertices',
      'Incorrectly predicting the shape of solids of revolution',
      'Incorrectly identifying parallel and perpendicular relationships'
    ],
    additionalResources: [
      {
        title: '입체도형의 기본 개념',
        title_en: 'Basic Concepts of Solid Geometry',
        url: 'https://en.wikipedia.org/wiki/Solid_geometry',
        type: 'article' as const
      }
    ]
  },
  {
    id: 'solid-geometry-applications',
    title: '입체도형의 활용',
    title_en: 'Applications of Solid Geometry',
    description: '입체도형의 부피와 겉넓이 계산, 실생활 문제 해결을 학습합니다.',
    description_en: 'Learn to calculate volume and surface area of solid figures and solve real-life problems.',
    explanation: `입체도형의 측정과 응용을 학습합니다:

1. 부피 구하기
각기둥과 원기둥:
- 부피 = 밑면의 넓이 × 높이

각뿔과 원뿔:
- 부피 = (밑면의 넓이 × 높이) ÷ 3

구:
- 부피 = (4/3)πr³ (r은 반지름)

2. 겉넓이 구하기
각기둥:
- 겉넓이 = 2 × 밑면의 넓이 + 옆면의 넓이
- 옆면의 넓이 = 밑면의 둘레 × 높이

원기둥:
- 겉넓이 = 2πr² + 2πrh (r은 반지름, h는 높이)

구:
- 겉넓이 = 4πr² (r은 반지름)

3. 실생활 응용
- 건축과 공학 설계
- 용기와 포장 디자인
- 저장 공간 계산
- 재료 사용량 계산`,
    explanation_en: `Learn measurement and applications of solid figures:

1. Finding Volume
Prisms and Cylinders:
- Volume = Base area × Height

Pyramids and Cones:
- Volume = (Base area × Height) ÷ 3

Sphere:
- Volume = (4/3)πr³ (r is radius)

2. Finding Surface Area
Prisms:
- Surface area = 2 × Base area + Lateral area
- Lateral area = Base perimeter × Height

Cylinder:
- Surface area = 2πr² + 2πrh (r is radius, h is height)

Sphere:
- Surface area = 4πr² (r is radius)

3. Real-life Applications
- Architecture and engineering design
- Container and packaging design
- Storage space calculation
- Material usage calculation`,
    examples: [
      {
        problem: '반지름이 3cm, 높이가 8cm인 원기둥의 부피와 겉넓이를 구하시오. (π = 3.14)',
        problem_en: 'Find the volume and surface area of a cylinder with radius 3cm and height 8cm. (π = 3.14)',
        solution: '부피 ≈ 226.08㎤, 겉넓이 ≈ 207.24㎠',
        explanation: `1. 부피 계산:
   - 부피 = πr²h
   - 부피 = 3.14 × 3² × 8
   - 부피 = 226.08㎤

2. 겉넓이 계산:
   - 겉넓이 = 2πr² + 2πrh
   - 겉넓이 = 2 × 3.14 × 3² + 2 × 3.14 × 3 × 8
   - 겉넓이 = 56.52 + 150.72
   - 겉넓이 = 207.24㎠`,
        explanation_en: `1. Volume calculation:
   - Volume = πr²h
   - Volume = 3.14 × 3² × 8
   - Volume = 226.08 cm³

2. Surface area calculation:
   - Surface area = 2πr² + 2πrh
   - Surface area = 2 × 3.14 × 3² + 2 × 3.14 × 3 × 8
   - Surface area = 56.52 + 150.72
   - Surface area = 207.24 cm²`
      }
    ],
    visualAids: [
      {
        type: 'interactive' as const,
        url: '/interactive/solid-geometry-measurements',
        description: '입체도형의 부피와 겉넓이를 계산하는 인터랙티브 시뮬레이션',
        description_en: 'Interactive simulation for calculating volume and surface area of solid figures'
      }
    ],
    keyPoints: [
      '부피는 공간을 채우는 양을 나타냅니다.',
      '겉넓이는 표면의 크기를 나타냅니다.',
      '단위 변환에 주의해야 합니다.',
      '복잡한 도형은 여러 개의 기본 도형으로 분해할 수 있습니다.'
    ],
    keyPoints_en: [
      'Volume represents the amount of space filled.',
      'Surface area represents the size of the surface.',
      'Pay attention to unit conversions.',
      'Complex figures can be decomposed into several basic figures.'
    ],
    commonMistakes: [
      '부피와 겉넓이의 단위를 혼동하는 실수',
      '원주율(π) 값을 잘못 사용하는 실수',
      '높이와 반지름을 혼동하는 실수'
    ],
    commonMistakes_en: [
      'Confusing units for volume and surface area',
      'Incorrectly using the value of π',
      'Confusing height and radius'
    ],
    additionalResources: [
      {
        title: '입체도형의 측정',
        title_en: 'Measurement of Solid Figures',
        url: 'https://study.com/learn/lesson/solid-figures-properties-examples.html',
        type: 'article' as const
      },
      {
        title: '입체도형의 측정',
        title_en: 'Solid Geometry Measurement Formulas',
        url: 'https://www.numberanalytics.com/blog/mastering-solid-geometry-measurement-formulas',
        type: 'article' as const
      }
    ]
  }
]; 