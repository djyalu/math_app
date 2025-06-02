import React from 'react';
import { 
  Shapes, 
  Triangle, 
  Square, 
  Box, 
  Dice5, 
  BarChart2, 
  BookOpen, 
  PenTool, 
  Eye, 
  Calculator,
  Brain,
  Award
} from 'lucide-react';

type IconSelectorProps = {
  name: string;
  size?: number;
  color?: string;
};

const IconSelector = ({ name, size = 24, color = '#000000' }: IconSelectorProps) => {
  const renderIcon = () => {
    switch (name) {
      case 'shapes':
        return <Shapes size={size} color={color} />;
      case 'triangle':
        return <Triangle size={size} color={color} />;
      case 'square-angle':
        return <Square size={size} color={color} />;
      case 'cube':
        return <Box size={size} color={color} />;
      case 'dice-5':
        return <Dice5 size={size} color={color} />;
      case 'bar-chart-2':
        return <BarChart2 size={size} color={color} />;
      case 'book-open':
        return <BookOpen size={size} color={color} />;
      case 'pen-tool':
        return <PenTool size={size} color={color} />;
      case 'eye':
        return <Eye size={size} color={color} />;
      case 'calculator':
        return <Calculator size={size} color={color} />;
      case 'brain':
        return <Brain size={size} color={color} />;
      case 'award':
        return <Award size={size} color={color} />;
      default:
        return <BookOpen size={size} color={color} />;
    }
  };

  return renderIcon();
};

export default IconSelector;