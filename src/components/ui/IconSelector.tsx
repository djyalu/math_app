import React from 'react';
import { Triangle, FunctionSquare, Shapes, Box, Brain, BarChart2, Dice5, Calculator } from 'lucide-react';

export interface IconSelectorProps {
  icon: string;
  className?: string;
  style?: React.CSSProperties;
}

const IconSelector: React.FC<IconSelectorProps> = ({ icon, className, style }) => {
  switch (icon) {
    case 'triangle':
      return <Triangle className={className} style={style} />;
    case 'function':
      return <FunctionSquare className={className} style={style} />;
    case 'shapes':
      return <Shapes className={className} style={style} />;
    case 'cube':
      return <Box className={className} style={style} />;
    case 'brain':
      return <Brain className={className} style={style} />;
    case 'bar-chart-2':
      return <BarChart2 className={className} style={style} />;
    case 'dice':
      return <Dice5 className={className} style={style} />;
    case 'calculator':
      return <Calculator className={className} style={style} />;
    default:
      return <Shapes className={className} style={style} />;
  }
};

export default IconSelector;