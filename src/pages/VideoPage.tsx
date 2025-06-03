import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const videoLinks: Record<string, { titleKey: string; url: string }> = {
  'congruence-similarity': {
    titleKey: 'video.congruence',
    url: 'https://www.youtube.com/watch?v=jWHOF6cFbpw'
  },
  'pythagorean-theorem': {
    titleKey: 'video.pythagorean',
    url: 'https://www.youtube.com/watch?v=d8EA5TxGzcY'
  },
  'trigonometric-ratios': {
    titleKey: 'video.trigonometric',
    url: 'https://www.youtube.com/watch?v=9-eHMMpQC2k'
  },
  'volume-surface-area': {
    titleKey: 'video.volume',
    url: 'https://www.youtube.com/watch?v=x8wEnG4GURQ'
  },
  'probability': {
    titleKey: 'video.probability',
    url: 'https://www.youtube.com/watch?v=SkidyDQuupA'
  },
  'statistics': {
    titleKey: 'video.statistics',
    url: 'https://www.youtube.com/watch?v=XZo4xyJXCak'
  }
};

const VideoPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { t } = useLanguage();
  
  if (!topicId || !videoLinks[topicId]) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">{t('video.notFound')}</h2>
        <p>{t('video.notFoundDesc')}</p>
      </div>
    );
  }

  const video = videoLinks[topicId];
  const videoTitle = t(video.titleKey as 'video.congruence' | 'video.pythagorean' | 'video.trigonometric' | 'video.volume' | 'video.probability' | 'video.statistics');
  const videoId = video.url.split('v=')[1].split('&')[0];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">{videoTitle} {t('video.learningVideo')}</h2>
      <div className="w-full" style={{ height: '75vh' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">{t('video.additionalResources')}</h3>
        <p className="text-gray-600">
          {t('video.moreVideos')}{' '}
          <a 
            href="https://www.youtube.com/@TheOrganicChemistryTutor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            The Organic Chemistry Tutor
          </a>
          {t('video.visitChannel')}
        </p>
      </div>
    </div>
  );
};

export default VideoPage; 