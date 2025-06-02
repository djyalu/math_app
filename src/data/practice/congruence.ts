import { Practice } from '../types';

export const congruencePractice: Practice = {
  id: 'congruence-similarity-practice',
  topicId: 'congruence-similarity',
  chapterNumber: 7,
  title: '합동과 닮음 연습 문제',
  problems: [
    {
      id: 'p7-1',
      question: '두 삼각형이 합동이기 위한 조건 중 ASA 조건을 설명하고, 예시를 들어보시오.',
      answer: '두 삼각형에서 한 각과 그 각을 포함하는 두 변이 각각 같을 때 두 삼각형은 합동이다.',
      explanation: 'ASA(Angle-Side-Angle) 조건은 다음과 같습니다:\n1. 두 삼각형의 한 각이 같고\n2. 그 각을 포함하는 한 변의 길이가 같으며\n3. 다른 한 각이 같을 때\n두 삼각형은 합동입니다.',
      difficulty: 'basic',
      hints: [
        'ASA는 Angle-Side-Angle의 약자입니다',
        '각-변-각 순서로 생각해보세요',
        '두 삼각형의 대응하는 부분을 찾아보세요'
      ]
    },
    {
      id: 'p7-2',
      question: '닮음비가 2:3인 두 삼각형에서, 작은 삼각형의 둘레가 12cm일 때, 큰 삼각형의 둘레를 구하시오.',
      answer: '18cm',
      explanation: '닮음비가 2:3이므로 길이의 비도 2:3입니다.\n작은 삼각형의 둘레가 12cm이므로,\n큰 삼각형의 둘레 = 12 × (3/2) = 18cm',
      difficulty: 'intermediate',
      hints: [
        '닮음비는 모든 대응 변의 길이 비와 같습니다',
        '둘레는 세 변의 길이의 합입니다',
        '비례식을 세워 계산해보세요'
      ]
    },
    {
      id: 'p7-3',
      question: '삼각형 ABC와 DEF가 합동일 때, ∠A = 60°, BC = 8cm라면 ∠D와 EF의 길이를 구하시오.',
      answer: '∠D = 60°, EF = 8cm',
      explanation: '합동인 도형은 대응하는 모든 변의 길이와 각의 크기가 같습니다.\n따라서 ∠A = ∠D = 60°이고, BC = EF = 8cm입니다.',
      difficulty: 'basic',
      hints: [
        '합동인 도형의 성질을 생각해보세요',
        '대응하는 부분들을 찾아보세요',
        '대응하는 부분은 항상 같습니다'
      ]
    },
    {
      id: 'p7-4',
      question: '두 삼각형이 닮음일 때, 한 삼각형의 넓이가 다른 삼각형 넓이의 4배라면 닮음비는 얼마인가?',
      answer: '2:1 또는 1:2',
      explanation: '닮음비가 a:b일 때, 넓이의 비는 a²:b²입니다.\n넓이가 4배이므로 a²:b² = 4:1\n따라서 a:b = 2:1 또는 1:2',
      difficulty: 'advanced',
      hints: [
        '닮음비와 넓이의 관계를 생각해보세요',
        '넓이는 길이의 제곱에 비례합니다',
        '제곱근을 이용하여 닮음비를 구해보세요'
      ]
    },
    {
      id: 'p7-5',
      question: '삼각형의 세 변의 길이가 3cm, 4cm, 5cm일 때, 이와 닮은 삼각형의 가장 긴 변의 길이가 10cm라면 나머지 두 변의 길이를 구하시오.',
      answer: '6cm, 8cm',
      explanation: '원래 삼각형의 가장 긴 변이 5cm이고 닮은 삼각형의 가장 긴 변이 10cm이므로 닮음비는 1:2입니다.\n따라서 3cm → 6cm, 4cm → 8cm가 됩니다.',
      difficulty: 'intermediate',
      hints: [
        '가장 긴 변을 비교하여 닮음비를 구하세요',
        '구한 닮음비를 나머지 변에 적용하세요',
        '모든 변은 같은 비율로 커집니다'
      ]
    },
    {
      id: 'p7-6',
      question: '삼각형 ABC에서 변 BC의 중점을 M이라 할 때, 선분 AM이 BC와 평행한 선분 DE와 만나는 점을 P라 하자. 만약 AP:PM = 2:3이면 AD:DE의 비를 구하시오.',
      answer: '2:5',
      explanation: '삼각형의 중점연결정리와 평행선에 의해 잘린 선분의 비례 관계에 의해,\nAP:PM = AD:DE가 성립합니다.\n따라서 AD:DE = 2:3이고, AD:(AD+DE) = 2:5입니다.',
      difficulty: 'advanced',
      hints: [
        '중점연결정리를 생각해보세요',
        '평행선과 비례 관계를 이용하세요',
        '전체와 부분의 비를 구해보세요'
      ]
    },
    {
      id: 'p7-7',
      question: '합동인 두 삼각형에서 대응하지 않는 변과 각을 모두 찾으시오. (∆ABC와 ∆DEF에서 AB=DE, ∠A=∠D, ∠C=∠F)',
      answer: 'BC와 EF는 대응하지 않음, ∠B와 ∠E는 대응하지 않음',
      explanation: '주어진 조건에서 AB=DE, ∠A=∠D, ∠C=∠F가 대응합니다.\n따라서 나머지 BC와 EF, ∠B와 ∠E는 대응하지 않습니다.',
      difficulty: 'basic',
      hints: [
        '주어진 대응 관계를 먼저 확인하세요',
        '대응하는 부분들을 표시해보세요',
        '남은 부분들이 대응하지 않는 것입니다'
      ]
    },
    {
      id: 'p7-8',
      question: '닮음비가 3:4인 두 정육각형의 둘레의 차이가 12cm일 때, 두 정육각형의 한 변의 길이를 각각 구하시오.',
      answer: '작은 정육각형: 3cm, 큰 정육각형: 4cm',
      explanation: '정육각형의 둘레는 한 변의 길이의 6배입니다.\n닮음비가 3:4이므로 한 변의 길이도 3:4\n둘레의 차이가 12cm이므로 6x - 6y = 12 (x,y는 각각의 한 변의 길이)\n따라서 x = 4cm, y = 3cm',
      difficulty: 'intermediate',
      hints: [
        '정육각형의 둘레와 한 변의 관계를 생각해보세요',
        '닮음비를 한 변의 길이에 적용하세요',
        '둘레의 차이를 이용하여 방정식을 세우세요'
      ]
    },
    {
      id: 'p7-9',
      question: '삼각형 ABC의 내각이 30°, 60°, 90°이고, 빗변의 길이가 8cm일 때, 이와 닮은 삼각형 DEF의 넓이가 48㎠라면 삼각형 DEF의 빗변의 길이를 구하시오.',
      answer: '16cm',
      explanation: '30°-60°-90° 삼각형의 넓이는 (빗변의 길이)² ÷ 4입니다.\n삼각형 ABC의 넓이는 8² ÷ 4 = 16㎠\n넓이가 48㎠이므로 닮음비는 1:√3\n따라서 빗변의 길이는 8√3 ≈ 16cm',
      difficulty: 'advanced',
      hints: [
        '30°-60°-90° 삼각형의 성질을 이용하세요',
        '넓이의 비와 닮음비의 관계를 생각해보세요',
        '닮음비를 빗변의 길이에 적용하세요'
      ]
    },
    {
      id: 'p7-10',
      question: '사다리꼴 ABCD에서 평행한 두 변 AB, DC의 길이가 각각 8cm, 12cm이다. 두 대각선의 교점을 P라 할 때, AP:PB와 CP:PD의 비를 각각 구하시오.',
      answer: 'AP:PB = 3:5, CP:PD = 2:3',
      explanation: '사다리꼴의 대각선의 교점은 평행한 두 변의 길이의 비에 따라 나뉩니다.\nAP:PB = DC:AB = 12:8 = 3:2\nCP:PD = AB:DC = 8:12 = 2:3',
      difficulty: 'advanced',
      hints: [
        '사다리꼴의 대각선의 성질을 생각해보세요',
        '평행한 두 변의 길이 비를 이용하세요',
        '대각선이 어떤 비율로 나누어지는지 생각해보세요'
      ]
    }
  ]
}; 