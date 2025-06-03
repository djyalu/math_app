import { ConceptContent } from '../types';

export const probabilityConcepts: ConceptContent[] = [
  {
    id: 'probability-basic-understanding',
    title: '확률의 기본 개념',
    title_en: 'Basic Concepts of Probability',
    description: '확률의 정의, 표본공간과 사건, 확률의 기본 성질을 학습합니다.',
    description_en: 'Learn the definition of probability, sample space and events, and basic properties of probability.',
    explanation: `확률의 기본 개념을 이해합니다:

1. 확률의 정의
- 어떤 사건이 일어날 가능성의 정도를 수치로 나타낸 것
- 0과 1 사이의 실수로 표현됩니다.
- P(A) = (사건 A가 일어나는 경우의 수) / (전체 경우의 수)

2. 표본공간과 사건
- 표본공간(S): 실험에서 일어날 수 있는 모든 결과의 집합
- 사건(Event): 표본공간의 부분집합
- 근원사건: 더 이상 나눌 수 없는 하나의 결과
- 전사건과 공사건

3. 확률의 기본 성질
- 0 ≤ P(A) ≤ 1 (모든 사건 A에 대해)
- P(전체집합) = 1
- P(공집합) = 0
- P(A') = 1 - P(A) (여사건의 확률)

4. 경우의 수와 확률
- 동일한 확률: 각 근원사건이 일어날 확률이 같은 경우
- 순열과 조합을 이용한 경우의 수 계산
- 중복조합과 중복순열`,
    explanation_en: `Understand the basic concepts of probability:

1. Definition of Probability
- A numerical representation of the degree of possibility that an event will occur
- Expressed as a real number between 0 and 1
- P(A) = (Number of outcomes in event A) / (Total number of possible outcomes)

2. Sample Space and Events
- Sample Space (S): The set of all possible outcomes in an experiment
- Event: A subset of the sample space
- Elementary Event: A single outcome that cannot be divided further
- Certain event and impossible event

3. Basic Properties of Probability
- 0 ≤ P(A) ≤ 1 (for all events A)
- P(Sample Space) = 1
- P(Empty Set) = 0
- P(A') = 1 - P(A) (probability of complement event)

4. Counting and Probability
- Equally likely outcomes: When each elementary event has the same probability
- Counting using permutations and combinations
- Combinations and permutations with repetition`,
    examples: [
      {
        problem: '주사위를 한 번 던질 때, 3의 배수가 나올 확률을 구하시오.',
        problem_en: 'When rolling a die once, find the probability of getting a multiple of 3.',
        solution: '1/3',
        explanation: `1. 표본공간 S = {1, 2, 3, 4, 5, 6}
2. 3의 배수가 나오는 사건 A = {3, 6}
3. P(A) = n(A)/n(S) = 2/6 = 1/3`,
        explanation_en: `1. Sample space S = {1, 2, 3, 4, 5, 6}
2. Event A (multiple of 3) = {3, 6}
3. P(A) = n(A)/n(S) = 2/6 = 1/3`
      }
    ],
    visualAids: [
      {
        type: 'image' as const,
        url: '/images/probability-basics.png',
        description: '확률의 기본 개념과 표본공간을 보여주는 다이어그램',
        description_en: 'Diagram showing basic concepts of probability and sample space'
      }
    ],
    keyPoints: [
      '확률은 0과 1 사이의 값을 가집니다.',
      '모든 가능한 결과의 확률의 합은 1입니다.',
      '사건과 여사건의 확률의 합은 1입니다.',
      '표본공간을 정확히 파악하는 것이 중요합니다.'
    ],
    keyPoints_en: [
      'Probability has a value between 0 and 1.',
      'The sum of probabilities of all possible outcomes is 1.',
      'The sum of probabilities of an event and its complement is 1.',
      'It is important to accurately identify the sample space.'
    ],
    commonMistakes: [
      '전체 경우의 수를 잘못 세는 실수',
      '사건을 잘못 정의하는 실수',
      '확률의 범위(0~1)를 벗어나는 답을 구하는 실수'
    ],
    commonMistakes_en: [
      'Incorrectly counting the total number of outcomes',
      'Incorrectly defining events',
      'Getting answers outside the probability range (0-1)'
    ],
    additionalResources: [
      {
        title: '확률의 기본 개념',
        title_en: 'Basic Concepts of Probability',
        url: 'https://openstax.org/books/contemporary-mathematics/pages/7-5-basic-concepts-of-probability',
        type: 'article' as const
      }
    ]
  },
  {
    id: 'probability-experimental-understanding',
    title: '실험확률',
    title_en: 'Experimental Probability',
    description: '실험을 통한 확률의 추정, 상대도수와 이론적 확률의 관계를 학습합니다.',
    description_en: 'Learn about estimating probability through experiments, and the relationship between relative frequency and theoretical probability.',
    explanation: `실험확률의 개념을 이해합니다:

1. 실험확률의 정의
- 실제 실험을 통해 구한 확률
- 상대도수 = (사건이 일어난 횟수) / (전체 실험 횟수)
- 실험 횟수가 증가할수록 이론적 확률에 가까워짐

2. 큰 수의 법칙
- 실험 횟수를 늘릴수록 상대도수가 이론적 확률에 수렴
- 우연의 일치와 법칙성의 구분
- 표본의 크기와 정확도의 관계

3. 기하확률
- 길이, 넓이, 부피를 이용한 확률 계산
- 연속적인 상황에서의 확률
- 무한히 많은 경우의 수가 있는 상황

4. 시뮬레이션
- 컴퓨터를 이용한 확률 실험
- 몬테카르로 방법
- 복잡한 확률 문제의 근사해 구하기`,
    explanation_en: `Understand the concept of experimental probability:

1. Definition of Experimental Probability
- Probability obtained through actual experiments
- Relative frequency = (Number of times event occurred) / (Total number of trials)
- As the number of trials increases, it approaches theoretical probability

2. Law of Large Numbers
- As the number of trials increases, relative frequency converges to theoretical probability
- Distinguishing between coincidence and patterns
- Relationship between sample size and accuracy

3. Geometric Probability
- Probability calculation using length, area, and volume
- Probability in continuous situations
- Situations with infinitely many possible outcomes

4. Simulation
- Probability experiments using computers
- Monte Carlo method
- Finding approximate solutions to complex probability problems`,
    examples: [
      {
        problem: '동전을 100번 던져서 앞면이 48번 나왔을 때, 앞면이 나올 실험확률을 구하시오.',
        problem_en: 'When a coin is flipped 100 times and heads appears 48 times, find the experimental probability of getting heads.',
        solution: '0.48 또는 48%',
        explanation: `1. 실험확률 = 사건이 일어난 횟수 / 전체 실험 횟수
2. 앞면이 나올 실험확률 = 48/100 = 0.48
3. 이론적 확률 0.5와 비교하면 약간의 차이가 있음`,
        explanation_en: `1. Experimental probability = Number of occurrences / Total number of trials
2. Experimental probability of heads = 48/100 = 0.48
3. There is a slight difference compared to the theoretical probability of 0.5`
      }
    ],
    visualAids: [
      {
        type: 'interactive' as const,
        url: '/interactive/experimental-probability',
        description: '동전던지기와 주사위 실험 시뮬레이션',
        description_en: 'Coin flip and dice experiment simulation'
      }
    ],
    keyPoints: [
      '실험 횟수가 많을수록 이론적 확률에 가까워집니다.',
      '기하확률에서는 길이나 넓이의 비를 이용합니다.',
      '시뮬레이션은 복잡한 확률 문제를 해결하는 도구입니다.',
      '상대도수는 실험확률의 추정값입니다.'
    ],
    keyPoints_en: [
      'The more trials, the closer to theoretical probability.',
      'In geometric probability, use ratios of length or area.',
      'Simulation is a tool for solving complex probability problems.',
      'Relative frequency is an estimate of experimental probability.'
    ],
    commonMistakes: [
      '적은 실험 횟수로 일반화하는 실수',
      '기하확률에서 적절한 측도를 선택하지 못하는 실수',
      '이론적 확률과 실험확률을 혼동하는 실수'
    ],
    commonMistakes_en: [
      'Generalizing with too few trials',
      'Failing to choose appropriate measures in geometric probability',
      'Confusing theoretical and experimental probability'
    ],
    additionalResources: [
      {
        title: '실험확률과 이론적 확률',
        title_en: 'Experimental and Theoretical Probability',
        url: 'https://study.com/academy/lesson/comparing-theoretical-experimental-probability.html',
        type: 'article' as const
      }
    ]
  },
  {
    id: 'probability-applications-understanding',
    title: '확률의 활용',
    title_en: 'Applications of Probability',
    description: '복합사건의 확률, 독립사건과 종속사건, 조건부 확률을 학습합니다.',
    description_en: 'Learn about probability of compound events, independent and dependent events, and conditional probability.',
    explanation: `확률의 다양한 활용을 학습합니다:

1. 합사건과 곱사건
- 합사건 A∪B: 사건 A 또는 사건 B가 일어나는 사건
- 곱사건 A∩B: 사건 A와 사건 B가 동시에 일어나는 사건
- P(A∪B) = P(A) + P(B) - P(A∩B)
- 배반사건: P(A∩B) = 0인 경우

2. 독립사건과 종속사건
- 독립사건: 한 사건의 결과가 다른 사건에 영향을 주지 않는 경우
- 종속사건: 한 사건의 결과가 다른 사건에 영향을 주는 경우
- 독립사건의 확률: P(A∩B) = P(A) × P(B)
- 복원과 비복원 추출

3. 조건부 확률
- 사건 B가 일어났다는 조건 하에서 사건 A가 일어날 확률
- P(A|B) = P(A∩B) / P(B) (단, P(B) ≠ 0)
- 확률의 곱셈법칙: P(A∩B) = P(A) × P(B|A)

4. 실생활 응용
- 의료 진단의 정확도
- 품질 관리와 불량률
- 보험과 위험 평가
- 게임과 확률`,
    explanation_en: `Learn various applications of probability:

1. Union and Intersection Events
- Union A∪B: Event where A or B (or both) occurs
- Intersection A∩B: Event where both A and B occur simultaneously
- P(A∪B) = P(A) + P(B) - P(A∩B)
- Mutually exclusive events: P(A∩B) = 0

2. Independent and Dependent Events
- Independent events: One event's outcome doesn't affect another event
- Dependent events: One event's outcome affects another event
- Probability of independent events: P(A∩B) = P(A) × P(B)
- Sampling with and without replacement

3. Conditional Probability
- Probability of event A occurring given that event B has occurred
- P(A|B) = P(A∩B) / P(B) (where P(B) ≠ 0)
- Multiplication rule: P(A∩B) = P(A) × P(B|A)

4. Real-life Applications
- Accuracy of medical diagnosis
- Quality control and defect rates
- Insurance and risk assessment
- Games and probability`,
    examples: [
      {
        problem: '카드 한 벌(52장)에서 카드를 2장 뽑을 때, 모두 하트일 확률을 구하시오. (복원하지 않음)',
        problem_en: 'When drawing 2 cards from a deck of 52 cards, find the probability that both are hearts. (without replacement)',
        solution: '1/17',
        explanation: `1. 첫 번째 카드가 하트일 확률: 13/52 = 1/4
2. 두 번째 카드가 하트일 확률: 12/51
3. 두 사건은 종속사건이므로
4. P = (13/52) × (12/51) = 156/2652 = 1/17`,
        explanation_en: `1. Probability first card is heart: 13/52 = 1/4
2. Probability second card is heart: 12/51
3. These are dependent events, so
4. P = (13/52) × (12/51) = 156/2652 = 1/17`
      }
    ],
    visualAids: [
      {
        type: 'interactive' as const,
        url: '/interactive/probability-applications',
        description: '다양한 확률 상황을 시뮬레이션하는 도구',
        description_en: 'Tool for simulating various probability situations'
      }
    ],
    keyPoints: [
      '독립사건에서는 확률을 곱하여 계산합니다.',
      '종속사건에서는 조건부 확률을 고려해야 합니다.',
      '합사건의 확률에서는 중복을 제거해야 합니다.',
      '조건부 확률은 정보가 추가되었을 때의 확률입니다.'
    ],
    keyPoints_en: [
      'For independent events, multiply the probabilities.',
      'For dependent events, consider conditional probability.',
      'For union events, remove overlaps.',
      'Conditional probability is probability with additional information.'
    ],
    commonMistakes: [
      '독립사건과 종속사건을 구분하지 못하는 실수',
      '조건부 확률을 잘못 계산하는 실수',
      '복원과 비복원을 혼동하는 실수',
      '배반사건과 독립사건을 혼동하는 실수'
    ],
    commonMistakes_en: [
      'Not distinguishing between independent and dependent events',
      'Incorrectly calculating conditional probability',
      'Confusing sampling with and without replacement',
      'Confusing mutually exclusive and independent events'
    ],
    additionalResources: [
      {
        title: '확률의 실생활 응용',
        title_en: 'Real-life Applications of Probability',
        url: 'https://www.geogebra.org/m/vBpHQ8kM',
        type: 'interactive' as const
      }
    ]
  }
]; 