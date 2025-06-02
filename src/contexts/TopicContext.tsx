import React, { createContext, useContext, useState, useCallback } from 'react';

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  subtopics: Array<{
    id: string;
    title: string;
    concepts: string[];
  }>;
}

const topics: Topic[] = [
  {
    id: 'pythagorean-theorem',
    title: '피타고라스 정리',
    description: '직각삼각형에서 피타고라스 정리를 이해하고 활용하는 방법을 학습합니다.',
    icon: 'triangle',
    color: '#E91E63',
    subtopics: [
      {
        id: 'pt-1',
        title: '피타고라스 정리의 이해',
        concepts: [
          '피타고라스 정리의 기본 개념',
          '직각삼각형의 성질',
          '피타고라스 정리의 증명'
        ]
      },
      {
        id: 'pt-2',
        title: '피타고라스 정리의 활용',
        concepts: [
          '실생활 문제 해결',
          '특수한 직각삼각형',
          '피타고라스 정리의 역'
        ]
      }
    ]
  },
  {
    id: 'trigonometric-ratios',
    title: '삼각비',
    description: '직각삼각형에서 사인, 코사인, 탄젠트의 개념과 활용법을 학습합니다.',
    icon: 'function',
    color: '#9C27B0',
    subtopics: [
      {
        id: 'tr-1',
        title: '삼각비의 개념',
        concepts: [
          '사인, 코사인, 탄젠트의 정의',
          '특수각의 삼각비',
          '삼각비표 활용하기'
        ]
      },
      {
        id: 'tr-2',
        title: '삼각비의 활용',
        concepts: [
          '높이와 거리 구하기',
          '실생활 문제 해결',
          '방위각과 삼각비'
        ]
      }
    ]
  },
  {
    id: 'congruence-similarity',
    title: '합동과 닮음',
    description: '도형의 합동과 닮음의 개념을 이해하고 성질을 학습합니다.',
    icon: 'shapes',
    color: '#4CAF50',
    subtopics: [
      {
        id: 'cs-1',
        title: '삼각형의 합동',
        concepts: [
          '삼각형의 합동 조건 (SSS, SAS, ASA, AAS)',
          '합동인 도형의 성질',
          '합동인 삼각형의 대응 관계'
        ]
      },
      {
        id: 'cs-2',
        title: '도형의 닮음',
        concepts: [
          '닮음의 의미와 성질',
          '닮음비와 넓이비, 부피비의 관계',
          '삼각형의 닮음 조건'
        ]
      }
    ]
  },
  {
    id: 'volume-surface-area',
    title: '입체도형의 부피와 겉넓이',
    description: '다양한 입체도형의 부피와 겉넓이를 계산하는 방법을 학습합니다.',
    icon: 'cube',
    color: '#2196F3',
    subtopics: [
      {
        id: 'vs-1',
        title: '각기둥과 각뿔',
        concepts: [
          '각기둥의 부피와 겉넓이',
          '각뿔의 부피와 겉넓이',
          '각기둥과 각뿔의 관계'
        ]
      },
      {
        id: 'vs-2',
        title: '원기둥과 구',
        concepts: [
          '원기둥의 부피와 겉넓이',
          '구의 부피와 겉넓이',
          '회전체의 부피'
        ]
      }
    ]
  },
  {
    id: 'probability',
    title: '확률',
    description: '확률의 기본 개념과 다양한 상황에서의 확률 계산 방법을 학습합니다.',
    icon: 'dice',
    color: '#9C27B0',
    subtopics: [
      {
        id: 'prob-1',
        title: '확률의 기초',
        concepts: [
          '확률의 의미와 기본 성질',
          '경우의 수와 확률',
          '확률의 덧셈과 곱셈'
        ]
      },
      {
        id: 'prob-2',
        title: '조건부 확률',
        concepts: [
          '조건부 확률의 의미',
          '독립 사건과 종속 사건',
          '확률의 곱셈 정리'
        ]
      }
    ]
  },
  {
    id: 'statistics',
    title: '통계',
    description: '자료의 정리와 해석, 대푯값과 산포도 등 기본적인 통계 개념을 학습합니다.',
    icon: 'chart-bar',
    color: '#FF9800',
    subtopics: [
      {
        id: 'stat-1',
        title: '자료의 정리와 해석',
        concepts: [
          '도수분포표와 히스토그램',
          '대푯값(평균, 중앙값, 최빈값)',
          '산포도(분산, 표준편차)'
        ]
      },
      {
        id: 'stat-2',
        title: '상관관계',
        concepts: [
          '산점도와 상관관계',
          '상관계수의 의미와 해석',
          '회귀직선'
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
}

const TopicContext = createContext<TopicContextType | null>(null);

export const TopicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);

  const getTopicById = useCallback((id: string) => {
    return topics.find(topic => topic.id === id) || null;
  }, []);

  return (
    <TopicContext.Provider value={{ 
      topics, 
      getTopicById, 
      currentTopic, 
      setCurrentTopic 
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