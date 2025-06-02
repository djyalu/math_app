import { Practice } from '../types';

export const trigonometricPractice: Practice = {
  id: 'trigonometric-practice',
  topicId: 'trigonometric-ratios',
  chapterNumber: 2,
  title: '삼각비 연습 문제',
  problems: [
    // Basic Level Problems
    {
      id: 'tr-p1',
      question: '직각삼각형에서 sin 30°의 값을 구하시오.',
      answer: '1/2',
      explanation: '30-60-90 삼각형에서 sin 30° = 1/2입니다.',
      difficulty: 'basic',
      hints: ['30-60-90 삼각형을 그려보세요', '빗변의 길이를 2로 잡으면 계산이 쉽습니다']
    },
    {
      id: 'tr-p2',
      question: '직각삼각형에서 cos 60°의 값을 구하시오.',
      answer: '1/2',
      explanation: '60-30-90 삼각형에서 cos 60° = 1/2입니다.',
      difficulty: 'basic',
      hints: ['60-30-90 삼각형을 그려보세요', '30° 각에서의 코사인 값을 생각해보세요']
    },
    {
      id: 'tr-p3',
      question: '직각삼각형에서 tan 45°의 값을 구하시오.',
      answer: '1',
      explanation: '45-45-90 삼각형에서 tan 45° = 1입니다.',
      difficulty: 'basic',
      hints: ['45-45-90 삼각형은 이등변삼각형입니다', '두 변의 길이가 같다는 것을 이용하세요']
    },
    {
      id: 'tr-p4',
      question: '직각삼각형에서 sin 45°의 값을 구하시오.',
      answer: '1/√2',
      explanation: '45-45-90 삼각형에서 sin 45° = 1/√2입니다.',
      difficulty: 'basic',
      hints: ['45-45-90 삼각형을 그려보세요', '빗변의 길이와 다른 두 변의 관계를 생각해보세요']
    },
    {
      id: 'tr-p5',
      question: '직각삼각형에서 cos 45°의 값을 구하시오.',
      answer: '1/√2',
      explanation: '45-45-90 삼각형에서 cos 45° = 1/√2입니다.',
      difficulty: 'basic',
      hints: ['45-45-90 삼각형은 대칭입니다', 'sin 45°와 cos 45°는 같은 값을 가집니다']
    },

    // Intermediate Level Problems
    {
      id: 'tr-p6',
      question: '직각삼각형에서 sin 60°의 값을 구하시오.',
      answer: '√3/2',
      explanation: '30-60-90 삼각형에서 sin 60° = √3/2입니다.',
      difficulty: 'intermediate',
      hints: ['30-60-90 삼각형을 그려보세요', '빗변의 길이를 2로 잡으면 계산이 쉽습니다']
    },
    {
      id: 'tr-p7',
      question: '직각삼각형에서 cos 30°의 값을 구하시오.',
      answer: '√3/2',
      explanation: '30-60-90 삼각형에서 cos 30° = √3/2입니다.',
      difficulty: 'intermediate',
      hints: ['30-60-90 삼각형을 그려보세요', '60° 각에서의 사인 값과 같습니다']
    },
    {
      id: 'tr-p8',
      question: '직각삼각형에서 tan 60°의 값을 구하시오.',
      answer: '√3',
      explanation: '30-60-90 삼각형에서 tan 60° = √3입니다.',
      difficulty: 'intermediate',
      hints: ['sin 60°와 cos 60°의 값을 이용하세요', 'tan θ = sin θ / cos θ 공식을 사용하세요']
    },
    {
      id: 'tr-p9',
      question: '직각삼각형에서 tan 30°의 값을 구하시오.',
      answer: '1/√3',
      explanation: '30-60-90 삼각형에서 tan 30° = 1/√3입니다.',
      difficulty: 'intermediate',
      hints: ['sin 30°와 cos 30°의 값을 이용하세요', 'tan θ = sin θ / cos θ 공식을 사용하세요']
    },
    {
      id: 'tr-p10',
      question: '높이가 30m인 건물을 60m 떨어진 지점에서 올려다볼 때의 각도를 구하시오.',
      answer: '약 26.57°',
      explanation: 'tan θ = 30/60 = 1/2이므로, θ = arctan(1/2) ≈ 26.57°',
      difficulty: 'intermediate',
      hints: [
        '탄젠트는 높이와 거리의 비율입니다',
        'tan θ = 높이/거리',
        '역탄젠트(arctan)를 사용하여 각도를 구합니다'
      ]
    },

    // Advanced Level Problems
    {
      id: 'tr-p11',
      question: '20m 높이의 나무와 그 끝점이 지면과 이루는 각도가 60°일 때, 관측자와 나무 사이의 거리를 구하시오.',
      answer: '11.55m',
      explanation: 'tan 60° = 20/x\n√3 = 20/x\nx = 20/√3 ≈ 11.55',
      difficulty: 'advanced',
      hints: [
        '탄젠트 공식을 사용하세요',
        'tan 60° = √3임을 기억하세요',
        '방정식을 풀어 거리를 구하세요'
      ]
    },
    {
      id: 'tr-p12',
      question: '45° 각도로 설치된 사다리가 벽에 기대어 있을 때, 사다리의 길이가 10m라면 사다리의 끝점이 지면으로부터 얼마나 높이 있는지 구하시오.',
      answer: '7.07m',
      explanation: 'sin 45° = h/10\n1/√2 = h/10\nh = 10/√2 ≈ 7.07',
      difficulty: 'advanced',
      hints: [
        '사인 공식을 사용하세요',
        'sin 45° = 1/√2임을 기억하세요',
        '높이를 구하는 방정식을 풀어보세요'
      ]
    },
    {
      id: 'tr-p13',
      question: '한 변의 길이가 8m인 정삼각형의 높이를 구하시오.',
      answer: '6.93m',
      explanation: '높이 = 8 × sin 60° = 8 × (√3/2) ≈ 6.93',
      difficulty: 'advanced',
      hints: [
        '정삼각형의 높이는 한 변에서 대각의 꼭지점까지의 수직거리입니다',
        '60° 각에서의 사인 값을 사용하세요',
        '계산 결과를 소수점 둘째 자리까지 나타내세요'
      ]
    },
    {
      id: 'tr-p14',
      question: '30° 경사로의 길이가 12m일 때, 경사로의 수평 거리와 높이를 각각 구하시오.',
      answer: '수평 거리: 10.39m, 높이: 6m',
      explanation: '수평 거리 = 12 × cos 30° = 12 × (√3/2) ≈ 10.39\n높이 = 12 × sin 30° = 12 × (1/2) = 6',
      difficulty: 'advanced',
      hints: [
        '수평 거리는 코사인을 사용하여 구합니다',
        '높이는 사인을 사용하여 구합니다',
        '30° 각에서의 삼각비 값을 기억하세요'
      ]
    },
    {
      id: 'tr-p15',
      question: '직각삼각형에서 빗변이 15cm이고 한 각이 60°일 때, 높이와 밑변의 길이를 구하시오.',
      answer: '높이: 13cm, 밑변: 7.5cm',
      explanation: '높이 = 15 × sin 60° = 15 × (√3/2) ≈ 13\n밑변 = 15 × cos 60° = 15 × (1/2) = 7.5',
      difficulty: 'advanced',
      hints: [
        '높이는 빗변과 사인의 곱입니다',
        '밑변은 빗변과 코사인의 곱입니다',
        '60° 각에서의 삼각비 값을 사용하세요'
      ]
    },
    {
      id: 'tr-p16',
      question: '25m 높이의 건물 꼭대기에서 관측한 지면의 한 점까지의 각도가 45°일 때, 그 점까지의 수평 거리를 구하시오.',
      answer: '25m',
      explanation: 'tan 45° = 25/x\n1 = 25/x\nx = 25',
      difficulty: 'advanced',
      hints: [
        '탄젠트 공식을 사용하세요',
        'tan 45° = 1임을 기억하세요',
        '방정식을 풀어 거리를 구하세요'
      ]
    },
    {
      id: 'tr-p17',
      question: '직각삼각형에서 높이가 8cm이고 각도가 30°일 때, 빗변의 길이를 구하시오.',
      answer: '16cm',
      explanation: 'sin 30° = 8/x\n1/2 = 8/x\nx = 16',
      difficulty: 'advanced',
      hints: [
        '사인 공식을 사용하세요',
        'sin 30° = 1/2임을 기억하세요',
        '방정식을 풀어 빗변을 구하세요'
      ]
    },
    {
      id: 'tr-p18',
      question: '직각삼각형에서 밑변이 10cm이고 각도가 60°일 때, 높이를 구하시오.',
      answer: '17.32cm',
      explanation: 'tan 60° = h/10\n√3 = h/10\nh = 10√3 ≈ 17.32',
      difficulty: 'advanced',
      hints: [
        '탄젠트 공식을 사용하세요',
        'tan 60° = √3임을 기억하세요',
        '방정식을 풀어 높이를 구하세요'
      ]
    },
    {
      id: 'tr-p19',
      question: '40m 높이의 타워에서 지면의 한 점을 내려다보는 각도가 30°일 때, 그 점까지의 수평 거리를 구하시오.',
      answer: '69.28m',
      explanation: 'tan 30° = 40/x\n1/√3 = 40/x\nx = 40√3 ≈ 69.28',
      difficulty: 'advanced',
      hints: [
        '탄젠트 공식을 사용하세요',
        'tan 30° = 1/√3임을 기억하세요',
        '방정식을 풀어 거리를 구하세요'
      ]
    },
    {
      id: 'tr-p20',
      question: '직각삼각형에서 빗변이 20cm이고 한 각이 45°일 때, 나머지 두 변의 길이를 구하시오.',
      answer: '각각 14.14cm',
      explanation: '45° 각에서는 두 변의 길이가 같습니다.\n각 변의 길이 = 20 × sin 45° = 20 × (1/√2) ≈ 14.14',
      difficulty: 'advanced',
      hints: [
        '45° 각에서는 두 변의 길이가 같다는 것을 이용하세요',
        'sin 45° = cos 45° = 1/√2임을 기억하세요',
        '빗변과 삼각비를 이용하여 계산하세요'
      ]
    }
  ]
}; 