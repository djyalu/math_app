export interface Lesson {
  id: string;
  topicId: string;
  subtopicId: string;
  title: string;
  description: string;
  type?: 'standard' | 'video-lecture';  // 레슨 타입 추가
  content: {
    theory: string;
    examples: Array<{
      problem: string;
      solution: string;
      explanation: string;
    }>;
    practice: Array<{
      problem: string;
      solution: string;
      hints: string[];
    }>;
    visualAids?: {
      type: 'image' | 'video' | 'interactive';
      url: string;
      description: string;
    }[];
  };
  prerequisites?: string[];
  difficulty: 'basic' | 'intermediate' | 'advanced';
  estimatedTime: number; // 분 단위
}

export const lessons: Lesson[] = [
  {
    id: 'pythagorean-theorem-basic',
    topicId: 'pythagorean-theorem',
    subtopicId: 'pt-1',
    title: '피타고라스 정리의 이해',
    description: '직각삼각형에서 피타고라스 정리의 기본 개념을 학습합니다.',
    content: {
      theory: `피타고라스 정리는 직각삼각형에서 빗변의 제곱이 다른 두 변의 제곱의 합과 같다는 것을 설명합니다.
a² + b² = c² (c는 빗변, a와 b는 다른 두 변)`,
      examples: [
        {
          problem: '직각삼각형의 두 변이 3cm와 4cm일 때, 빗변의 길이를 구하시오.',
          solution: '3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5',
          explanation: '피타고라스 정리를 직접 적용하여 빗변의 길이를 구할 수 있습니다.'
        }
      ],
      practice: [
        {
          problem: '직각삼각형의 빗변이 13cm, 한 변이 5cm일 때, 나머지 한 변의 길이를 구하시오.',
          solution: '5² + x² = 13²\n25 + x² = 169\nx² = 144\nx = 12',
          hints: [
            '피타고라스 정리 공식을 써보세요',
            '알려진 값을 대입해보세요',
            '방정식을 풀어보세요'
          ]
        }
      ]
    },
    difficulty: 'basic',
    estimatedTime: 30
  },
  {
    id: 'pythagorean-theorem-advanced',
    topicId: 'pythagorean-theorem',
    subtopicId: 'pt-2',
    title: '피타고라스 정리의 활용',
    description: '피타고라스 정리를 실생활 문제에 적용하는 방법을 학습합니다.',
    content: {
      theory: `피타고라스 정리는 실생활의 다양한 상황에서 거리나 높이를 구하는 데 활용됩니다.`,
      examples: [
        {
          problem: '10m 높이의 벽에 12m 길이의 사다리를 기대어 놓았을 때, 사다리의 아랫부분은 벽에서 얼마나 떨어져 있는가?',
          solution: '12² = 10² + x²\n144 = 100 + x²\nx² = 44\nx ≈ 6.63',
          explanation: '피타고라스 정리를 실제 상황에 적용하여 거리를 구할 수 있습니다.'
        }
      ],
      practice: [
        {
          problem: '높이가 15m인 빌딩의 꼭대기에서 20m 떨어진 지점까지 케이블을 연결하려고 합니다. 필요한 케이블의 길이는 얼마인가?',
          solution: '케이블의 길이² = 15² + 20²\n= 225 + 400 = 625\n케이블의 길이 = 25m',
          hints: [
            '직각삼각형을 그려보세요',
            '높이와 거리를 변으로 하는 직각삼각형을 생각해보세요',
            '피타고라스 정리를 적용해보세요'
          ]
        }
      ]
    },
    difficulty: 'advanced',
    estimatedTime: 45
  },
  {
    id: 'trigonometric-ratios-basic',
    topicId: 'trigonometric-ratios',
    subtopicId: 'tr-1',
    title: '삼각비의 개념',
    description: '직각삼각형에서 사인, 코사인, 탄젠트의 개념을 학습합니다.',
    content: {
      theory: `삼각비는 직각삼각형에서 각과 변의 관계를 나타냅니다.
sin θ = 대변/빗변
cos θ = 인접변/빗변
tan θ = 대변/인접변`,
      examples: [
        {
          problem: '직각삼각형에서 sin 30°, cos 30°, tan 30°의 값을 구하시오.',
          solution: 'sin 30° = 1/2\ncos 30° = √3/2\ntan 30° = 1/√3',
          explanation: '30-60-90 삼각형의 특수각에서의 삼각비 값을 계산할 수 있습니다.'
        }
      ],
      practice: [
        {
          problem: '직각삼각형의 빗변이 10cm, 한 각이 45°일 때, 대변과 인접변의 길이를 구하시오.',
          solution: '대변 = 10 × sin 45° = 10 × 1/√2 ≈ 7.07cm\n인접변 = 10 × cos 45° = 10 × 1/√2 ≈ 7.07cm',
          hints: [
            '45° 각에서는 대변과 인접변이 같습니다',
            'sin 45° = cos 45° = 1/√2임을 기억하세요',
            '빗변에 각각의 삼각비를 곱하세요'
          ]
        }
      ]
    },
    difficulty: 'basic',
    estimatedTime: 40
  },
  {
    id: 'trigonometric-ratios-advanced',
    topicId: 'trigonometric-ratios',
    subtopicId: 'tr-2',
    title: '삼각비의 활용',
    description: '삼각비를 이용하여 실생활 문제를 해결하는 방법을 학습합니다.',
    content: {
      theory: `삼각비는 높이나 거리를 구하는 실생활 문제에 자주 활용됩니다.`,
      examples: [
        {
          problem: '30m 높이의 건물을 60m 떨어진 지점에서 올려다볼 때의 각도를 구하시오.',
          solution: 'tan θ = 30/60 = 1/2\nθ = arctan(1/2) ≈ 26.57°',
          explanation: '탄젠트를 이용하여 높이와 거리로부터 각도를 구할 수 있습니다.'
        }
      ],
      practice: [
        {
          problem: '관측자가 45° 각도로 나무 꼭대기를 바라볼 때, 관측자와 나무 사이의 거리가 20m라면 나무의 높이는 얼마인가?',
          solution: 'tan 45° = h/20\n1 = h/20\nh = 20m',
          hints: [
            '탄젠트 공식을 사용하세요',
            'tan 45° = 1임을 기억하세요',
            '방정식을 세워 높이를 구하세요'
          ]
        }
      ]
    },
    difficulty: 'advanced',
    estimatedTime: 45
  },
  {
    id: 'video-lecture-chapter-8',
    topicId: 'video-lectures',
    subtopicId: 'worked-examples',
    title: 'Chapter 8: 피타고라스 정리 예제 풀이',
    description: '피타고라스 정리를 활용한 문제 해결 방법을 학습합니다.',
    type: 'video-lecture',
    content: {
      theory: `피타고라스 정리의 실제 적용 사례를 통해 문제 해결 능력을 향상시킵니다.

주요 내용:
- Worked Example 6: 복합 도형에서의 피타고라스 정리 활용
- Worked Example 8: 실생활 문제에서의 피타고라스 정리 적용`,
      examples: [
        {
          problem: '피타고라스 정리를 이용한 다양한 문제 풀이를 살펴봅시다.',
          solution: '단계별 해결 과정을 통해 이해할 수 있습니다.',
          explanation: '각 예제의 핵심 개념과 풀이 전략을 설명합니다.'
        }
      ],
      practice: [
        {
          problem: '강의에서 배운 방법을 활용하여 유사한 문제를 풀어보세요.',
          solution: '피타고라스 정리를 적용하여 해결할 수 있습니다.',
          hints: [
            '직각삼각형을 찾아보세요.',
            '주어진 길이들을 확인하세요.',
            '피타고라스 정리 공식을 적용해보세요.'
          ]
        }
      ],
      visualAids: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/732399294',
          description: 'Chapter 8 - Worked Example 6'
        },
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/732399294',
          description: 'Chapter 8 - Worked Example 8'
        }
      ]
    },
    prerequisites: ['pythagoras-theorem-basic'],
    difficulty: 'intermediate',
    estimatedTime: 45
  },
  {
    id: 'video-lecture-chapter-9',
    topicId: 'video-lectures',
    subtopicId: 'worked-examples',
    title: 'Chapter 9: 삼각비 예제 풀이',
    description: '삼각비를 활용한 실제 문제 해결 방법을 학습합니다.',
    type: 'video-lecture',
    content: {
      theory: `삼각비(사인, 코사인, 탄젠트)를 이용한 실제 문제 해결 방법을 학습합니다.

주요 내용:
- Worked Example 3: 삼각비를 이용한 높이와 거리 계산
- Worked Example 8: 복합적인 상황에서의 삼각비 활용`,
      examples: [
        {
          problem: '삼각비를 이용한 다양한 실생활 문제를 해결해봅시다.',
          solution: '각 상황에 맞는 삼각비를 선택하여 해결할 수 있습니다.',
          explanation: '문제 상황에 따른 적절한 삼각비 선택과 적용 방법을 설명합니다.'
        }
      ],
      practice: [
        {
          problem: '강의에서 학습한 방법을 활용하여 문제를 풀어보세요.',
          solution: '적절한 삼각비를 선택하여 해결할 수 있습니다.',
          hints: [
            '주어진 각도와 변의 관계를 파악하세요.',
            '어떤 삼각비를 사용할지 결정하세요.',
            '계산 과정을 단계별로 진행하세요.'
          ]
        }
      ],
      visualAids: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/732399294',
          description: 'Chapter 9 - Worked Example 3'
        },
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/732399294',
          description: 'Chapter 9 - Worked Example 8'
        }
      ]
    },
    prerequisites: ['trigonometric-ratios-intro'],
    difficulty: 'intermediate',
    estimatedTime: 45
  },
  {
    id: 'video-lecture-chapter-11',
    topicId: 'video-lectures',
    subtopicId: 'worked-examples',
    title: 'Chapter 11: 입체도형 예제 풀이',
    description: '입체도형의 부피와 겉넓이 계산 방법을 학습합니다.',
    type: 'video-lecture',
    content: {
      theory: `입체도형의 부피와 겉넓이를 계산하는 다양한 방법을 학습합니다.

주요 내용:
- Worked Example 4: 복합 입체도형의 부피와 겉넓이 계산`,
      examples: [
        {
          problem: '입체도형의 부피와 겉넓이를 계산하는 방법을 알아봅시다.',
          solution: '도형을 분해하고 각 부분의 계산을 종합하여 해결할 수 있습니다.',
          explanation: '복합 입체도형의 분석과 계산 방법을 상세히 설명합니다.'
        }
      ],
      practice: [
        {
          problem: '강의에서 배운 방법을 활용하여 문제를 풀어보세요.',
          solution: '입체도형의 특성을 이해하고 공식을 적용하여 해결할 수 있습니다.',
          hints: [
            '도형을 기본 요소로 분해해보세요.',
            '각 부분의 부피와 겉넓이를 계산하세요.',
            '전체 결과를 종합해보세요.'
          ]
        }
      ],
      visualAids: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/732399294',
          description: 'Chapter 11 - Worked Example 4'
        }
      ]
    },
    prerequisites: ['volume-surface-area'],
    difficulty: 'intermediate',
    estimatedTime: 30
  },
  {
    id: 'video-lecture-chapter-13',
    topicId: 'video-lectures',
    subtopicId: 'worked-examples',
    title: 'Chapter 13: 확률 예제 풀이',
    description: '확률 문제의 해결 방법을 학습합니다.',
    type: 'video-lecture',
    content: {
      theory: `확률의 기본 개념과 다양한 상황에서의 확률 계산 방법을 학습합니다.

주요 내용:
- Worked Example 2: 기본 확률 계산
- Worked Example 3: 복합 사건의 확률`,
      examples: [
        {
          problem: '다양한 상황에서의 확률 계산 방법을 알아봅시다.',
          solution: '경우의 수를 분석하고 확률을 계산할 수 있습니다.',
          explanation: '확률의 기본 개념과 계산 방법을 자세히 설명합니다.'
        }
      ],
      practice: [
        {
          problem: '강의에서 학습한 방법을 활용하여 문제를 풀어보세요.',
          solution: '경우의 수를 분석하고 확률을 계산하여 해결할 수 있습니다.',
          hints: [
            '전체 경우의 수를 파악하세요.',
            '구하고자 하는 사건의 경우의 수를 계산하세요.',
            '확률의 기본 공식을 적용하세요.'
          ]
        }
      ],
      visualAids: [
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/732399294',
          description: 'Chapter 13 - Worked Example 2'
        },
        {
          type: 'video',
          url: 'https://player.vimeo.com/video/732399294',
          description: 'Chapter 13 - Worked Example 3'
        }
      ]
    },
    prerequisites: ['probability-basics'],
    difficulty: 'intermediate',
    estimatedTime: 45
  }
]; 