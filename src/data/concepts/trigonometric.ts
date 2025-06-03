import { ConceptContent } from '../types';

export const trigonometricConcepts: ConceptContent[] = [
  {
    id: 'trigonometric-ratios-understanding',
    title: '삼각비의 이해',
    title_en: 'Understanding Trigonometric Ratios',
    description: '직각삼각형에서의 삼각비(사인, 코사인, 탄젠트)의 개념과 정의를 학습합니다.',
    description_en: 'Learn the concepts and definitions of trigonometric ratios (sine, cosine, tangent) in right triangles.',
    explanation: `삼각비의 기본 개념을 이해합니다:

1. 삼각비의 정의
- 직각삼각형에서 한 예각에 대하여:
  • sin θ = 대변/빗변
  • cos θ = 인접변/빗변
  • tan θ = 대변/인접변 = sin θ/cos θ

2. 삼각비의 성질
- 각의 크기가 같으면 삼각비도 같습니다.
- 0° < θ < 90° 에서 정의됩니다.
- sin θ와 cos θ는 1보다 작거나 같습니다.
- 삼각비는 비율이므로 단위가 없습니다.

3. 특수각의 삼각비
30°, 45°, 60°의 삼각비는 자주 사용되므로 외워두면 좋습니다:
- 30°: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3
- 45°: sin 45° = cos 45° = 1/√2, tan 45° = 1
- 60°: sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3`,
    explanation_en: `Understand the basic concepts of trigonometric ratios:

1. Definition of Trigonometric Ratios
- For an acute angle in a right triangle:
  • sin θ = opposite side/hypotenuse
  • cos θ = adjacent side/hypotenuse
  • tan θ = opposite side/adjacent side = sin θ/cos θ

2. Properties of Trigonometric Ratios
- If angles are equal, their trigonometric ratios are equal.
- Defined for 0° < θ < 90°.
- sin θ and cos θ are less than or equal to 1.
- Trigonometric ratios are dimensionless as they are ratios.

3. Special Angle Trigonometric Ratios
It's useful to memorize the ratios for 30°, 45°, 60° as they are frequently used:
- 30°: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3
- 45°: sin 45° = cos 45° = 1/√2, tan 45° = 1
- 60°: sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3`,
    examples: [
      {
        problem: '직각삼각형에서 sin 30°의 값을 구하시오.',
        problem_en: 'Find the value of sin 30° in a right triangle.',
        solution: '1/2',
        explanation: `1. 30-60-90 삼각형을 그립니다.
2. 빗변이 2일 때, 대변은 1입니다.
3. sin 30° = 대변/빗변 = 1/2`,
        explanation_en: `1. Draw a 30-60-90 triangle.
2. When the hypotenuse is 2, the opposite side is 1.
3. sin 30° = opposite/hypotenuse = 1/2`
      }
    ],
    visualAids: [
      {
        type: 'iframe' as const,
        url: 'https://www.geogebra.org/material/iframe/id/YbmsjW6j/width/779/height/404/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/true/sdz/true/ctl/false',
        description: '삼각비의 정의 시각화 (GeoGebra)',
        description_en: 'Trigonometric Ratios Definition (GeoGebra)',
        width: '779px',
        height: '404px'
      }
    ],
    keyPoints: [
      '삼각비는 직각삼각형에서만 정의됩니다.',
      '각의 크기가 같으면 삼각비도 같습니다.',
      '특수각의 삼각비는 암기가 필요합니다.',
      '삼각비는 비율이므로 단위가 없습니다.'
    ],
    keyPoints_en: [
      'Trigonometric ratios are only defined in right triangles.',
      'Equal angles have equal trigonometric ratios.',
      'Special angle ratios need to be memorized.',
      'Trigonometric ratios are dimensionless as they are ratios.'
    ],
    commonMistakes: [
      '대변과 인접변을 혼동하는 실수',
      '분자와 분모를 바꾸어 쓰는 실수',
      '특수각의 삼각비 값을 잘못 암기하는 실수'
    ],
    commonMistakes_en: [
      'Confusing opposite and adjacent sides',
      'Switching numerator and denominator',
      'Incorrectly memorizing special angle ratio values'
    ],
    additionalResources: [
      {
        title: '삼각비의 기본 개념',
        title_en: 'Basic Concepts of Trigonometric Ratios',
        url: 'https://byjus.com/maths/trigonometry/',
        type: 'article' as const
      }
    ]
  },
  {
    id: 'trigonometric-ratios-applications',
    title: '삼각비의 활용',
    title_en: 'Applications of Trigonometric Ratios',
    description: '삼각비를 이용한 높이, 거리, 각도 구하기와 실생활 문제 해결을 학습합니다.',
    description_en: 'Learn to find heights, distances, and angles using trigonometric ratios and solve real-life problems.',
    explanation: `삼각비를 실제로 활용하는 방법을 배웁니다:

1. 높이 구하기
- 건물, 나무, 산 등의 높이 측정
- 각도기와 거리 측정을 통한 계산
- 그림자를 이용한 높이 계산

2. 거리 구하기
- 직접 측정할 수 없는 거리 계산
- 강 건너의 물체까지의 거리
- 선박 간의 거리

3. 각도 구하기
- 역삼각비를 이용한 각도 계산
- arcsin, arccos, arctan 활용
- 방향과 기울기 계산

4. 실생활 응용
- 측량과 지도 제작
- 건축과 공학 설계
- 항해와 비행 경로 계산`,
    explanation_en: `Learn how to practically apply trigonometric ratios:

1. Finding Heights
- Measuring heights of buildings, trees, mountains
- Calculations using protractors and distance measurements
- Height calculations using shadows

2. Finding Distances
- Calculating distances that cannot be measured directly
- Distance to objects across a river
- Distance between ships

3. Finding Angles
- Angle calculations using inverse trigonometric ratios
- Using arcsin, arccos, arctan
- Direction and slope calculations

4. Real-life Applications
- Surveying and map making
- Architecture and engineering design
- Navigation and flight path calculations`,
    examples: [
      {
        problem: '30m 떨어진 지점에서 올려다본 빌딩 꼭대기의 각도가 45°일 때, 빌딩의 높이를 구하시오.',
        problem_en: 'When looking up at the top of a building from a point 30m away at an angle of 45°, find the height of the building.',
        solution: '30m',
        explanation: `1. 45° 각도에서 tan 45° = 1 임을 이용
2. tan 45° = 높이/30
3. 1 = 높이/30
4. 높이 = 30m`,
        explanation_en: `1. Use the fact that tan 45° = 1
2. tan 45° = height/30
3. 1 = height/30
4. height = 30m`
      }
    ],
    visualAids: [
      {
        type: 'iframe' as const,
        url: 'https://www.geogebra.org/material/iframe/id/Qwrg7s7Z/width/1280/height/559/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false',
        description: '실생활 삼각비 활용 예시 (GeoGebra)',
        description_en: 'Real-life Trigonometric Ratio Examples (GeoGebra)',
        width: '1280px',
        height: '559px'
      }
    ],
    keyPoints: [
      '실생활 문제는 적절한 삼각비 선택이 중요합니다.',
      '각도 측정의 정확성이 결과에 영향을 미칩니다.',
      '여러 단계의 계산이 필요한 경우가 많습니다.',
      '단위 변환에 주의해야 합니다.'
    ],
    keyPoints_en: [
      'Choosing the appropriate trigonometric ratio is important for real-life problems.',
      'Accuracy of angle measurement affects the results.',
      'Multiple calculation steps are often required.',
      'Pay attention to unit conversions.'
    ],
    commonMistakes: [
      '상황에 맞지 않는 삼각비를 선택하는 실수',
      '각도의 단위(도/라디안)를 혼동하는 실수',
      '계산기 사용 시 모드 설정 실수'
    ],
    commonMistakes_en: [
      'Choosing inappropriate trigonometric ratios for the situation',
      'Confusing angle units (degrees/radians)',
      'Calculator mode setting errors'
    ],
    additionalResources: [
      {
        title: '삼각비의 실생활 응용',
        title_en: 'Real-life Applications of Trigonometric Ratios',
        url: 'https://study.com/academy/lesson/applications-of-trigonometry-real-life-uses-examples.html',
        type: 'article' as const
      },
      {
        title: '삼각비의 실생활 응용',
        title_en: 'Applications of Trigonometry',
        url: 'https://byjus.com/maths/applications-of-trigonometry/',
        type: 'article' as const
      }
    ]
  }
]; 