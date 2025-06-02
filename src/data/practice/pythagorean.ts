import { Practice } from '../types';

export const pythagoreanPractice: Practice = {
  id: 'pythagorean-practice',
  topicId: 'pythagorean-theorem',
  chapterNumber: 1,
  title: '피타고라스 정리 연습 문제',
  problems: [
    // Basic Level Problems
    {
      id: 'pt-p1',
      question: '직각삼각형의 두 변의 길이가 3cm와 4cm일 때, 빗변의 길이를 구하시오.',
      answer: '5cm',
      explanation: '피타고라스 정리에 의해 a² + b² = c²이므로,\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = 5',
      difficulty: 'basic',
      hints: [
        '피타고라스 정리 공식을 떠올려보세요',
        '두 변의 제곱을 더하세요',
        '제곱근을 구하세요'
      ]
    },
    {
      id: 'pt-p2',
      question: '직각삼각형의 빗변이 13cm, 한 변이 5cm일 때, 나머지 한 변의 길이를 구하시오.',
      answer: '12cm',
      explanation: '피타고라스 정리에 의해 5² + x² = 13²\n25 + x² = 169\nx² = 144\nx = 12',
      difficulty: 'basic',
      hints: [
        '피타고라스 정리 공식을 써보세요',
        '알려진 값을 대입해보세요',
        '방정식을 풀어보세요'
      ]
    },
    {
      id: 'pt-p3',
      question: '직각삼각형의 두 변의 길이가 6cm와 8cm일 때, 빗변의 길이를 구하시오.',
      answer: '10cm',
      explanation: '피타고라스 정리에 의해 6² + 8² = c²\n36 + 64 = c²\n100 = c²\nc = 10',
      difficulty: 'basic',
      hints: [
        '피타고라스 정리를 적용하세요',
        '각 변의 제곱을 계산하세요',
        '제곱근을 구하세요'
      ]
    },
    {
      id: 'pt-p4',
      question: '빗변이 17cm이고 한 변이 8cm인 직각삼각형의 나머지 한 변의 길이를 구하시오.',
      answer: '15cm',
      explanation: '피타고라스 정리에 의해 8² + x² = 17²\n64 + x² = 289\nx² = 225\nx = 15',
      difficulty: 'basic',
      hints: [
        '피타고라스 정리를 사용하세요',
        '알려진 값을 대입하세요',
        '방정식을 풀어보세요'
      ]
    },
    {
      id: 'pt-p5',
      question: '직각삼각형의 두 변의 길이가 5cm와 12cm일 때, 빗변의 길이를 구하시오.',
      answer: '13cm',
      explanation: '피타고라스 정리에 의해 5² + 12² = c²\n25 + 144 = c²\n169 = c²\nc = 13',
      difficulty: 'basic',
      hints: [
        '피타고라스 정리를 적용하세요',
        '각 변의 제곱을 계산하세요',
        '제곱근을 구하세요'
      ]
    },

    // Intermediate Level Problems
    {
      id: 'pt-p6',
      question: '한 변의 길이가 9cm이고 빗변이 15cm인 직각삼각형의 나머지 한 변의 길이를 구하시오.',
      answer: '12cm',
      explanation: '피타고라스 정리에 의해 9² + x² = 15²\n81 + x² = 225\nx² = 144\nx = 12',
      difficulty: 'intermediate',
      hints: [
        '피타고라스 정리를 사용하세요',
        '알려진 값을 대입하세요',
        '방정식을 풀어보세요'
      ]
    },
    {
      id: 'pt-p7',
      question: '높이가 24m인 빌딩의 꼭대기에서 지면까지 밧줄을 연결하려고 합니다. 밧줄이 지면과 이루는 각도가 직각이 되도록 하고, 밧줄의 끝이 빌딩에서 수평거리로 18m 떨어진 지점에 닿도록 할 때, 필요한 밧줄의 길이는 몇 m인가?',
      answer: '30m',
      explanation: '직각삼각형에서 높이가 24m, 밑변이 18m이므로\n밧줄의 길이² = 24² + 18²\n= 576 + 324 = 900\n밧줄의 길이 = 30',
      difficulty: 'intermediate',
      hints: [
        '빌딩의 높이와 수평거리로 직각삼각형을 만드세요',
        '피타고라스 정리를 적용하세요',
        '계산을 단순화하세요'
      ]
    },
    {
      id: 'pt-p8',
      question: '직각삼각형의 두 변의 길이가 7cm와 24cm일 때, 빗변의 길이를 구하시오.',
      answer: '25cm',
      explanation: '피타고라스 정리에 의해 7² + 24² = c²\n49 + 576 = c²\n625 = c²\nc = 25',
      difficulty: 'intermediate',
      hints: [
        '피타고라스 정리를 적용하세요',
        '각 변의 제곱을 계산하세요',
        '제곱근을 구하세요'
      ]
    },
    {
      id: 'pt-p9',
      question: '빗변이 41cm이고 한 변이 40cm인 직각삼각형의 나머지 한 변의 길이를 구하시오.',
      answer: '9cm',
      explanation: '피타고라스 정리에 의해 40² + x² = 41²\n1600 + x² = 1681\nx² = 81\nx = 9',
      difficulty: 'intermediate',
      hints: [
        '피타고라스 정리를 사용하세요',
        '큰 수의 제곱을 계산하세요',
        '방정식을 풀어보세요'
      ]
    },
    {
      id: 'pt-p10',
      question: '직각삼각형의 두 변의 길이가 20cm와 21cm일 때, 빗변의 길이를 구하시오.',
      answer: '29cm',
      explanation: '피타고라스 정리에 의해 20² + 21² = c²\n400 + 441 = c²\n841 = c²\nc = 29',
      difficulty: 'intermediate',
      hints: [
        '피타고라스 정리를 적용하세요',
        '각 변의 제곱을 계산하세요',
        '제곱근을 구하세요'
      ]
    },

    // Advanced Level Problems
    {
      id: 'pt-p11',
      question: '15m 높이의 사다리를 벽에 기대어 놓았을 때, 사다리의 아랫부분이 벽에서 9m 떨어져 있다면 사다리의 길이는 몇 m인가?',
      answer: '17.49m',
      explanation: '피타고라스 정리에 의해 15² + 9² = c²\n225 + 81 = c²\n306 = c²\nc ≈ 17.49',
      difficulty: 'advanced',
      hints: [
        '사다리, 벽, 바닥이 이루는 삼각형을 생각해보세요',
        '피타고라스 정리를 적용하세요',
        '소수점 둘째 자리까지 계산하세요'
      ]
    },
    {
      id: 'pt-p12',
      question: '직각삼각형의 빗변이 25cm이고 한 변이 24cm일 때, 나머지 한 변의 길이를 구하시오.',
      answer: '7cm',
      explanation: '피타고라스 정리에 의해 24² + x² = 25²\n576 + x² = 625\nx² = 49\nx = 7',
      difficulty: 'advanced',
      hints: [
        '피타고라스 정리를 사용하세요',
        '큰 수의 제곱을 계산하세요',
        '방정식을 풀어보세요'
      ]
    },
    {
      id: 'pt-p13',
      question: '30m 높이의 전신주 꼭대기에서 지면까지 줄을 연결하려고 합니다. 줄이 지면과 만나는 지점이 전신주에서 수평거리로 40m 떨어져 있다면, 필요한 줄의 길이는 몇 m인가?',
      answer: '50m',
      explanation: '피타고라스 정리에 의해 30² + 40² = c²\n900 + 1600 = c²\n2500 = c²\nc = 50',
      difficulty: 'advanced',
      hints: [
        '전신주의 높이와 수평거리로 직각삼각형을 만드세요',
        '피타고라스 정리를 적용하세요',
        '계산을 단순화하세요'
      ]
    },
    {
      id: 'pt-p14',
      question: '직각삼각형의 두 변의 길이가 28cm와 45cm일 때, 빗변의 길이를 구하시오.',
      answer: '53cm',
      explanation: '피타고라스 정리에 의해 28² + 45² = c²\n784 + 2025 = c²\n2809 = c²\nc = 53',
      difficulty: 'advanced',
      hints: [
        '피타고라스 정리를 적용하세요',
        '각 변의 제곱을 계산하세요',
        '제곱근을 구하세요'
      ]
    },
    {
      id: 'pt-p15',
      question: '빗변이 85cm이고 한 변이 84cm인 직각삼각형의 나머지 한 변의 길이를 구하시오.',
      answer: '13cm',
      explanation: '피타고라스 정리에 의해 84² + x² = 85²\n7056 + x² = 7225\nx² = 169\nx = 13',
      difficulty: 'advanced',
      hints: [
        '피타고라스 정리를 사용하세요',
        '큰 수의 제곱을 계산하세요',
        '방정식을 풀어보세요'
      ]
    },
    {
      id: 'pt-p16',
      question: '직각삼각형의 두 변의 길이 비가 3:4이고, 빗변의 길이가 25cm일 때, 두 변의 길이를 각각 구하시오.',
      answer: '15cm, 20cm',
      explanation: '두 변의 길이를 3x, 4x라 하면\n(3x)² + (4x)² = 25²\n9x² + 16x² = 625\n25x² = 625\nx = 5\n따라서 두 변의 길이는 15cm, 20cm',
      difficulty: 'advanced',
      hints: [
        '비례식을 세워보세요',
        '피타고라스 정리를 적용하세요',
        '방정식을 풀어보세요'
      ]
    },
    {
      id: 'pt-p17',
      question: '한 변의 길이가 12cm인 정사각형의 대각선의 길이를 구하시오.',
      answer: '16.97cm',
      explanation: '정사각형의 대각선은 직각삼각형의 빗변이므로\n12² + 12² = c²\n144 + 144 = c²\n288 = c²\nc ≈ 16.97',
      difficulty: 'advanced',
      hints: [
        '정사각형의 대각선이 만드는 직각삼각형을 생각해보세요',
        '피타고라스 정리를 적용하세요',
        '소수점 둘째 자리까지 계산하세요'
      ]
    },
    {
      id: 'pt-p18',
      question: '직각삼각형의 세 변의 길이가 모두 정수이고, 빗변의 길이가 30 이하인 직각삼각형의 세 변의 길이를 모두 구하시오. (단, 서로 다른 삼각형을 찾으시오)',
      answer: '3,4,5 / 5,12,13 / 6,8,10 / 8,15,17 / 9,12,15 / 10,24,26',
      explanation: '피타고라스 수를 찾아야 합니다.\n3,4,5는 가장 기본적인 피타고라스 수입니다.\n다른 피타고라스 수들도 찾아보면 됩니다.',
      difficulty: 'advanced',
      hints: [
        '가장 작은 피타고라스 수부터 시작하세요',
        '빗변이 30 이하인 경우만 찾으세요',
        '모든 변의 길이가 정수여야 합니다'
      ]
    },
    {
      id: 'pt-p19',
      question: '직각삼각형의 빗변이 37cm이고 다른 한 변이 35cm일 때, 나머지 한 변의 길이를 구하시오.',
      answer: '12cm',
      explanation: '피타고라스 정리에 의해 35² + x² = 37²\n1225 + x² = 1369\nx² = 144\nx = 12',
      difficulty: 'advanced',
      hints: [
        '피타고라스 정리를 사용하세요',
        '큰 수의 제곱을 계산하세요',
        '방정식을 풀어보세요'
      ]
    },
    {
      id: 'pt-p20',
      question: '직각삼각형의 두 변의 길이가 16cm와 63cm일 때, 빗변의 길이를 구하시오.',
      answer: '65cm',
      explanation: '피타고라스 정리에 의해 16² + 63² = c²\n256 + 3969 = c²\n4225 = c²\nc = 65',
      difficulty: 'advanced',
      hints: [
        '피타고라스 정리를 적용하세요',
        '각 변의 제곱을 계산하세요',
        '제곱근을 구하세요'
      ]
    }
  ]
}; 