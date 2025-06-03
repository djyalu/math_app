import React, { useState } from 'react';
import { Practice } from '../data/types';
import { useLanguage } from '../contexts/LanguageContext';

interface PracticeProblemsProps {
  practice: Practice;
}

const PracticeProblems: React.FC<PracticeProblemsProps> = ({ practice }) => {
  const { t } = useLanguage();
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showHints, setShowHints] = useState<boolean>(false);

  const handleProblemClick = (problemId: string) => {
    setSelectedProblem(problemId);
    setShowAnswer(false);
    setShowHints(false);
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'basic': return t('problems.basic');
      case 'intermediate': return t('problems.intermediate');
      case 'advanced': return t('problems.advanced');
      default: return difficulty;
    }
  };

  const selectedProblemData = practice.problems.find(p => p.id === selectedProblem);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">{practice.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">{t('problems.list')}</h3>
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
                <div className="font-medium">{t('practice.question')} {problem.id}</div>
                <div className="text-sm">
                  {t('problems.difficulty')}: {getDifficultyText(problem.difficulty)}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          {selectedProblemData ? (
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                {t('practice.question')} {selectedProblemData.id}
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
                  {showHints ? t('problems.hideHint') : t('problems.showHint')}
                </button>

                {showHints && (
                  <div className="bg-yellow-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">{t('problems.hint')}:</h4>
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
                  {showAnswer ? t('problems.hideAnswer') : t('problems.showAnswer')}
                </button>

                {showAnswer && (
                  <div className="bg-green-50 p-4 rounded">
                    <div className="mb-4">
                      <h4 className="font-semibold">{t('problems.answer')}:</h4>
                      <p className="text-gray-800">{selectedProblemData.answer}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t('problems.solution')}:</h4>
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
                {t('problems.selectProblem')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeProblems; 