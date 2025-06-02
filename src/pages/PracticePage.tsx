import React from 'react';
import { useParams } from 'react-router-dom';
import PracticeProblems from '../components/PracticeProblems';
import { practices } from '../data/practice';

const PracticePage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  console.log('Current URL parameter (topicId):', topicId);
  console.log('Available practices:', practices);
  
  const practice = practices.find(p => p.topicId === topicId);
  console.log('Found practice:', practice);

  if (!practice) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">연습 문제를 찾을 수 없습니다</h2>
        <p>선택한 챕터의 연습 문제가 존재하지 않습니다.</p>
        <p className="text-gray-600 mt-2">디버그 정보:</p>
        <pre className="bg-gray-100 p-2 rounded mt-2">
          URL parameter (topicId): {topicId}
          {'\n'}Available topics: {practices.map(p => p.topicId).join(', ')}
        </pre>
      </div>
    );
  }

  return <PracticeProblems practice={practice} />;
};

export default PracticePage;