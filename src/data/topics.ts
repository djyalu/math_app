import { Topic } from '../contexts/TopicContext';

export const topics: Topic[] = [
  {
    id: 'video-lectures',
    title: '동영상 강의',
    description: '수학 2B 과정의 주요 개념과 문제 풀이를 동영상으로 학습합니다.',
    icon: '🎥',
    color: 'bg-purple-500',
    subtopics: [
      {
        id: 'worked-examples',
        title: '예제 풀이',
        concepts: ['문제 해결 전략', '단계별 풀이 과정', '핵심 개념 적용']
      }
    ]
  },
  {
    id: 'congruence-similarity',
    title: '합동과 닮음',
    description: '도형의 합동과 닮음의 개념을 이해하고, 도형의 변환과 축척을 학습합니다.',
    icon: 'shapes',
    color: '#06B6D4',
    subtopics: [
      {
        id: 'congruent-triangles',
        title: '삼각형의 합동',
        concepts: [
          '합동의 정의: 크기와 모양이 완전히 같은 도형',
          '삼각형의 합동 조건 (SSS, SAS, ASA, AAS)',
          '합동인 도형의 대응변과 대응각',
          '도형의 합동을 이용한 증명'
        ]
      },
      {
        id: 'similar-triangles',
        title: '닮은 도형',
        concepts: [
          '닮음의 정의: 같은 모양, 다른 크기',
          '닮음비와 축척의 관계',
          '삼각형의 닮음 조건 (AA, SAS, SSS)',
          '닮음을 이용한 실생활 문제 해결'
        ]
      },
      {
        id: 'transformations',
        title: '도형의 변환',
        concepts: [
          '대칭이동과 반사: 선대칭과 점대칭',
          '회전이동: 회전의 중심과 각도',
          '평행이동: 방향과 거리',
          '확대와 축소: 중심과 닮음비'
        ]
      }
    ]
  },
  {
    id: 'pythagoras-theorem',
    title: '피타고라스 정리',
    description: '직각삼각형에서 세 변의 관계를 이해하고, 다양한 기하학적 문제를 해결합니다.',
    icon: 'triangle',
    color: '#8B5CF6',
    subtopics: [
      {
        id: 'theorem-proof',
        title: '정리와 증명',
        concepts: [
          '피타고라스 정리: a² + b² = c²',
          '다양한 기하학적 증명 방법',
          '피타고라스 정리의 역',
          '정리의 역사적 의의와 발견'
        ]
      },
      {
        id: 'applications',
        title: '응용과 문제해결',
        concepts: [
          '직각삼각형의 변의 길이 계산',
          '좌표평면에서 두 점 사이의 거리',
          '직각이 아닌 삼각형에서의 활용',
          '건축과 공학에서의 응용'
        ]
      },
      {
        id: 'special-triangles',
        title: '특수한 직각삼각형',
        concepts: [
          '30-60-90 삼각형의 비율 관계',
          '45-45-90 삼각형의 성질',
          '피타고라스 수(3,4,5 등)',
          '무리수의 기하학적 의미'
        ]
      }
    ]
  },
  {
    id: 'trigonometric-ratios',
    title: '삼각비',
    description: '직각삼각형에서 각과 변의 비율 관계를 이해하고 실제 문제에 적용합니다.',
    icon: 'calculator',
    color: '#EC4899',
    subtopics: [
      {
        id: 'basic-ratios',
        title: '기본 삼각비',
        concepts: [
          'sin θ = 대변/빗변의 비',
          'cos θ = 인접변/빗변의 비',
          'tan θ = 대변/인접변의 비',
          '30°, 45°, 60°의 삼각비 값'
        ]
      },
      {
        id: 'angle-calculations',
        title: '각도 계산',
        concepts: [
          '역삼각비 함수(arcsin, arccos, arctan)',
          '미지의 각도 구하기',
          '방위각과 고도각의 계산',
          '삼각비를 이용한 거리 측정'
        ]
      },
      {
        id: 'real-world',
        title: '실생활 응용',
        concepts: [
          '건물의 높이 측정',
          '경사로의 각도 계산',
          '그림자 길이를 이용한 문제',
          '천문학과 항해에서의 활용'
        ]
      }
    ]
  },
  {
    id: 'volume-surface-area',
    title: '입체도형의 부피와 겉넓이',
    description: '3차원 도형의 부피와 겉넓이를 계산하고 실생활에 적용합니다.',
    icon: 'cube',
    color: '#F97316',
    subtopics: [
      {
        id: 'pyramids-cones',
        title: '각뿔과 원뿔',
        concepts: [
          '각뿔의 부피: (밑면적 × 높이) ÷ 3',
          '원뿔의 부피와 겉넓이 공식',
          '절단면의 성질과 단면도형',
          '복합 입체도형의 계산'
        ]
      },
      {
        id: 'spheres',
        title: '구',
        concepts: [
          '구의 부피: (4/3)πr³',
          '구의 겉넓이: 4πr²',
          '구의 일부(구관, 구분)의 계산',
          '구와 관련된 실생활 문제'
        ]
      },
      {
        id: 'practical-applications',
        title: '실생활 활용',
        concepts: [
          '용기와 포장 디자인',
          '건축물의 부피 계산',
          '효율적인 공간 활용',
          '재료의 양과 비용 계산'
        ]
      }
    ]
  },
  {
    id: 'probability',
    title: '확률',
    description: '사건의 가능성을 수학적으로 분석하고 예측하는 방법을 학습합니다.',
    icon: 'brain',
    color: '#10B981',
    subtopics: [
      {
        id: 'basic-concepts',
        title: '기본 개념',
        concepts: [
          '확률의 정의: 가능한 경우의 수 분석',
          '표본공간과 사건의 구분',
          '확률의 기본 법칙(합의 법칙, 곱의 법칙)',
          '확률의 계산과 해석'
        ]
      },
      {
        id: 'experimental-probability',
        title: '실험확률',
        concepts: [
          '실험을 통한 확률의 추정',
          '상대도수와 이론적 확률',
          '큰 수의 법칙과 수렴',
          '시뮬레이션을 통한 확률 실험'
        ]
      },
      {
        id: 'applications',
        title: '확률의 활용',
        concepts: [
          '확률게임과 공정성',
          '의사결정에서의 확률 활용',
          '위험 평가와 보험',
          '일상생활에서의 확률 적용'
        ]
      }
    ]
  },
  {
    id: 'statistics',
    title: '통계',
    description: '데이터를 체계적으로 수집, 정리, 분석하여 의미 있는 정보를 도출합니다.',
    icon: 'bar-chart-2',
    color: '#EAB308',
    subtopics: [
      {
        id: 'data-representation',
        title: '자료의 정리와 표현',
        concepts: [
          '도수분포표와 계급 구간',
          '히스토그램과 도수분포다각형',
          '줄기와 잎 그림의 작성과 해석',
          '상자 그림과 이상값 판단'
        ]
      },
      {
        id: 'central-tendency',
        title: '대표값과 산포도',
        concepts: [
          '평균: 산술평균, 가중평균',
          '중앙값과 최빈값의 특징',
          '분산과 표준편차의 의미',
          '사분위수와 범위'
        ]
      },
      {
        id: 'data-analysis',
        title: '자료 분석과 해석',
        concepts: [
          '정규분포와 비대칭 분포',
          '상관관계와 인과관계',
          '통계적 추론의 기초',
          '데이터 기반 의사결정'
        ]
      }
    ]
  }
];