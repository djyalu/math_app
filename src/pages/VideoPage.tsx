import React from 'react';
import { useParams } from 'react-router-dom';

const videoLinks: Record<string, { title: string; url: string }> = {
  'congruence-similarity': {
    title: '합동과 닮음',
    url: 'https://www.youtube.com/watch?v=jWHOF6cFbpw'
  },
  'pythagorean-theorem': {
    title: '피타고라스 정리',
    url: 'https://www.youtube.com/watch?v=d8EA5TxGzcY'
  },
  'trigonometric-ratios': {
    title: '삼각비',
    url: 'https://www.youtube.com/watch?v=9-eHMMpQC2k'
  },
  'volume-surface-area': {
    title: '입체도형의 부피와 겉넓이',
    url: 'https://www.youtube.com/watch?v=x8wEnG4GURQ'
  },
  'probability': {
    title: '확률',
    url: 'https://www.youtube.com/watch?v=SkidyDQuupA'
  },
  'statistics': {
    title: '통계',
    url: 'https://www.youtube.com/watch?v=XZo4xyJXCak'
  }
};

const VideoPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  
  if (!topicId || !videoLinks[topicId]) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">동영상을 찾을 수 없습니다</h2>
        <p>선택한 주제의 동영상이 존재하지 않습니다.</p>
      </div>
    );
  }

  const video = videoLinks[topicId];
  const videoId = video.url.split('v=')[1].split('&')[0];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">{video.title} 학습 동영상</h2>
      <div className="w-full" style={{ height: '75vh' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">추가 학습 자료</h3>
        <p className="text-gray-600">
          더 많은 수학 학습 동영상을 보려면{' '}
          <a 
            href="https://www.youtube.com/@TheOrganicChemistryTutor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            The Organic Chemistry Tutor
          </a>
          를 방문하세요.
        </p>
      </div>
    </div>
  );
};

export default VideoPage; 