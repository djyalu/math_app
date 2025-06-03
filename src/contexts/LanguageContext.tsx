import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en';

type TranslationKeys = 
  | 'nav.home' | 'nav.topics' | 'nav.practice' | 'nav.videos' | 'nav.progress'
  | 'home.welcome' | 'home.subtitle' | 'home.startLearning' | 'home.randomPractice' 
  | 'home.totalStudyTime' | 'home.recentActivity' | 'home.allTopics' | 'home.noActivity' 
  | 'home.noActivityDesc' | 'home.reset' | 'home.completed' | 'home.relativeProgress'
  | 'home.victoryMessage' | 'home.encouragement'
  | 'topic.pythagorean' | 'topic.trigonometry' | 'topic.congruence' | 'topic.volume' 
  | 'topic.probability' | 'topic.statistics' | 'topic.randomPractice'
  | 'topic.pythagoreantheorem' | 'topic.trigonometricratios' | 'topic.congruencesimilarity' 
  | 'topic.volumesurfacearea'
  | 'desc.pythagorean' | 'desc.trigonometry' | 'desc.congruence' | 'desc.volume' 
  | 'desc.probability' | 'desc.statistics'
  | 'practice.title' | 'practice.score' | 'practice.question' | 'practice.complete' 
  | 'practice.totalTime' | 'practice.accuracy' | 'practice.tryAgain' | 'practice.backToTopic' 
  | 'practice.home' | 'practice.next' | 'practice.showResult' | 'practice.submit' 
  | 'practice.explanation' | 'practice.correctAnswer' | 'practice.answerAnalysis' 
  | 'practice.multipleChoice' | 'practice.subjective' | 'practice.easy' | 'practice.medium' 
  | 'practice.hard' | 'practice.unit' | 'practice.placeholder'
  | 'feedback.perfect' | 'feedback.correctAlternative' | 'feedback.enterNumber' | 'feedback.almostCorrect'
  | 'feedback.goodCalculation' | 'feedback.improveAccuracy' | 'feedback.reconsiderApproach' 
  | 'feedback.tryAgainCarefully' | 'feedback.correctValueSimplify' | 'feedback.almostCorrectExpression'
  | 'feedback.partiallyCorrectFormat' | 'feedback.goodKeywords' | 'feedback.partiallyCorrectDetails'
  | 'feedback.thinkAgain' | 'feedback.enterAnswer'
  | 'time.minutes' | 'time.hours' | 'time.days' | 'time.lessThanMinute' | 'time.ago' | 'time.justNow'
  | 'time.today' | 'time.yesterday' | 'time.daysAgo' | 'time.hour' | 'time.minute'
  | 'progress.title' | 'progress.topPerformance' | 'progress.averageScore' | 'progress.noScores'
  | 'progress.dailyTracking' | 'progress.trackingDesc' | 'progress.overallProgress' | 'progress.complete'
  | 'progress.studyTime' | 'progress.lastActive' | 'progress.never' | 'progress.activityCalendar'
  | 'progress.detailedCalendar' | 'progress.percentComplete'
  | 'common.loading' | 'common.error' | 'common.cancel' | 'common.confirm' | 'common.close' 
  | 'common.save' | 'common.delete' | 'common.edit' | 'common.search'
  | 'alert.resetTopic' | 'alert.resetAll'
  | 'video.notFound' | 'video.notFoundDesc' | 'video.learningVideo' | 'video.additionalResources'
  | 'video.moreVideos' | 'video.visitChannel'
  | 'video.congruence' | 'video.pythagorean' | 'video.trigonometric' | 'video.volume' 
  | 'video.probability' | 'video.statistics'
  | 'problems.list' | 'problems.difficulty' | 'problems.basic' | 'problems.intermediate' | 'problems.advanced'
  | 'problems.hint' | 'problems.showHint' | 'problems.hideHint' | 'problems.answer' | 'problems.showAnswer'
  | 'problems.hideAnswer' | 'problems.solution' | 'problems.selectProblem'
  | 'lesson.notFound' | 'lesson.content' | 'lesson.activity' | 'lesson.theory' | 'lesson.examples' 
  | 'lesson.practice' | 'lesson.example' | 'lesson.problem' | 'lesson.showSolution' | 'lesson.hideSolution'
  | 'lesson.complete' | 'lesson.keyPoints' | 'lesson.visualAids' | 'lesson.interactiveTool' | 'lesson.commonMistakes'
  | 'visualizer.geometry.title' | 'visualizer.geometry.desc' | 'visualizer.trigonometry.title' 
  | 'visualizer.trigonometry.desc' | 'visualizer.statistics.title' | 'visualizer.statistics.desc'
  | 'visualizer.default.title' | 'visualizer.default.desc' | 'visualizer.controls.title'
  | 'visualizer.controls.speed' | 'visualizer.controls.param1' | 'visualizer.controls.param2'
  | 'visualizer.controls.optionA' | 'visualizer.controls.optionB' | 'visualizer.controls.optionC'
  | 'auth.welcomeMessage' | 'auth.userId' | 'auth.enterUserId' | 'auth.password' | 'auth.enterPassword'
  | 'auth.login' | 'auth.loggingIn' | 'auth.invalidCredentials' | 'auth.secureLogin' | 'auth.logout'
  | 'auth.sessionExpired' | 'auth.sessionWarning';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 다국어 번역 데이터
const translations: Record<Language, Record<TranslationKeys, string>> = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.topics': '학습 주제',
    'nav.practice': '연습 문제',
    'nav.videos': '학습 동영상',
    'nav.progress': '학습 진도',
    
    // Home Page
    'home.welcome': 'MathMaster에 오신 것을 환영합니다',
    'home.subtitle': 'Think! Mathematics G3 8th Edition을 위한 대화형 학습 도우미',
    'home.startLearning': '학습 시작',
    'home.randomPractice': '랜덤 연습',
    'home.totalStudyTime': '총 학습 시간',
    'home.recentActivity': '최근 활동',
    'home.allTopics': '모든 주제',
    'home.noActivity': '아직 학습 기록이 없습니다',
    'home.noActivityDesc': '문제를 풀기 시작하면 학습 시간이 기록됩니다!',
    'home.reset': '초기화',
    'home.completed': '완료',
    'home.relativeProgress': '상대적 학습량',
    'home.victoryMessage': '승리를 쟁취하세요!',
    'home.encouragement': '지윤아. 화이팅!',
    
    // Topics
    'topic.pythagorean': '피타고라스 정리',
    'topic.trigonometry': '삼각비',
    'topic.congruence': '합동과 닮음',
    'topic.volume': '입체도형',
    'topic.probability': '확률',
    'topic.statistics': '통계',
    'topic.randomPractice': '랜덤 문제 연습',
    'topic.pythagoreantheorem': '피타고라스 정리',
    'topic.trigonometricratios': '삼각비',
    'topic.congruencesimilarity': '합동과 닮음',
    'topic.volumesurfacearea': '입체도형',
    
    // Topic Descriptions
    'desc.pythagorean': '직각삼각형에서 빗변과 두 직각변의 관계를 학습합니다',
    'desc.trigonometry': '삼각형에서 각과 변의 비율 관계를 학습합니다',
    'desc.congruence': '도형의 합동과 닮음의 성질을 학습합니다',
    'desc.volume': '입체도형의 부피와 겉넓이를 학습합니다',
    'desc.probability': '확률의 기본 개념과 계산 방법을 학습합니다',
    'desc.statistics': '자료의 정리와 해석 방법을 학습합니다',
    
    // Practice
    'practice.title': '연습 문제',
    'practice.score': '점수',
    'practice.question': '문제',
    'practice.complete': '완료!',
    'practice.totalTime': '총 학습 시간',
    'practice.accuracy': '정답률',
    'practice.tryAgain': '다시 도전',
    'practice.backToTopic': '토픽으로',
    'practice.home': '홈으로',
    'practice.next': '다음 문제',
    'practice.showResult': '결과 보기',
    'practice.submit': '제출',
    'practice.explanation': '해설',
    'practice.correctAnswer': '정답',
    'practice.answerAnalysis': '답안 분석',
    'practice.multipleChoice': '객관식',
    'practice.subjective': '주관식',
    'practice.easy': '쉬움',
    'practice.medium': '보통',
    'practice.hard': '어려움',
    'practice.unit': '단위',
    'practice.placeholder': '답을 입력하세요...',
    
    // Feedback Messages
    'feedback.perfect': '완벽합니다! 정확한 답입니다.',
    'feedback.correctAlternative': '정확합니다! 다른 표현 방식이지만 올바른 답입니다.',
    'feedback.enterNumber': '숫자 형태로 답을 입력해주세요.',
    'feedback.almostCorrect': '거의 정확합니다! 약간의 반올림 차이가 있습니다.',
    'feedback.goodCalculation': '좋습니다! 계산 과정은 맞으나 약간의 오차가 있습니다.',
    'feedback.improveAccuracy': '계산 방향은 맞지만 정확도를 높여보세요.',
    'feedback.reconsiderApproach': '접근 방법을 다시 생각해보세요.',
    'feedback.tryAgainCarefully': '다시 문제를 차근차근 풀어보세요.',
    'feedback.correctValueSimplify': '값은 맞지만 기약분수로 표현해보세요.',
    'feedback.almostCorrectExpression': '거의 맞습니다! 표현 방식을 다시 확인해보세요.',
    'feedback.partiallyCorrectFormat': '부분적으로 맞습니다. 형태를 다시 확인해보세요.',
    'feedback.goodKeywords': '좋습니다! 핵심 내용을 잘 파악했습니다.',
    'feedback.partiallyCorrectDetails': '부분적으로 맞습니다. 더 자세히 설명해보세요.',
    'feedback.thinkAgain': '다시 생각해보세요.',
    'feedback.enterAnswer': '답을 입력해주세요.',
    
    // Time
    'time.minutes': '분',
    'time.hours': '시간',
    'time.days': '일',
    'time.lessThanMinute': '1분 미만',
    'time.ago': '전',
    'time.justNow': '방금 전',
    'time.today': '오늘',
    'time.yesterday': '어제',
    'time.daysAgo': '일 전',
    'time.hour': '시간',
    'time.minute': '분',
    
    // Common
    'common.loading': '불러오는 중...',
    'common.error': '오류가 발생했습니다',
    'common.cancel': '취소',
    'common.confirm': '확인',
    'common.close': '닫기',
    'common.save': '저장',
    'common.delete': '삭제',
    'common.edit': '편집',
    'common.search': '검색',
    
    // Alerts
    'alert.resetTopic': '이 주제의 진도를 초기화하시겠습니까?',
    'alert.resetAll': '모든 진도를 초기화하시겠습니까?',
    
    // Video Page
    'video.notFound': '동영상을 찾을 수 없습니다',
    'video.notFoundDesc': '선택한 주제의 동영상이 존재하지 않습니다.',
    'video.learningVideo': '학습 동영상',
    'video.additionalResources': '추가 학습 자료',
    'video.moreVideos': '더 많은 수학 학습 동영상을 보려면',
    'video.visitChannel': '를 방문하세요.',
    'video.congruence': '합동과 닮음',
    'video.pythagorean': '피타고라스 정리',
    'video.trigonometric': '삼각비',
    'video.volume': '입체도형의 부피와 겉넓이',
    'video.probability': '확률',
    'video.statistics': '통계',
    
    // Practice Problems
    'problems.list': '문제 목록',
    'problems.difficulty': '난이도',
    'problems.basic': '기본',
    'problems.intermediate': '중급',
    'problems.advanced': '고급',
    'problems.hint': '힌트',
    'problems.showHint': '힌트 보기',
    'problems.hideHint': '힌트 숨기기',
    'problems.answer': '답',
    'problems.showAnswer': '답안 보기',
    'problems.hideAnswer': '답안 숨기기',
    'problems.solution': '풀이',
    'problems.selectProblem': '왼쪽에서 문제를 선택하세요',
    
    // Lesson Page
    'lesson.notFound': '수업을 찾을 수 없습니다.',
    'lesson.content': '강의 내용',
    'lesson.activity': '학습 활동',
    'lesson.theory': '이론',
    'lesson.examples': '예제',
    'lesson.practice': '연습 문제',
    'lesson.example': '예제',
    'lesson.problem': '문제',
    'lesson.showSolution': '해답 보기',
    'lesson.hideSolution': '해답 숨기기',
    'lesson.complete': '학습 완료',
    'lesson.keyPoints': '핵심 포인트',
    'lesson.visualAids': '시각 자료',
    'lesson.interactiveTool': '인터랙티브 도구 열기',
    'lesson.commonMistakes': '자주하는 실수',
    
    // Progress
    'progress.title': '나의 학습 진도',
    'progress.topPerformance': '최고 성과',
    'progress.averageScore': '평균 점수',
    'progress.noScores': '아직 퀴즈 점수가 없습니다. 연습을 시작하세요!',
    'progress.dailyTracking': '일일 학습 트래킹',
    'progress.trackingDesc': '매일의 학습 일관성을 추적합니다',
    'progress.overallProgress': '전체 진도',
    'progress.complete': '완료',
    'progress.studyTime': '학습 시간',
    'progress.lastActive': '최근 활동',
    'progress.never': '학습 기록 없음',
    'progress.activityCalendar': '학습 활동 달력',
    'progress.detailedCalendar': '상세한 학습 달력',
    'progress.percentComplete': '완료율',
    
    // Visualizer
    'visualizer.geometry.title': '기하학 시각화',
    'visualizer.geometry.desc': '도형, 합동, 닮음, 피타고라스 관계를 탐색합니다.',
    'visualizer.trigonometry.title': '삼각법 시각화',
    'visualizer.trigonometry.desc': '직각삼각형에서의 사인, 코사인, 탄젠트와 그 관계를 탐색합니다.',
    'visualizer.statistics.title': '통계 시각화',
    'visualizer.statistics.desc': '다양한 통계 도표로 데이터를 시각화하고 중심경향치를 탐색합니다.',
    'visualizer.default.title': '인터랙티브 시각화',
    'visualizer.default.desc': '인터랙티브 시각화로 수학적 개념을 탐색합니다.',
    'visualizer.controls.title': '인터랙티브 컨트롤',
    'visualizer.controls.speed': '애니메이션 속도',
    'visualizer.controls.param1': '매개변수 1',
    'visualizer.controls.param2': '매개변수 2',
    'visualizer.controls.optionA': '옵션 A',
    'visualizer.controls.optionB': '옵션 B',
    'visualizer.controls.optionC': '옵션 C',

    // Authentication
    'auth.welcomeMessage': '안전한 학습 환경에 오신 것을 환영합니다',
    'auth.userId': '사용자 ID',
    'auth.enterUserId': '사용자 ID를 입력하세요',
    'auth.password': '비밀번호',
    'auth.enterPassword': '비밀번호를 입력하세요',
    'auth.login': '로그인',
    'auth.loggingIn': '로그인 중...',
    'auth.invalidCredentials': '아이디 또는 비밀번호가 잘못되었습니다',
    'auth.secureLogin': '보안 로그인으로 안전하게 보호됩니다',
    'auth.logout': '로그아웃',
    'auth.sessionExpired': '세션이 만료되었습니다. 다시 로그인해 주세요.',
    'auth.sessionWarning': '비활성 상태로 인해 곧 로그아웃됩니다.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.topics': 'Learning Topics',
    'nav.practice': 'Practice Problems',
    'nav.videos': 'Learning Videos',
    'nav.progress': 'Learning Progress',
    
    // Home Page
    'home.welcome': 'Welcome to MathMaster',
    'home.subtitle': 'Your interactive learning companion for Think! Mathematics G3 8th Edition',
    'home.startLearning': 'Start Learning',
    'home.randomPractice': 'Random Practice',
    'home.totalStudyTime': 'Total Study Time',
    'home.recentActivity': 'Recent Activity',
    'home.allTopics': 'All Topics',
    'home.noActivity': 'No learning records yet',
    'home.noActivityDesc': 'Study time will be recorded once you start solving problems!',
    'home.reset': 'Reset',
    'home.completed': 'Completed',
    'home.relativeProgress': 'Relative Study Amount',
    'home.victoryMessage': 'You Deserve Victory!',
    'home.encouragement': 'Jiyoon, You Can Do It!',
    
    // Topics
    'topic.pythagorean': 'Pythagorean Theorem',
    'topic.trigonometry': 'Trigonometric Ratios',
    'topic.congruence': 'Congruence and Similarity',
    'topic.volume': 'Volume and Surface Area',
    'topic.probability': 'Probability',
    'topic.statistics': 'Statistics',
    'topic.randomPractice': 'Random Practice',
    'topic.pythagoreantheorem': 'Pythagorean Theorem',
    'topic.trigonometricratios': 'Trigonometric Ratios',
    'topic.congruencesimilarity': 'Congruence and Similarity',
    'topic.volumesurfacearea': 'Volume and Surface Area',
    
    // Topic Descriptions
    'desc.pythagorean': 'Learn the relationship between the hypotenuse and legs of a right triangle',
    'desc.trigonometry': 'Learn the ratio relationships between angles and sides in triangles',
    'desc.congruence': 'Learn the properties of congruent and similar figures',
    'desc.volume': 'Learn how to calculate volume and surface area of 3D shapes',
    'desc.probability': 'Learn basic concepts and calculation methods of probability',
    'desc.statistics': 'Learn methods for organizing and interpreting data',
    
    // Practice
    'practice.title': 'Practice Problems',
    'practice.score': 'Score',
    'practice.question': 'Question',
    'practice.complete': 'Complete!',
    'practice.totalTime': 'Total Study Time',
    'practice.accuracy': 'Accuracy Rate',
    'practice.tryAgain': 'Try Again',
    'practice.backToTopic': 'Back to Topic',
    'practice.home': 'Home',
    'practice.next': 'Next Question',
    'practice.showResult': 'Show Results',
    'practice.submit': 'Submit',
    'practice.explanation': 'Explanation',
    'practice.correctAnswer': 'Correct Answer',
    'practice.answerAnalysis': 'Answer Analysis',
    'practice.multipleChoice': 'Multiple Choice',
    'practice.subjective': 'Subjective',
    'practice.easy': 'Easy',
    'practice.medium': 'Medium',
    'practice.hard': 'Hard',
    'practice.unit': 'Unit',
    'practice.placeholder': 'Enter your answer...',
    
    // Feedback Messages
    'feedback.perfect': 'Perfect! That\'s the correct answer.',
    'feedback.correctAlternative': 'Correct! It\'s a different way of expressing it, but it\'s the right answer.',
    'feedback.enterNumber': 'Please enter your answer in numerical form.',
    'feedback.almostCorrect': 'Almost correct! There\'s a slight rounding difference.',
    'feedback.goodCalculation': 'Good! The calculation process is correct, but there\'s a slight error.',
    'feedback.improveAccuracy': 'The calculation direction is correct, but please improve accuracy.',
    'feedback.reconsiderApproach': 'Please reconsider your approach.',
    'feedback.tryAgainCarefully': 'Please try solving the problem step by step again.',
    'feedback.correctValueSimplify': 'The value is correct, but please express it as a simplified fraction.',
    'feedback.almostCorrectExpression': 'Almost correct! Please check the expression format again.',
    'feedback.partiallyCorrectFormat': 'Partially correct. Please check the format again.',
    'feedback.goodKeywords': 'Good! You understood the key concepts well.',
    'feedback.partiallyCorrectDetails': 'Partially correct. Please explain in more detail.',
    'feedback.thinkAgain': 'Please think again.',
    'feedback.enterAnswer': 'Please enter your answer.',
    
    // Time
    'time.minutes': 'min',
    'time.hours': 'hr',
    'time.days': 'days',
    'time.lessThanMinute': 'Less than 1 min',
    'time.ago': 'ago',
    'time.justNow': 'Just now',
    'time.today': 'Today',
    'time.yesterday': 'Yesterday',
    'time.daysAgo': 'days ago',
    'time.hour': 'Hour',
    'time.minute': 'Minute',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.search': 'Search',
    
    // Alerts
    'alert.resetTopic': 'Do you want to reset the progress for this topic?',
    'alert.resetAll': 'Do you want to reset all progress?',
    
    // Video Page
    'video.notFound': 'Video Not Found',
    'video.notFoundDesc': 'The video for the selected topic does not exist.',
    'video.learningVideo': 'Learning Video',
    'video.additionalResources': 'Additional Learning Resources',
    'video.moreVideos': 'For more math learning videos, visit',
    'video.visitChannel': '.',
    'video.congruence': 'Congruence and Similarity',
    'video.pythagorean': 'Pythagorean Theorem',
    'video.trigonometric': 'Trigonometric Ratios',
    'video.volume': 'Volume and Surface Area',
    'video.probability': 'Probability',
    'video.statistics': 'Statistics',
    
    // Practice Problems
    'problems.list': 'Problem List',
    'problems.difficulty': 'Difficulty',
    'problems.basic': 'Basic',
    'problems.intermediate': 'Intermediate',
    'problems.advanced': 'Advanced',
    'problems.hint': 'Hint',
    'problems.showHint': 'Show Hint',
    'problems.hideHint': 'Hide Hint',
    'problems.answer': 'Answer',
    'problems.showAnswer': 'Show Answer',
    'problems.hideAnswer': 'Hide Answer',
    'problems.solution': 'Solution',
    'problems.selectProblem': 'Please select a problem from the left',
    
    // Lesson Page
    'lesson.notFound': 'Class Not Found',
    'lesson.content': 'Class Content',
    'lesson.activity': 'Learning Activity',
    'lesson.theory': 'Theory',
    'lesson.examples': 'Examples',
    'lesson.practice': 'Practice Problems',
    'lesson.example': 'Example',
    'lesson.problem': 'Problem',
    'lesson.showSolution': 'Show Solution',
    'lesson.hideSolution': 'Hide Solution',
    'lesson.complete': 'Learning Completed',
    'lesson.keyPoints': 'Key Points',
    'lesson.visualAids': 'Visual Aids',
    'lesson.interactiveTool': 'Open Interactive Tool',
    'lesson.commonMistakes': 'Common Mistakes',
    
    // Progress
    'progress.title': 'My Learning Progress',
    'progress.topPerformance': 'Top Performance',
    'progress.averageScore': 'Average Score',
    'progress.noScores': 'No quiz scores yet. Start practicing!',
    'progress.dailyTracking': 'Daily Learning Tracking',
    'progress.trackingDesc': 'Tracking your daily learning consistency',
    'progress.overallProgress': 'Overall Progress',
    'progress.complete': 'Completed',
    'progress.studyTime': 'Study Time',
    'progress.lastActive': 'Last Active',
    'progress.never': 'No Learning Record',
    'progress.activityCalendar': 'Activity Calendar',
    'progress.detailedCalendar': 'Detailed Calendar',
    'progress.percentComplete': 'Percent Complete',
    
    // Visualizer
    'visualizer.geometry.title': 'Geometry Visualizer',
    'visualizer.geometry.desc': 'Explore geometric shapes, congruence, similarity, and Pythagorean relationships.',
    'visualizer.trigonometry.title': 'Trigonometry Visualizer',
    'visualizer.trigonometry.desc': 'Explore sine, cosine, tangent and their relationships in right-angled triangles.',
    'visualizer.statistics.title': 'Statistics Visualizer',
    'visualizer.statistics.desc': 'Visualize data with different statistical diagrams and explore measures of central tendency.',
    'visualizer.default.title': 'Interactive Visualizer',
    'visualizer.default.desc': 'Explore mathematical concepts with interactive visualizations.',
    'visualizer.controls.title': 'Interactive Controls',
    'visualizer.controls.speed': 'Animation Speed',
    'visualizer.controls.param1': 'Parameter 1',
    'visualizer.controls.param2': 'Parameter 2',
    'visualizer.controls.optionA': 'Option A',
    'visualizer.controls.optionB': 'Option B',
    'visualizer.controls.optionC': 'Option C',

    // Authentication
    'auth.welcomeMessage': 'Welcome to MathMaster',
    'auth.userId': 'User ID',
    'auth.enterUserId': 'Enter User ID',
    'auth.password': 'Password',
    'auth.enterPassword': 'Enter Password',
    'auth.login': 'Login',
    'auth.loggingIn': 'Logging In...',
    'auth.invalidCredentials': 'Invalid ID or password',
    'auth.secureLogin': 'Secure Login',
    'auth.logout': 'Logout',
    'auth.sessionExpired': 'Session expired. Please log in again.',
    'auth.sessionWarning': 'You will be logged out soon due to inactivity.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // localStorage에서 언어 설정 불러오기
    const saved = localStorage.getItem('mathmaster_language');
    return (saved as Language) || 'ko';
  });

  // 언어 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('mathmaster_language', language);
  }, [language]);

  // 번역 함수
  const t = (key: TranslationKeys): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 