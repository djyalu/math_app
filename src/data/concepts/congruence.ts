import { ConceptContent } from '../types';

export const congruenceConcepts: ConceptContent[] = [
  {
    id: 'triangle-congruence-understanding',
    title: '삼각형의 합동',
    title_en: 'Triangle Congruence',
    description: '삼각형의 합동 조건과 성질을 학습합니다.',
    description_en: 'Learn the conditions and properties of triangle congruence.',
    explanation: `삼각형의 합동의 기본 개념을 이해합니다:

1. 합동의 정의
- 두 도형의 크기와 모양이 완전히 같은 경우
- 한 도형을 평행이동, 회전, 뒤집기를 통해 다른 도형과 완전히 겹치는 경우
- 대응하는 변의 길이와 각의 크기가 모두 같은 경우

2. 삼각형의 합동 조건
세 가지 조건 중 하나만 만족하면 두 삼각형은 합동입니다:
- 세 변이 각각 같을 때 (SSS 합동)
- 두 변과 그 사이의 각이 각각 같을 때 (SAS 합동)
- 한 변과 그 양 끝의 각이 각각 같을 때 (ASA 합동)

3. 합동의 성질
- 대응하는 변의 길이가 같습니다.
- 대응하는 각의 크기가 같습니다.
- 대응하는 부분의 둘레와 넓이가 같습니다.
- 합동인 도형은 서로 포개어질 수 있습니다.`,
    explanation_en: `Understand the basic concepts of triangle congruence:

1. Definition of Congruence
- When two figures have exactly the same size and shape
- When one figure can completely overlap another through translation, rotation, or reflection
- When corresponding sides and angles are all equal

2. Triangle Congruence Conditions
Two triangles are congruent if any one of these three conditions is satisfied:
- When three sides are respectively equal (SSS congruence)
- When two sides and the included angle are respectively equal (SAS congruence)
- When one side and its two adjacent angles are respectively equal (ASA congruence)

3. Properties of Congruence
- Corresponding sides have equal lengths.
- Corresponding angles have equal measures.
- Corresponding perimeters and areas are equal.
- Congruent figures can be superimposed on each other.`,
    examples: [
      {
        problem: '두 삼각형 ABC와 DEF에서 AB=DE, AC=DF, ∠A=∠D일 때, 두 삼각형이 합동임을 증명하시오.',
        problem_en: 'In triangles ABC and DEF, if AB=DE, AC=DF, and ∠A=∠D, prove that the two triangles are congruent.',
        solution: 'SAS 합동',
        explanation: `1. 두 삼각형에서 주어진 조건 확인:
- AB=DE (첫 번째 변이 같음)
- AC=DF (두 번째 변이 같음)
- ∠A=∠D (두 변 사이의 각이 같음)
2. SAS 합동 조건에 의해 △ABC ≅ △DEF`,
        explanation_en: `1. Check given conditions in both triangles:
- AB=DE (first side is equal)
- AC=DF (second side is equal)
- ∠A=∠D (included angle is equal)
2. By SAS congruence condition, △ABC ≅ △DEF`
      }
    ],
    visualAids: [
      
      {
        type: 'iframe' as const,
        url: 'https://www.geogebra.org/material/iframe/id/bjcRgtGA/width/700/height/500/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false',
        description: 'SSS 합동 조건 데모 (GeoGebra)',
        description_en: 'SSS Congruence Condition Demo (GeoGebra)',
        width: '700px',
        height: '500px'
      }
    ],
    keyPoints: [
      '합동인 도형은 크기와 모양이 완전히 같습니다.',
      '삼각형의 합동 조건은 SSS, SAS, ASA 세 가지입니다.',
      'ASS나 AAA는 합동 조건이 아닙니다.',
      '합동 기호는 ≅로 표시합니다.'
    ],
    keyPoints_en: [
      'Congruent figures have exactly the same size and shape.',
      'Triangle congruence conditions are SSS, SAS, and ASA.',
      'ASS or AAA are not congruence conditions.',
      'The congruence symbol is ≅.'
    ],
    commonMistakes: [
      '대응하는 변과 각을 잘못 짝짓는 실수',
      'ASS나 AAA를 합동 조건으로 잘못 아는 실수',
      '합동 조건을 만족하지 않는데 합동이라고 판단하는 실수'
    ],
    commonMistakes_en: [
      'Incorrectly matching corresponding sides and angles',
      'Mistakenly thinking ASS or AAA are congruence conditions',
      'Determining congruence without satisfying congruence conditions'
    ],
    additionalResources: [
      {
        title: '삼각형의 합동 조건',
        title_en: 'Triangle Congruence Conditions',
        url: 'https://byjus.com/maths/congruence-of-triangles/',
        type: 'article' as const
      }
    ]
  },
  {
    id: 'triangle-similarity-understanding',
    title: '삼각형의 닮음',
    title_en: 'Triangle Similarity',
    description: '삼각형의 닮음 조건과 성질을 학습합니다.',
    description_en: 'Learn the conditions and properties of triangle similarity.',
    explanation: `삼각형의 닮음의 기본 개념을 이해합니다:

1. 닮음의 정의
- 두 도형의 모양은 같고 크기만 다른 경우
- 한 도형을 확대 또는 축소하여 다른 도형과 같아지는 경우
- 대응하는 각의 크기가 같고, 대응하는 변의 길이의 비가 일정한 경우

2. 삼각형의 닮음 조건
세 가지 조건 중 하나만 만족하면 두 삼각형은 닮음입니다:
- 세 각의 크기가 각각 같을 때 (AAA 닮음)
- 두 각의 크기가 각각 같을 때 (AA 닮음)
- 두 변의 길이의 비가 같고 그 사이의 각이 같을 때 (SAS 닮음)

3. 닮음의 성질
- 대응하는 각의 크기가 같습니다.
- 대응하는 변의 길이의 비가 일정합니다.
- 닮음비가 k일 때:
  • 둘레의 비는 k
  • 넓이의 비는 k²
  • 부피의 비는 k³`,
    explanation_en: `Understand the basic concepts of triangle similarity:

1. Definition of Similarity
- When two figures have the same shape but different sizes
- When one figure can be made identical to another by enlarging or reducing
- When corresponding angles are equal and corresponding sides have a constant ratio

2. Triangle Similarity Conditions
Two triangles are similar if any one of these three conditions is satisfied:
- When three angles are respectively equal (AAA similarity)
- When two angles are respectively equal (AA similarity)
- When two sides have the same ratio and the included angle is equal (SAS similarity)

3. Properties of Similarity
- Corresponding angles are equal.
- Corresponding sides have a constant ratio.
- When the similarity ratio is k:
  • Perimeter ratio is k
  • Area ratio is k²
  • Volume ratio is k³`,
    examples: [
      {
        problem: '두 삼각형 ABC와 DEF에서 ∠A=∠D, ∠B=∠E일 때, 두 삼각형이 닮음임을 증명하시오.',
        problem_en: 'In triangles ABC and DEF, if ∠A=∠D and ∠B=∠E, prove that the two triangles are similar.',
        solution: 'AA 닮음',
        explanation: `1. 두 삼각형에서 주어진 조건 확인:
- ∠A=∠D (첫 번째 각이 같음)
- ∠B=∠E (두 번째 각이 같음)
2. 삼각형의 내각의 합은 180°이므로 ∠C=∠F
3. AA 닮음 조건에 의해 △ABC ∽ △DEF`,
        explanation_en: `1. Check given conditions in both triangles:
- ∠A=∠D (first angle is equal)
- ∠B=∠E (second angle is equal)
2. Since the sum of interior angles in a triangle is 180°, ∠C=∠F
3. By AA similarity condition, △ABC ∽ △DEF`
      }
    ],
    visualAids: [
      {
        type: 'interactive' as const,
        url: '/interactive/triangle-similarity',
        description: '삼각형의 닮음 조건과 닮음비를 보여주는 인터랙티브 시뮬레이션',
        description_en: 'Interactive simulation showing triangle similarity conditions and similarity ratios'
      }
    ],
    keyPoints: [
      '닮음인 도형은 모양은 같고 크기만 다릅니다.',
      '삼각형의 닮음 조건은 AAA(AA), SAS 세 가지입니다.',
      '닮음비에 따라 둘레, 넓이, 부피의 비가 결정됩니다.',
      '닮음 기호는 ∽로 표시합니다.'
    ],
    keyPoints_en: [
      'Similar figures have the same shape but different sizes.',
      'Triangle similarity conditions are AAA(AA) and SAS.',
      'Perimeter, area, and volume ratios are determined by the similarity ratio.',
      'The similarity symbol is ∽.'
    ],
    commonMistakes: [
      '대응하는 변의 길이 비가 일정하지 않은데 닮음이라고 판단하는 실수',
      '닮음비와 넓이비를 혼동하는 실수',
      '닮음 조건을 만족하지 않는데 닮음이라고 판단하는 실수'
    ],
    commonMistakes_en: [
      'Determining similarity when corresponding side ratios are not constant',
      'Confusing similarity ratio with area ratio',
      'Determining similarity without satisfying similarity conditions'
    ],
    additionalResources: [
      {
        title: '삼각형의 닮음과 닮음비',
        title_en: 'Triangle Similarity and Similarity Ratios',
        url: 'https://www.khanacademy.org/math/geometry/hs-geo-similarity/hs-geo-triangle-similarity-intro/a/triangle-similarity-review',
        type: 'article' as const
      }
    ]
  }
]; 