import { SubjectiveQuestion } from '../data/types';

export interface AnswerAnalysis {
  accuracy: number;
  feedback: string;
  isCorrect: boolean;
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D' | 'F';
}

type TranslationFunction = (key: string) => string;

// 문자열 정규화 함수
const normalizeAnswer = (answer: string): string => {
  return answer
    .toLowerCase()
    .replace(/\s+/g, '') // 모든 공백 제거
    .replace(/[(),]/g, '') // 괄호 제거
    .replace(/㎠|㎤|cm|mm|m|°|%/g, '') // 단위 제거
    .trim();
};

// 숫자 답안 분석
const analyzeNumberAnswer = (userAnswer: string, correctAnswer: string, alternativeAnswers?: string[], t?: TranslationFunction): AnswerAnalysis => {
  const normalizedUser = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);
  
  // 정확한 일치 확인
  if (normalizedUser === normalizedCorrect) {
    return {
      accuracy: 100,
      feedback: t ? t('feedback.perfect') : '완벽합니다! 정확한 답입니다.',
      isCorrect: true,
      grade: 'A+'
    };
  }
  
  // 대안 답안 확인
  if (alternativeAnswers) {
    for (const alt of alternativeAnswers) {
      if (normalizeAnswer(alt) === normalizedUser) {
        return {
          accuracy: 100,
          feedback: t ? t('feedback.correctAlternative') : '정확합니다! 다른 표현 방식이지만 올바른 답입니다.',
          isCorrect: true,
          grade: 'A+'
        };
      }
    }
  }
  
  // 숫자 값 비교
  const userNum = parseFloat(normalizedUser);
  const correctNum = parseFloat(normalizedCorrect);
  
  if (isNaN(userNum) || isNaN(correctNum)) {
    return {
      accuracy: 0,
      feedback: t ? t('feedback.enterNumber') : '숫자 형태로 답을 입력해주세요.',
      isCorrect: false,
      grade: 'F'
    };
  }
  
  // 오차 범위 계산
  const difference = Math.abs(userNum - correctNum);
  const relativeDifference = difference / Math.abs(correctNum);
  
  if (relativeDifference <= 0.01) { // 1% 이내 오차
    return {
      accuracy: 95,
      feedback: t ? t('feedback.almostCorrect') : '거의 정확합니다! 약간의 반올림 차이가 있습니다.',
      isCorrect: true,
      grade: 'A'
    };
  } else if (relativeDifference <= 0.05) { // 5% 이내 오차
    return {
      accuracy: 85,
      feedback: t ? t('feedback.goodCalculation') : '좋습니다! 계산 과정은 맞으나 약간의 오차가 있습니다.',
      isCorrect: false,
      grade: 'B+'
    };
  } else if (relativeDifference <= 0.1) { // 10% 이내 오차
    return {
      accuracy: 70,
      feedback: t ? t('feedback.improveAccuracy') : '계산 방향은 맞지만 정확도를 높여보세요.',
      isCorrect: false,
      grade: 'B'
    };
  } else if (relativeDifference <= 0.2) { // 20% 이내 오차
    return {
      accuracy: 50,
      feedback: t ? t('feedback.reconsiderApproach') : '접근 방법을 다시 생각해보세요.',
      isCorrect: false,
      grade: 'C+'
    };
  } else {
    return {
      accuracy: 20,
      feedback: t ? t('feedback.tryAgainCarefully') : '다시 문제를 차근차근 풀어보세요.',
      isCorrect: false,
      grade: 'D'
    };
  }
};

// 표현식 답안 분석 (분수, 비율 등)
const analyzeExpressionAnswer = (userAnswer: string, correctAnswer: string, alternativeAnswers?: string[], t?: TranslationFunction): AnswerAnalysis => {
  const normalizedUser = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);
  
  // 정확한 일치
  if (normalizedUser === normalizedCorrect) {
    return {
      accuracy: 100,
      feedback: t ? t('feedback.perfect') : '완벽합니다! 정확한 답입니다.',
      isCorrect: true,
      grade: 'A+'
    };
  }
  
  // 대안 답안 확인
  if (alternativeAnswers) {
    for (const alt of alternativeAnswers) {
      if (normalizeAnswer(alt) === normalizedUser) {
        return {
          accuracy: 100,
          feedback: t ? t('feedback.correctAlternative') : '정확합니다! 다른 표현 방식이지만 올바른 답입니다.',
          isCorrect: true,
          grade: 'A+'
        };
      }
    }
  }
  
  // 분수 형태 분석
  if (userAnswer.includes('/') && correctAnswer.includes('/')) {
    const userParts = userAnswer.split('/');
    const correctParts = correctAnswer.split('/');
    
    if (userParts.length === 2 && correctParts.length === 2) {
      const userValue = parseFloat(userParts[0]) / parseFloat(userParts[1]);
      const correctValue = parseFloat(correctParts[0]) / parseFloat(correctParts[1]);
      
      if (!isNaN(userValue) && !isNaN(correctValue)) {
        const difference = Math.abs(userValue - correctValue);
        if (difference < 0.001) {
          return {
            accuracy: 90,
            feedback: t ? t('feedback.correctValueSimplify') : '값은 맞지만 기약분수로 표현해보세요.',
            isCorrect: false,
            grade: 'A'
          };
        }
      }
    }
  }
  
  // 부분적 일치 확인
  const correctWords = normalizedCorrect.split(/[:/]/);
  const userWords = normalizedUser.split(/[:/]/);
  let matchCount = 0;
  
  for (const word of userWords) {
    if (correctWords.includes(word)) {
      matchCount++;
    }
  }
  
  const accuracy = (matchCount / correctWords.length) * 100;
  
  if (accuracy >= 80) {
    return {
      accuracy: Math.round(accuracy),
      feedback: t ? t('feedback.almostCorrectExpression') : '거의 맞습니다! 표현 방식을 다시 확인해보세요.',
      isCorrect: false,
      grade: 'B+'
    };
  } else if (accuracy >= 50) {
    return {
      accuracy: Math.round(accuracy),
      feedback: t ? t('feedback.partiallyCorrectFormat') : '부분적으로 맞습니다. 형태를 다시 확인해보세요.',
      isCorrect: false,
      grade: 'C+'
    };
  } else {
    return {
      accuracy: 20,
      feedback: t ? t('feedback.tryAgainCarefully') : '다시 문제를 차근차근 풀어보세요.',
      isCorrect: false,
      grade: 'D'
    };
  }
};

// 텍스트 답안 분석
const analyzeTextAnswer = (userAnswer: string, correctAnswer: string, keywords?: string[], t?: TranslationFunction): AnswerAnalysis => {
  const normalizedUser = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);
  
  if (normalizedUser === normalizedCorrect) {
    return {
      accuracy: 100,
      feedback: t ? t('feedback.perfect') : '완벽합니다! 정확한 답입니다.',
      isCorrect: true,
      grade: 'A+'
    };
  }
  
  // 키워드 기반 분석
  if (keywords) {
    let keywordMatchCount = 0;
    for (const keyword of keywords) {
      if (normalizedUser.includes(normalizeAnswer(keyword))) {
        keywordMatchCount++;
      }
    }
    
    const accuracy = (keywordMatchCount / keywords.length) * 100;
    
    if (accuracy >= 80) {
      return {
        accuracy: Math.round(accuracy),
        feedback: t ? t('feedback.goodKeywords') : '좋습니다! 핵심 내용을 잘 파악했습니다.',
        isCorrect: accuracy === 100,
        grade: accuracy === 100 ? 'A+' : 'A'
      };
    } else if (accuracy >= 50) {
      return {
        accuracy: Math.round(accuracy),
        feedback: t ? t('feedback.partiallyCorrectDetails') : '부분적으로 맞습니다. 더 자세히 설명해보세요.',
        isCorrect: false,
        grade: 'B'
      };
    }
  }
  
  return {
    accuracy: 10,
    feedback: t ? t('feedback.thinkAgain') : '다시 생각해보세요.',
    isCorrect: false,
    grade: 'D'
  };
};

// 메인 분석 함수
export const analyzeAnswer = (
  userAnswer: string,
  question: SubjectiveQuestion,
  t?: TranslationFunction
): AnswerAnalysis => {
  if (!userAnswer.trim()) {
    return {
      accuracy: 0,
      feedback: t ? t('feedback.enterAnswer') : '답을 입력해주세요.',
      isCorrect: false,
      grade: 'F'
    };
  }
  
  switch (question.answerType) {
    case 'number':
      return analyzeNumberAnswer(userAnswer, question.correctAnswer, question.alternativeAnswers, t);
    case 'expression':
      return analyzeExpressionAnswer(userAnswer, question.correctAnswer, question.alternativeAnswers, t);
    case 'text':
      return analyzeTextAnswer(userAnswer, question.correctAnswer, question.keywords, t);
    default:
      return analyzeNumberAnswer(userAnswer, question.correctAnswer, question.alternativeAnswers, t);
  }
}; 