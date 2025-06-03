import { ConceptContent } from '../types';

export const statisticsConcepts: ConceptContent[] = [
  {
    id: 'statistics-data-representation-understanding',
    title: '자료의 정리와 표현',
    title_en: 'Data Organization and Representation',
    description: '자료의 수집과 분류, 도수분포표와 히스토그램, 다양한 그래프 표현을 학습합니다.',
    description_en: 'Learn data collection and classification, frequency distribution tables and histograms, and various graph representations.',
    explanation: `자료의 정리와 표현 방법을 이해합니다:

1. 자료의 종류와 수집
- 질적 자료: 범주형 자료 (성별, 혈액형, 선호도 등)
- 양적 자료: 수치형 자료 (키, 몸무게, 점수 등)
- 이산형 자료: 셀 수 있는 자료 (가족 수, 책의 수 등)
- 연속형 자료: 측정값 자료 (키, 몸무게, 시간 등)

2. 도수분포표
- 계급: 자료를 몇 개의 구간으로 나눈 것
- 계급값: 각 계급의 중앙값
- 도수: 각 계급에 속하는 자료의 개수
- 상대도수: 각 계급의 도수를 전체 도수로 나눈 값

3. 그래프 표현
- 히스토그램: 계급별 도수를 막대그래프로 표현
- 도수분포다각형: 계급값과 도수를 선분으로 연결
- 줄기와 잎 그림: 자료값을 줄기와 잎으로 분리하여 표현
- 상자그림: 사분위수를 이용한 표현

4. 그래프 해석
- 분포의 모양 (대칭, 치우침)
- 이상값(특이값) 찾기
- 데이터의 집중과 분산 정도`,
    explanation_en: `Understand methods for organizing and representing data:

1. Types and Collection of Data
- Qualitative data: Categorical data (gender, blood type, preference, etc.)
- Quantitative data: Numerical data (height, weight, scores, etc.)
- Discrete data: Countable data (number of family members, number of books, etc.)
- Continuous data: Measured data (height, weight, time, etc.)

2. Frequency Distribution Table
- Class: Dividing data into several intervals
- Class value: The midpoint of each class
- Frequency: The number of data points in each class
- Relative frequency: The frequency of each class divided by the total frequency

3. Graph Representation
- Histogram: Bar graph representation of class frequencies
- Frequency polygon: Connecting class values and frequencies with line segments
- Stem-and-leaf plot: Separating data values into stems and leaves
- Box plot: Representation using quartiles

4. Graph Interpretation
- Shape of distribution (symmetric, skewed)
- Finding outliers
- Degree of data concentration and dispersion`,
    examples: [
      {
        problem: '다음 자료를 도수분포표로 만들고 상대도수를 구하시오: 72, 85, 91, 68, 77, 83, 95, 74, 88, 79 (계급의 크기: 10)',
        problem_en: 'Create a frequency distribution table for the following data and find relative frequencies: 72, 85, 91, 68, 77, 83, 95, 74, 88, 79 (class interval: 10)',
        solution: '60~70: 1개(0.1), 70~80: 4개(0.4), 80~90: 3개(0.3), 90~100: 2개(0.2)',
        explanation: `1. 자료를 크기 순으로 정렬: 68, 72, 74, 77, 79, 83, 85, 88, 91, 95
2. 계급 구간 설정: 60~70, 70~80, 80~90, 90~100
3. 각 계급의 도수를 세어 상대도수 계산`,
        explanation_en: `1. Sort data in ascending order: 68, 72, 74, 77, 79, 83, 85, 88, 91, 95
2. Set class intervals: 60~70, 70~80, 80~90, 90~100
3. Count frequencies for each class and calculate relative frequencies`
      }
    ],
    visualAids: [
      {
        type: 'image' as const,
        url: '/images/data-representation.png',
        description: '도수분포표와 히스토그램의 관계를 보여주는 그래프',
        description_en: 'Graph showing the relationship between frequency distribution tables and histograms'
      }
    ],
    keyPoints: [
      '자료의 종류에 따라 적절한 표현 방법이 달라집니다.',
      '계급의 크기와 개수는 자료의 특성을 고려하여 정합니다.',
      '상대도수는 전체에서 차지하는 비율을 나타냅니다.',
      '그래프는 자료의 분포 특성을 한눈에 보여줍니다.'
    ],
    keyPoints_en: [
      'Appropriate representation methods vary depending on the type of data.',
      'Class size and number are determined considering data characteristics.',
      'Relative frequency represents the proportion of the whole.',
      'Graphs show the distribution characteristics of data at a glance.'
    ],
    commonMistakes: [
      '계급구간을 겹치게 설정하는 실수',
      '계급의 크기를 너무 크거나 작게 정하는 실수',
      '상대도수의 합이 1이 되지 않는 실수'
    ],
    commonMistakes_en: [
      'Setting overlapping class intervals',
      'Setting class sizes too large or too small',
      'Relative frequencies not summing to 1'
    ],
    additionalResources: [
      {
        title: '자료의 정리와 표현',
        title_en: 'Data Organization and Representation',
        url: 'https://www.khanacademy.org/math/statistics-probability/displaying-describing-data',
        type: 'article' as const
      }
    ]
  },
  {
    id: 'statistics-central-tendency-understanding',
    title: '대표값과 산포도',
    title_en: 'Measures of Central Tendency and Dispersion',
    description: '평균, 중앙값, 최빈값과 분산, 표준편차, 사분위수를 학습합니다.',
    description_en: 'Learn about mean, median, mode, variance, standard deviation, and quartiles.',
    explanation: `대표값과 산포도의 개념을 이해합니다:

1. 대푯값 (중심경향치)
- 평균(mean): 모든 값의 합을 개수로 나눈 값
- 중앙값(median): 크기 순으로 나열했을 때 가운데 값
- 최빈값(mode): 가장 자주 나타나는 값
- 각 대푯값의 특성과 활용

2. 산포도 (분산정도)
- 범위(range): 최댓값 - 최솟값
- 편차: 각 값에서 평균을 뺀 값
- 분산(variance): 편차제곱의 평균
- 표준편차(standard deviation): 분산의 제곱근

3. 사분위수
- 제1사분위수(Q₁): 하위 25%에 해당하는 값
- 제2사분위수(Q₂): 중앙값과 같음
- 제3사분위수(Q₃): 하위 75%에 해당하는 값
- 사분위범위(IQR): Q₃ - Q₁

4. 이상값 판정
- 이상값의 기준: Q₁ - 1.5×IQR 미만 또는 Q₃ + 1.5×IQR 초과
- 이상값이 대푯값과 산포도에 미치는 영향
- 강건한 통계량(robust statistics)`,
    explanation_en: `Understand the concepts of central tendency and dispersion:

1. Measures of Central Tendency
- Mean: The sum of all values divided by the number of values
- Median: The middle value when arranged in order
- Mode: The most frequently occurring value
- Characteristics and applications of each measure

2. Measures of Dispersion
- Range: Maximum value - Minimum value
- Deviation: Each value minus the mean
- Variance: The average of squared deviations
- Standard deviation: The square root of variance

3. Quartiles
- First quartile (Q₁): Value corresponding to the lower 25%
- Second quartile (Q₂): Same as the median
- Third quartile (Q₃): Value corresponding to the lower 75%
- Interquartile range (IQR): Q₃ - Q₁

4. Outlier Detection
- Outlier criteria: Less than Q₁ - 1.5×IQR or greater than Q₃ + 1.5×IQR
- Impact of outliers on measures of central tendency and dispersion
- Robust statistics`,
    examples: [
      {
        problem: '다음 자료의 평균, 중앙값, 분산, 표준편차를 구하시오: 10, 12, 15, 18, 20',
        problem_en: 'Find the mean, median, variance, and standard deviation of the following data: 10, 12, 15, 18, 20',
        solution: '평균: 15, 중앙값: 15, 분산: 12, 표준편차: 2√3',
        explanation: `1. 평균 = (10+12+15+18+20) ÷ 5 = 15
2. 중앙값 = 15 (가운데 값)
3. 편차: -5, -3, 0, 3, 5
4. 분산 = (25+9+0+9+25) ÷ 5 = 12
5. 표준편차 = √12 = 2√3`,
        explanation_en: `1. Mean = (10+12+15+18+20) ÷ 5 = 15
2. Median = 15 (middle value)
3. Deviations: -5, -3, 0, 3, 5
4. Variance = (25+9+0+9+25) ÷ 5 = 12
5. Standard deviation = √12 = 2√3`
      }
    ],
    visualAids: [
      {
        type: 'interactive' as const,
        url: '/interactive/central-tendency',
        description: '대푯값과 산포도를 시각화하는 도구',
        description_en: 'Tool for visualizing measures of central tendency and dispersion'
      }
    ],
    keyPoints: [
      '평균은 이상값의 영향을 많이 받습니다.',
      '중앙값은 이상값의 영향을 적게 받습니다.',
      '표준편차는 자료의 퍼진 정도를 나타냅니다.',
      '사분위수는 자료의 분포를 파악하는 데 유용합니다.'
    ],
    keyPoints_en: [
      'The mean is greatly affected by outliers.',
      'The median is less affected by outliers.',
      'Standard deviation indicates the degree of data spread.',
      'Quartiles are useful for understanding data distribution.'
    ],
    commonMistakes: [
      '평균과 중앙값을 혼동하는 실수',
      '분산과 표준편차의 단위를 잘못 이해하는 실수',
      '이상값이 있을 때 평균만으로 판단하는 실수'
    ],
    commonMistakes_en: [
      'Confusing mean and median',
      'Misunderstanding the units of variance and standard deviation',
      'Judging by mean alone when outliers are present'
    ],
    additionalResources: [
      {
        title: '대푯값과 산포도',
        title_en: 'Measures of Central Tendency and Dispersion',
        url: 'https://statistics.laerd.com/statistical-guides/measures-central-tendency-mean-mode-median.php',
        type: 'article' as const
      }
    ]
  },
  {
    id: 'statistics-data-analysis-understanding',
    title: '자료 분석과 해석',
    title_en: 'Data Analysis and Interpretation',
    description: '상관관계와 회귀분석, 정규분포, 실생활에서의 통계 활용을 학습합니다.',
    description_en: 'Learn about correlation and regression analysis, normal distribution, and statistical applications in real life.',
    explanation: `자료 분석과 해석 방법을 학습합니다:

1. 상관관계
- 양의 상관관계: 한 변수가 증가하면 다른 변수도 증가
- 음의 상관관계: 한 변수가 증가하면 다른 변수는 감소
- 상관관계 없음: 두 변수 간에 일정한 관계가 없음
- 상관계수: -1과 1 사이의 값으로 상관관계의 강도 표현

2. 산점도와 회귀분석
- 산점도: 두 변수의 관계를 점으로 표현한 그래프
- 회귀직선: 산점도에서 점들의 경향을 나타내는 직선
- 최소제곱법: 오차의 제곱합이 최소가 되는 직선
- 결정계수(R²): 회귀직선이 자료를 얼마나 잘 설명하는지 나타내는 값

3. 정규분포
- 종 모양의 대칭 분포
- 평균과 표준편차로 결정되는 분포
- 경험법칙: 68-95-99.7 규칙
- 표준화와 Z-점수

4. 통계적 추론과 응용
- 모집단과 표본의 관계
- 신뢰구간과 오차한계
- 가설검정의 기초 개념
- 실생활에서의 통계 활용 사례`,
    explanation_en: `Learn methods for data analysis and interpretation:

1. Correlation
- Positive correlation: When one variable increases, the other also increases
- Negative correlation: When one variable increases, the other decreases
- No correlation: No consistent relationship between two variables
- Correlation coefficient: Value between -1 and 1 expressing the strength of correlation

2. Scatter Plots and Regression Analysis
- Scatter plot: Graph representing the relationship between two variables with points
- Regression line: A line showing the trend of points in a scatter plot
- Method of least squares: Line that minimizes the sum of squared errors
- Coefficient of determination (R²): Value indicating how well the regression line explains the data

3. Normal Distribution
- Bell-shaped symmetric distribution
- Distribution determined by mean and standard deviation
- Empirical rule: 68-95-99.7 rule
- Standardization and Z-scores

4. Statistical Inference and Applications
- Relationship between population and sample
- Confidence intervals and margin of error
- Basic concepts of hypothesis testing
- Statistical applications in real life`,
    examples: [
      {
        problem: '두 변수 x, y의 자료에서 상관계수가 0.8일 때, 이것이 의미하는 바를 설명하시오.',
        problem_en: 'When the correlation coefficient between variables x and y is 0.8, explain what this means.',
        solution: '강한 양의 상관관계',
        explanation: `1. 상관계수 0.8은 1에 가까운 양수
2. 강한 양의 상관관계를 의미
3. x가 증가하면 y도 대체로 증가하는 경향
4. 단, 인과관계를 의미하지는 않음`,
        explanation_en: `1. Correlation coefficient 0.8 is a positive number close to 1
2. Indicates a strong positive correlation
3. Tendency for y to increase as x increases
4. However, this does not imply causation`
      }
    ],
    visualAids: [
      {
        type: 'interactive' as const,
        url: '/interactive/data-analysis',
        description: '산점도와 회귀직선, 상관계수를 보여주는 도구',
        description_en: 'Tool showing scatter plots, regression lines, and correlation coefficients'
      }
    ],
    keyPoints: [
      '상관관계는 인과관계를 의미하지 않습니다.',
      '회귀직선은 예측에 활용할 수 있습니다.',
      '정규분포는 많은 자연 현상에서 나타납니다.',
      '통계는 불확실성을 정량화하는 도구입니다.'
    ],
    keyPoints_en: [
      'Correlation does not imply causation.',
      'Regression lines can be used for prediction.',
      'Normal distribution appears in many natural phenomena.',
      'Statistics is a tool for quantifying uncertainty.'
    ],
    commonMistakes: [
      '상관관계와 인과관계를 혼동하는 실수',
      '회귀직선을 범위 밖에서 사용하는 실수',
      '표본 결과를 모집단에 무조건 일반화하는 실수'
    ],
    commonMistakes_en: [
      'Confusing correlation with causation',
      'Using regression lines outside their range',
      'Unconditionally generalizing sample results to the population'
    ],
    additionalResources: [
      {
        title: '통계 분석과 해석',
        title_en: 'Statistical Analysis and Interpretation',
        url: 'https://www.geogebra.org/m/sLm8RqHk',
        type: 'interactive' as const
      }
    ]
  }
]; 