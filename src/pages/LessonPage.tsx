import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLesson } from '../contexts/LessonContext';

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { lessons, currentLesson, setCurrentLesson, markLessonAsCompleted, getNextLesson } = useLesson();
  const [currentSection, setCurrentSection] = useState<'theory' | 'examples' | 'practice'>('theory');
  const [showSolution, setShowSolution] = useState<boolean>(false);

  React.useEffect(() => {
    if (lessonId) {
      const lesson = lessons.find(l => l.id === lessonId);
      setCurrentLesson(lesson || null);
    }
  }, [lessonId, lessons, setCurrentLesson]);

  if (!currentLesson) {
    return <div className="p-4">수업을 찾을 수 없습니다.</div>;
  }

  const isVideoLecture = currentLesson.type === 'video-lecture';

  const handleComplete = () => {
    markLessonAsCompleted(currentLesson.id);
    const nextLesson = getNextLesson(currentLesson.id);
    if (nextLesson) {
      navigate(`/lesson/${nextLesson.id}`);
    } else {
      navigate(`/topic/${currentLesson.topicId}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{currentLesson.title}</h1>
      <p className="text-gray-600 mb-6">{currentLesson.description}</p>

      {isVideoLecture ? (
        // 동영상 강의 레이아웃
        <div className="space-y-6">
          {/* 메인 비디오 플레이어 */}
          <div className="space-y-6">
            {currentLesson.content.visualAids?.map((aid, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={aid.url}
                    className="w-full h-full rounded-lg shadow-lg"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={aid.description}
                  />
                </div>
                <h3 className="text-lg font-semibold">{aid.description}</h3>
              </div>
            ))}
          </div>

          {/* 강의 내용 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">강의 내용</h2>
            <div className="prose max-w-none">
              <div className="whitespace-pre-wrap">{currentLesson.content.theory}</div>
            </div>
          </div>

          {/* 연습 문제 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">학습 활동</h2>
            {currentLesson.content.practice.map((practice, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium mb-2">{practice.problem}</p>
                <div className="space-y-2">
                  {practice.hints.map((hint, hintIndex) => (
                    <div key={hintIndex} className="text-gray-600">
                      • {hint}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // 기존 레슨 레이아웃
        <>
          {/* 섹션 네비게이션 */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded ${
                currentSection === 'theory' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setCurrentSection('theory')}
            >
              이론
            </button>
            <button
              className={`px-4 py-2 rounded ${
                currentSection === 'examples' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setCurrentSection('examples')}
            >
              예제
            </button>
            <button
              className={`px-4 py-2 rounded ${
                currentSection === 'practice' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setCurrentSection('practice')}
            >
              연습 문제
            </button>
          </div>

          {/* 컨텐츠 영역 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {currentSection === 'theory' && (
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap">{currentLesson.content.theory}</div>
                {currentLesson.content.visualAids?.map((aid, index) => (
                  <div key={index} className="my-4">
                    {aid.type === 'interactive' && (
                      <div className="border rounded p-4">
                        <iframe
                          src={aid.url}
                          className="w-full h-96"
                          title={aid.description}
                        />
                      </div>
                    )}
                    <p className="text-sm text-gray-600 mt-2">{aid.description}</p>
                  </div>
                ))}
              </div>
            )}

            {currentSection === 'examples' && (
              <div className="space-y-6">
                {currentLesson.content.examples.map((example, index) => (
                  <div key={index} className="border rounded p-4">
                    <h3 className="font-bold mb-2">예제 {index + 1}</h3>
                    <div className="whitespace-pre-wrap mb-4">{example.problem}</div>
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => setShowSolution(!showSolution)}
                    >
                      {showSolution ? '해답 숨기기' : '해답 보기'}
                    </button>
                    {showSolution && (
                      <div className="mt-4">
                        <p className="font-bold">해답: {example.solution}</p>
                        <p className="text-gray-600 mt-2">{example.explanation}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {currentSection === 'practice' && (
              <div className="space-y-6">
                {currentLesson.content.practice.map((problem, index) => (
                  <div key={index} className="border rounded p-4">
                    <h3 className="font-bold mb-2">문제 {index + 1}</h3>
                    <div className="whitespace-pre-wrap mb-4">{problem.problem}</div>
                    <div className="space-y-2">
                      {problem.hints.map((hint, hintIndex) => (
                        <button
                          key={hintIndex}
                          className="text-blue-500 hover:text-blue-700 block"
                          onClick={() => {/* 힌트 표시 로직 */}}
                        >
                          힌트 {hintIndex + 1}
                        </button>
                      ))}
                    </div>
                    <button
                      className="text-blue-500 hover:text-blue-700 mt-4 block"
                      onClick={() => setShowSolution(!showSolution)}
                    >
                      {showSolution ? '해답 숨기기' : '해답 보기'}
                    </button>
                    {showSolution && (
                      <div className="mt-4">
                        <p className="font-bold">해답: {problem.solution}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {/* 완료 버튼 */}
      <div className="mt-6 flex justify-end">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          onClick={handleComplete}
        >
          학습 완료
        </button>
      </div>
    </div>
  );
};

export default LessonPage; 