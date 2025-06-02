import { Practice } from '../types';

export const statisticsPractice: Practice = {
  id: 'statistics-practice',
  topicId: 'statistics',
  chapterNumber: 6,
  title: '통계 연습 문제',
  problems: [
    // Basic Level Problems
    {
      id: 'st-p1',
      question: '다음 자료의 평균을 구하시오.\n2, 3, 5, 7, 8',
      answer: '5',
      explanation: '평균 = (2 + 3 + 5 + 7 + 8) ÷ 5 = 25 ÷ 5 = 5',
      difficulty: 'basic',
      hints: ['모든 수를 더하세요', '더한 값을 자료의 개수로 나누세요']
    },
    {
      id: 'st-p2',
      question: '다음 자료의 중앙값을 구하시오.\n1, 3, 4, 7, 9',
      answer: '4',
      explanation: '자료를 크기 순으로 나열했을 때 가운데 있는 값이 중앙값입니다.\n1, 3, 4, 7, 9에서 가운데 있는 값은 4',
      difficulty: 'basic',
      hints: ['자료를 크기 순으로 나열하세요', '홀수 개의 자료에서는 가운데 값이 중앙값입니다']
    },
    {
      id: 'st-p3',
      question: '다음 자료의 최빈값을 구하시오.\n2, 3, 3, 4, 4, 4, 5, 5',
      answer: '4',
      explanation: '가장 많이 나타나는 값이 최빈값입니다.\n2는 1번, 3은 2번, 4는 3번, 5는 2번 나타나므로 4가 최빈값입니다.',
      difficulty: 'basic',
      hints: ['각 숫자가 몇 번 나타나는지 세어보세요', '가장 많이 나타나는 값을 찾으세요']
    },
    {
      id: 'st-p4',
      question: '다음 자료의 범위를 구하시오.\n10, 15, 20, 25, 30',
      answer: '20',
      explanation: '범위 = 최댓값 - 최솟값\n= 30 - 10 = 20',
      difficulty: 'basic',
      hints: ['최댓값과 최솟값을 찾으세요', '최댓값에서 최솟값을 빼세요']
    },
    {
      id: 'st-p5',
      question: '다음 자료의 평균을 구하시오.\n1, 1, 2, 2, 2, 3, 3, 4',
      answer: '2.25',
      explanation: '평균 = (1×2 + 2×3 + 3×2 + 4×1) ÷ 8\n= 18 ÷ 8 = 2.25',
      difficulty: 'basic',
      hints: ['각 값이 몇 번 나타나는지 세어보세요', '전체 합을 구한 후 개수로 나누세요']
    },

    // Intermediate Level Problems
    {
      id: 'st-p6',
      question: '다음 자료의 중앙값을 구하시오.\n2, 4, 6, 8, 8, 9',
      answer: '7',
      explanation: '짝수 개의 자료에서는 가운데 두 값의 평균이 중앙값입니다.\n가운데 두 값은 6과 8이므로,\n중앙값 = (6 + 8) ÷ 2 = 7',
      difficulty: 'intermediate',
      hints: ['자료를 크기 순으로 나열하세요', '짝수 개의 자료에서는 가운데 두 값의 평균을 구하세요']
    },
    {
      id: 'st-p7',
      question: '다음 자료의 평균과 중앙값을 비교하시오.\n1, 2, 3, 4, 15',
      answer: '평균: 5, 중앙값: 3, 평균이 중앙값보다 크다',
      explanation: '평균 = (1 + 2 + 3 + 4 + 15) ÷ 5 = 25 ÷ 5 = 5\n중앙값 = 3\n평균이 중앙값보다 크다',
      difficulty: 'intermediate',
      hints: ['평균과 중앙값을 각각 구하세요', '특이값(15)이 평균에 미치는 영향을 생각해보세요']
    },
    {
      id: 'st-p8',
      question: '다음 자료의 분산을 구하시오.\n1, 2, 3, 4, 5',
      answer: '2',
      explanation: '평균 = 3\n편차의 제곱: (1-3)² + (2-3)² + (3-3)² + (4-3)² + (5-3)²\n= 4 + 1 + 0 + 1 + 4 = 10\n분산 = 10 ÷ 5 = 2',
      difficulty: 'intermediate',
      hints: ['먼저 평균을 구하세요', '각 값에서 평균을 뺀 값의 제곱을 구하세요', '제곱의 합을 자료의 개수로 나누세요']
    },
    {
      id: 'st-p9',
      question: '다음 자료의 표준편차를 구하시오.\n2, 2, 2, 2',
      answer: '0',
      explanation: '모든 값이 같으므로 평균도 2\n편차가 모두 0이므로 분산과 표준편차도 0',
      difficulty: 'intermediate',
      hints: ['모든 값이 같은 경우를 생각해보세요', '평균과의 차이(편차)를 구해보세요']
    },
    {
      id: 'st-p10',
      question: '어느 학급 학생들의 수학 점수가 다음과 같다. 평균을 구하시오.\n60점: 2명, 70점: 3명, 80점: 4명, 90점: 1명',
      answer: '73',
      explanation: '(60×2 + 70×3 + 80×4 + 90×1) ÷ 10\n= 730 ÷ 10 = 73',
      difficulty: 'intermediate',
      hints: ['각 점수와 학생 수를 곱하세요', '전체 합을 전체 학생 수로 나누세요']
    },

    // Advanced Level Problems
    {
      id: 'st-p11',
      question: '다음 자료의 사분위수범위를 구하시오.\n2, 3, 4, 5, 6, 7, 8, 9',
      answer: '4',
      explanation: '제1사분위수(Q₁) = 3.5\n제3사분위수(Q₃) = 7.5\n사분위수범위 = Q₃ - Q₁ = 7.5 - 3.5 = 4',
      difficulty: 'advanced',
      hints: ['제1사분위수와 제3사분위수를 구하세요', '두 값의 차이를 구하세요']
    },
    {
      id: 'st-p12',
      question: '다음은 어느 학급 학생들의 키를 조사한 자료이다. 중앙값을 구하시오.\n150cm: 3명, 155cm: 4명, 160cm: 5명, 165cm: 3명',
      answer: '160cm',
      explanation: '전체 15명 중 8번째 학생의 키가 중앙값\n150cm가 3명, 155cm가 4명이므로 8번째는 160cm',
      difficulty: 'advanced',
      hints: ['전체 학생 수를 구하세요', '순서대로 세어가며 중앙에 위치한 값을 찾으세요']
    },
    {
      id: 'st-p13',
      question: '다음 자료에서 평균이 70이 되기 위해 □에 들어갈 값을 구하시오.\n60, 65, □, 75, 80',
      answer: '70',
      explanation: '(60 + 65 + □ + 75 + 80) ÷ 5 = 70\n280 + □ = 350\n□ = 70',
      difficulty: 'advanced',
      hints: ['평균의 정의를 이용하여 방정식을 세우세요', '주어진 값들의 합을 구하세요']
    },
    {
      id: 'st-p14',
      question: '다음 자료의 변동계수를 구하시오.\n10, 20, 30, 40',
      answer: '0.5',
      explanation: '평균 = 25\n표준편차 = 12.5\n변동계수 = 12.5 ÷ 25 = 0.5',
      difficulty: 'advanced',
      hints: ['평균과 표준편차를 구하세요', '표준편차를 평균으로 나누세요']
    },
    {
      id: 'st-p15',
      question: '다음은 어느 회사 직원들의 월급을 조사한 자료이다. 중앙값을 구하시오.\n200만원: 5명, 300만원: 8명, 400만원: 4명, 500만원: 3명',
      answer: '300만원',
      explanation: '전체 20명 중 10번째와 11번째의 평균이 중앙값\n두 값 모두 300만원이므로 중앙값은 300만원',
      difficulty: 'advanced',
      hints: ['전체 직원 수를 구하세요', '순서대로 세어가며 중앙에 위치한 값을 찾으세요']
    },
    {
      id: 'st-p16',
      question: '다음 자료의 평균, 중앙값, 최빈값을 모두 구하시오.\n1, 2, 2, 3, 3, 3, 4, 4',
      answer: '평균: 2.75, 중앙값: 3, 최빈값: 3',
      explanation: '평균 = 22 ÷ 8 = 2.75\n중앙값 = (3 + 3) ÷ 2 = 3\n3이 가장 많이 나타나므로 최빈값은 3',
      difficulty: 'advanced',
      hints: ['각 통계값을 순서대로 구하세요', '평균, 중앙값, 최빈값의 정의를 각각 적용하세요']
    },
    {
      id: 'st-p17',
      question: '다음 자료에서 최댓값을 제외했을 때의 평균과 원래 평균의 차이를 구하시오.\n2, 4, 6, 8, 20',
      answer: '2',
      explanation: '원래 평균 = 40 ÷ 5 = 8\n최댓값 제외 평균 = 20 ÷ 4 = 5\n차이 = 8 - 5 = 3',
      difficulty: 'advanced',
      hints: ['원래 평균을 구하세요', '최댓값을 제외한 평균을 구하세요', '두 값의 차이를 구하세요']
    },
    {
      id: 'st-p18',
      question: '어느 학급 학생들의 수학 성적 평균은 70점이고 표준편차는 10점이다. 이 학급에서 80점 이상인 학생들은 상위 몇 %에 해당하는가?',
      answer: '약 15.87%',
      explanation: '표준화 점수(z) = (80-70)/10 = 1\n표준정규분포표에서 z=1일 때 상위 약 15.87%',
      difficulty: 'advanced',
      hints: ['표준화 점수를 구하세요', '표준정규분포표를 이용하세요']
    },
    {
      id: 'st-p19',
      question: '다음 자료의 상자그림을 그리기 위해 필요한 다섯 수를 구하시오.\n2, 3, 4, 5, 6, 7, 8, 9, 10',
      answer: '최솟값: 2, Q₁: 3.5, 중앙값: 6, Q₃: 8.5, 최댓값: 10',
      explanation: '자료를 순서대로 나열하고\n최솟값 = 2\nQ₁ = (3+4)/2 = 3.5\n중앙값 = 6\nQ₃ = (8+9)/2 = 8.5\n최댓값 = 10',
      difficulty: 'advanced',
      hints: ['자료를 크기 순으로 나열하세요', '각 위치의 값을 순서대로 구하세요']
    },
    {
      id: 'st-p20',
      question: '다음은 어느 학교 학생들의 키를 조사한 도수분포표이다. 계급값을 이용하여 평균을 구하시오.\n150~155: 5명\n155~160: 8명\n160~165: 12명\n165~170: 5명',
      answer: '160cm',
      explanation: '계급값: 152.5, 157.5, 162.5, 167.5\n(152.5×5 + 157.5×8 + 162.5×12 + 167.5×5) ÷ 30\n= 4800 ÷ 30 = 160',
      difficulty: 'advanced',
      hints: ['각 계급의 계급값을 구하세요', '계급값과 도수를 곱하세요', '전체 합을 전체 도수로 나누세요']
    }
  ]
}; 