import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, X, RefreshCw, Trophy, Target, Send, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRandomQuestionsFromAllTopics } from '../data/questionBank';
import { PracticeQuestion, SubjectiveQuestion } from '../data/types';
import { analyzeAnswer, AnswerAnalysis } from '../utils/answerAnalysis';
import { useStudyTimeTracker, formatStudyTime } from '../utils/timeTracker';
import { useLanguage } from '../contexts/LanguageContext';

type QuestionType = PracticeQuestion | (SubjectiveQuestion & { type: 'subjective' });

interface QuestionResult {
  question: PracticeQuestion | SubjectiveQuestion;
  userAnswer: string | number;
  isCorrect: boolean;
  accuracyPercentage?: number;
  grade?: string;
}

const RandomPractice: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedQuestions, setSelectedQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>([]);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [answerAnalysis, setAnswerAnalysis] = useState<AnswerAnalysis | null>(null);

  // 새로운 시간 추적 훅 사용
  const { currentMinutes } = useStudyTimeTracker('random-practice');
  
  // 번역이 적용된 시간 포맷팅
  const formatCurrentTime = () => formatStudyTime(currentMinutes, (key: string) => {
    try {
      if (key === 'time.minutes' || key === 'time.hours') {
        return t(key);
      }
      return key;
    } catch {
      return key;
    }
  });

  // 다국어 지원 헬퍼 함수들
  const getQuestionText = (question: PracticeQuestion | SubjectiveQuestion) => {
    return language === 'en' && question.question_en ? question.question_en : question.question;
  };

  const getExplanationText = (question: PracticeQuestion | SubjectiveQuestion) => {
    return language === 'en' && question.explanation_en ? question.explanation_en : question.explanation;
  };

  const getCorrectAnswerText = (question: SubjectiveQuestion) => {
    return language === 'en' && question.correctAnswer_en ? question.correctAnswer_en : question.correctAnswer;
  };

  const getUnitText = (question: SubjectiveQuestion) => {
    return language === 'en' && question.unit_en ? question.unit_en : question.unit;
  };

  const getOptionText = (question: PracticeQuestion, index: number) => {
    if (language === 'en' && question.options_en) {
      return question.options_en[index];
    }
    return question.options[index];
  };

  const getDifficultyText = (difficulty: string) => {
    const difficultyMap: { [key: string]: string } = {
      'easy': t('practice.easy'),
      'medium': t('practice.medium'),
      'hard': t('practice.hard')
    };
    return difficultyMap[difficulty] || difficulty;
  };

  const getTopicName = (topicId: string) => {
    const topicMappings: { [key: string]: string } = {
      'pythagorean-theorem': t('topic.pythagoreantheorem'),
      'trigonometric-ratios': t('topic.trigonometricratios'),
      'congruence-similarity': t('topic.congruencesimilarity'),
      'volume-surface-area': t('topic.volumesurfacearea'),
      'probability': t('topic.probability'),
      'statistics': t('topic.statistics')
    };
    return topicMappings[topicId] || topicId;
  };

  // 랜덤으로 5개 문제 선택
  const selectRandomQuestions = () => {
    const selected = getRandomQuestionsFromAllTopics();
    setSelectedQuestions(selected);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setShowResult(false);
    setScore(0);
    setAnswered(new Array(selected.length).fill(false));
    setResults(new Array(selected.length).fill({ question: selected[0], userAnswer: '', isCorrect: false }));
    setIsComplete(false);
    setAnswerAnalysis(null);
  };

  useEffect(() => {
    selectRandomQuestions();
  }, []);

  const isSubjectiveQuestion = (question: QuestionType): question is SubjectiveQuestion & { type: 'subjective' } => {
    return 'type' in question && question.type === 'subjective';
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered[currentQuestionIndex]) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === (currentQuestion as PracticeQuestion).correctAnswer;
    if (isCorrect) setScore(score + 1);
    
    const newAnswered = [...answered];
    newAnswered[currentQuestionIndex] = true;
    setAnswered(newAnswered);
    
    const newResults = [...results];
    newResults[currentQuestionIndex] = {
      question: currentQuestion,
      userAnswer: answerIndex,
      isCorrect: isCorrect,
      accuracyPercentage: isCorrect ? 100 : undefined,
      grade: isCorrect ? 'A+' : 'C-'
    };
    setResults(newResults);
    
    if (newAnswered.every(ans => ans)) {
      setIsComplete(true);
    }
  };

  const handleSubjectiveSubmit = () => {
    if (answered[currentQuestionIndex] || !userAnswer.trim()) return;
    
    const currentQuestion = selectedQuestions[currentQuestionIndex] as SubjectiveQuestion & { type: 'subjective' };
    // 번역 함수를 타입 호환되도록 래핑
    const translateFunction = (key: string) => {
      try {
        return t(key as 'feedback.perfect');
      } catch {
        return key;
      }
    };
    const analysis = analyzeAnswer(userAnswer, currentQuestion, translateFunction);
    
    setAnswerAnalysis(analysis);
    setShowResult(true);
    
    const newAnswered = [...answered];
    newAnswered[currentQuestionIndex] = true;
    setAnswered(newAnswered);

    const isCorrect = analysis.isCorrect || analysis.accuracy >= 85;
    
    const newResults = [...results];
    newResults[currentQuestionIndex] = {
      question: currentQuestion,
      userAnswer: userAnswer,
      isCorrect: isCorrect,
      accuracyPercentage: isCorrect ? analysis.accuracy : undefined,
      grade: isCorrect ? 'A+' : 'C-'
    };
    setResults(newResults);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setUserAnswer('');
      setShowResult(false);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    selectRandomQuestions();
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswer('');
    setShowResult(false);
    setScore(0);
    setAnswered(new Array(selectedQuestions.length).fill(false));
    setResults(new Array(selectedQuestions.length).fill({ question: selectedQuestions[0], userAnswer: '', isCorrect: false }));
    setIsComplete(false);
    setAnswerAnalysis(null);
  };

  if (selectedQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="animate-spin h-8 w-8 mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + (answered[currentQuestionIndex] ? 1 : 0)) / selectedQuestions.length) * 100;

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <Trophy className="h-16 w-16 mx-auto text-yellow-500 mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('practice.complete')}</h1>
              <p className="text-gray-600">{t('topic.randomPractice')} {t('home.completed')}</p>
              
              {/* 학습 시간 표시 */}
              <div className="flex items-center justify-center space-x-2 mt-3 text-blue-600">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{t('practice.totalTime')}: {formatCurrentTime()}</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 mb-6">
              <div className="text-4xl font-bold mb-2">{score} / {selectedQuestions.length}</div>
              <div className="text-lg">{t('practice.accuracy')}: {Math.round((score / selectedQuestions.length) * 100)}%</div>
            </div>

            <div className="space-y-3 mb-6">
              {selectedQuestions.map((question, index) => (
                <div key={question.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      {results[index].isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500" />
                      )}
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900">
                        {getTopicName(question.topicId)} ({isSubjectiveQuestion(question) ? t('practice.subjective') : t('practice.multipleChoice')})
                      </div>
                      <div className="text-sm text-gray-600 truncate max-w-md">
                        {getQuestionText(question)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                      question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {getDifficultyText(question.difficulty)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={resetQuiz}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="h-5 w-5" />
                <span>{t('practice.tryAgain')}</span>
              </button>
              <Link
                to="/"
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>{t('practice.home')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-3xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>{t('practice.home')}</span>
          </Link>
          <div className="flex items-center space-x-2 text-gray-600">
            <Target className="h-5 w-5" />
            <span className="font-medium">{t('topic.randomPractice')}</span>
          </div>
        </div>

        {/* 진행률 및 학습 시간 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              {t('practice.question')} {currentQuestionIndex + 1} / {selectedQuestions.length}
            </span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">{formatCurrentTime()}</span>
              </div>
              <span className="text-sm font-medium text-gray-600">
                {t('practice.score')}: {score} / {selectedQuestions.length}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 문제 카드 */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* 문제 정보 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {getTopicName(currentQuestion.topicId)}
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                isSubjectiveQuestion(currentQuestion) ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {isSubjectiveQuestion(currentQuestion) ? t('practice.subjective') : t('practice.multipleChoice')}
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {getDifficultyText(currentQuestion.difficulty)}
              </span>
            </div>
          </div>

          {/* 문제 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">
              {getQuestionText(currentQuestion)}
            </h2>
          </div>

          {/* 객관식 선택지 */}
          {!isSubjectiveQuestion(currentQuestion) && (
            <div className="space-y-3 mb-6">
              {(currentQuestion as PracticeQuestion).options.map((option, index) => {
                let buttonClass = "w-full p-4 text-left border-2 rounded-xl transition-all duration-200 ";
                
                if (answered[currentQuestionIndex]) {
                  if (index === (currentQuestion as PracticeQuestion).correctAnswer) {
                    buttonClass += "border-green-500 bg-green-50 text-green-900";
                  } else if (index === selectedAnswer && index !== (currentQuestion as PracticeQuestion).correctAnswer) {
                    buttonClass += "border-red-500 bg-red-50 text-red-900";
                  } else {
                    buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                  }
                } else {
                  buttonClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={answered[currentQuestionIndex]}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">
                        {String.fromCharCode(65 + index)}. {getOptionText(currentQuestion as PracticeQuestion, index)}
                      </span>
                      {answered[currentQuestionIndex] && (
                        <div className="flex-shrink-0 ml-4">
                          {index === (currentQuestion as PracticeQuestion).correctAnswer ? (
                            <Check className="h-5 w-5 text-green-600" />
                          ) : index === selectedAnswer ? (
                            <X className="h-5 w-5 text-red-600" />
                          ) : null}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* 주관식 입력 */}
          {isSubjectiveQuestion(currentQuestion) && (
            <div className="mb-6">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={answered[currentQuestionIndex]}
                  placeholder={t('practice.subjective') === '주관식' ? '답을 입력하세요...' : 'Enter your answer...'}
                  className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-300 focus:outline-none disabled:bg-gray-50 disabled:text-gray-600"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubjectiveSubmit()}
                />
                <button
                  onClick={handleSubjectiveSubmit}
                  disabled={answered[currentQuestionIndex] || !userAnswer.trim()}
                  className="px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-xl transition-colors duration-200 flex items-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{t('practice.submit')}</span>
                </button>
              </div>
              {(currentQuestion as SubjectiveQuestion).unit && (
                <p className="text-sm text-gray-500 mt-2">
                  {t('practice.unit')}: {getUnitText(currentQuestion as SubjectiveQuestion)}
                </p>
              )}
            </div>
          )}

          {/* 해설 */}
          {showResult && (
            <div className="mb-6">
              {isSubjectiveQuestion(currentQuestion) && answerAnalysis ? (
                <div className="space-y-4">
                  {/* 점수 및 등급 */}
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-purple-900">{t('practice.answerAnalysis')}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          answerAnalysis.grade === 'A+' || answerAnalysis.grade === 'A' ? 'bg-green-100 text-green-800' :
                          answerAnalysis.grade === 'B+' || answerAnalysis.grade === 'B' ? 'bg-blue-100 text-blue-800' :
                          answerAnalysis.grade === 'C+' || answerAnalysis.grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {answerAnalysis.grade}
                        </span>
                        <span className="text-lg font-bold text-purple-800">
                          {answerAnalysis.accuracy}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2 mb-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${answerAnalysis.accuracy}%` }}
                      />
                    </div>
                    <p className="text-purple-800">{answerAnalysis.feedback}</p>
                  </div>
                  
                  {/* 정답 및 해설 */}
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <h3 className="font-bold text-blue-900 mb-2">{t('practice.correctAnswer')} & {t('practice.explanation')}</h3>
                    <p className="text-blue-800 mb-2">
                      <strong>{t('practice.correctAnswer')}:</strong> {getCorrectAnswerText(currentQuestion as SubjectiveQuestion)}
                    </p>
                    <p className="text-blue-800">{getExplanationText(currentQuestion)}</p>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-2">{t('practice.explanation')}</h3>
                  <p className="text-blue-800">{getExplanationText(currentQuestion)}</p>
                </div>
              )}
            </div>
          )}

          {/* 다음 버튼 */}
          {answered[currentQuestionIndex] && (
            <div className="flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-200 flex items-center space-x-2"
              >
                <span>
                  {currentQuestionIndex < selectedQuestions.length - 1 ? t('practice.next') : t('practice.showResult')}
                </span>
                <ArrowLeft className="h-5 w-5 rotate-180" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomPractice; 