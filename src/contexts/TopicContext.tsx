import React, { createContext, useContext, useState, useCallback } from 'react';
import { useLanguage } from './LanguageContext';

export interface Topic {
  id: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  icon: string;
  color: string;
  subtopics: Array<{
    id: string;
    title: string;
    title_en?: string;
    concepts: string[];
    concepts_en?: string[];
  }>;
}

const topicsData: Topic[] = [
  {
    id: 'pythagorean-theorem',
    title: '피타고라스 정리',
    title_en: 'Pythagorean Theorem',
    description: '직각삼각형에서 피타고라스 정리를 이해하고 활용하는 방법을 학습합니다.',
    description_en: 'Learn to understand and apply the Pythagorean theorem in right triangles.',
    icon: 'triangle',
    color: '#E91E63',
    subtopics: [
      {
        id: 'pt-1',
        title: '피타고라스 정리의 이해',
        title_en: 'Understanding the Pythagorean Theorem',
        concepts: [
          '피타고라스 정리의 기본 개념',
          '직각삼각형의 성질',
          '피타고라스 정리의 증명'
        ],
        concepts_en: [
          'Basic concepts of the Pythagorean theorem',
          'Properties of right triangles',
          'Proof of the Pythagorean theorem'
        ]
      },
      {
        id: 'pt-2',
        title: '피타고라스 정리의 활용',
        title_en: 'Applications of the Pythagorean Theorem',
        concepts: [
          '실생활 문제 해결',
          '특수한 직각삼각형',
          '피타고라스 정리의 역'
        ],
        concepts_en: [
          'Solving real-life problems',
          'Special right triangles',
          'Converse of the Pythagorean theorem'
        ]
      }
    ]
  },
  {
    id: 'trigonometric-ratios',
    title: '삼각비',
    title_en: 'Trigonometric Ratios',
    description: '직각삼각형에서 사인, 코사인, 탄젠트의 개념과 활용법을 학습합니다.',
    description_en: 'Learn the concepts and applications of sine, cosine, and tangent in right triangles.',
    icon: 'function',
    color: '#9C27B0',
    subtopics: [
      {
        id: 'tr-1',
        title: '삼각비의 개념',
        title_en: 'Concepts of Trigonometric Ratios',
        concepts: [
          '사인, 코사인, 탄젠트의 정의',
          '특수각의 삼각비',
          '삼각비표 활용하기'
        ],
        concepts_en: [
          'Definition of sine, cosine, and tangent',
          'Trigonometric ratios of special angles',
          'Using trigonometric tables'
        ]
      },
      {
        id: 'tr-2',
        title: '삼각비의 활용',
        title_en: 'Applications of Trigonometric Ratios',
        concepts: [
          '높이와 거리 구하기',
          '실생활 문제 해결',
          '방위각과 삼각비'
        ],
        concepts_en: [
          'Finding heights and distances',
          'Solving real-life problems',
          'Bearing angles and trigonometric ratios'
        ]
      }
    ]
  },
  {
    id: 'congruence-similarity',
    title: '합동과 닮음',
    title_en: 'Congruence and Similarity',
    description: '도형의 합동과 닮음의 개념을 이해하고 성질을 학습합니다.',
    description_en: 'Understand the concepts of congruence and similarity of figures and learn their properties.',
    icon: 'shapes',
    color: '#4CAF50',
    subtopics: [
      {
        id: 'cs-1',
        title: '삼각형의 합동',
        title_en: 'Triangle Congruence',
        concepts: [
          '삼각형의 합동 조건 (SSS, SAS, ASA, AAS)',
          '합동인 도형의 성질',
          '합동인 삼각형의 대응 관계'
        ],
        concepts_en: [
          'Triangle congruence conditions (SSS, SAS, ASA, AAS)',
          'Properties of congruent figures',
          'Corresponding relationships in congruent triangles'
        ]
      },
      {
        id: 'cs-2',
        title: '도형의 닮음',
        title_en: 'Similarity of Figures',
        concepts: [
          '닮음의 의미와 성질',
          '닮음비와 넓이비, 부피비의 관계',
          '삼각형의 닮음 조건'
        ],
        concepts_en: [
          'Meaning and properties of similarity',
          'Relationship between similarity ratio, area ratio, and volume ratio',
          'Triangle similarity conditions'
        ]
      }
    ]
  },
  {
    id: 'volume-surface-area',
    title: '입체도형의 부피와 겉넓이',
    title_en: 'Volume and Surface Area of Solids',
    description: '다양한 입체도형의 부피와 겉넓이를 계산하는 방법을 학습합니다.',
    description_en: 'Learn methods to calculate volume and surface area of various solid figures.',
    icon: 'cube',
    color: '#2196F3',
    subtopics: [
      {
        id: 'vs-1',
        title: '각기둥과 각뿔',
        title_en: 'Prisms and Pyramids',
        concepts: [
          '각기둥의 부피와 겉넓이',
          '각뿔의 부피와 겉넓이',
          '각기둥과 각뿔의 관계'
        ],
        concepts_en: [
          'Volume and surface area of prisms',
          'Volume and surface area of pyramids',
          'Relationship between prisms and pyramids'
        ]
      },
      {
        id: 'vs-2',
        title: '원기둥과 구',
        title_en: 'Cylinders and Spheres',
        concepts: [
          '원기둥의 부피와 겉넓이',
          '구의 부피와 겉넓이',
          '회전체의 부피'
        ],
        concepts_en: [
          'Volume and surface area of cylinders',
          'Volume and surface area of spheres',
          'Volume of solids of revolution'
        ]
      }
    ]
  },
  {
    id: 'probability',
    title: '확률',
    title_en: 'Probability',
    description: '확률의 기본 개념과 다양한 상황에서의 확률 계산 방법을 학습합니다.',
    description_en: 'Learn basic concepts of probability and methods for calculating probability in various situations.',
    icon: 'dice',
    color: '#9C27B0',
    subtopics: [
      {
        id: 'prob-1',
        title: '확률의 기초',
        title_en: 'Fundamentals of Probability',
        concepts: [
          '확률의 의미와 기본 성질',
          '경우의 수와 확률',
          '확률의 덧셈과 곱셈'
        ],
        concepts_en: [
          'Meaning and basic properties of probability',
          'Number of cases and probability',
          'Addition and multiplication of probabilities'
        ]
      },
      {
        id: 'prob-2',
        title: '조건부 확률',
        title_en: 'Conditional Probability',
        concepts: [
          '조건부 확률의 의미',
          '독립 사건과 종속 사건',
          '확률의 곱셈 정리'
        ],
        concepts_en: [
          'Meaning of conditional probability',
          'Independent and dependent events',
          'Multiplication theorem of probability'
        ]
      }
    ]
  },
  {
    id: 'statistics',
    title: '통계',
    title_en: 'Statistics',
    description: '자료의 정리와 해석, 대푯값과 산포도 등 기본적인 통계 개념을 학습합니다.',
    description_en: 'Learn basic statistical concepts including data organization and interpretation, measures of central tendency, and measures of dispersion.',
    icon: 'chart-bar',
    color: '#FF9800',
    subtopics: [
      {
        id: 'stat-1',
        title: '자료의 정리와 해석',
        title_en: 'Data Organization and Interpretation',
        concepts: [
          '도수분포표와 히스토그램',
          '대푯값(평균, 중앙값, 최빈값)',
          '산포도(분산, 표준편차)'
        ],
        concepts_en: [
          'Frequency distribution tables and histograms',
          'Measures of central tendency (mean, median, mode)',
          'Measures of dispersion (variance, standard deviation)'
        ]
      },
      {
        id: 'stat-2',
        title: '상관관계',
        title_en: 'Correlation',
        concepts: [
          '산점도와 상관관계',
          '상관계수의 의미와 해석',
          '회귀직선'
        ],
        concepts_en: [
          'Scatter plots and correlation',
          'Meaning and interpretation of correlation coefficient',
          'Regression line'
        ]
      }
    ]
  }
];

interface TopicContextType {
  topics: Topic[];
  getTopicById: (id: string) => Topic | null;
  currentTopic: Topic | null;
  setCurrentTopic: (topic: Topic | null) => void;
  getLocalizedTopics: () => Topic[];
}

const TopicContext = createContext<TopicContextType | null>(null);

export const TopicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);
  const { language } = useLanguage();

  const getTopicById = useCallback((id: string) => {
    const topic = topicsData.find(topic => topic.id === id);
    if (!topic) return null;
    
    // 현재 언어에 맞게 로컬라이즈된 토픽 반환
    return {
      ...topic,
      title: language === 'en' && topic.title_en ? topic.title_en : topic.title,
      description: language === 'en' && topic.description_en ? topic.description_en : topic.description,
      subtopics: topic.subtopics.map(subtopic => ({
        ...subtopic,
        title: language === 'en' && subtopic.title_en ? subtopic.title_en : subtopic.title,
        concepts: language === 'en' && subtopic.concepts_en ? subtopic.concepts_en : subtopic.concepts,
      }))
    };
  }, [language]);

  const getLocalizedTopics = useCallback(() => {
    return topicsData.map(topic => ({
      ...topic,
      title: language === 'en' && topic.title_en ? topic.title_en : topic.title,
      description: language === 'en' && topic.description_en ? topic.description_en : topic.description,
      subtopics: topic.subtopics.map(subtopic => ({
        ...subtopic,
        title: language === 'en' && subtopic.title_en ? subtopic.title_en : subtopic.title,
        concepts: language === 'en' && subtopic.concepts_en ? subtopic.concepts_en : subtopic.concepts,
      }))
    }));
  }, [language]);

  return (
    <TopicContext.Provider value={{ 
      topics: getLocalizedTopics(), 
      getTopicById, 
      currentTopic,
      setCurrentTopic,
      getLocalizedTopics
    }}>
      {children}
    </TopicContext.Provider>
  );
};

export const useTopic = () => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error('useTopic must be used within a TopicProvider');
  }
  return context;
};