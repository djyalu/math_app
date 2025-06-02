import React, { useState } from 'react';
import { Practice } from '../data/practice';

interface PracticeProblemsProps {
  practice: Practice;
}

const PracticeProblems: React.FC<PracticeProblemsProps> = ({ practice }) => {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showHints, setShowHints] = useState<boolean>(false);

  const handleProblemClick = (problemId: string) => {
    setSelectedProblem(problemId);
    setShowAnswer(false);
    setShowHints(false);
  };

  const selectedProblemData = practice.problems.find(p => p.id === selectedProblem);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">{practice.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">문제 목록</h3>
          <div className="space-y-2">
            {practice.problems.map((problem) => (
              <button
                key={problem.id}
                onClick={() => handleProblemClick(problem.id)}
                className={`w-full text-left p-2 rounded ${
                  selectedProblem === problem.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:bg-blue-50'
                }`}
              >
                <div className="font-medium">문제 {problem.id}</div>
                <div className="text-sm">
                  난이도:{' '}
                  {problem.difficulty === 'basic' ? '기본' :
                   problem.difficulty === 'intermediate' ? '중급' : '고급'}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          {selectedProblemData ? (
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                문제 {selectedProblemData.id}
              </h3>
              
              <div className="mb-6">
                <p className="text-gray-800 whitespace-pre-line">
                  {selectedProblemData.question}
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setShowHints(!showHints)}
                  className="w-full bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-2 px-4 rounded"
                >
                  힌트 {showHints ? '숨기기' : '보기'}
                </button>

                {showHints && (
                  <div className="bg-yellow-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">힌트:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProblemData.hints.map((hint, index) => (
                        <li key={index}>{hint}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="w-full bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded"
                >
                  답안 {showAnswer ? '숨기기' : '보기'}
                </button>

                {showAnswer && (
                  <div className="bg-green-50 p-4 rounded">
                    <div className="mb-4">
                      <h4 className="font-semibold">답:</h4>
                      <p className="text-gray-800">{selectedProblemData.answer}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">풀이:</h4>
                      <p className="text-gray-800 whitespace-pre-line">
                        {selectedProblemData.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <p className="text-gray-600">
                왼쪽에서 문제를 선택하세요
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeProblems; 