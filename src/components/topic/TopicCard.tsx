import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Topic } from '../../contexts/TopicContext';
import { useProgress } from '../../contexts/ProgressContext';
import IconSelector from '../ui/IconSelector';

type TopicCardProps = {
  topic: Topic;
};

const TopicCard = ({ topic }: TopicCardProps) => {
  const { getCompletionPercentage } = useProgress();
  const completionPercentage = getCompletionPercentage(topic.id);
  
  return (
    <Link 
      to={`/topic/${topic.id}`}
      className={`topic-card math-card bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all topic-${topic.id}`}
      style={{ borderTop: `5px solid ${topic.color}` }}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
            style={{ backgroundColor: `${topic.color}20` }}
          >
            <IconSelector name={topic.icon} color={topic.color} />
          </div>
          <div className="relative w-10 h-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 stroke-current"
                strokeWidth="10"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="stroke-current"
                strokeWidth="10"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
                strokeDasharray={`${completionPercentage * 2.51} 251`}
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
                style={{ stroke: topic.color }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-medium">{completionPercentage}%</span>
            </div>
          </div>
        </div>
        <h3 className="font-semibold mb-2">{topic.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{topic.description}</p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">{topic.subtopics.length} subtopics</span>
          <div className="flex items-center text-blue-600 font-medium">
            <span className="mr-1">Explore</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;