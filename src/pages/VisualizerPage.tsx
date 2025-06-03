import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  Play, 
  Pause,
  Info
} from 'lucide-react';
import { useTopic } from '../contexts/TopicContext';
import { useLanguage } from '../contexts/LanguageContext';

const VisualizerPage = () => {
  const { type } = useParams<{ type: string }>();
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showInfo, setShowInfo] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  const getVisualizer = () => {
    switch (type) {
      case 'geometry':
        return {
          title: t('visualizer.geometry.title'),
          description: t('visualizer.geometry.desc'),
          content: <GeometryVisualizer canvasRef={canvasRef} zoomLevel={zoomLevel} isPlaying={isPlaying} />
        };
      case 'trigonometry':
        return {
          title: t('visualizer.trigonometry.title'),
          description: t('visualizer.trigonometry.desc'),
          content: <TrigonometryVisualizer canvasRef={canvasRef} zoomLevel={zoomLevel} isPlaying={isPlaying} />
        };
      case 'statistics':
        return {
          title: t('visualizer.statistics.title'),
          description: t('visualizer.statistics.desc'),
          content: <StatisticsVisualizer canvasRef={canvasRef} zoomLevel={zoomLevel} isPlaying={isPlaying} />
        };
      default:
        return {
          title: t('visualizer.default.title'),
          description: t('visualizer.default.desc'),
          content: <GeometryVisualizer canvasRef={canvasRef} zoomLevel={zoomLevel} isPlaying={isPlaying} />
        };
    }
  };
  
  const visualizer = getVisualizer();
  
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2));
  };
  
  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.6));
  };
  
  const handleReset = () => {
    setZoomLevel(1);
    setIsPlaying(false);
  };
  
  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };
  
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-4 text-gray-600 hover:text-gray-900">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold">{visualizer.title}</h1>
        </div>
        
        <button 
          onClick={() => setShowInfo(!showInfo)}
          className="p-2 rounded-full hover:bg-gray-100"
          title={showInfo ? "Hide information" : "Show information"}
        >
          <Info size={20} className="text-gray-600" />
        </button>
      </div>
      
      {showInfo && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <p className="text-blue-800">{visualizer.description}</p>
        </div>
      )}
      
      <div className="bg-white rounded-xl shadow-sm p-6 visualizer-container" style={{ transform: `scale(${zoomLevel})` }}>
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={400} 
          className="w-full border border-gray-200 rounded-lg"
        ></canvas>
        
        <div className="flex justify-between mt-4">
          <div className="flex space-x-2">
            <button 
              onClick={handleZoomIn} 
              className="p-2 rounded hover:bg-gray-100"
              title="Zoom in"
            >
              <Maximize size={20} className="text-gray-600" />
            </button>
            <button 
              onClick={handleZoomOut} 
              className="p-2 rounded hover:bg-gray-100"
              title="Zoom out"
            >
              <Minimize size={20} className="text-gray-600" />
            </button>
            <button 
              onClick={handleReset} 
              className="p-2 rounded hover:bg-gray-100"
              title="Reset"
            >
              <RotateCcw size={20} className="text-gray-600" />
            </button>
          </div>
          
          <button 
            onClick={togglePlayPause} 
            className="p-2 rounded hover:bg-gray-100"
            title={isPlaying ? "Pause animation" : "Play animation"}
          >
            {isPlaying ? (
              <Pause size={20} className="text-gray-600" />
            ) : (
              <Play size={20} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">{t('visualizer.controls.title')}</h2>
        
        <div className="space-y-4">
          {/* This would contain sliders, buttons, and other interactive elements 
              specific to the type of visualizer being displayed */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('visualizer.controls.speed')}
            </label>
            <input 
              type="range" 
              min="1" 
              max="100" 
              defaultValue="50" 
              className="w-full interactive-control"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('visualizer.controls.param1')}
            </label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              defaultValue="50" 
              className="w-full interactive-control"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('visualizer.controls.param2')}
            </label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              defaultValue="75" 
              className="w-full interactive-control"
            />
          </div>
          
          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {t('visualizer.controls.optionA')}
            </button>
            <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              {t('visualizer.controls.optionB')}
            </button>
            <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              {t('visualizer.controls.optionC')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder visualizer components
const GeometryVisualizer = ({ 
  canvasRef, 
  zoomLevel, 
  isPlaying 
}: { 
  canvasRef: React.RefObject<HTMLCanvasElement>;
  zoomLevel: number;
  isPlaying: boolean;
}) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up a simple visualization (would be more complex in a real app)
    ctx.fillStyle = '#f0f9ff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw coordinate system
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let x = 0; x <= canvas.width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let y = 0; y <= canvas.height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    // Draw x and y axes
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    
    // x-axis
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    
    // y-axis
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    
    // Draw a right-angled triangle
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Triangle points
    const pointA = { x: centerX, y: centerY };
    const pointB = { x: centerX + 100, y: centerY };
    const pointC = { x: centerX + 100, y: centerY - 75 };
    
    ctx.beginPath();
    ctx.moveTo(pointA.x, pointA.y);
    ctx.lineTo(pointB.x, pointB.y);
    ctx.lineTo(pointC.x, pointC.y);
    ctx.closePath();
    
    ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
    ctx.fill();
    
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw right angle symbol
    ctx.beginPath();
    ctx.moveTo(pointB.x - 15, pointB.y);
    ctx.lineTo(pointB.x - 15, pointB.y - 15);
    ctx.lineTo(pointB.x, pointB.y - 15);
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Label sides
    ctx.font = '14px Arial';
    ctx.fillStyle = '#1e40af';
    
    // Side a
    ctx.fillText('a = 75', pointB.x + 5, pointB.y - 30);
    
    // Side b
    ctx.fillText('b = 100', centerX + 50, centerY + 20);
    
    // Side c (hypotenuse)
    ctx.fillText('c = 125', centerX + 50, centerY - 50);
    
  }, [canvasRef, zoomLevel, isPlaying]);
  
  return null; // The canvas is managed via the ref
};

const TrigonometryVisualizer = ({ 
  canvasRef, 
  zoomLevel, 
  isPlaying 
}: { 
  canvasRef: React.RefObject<HTMLCanvasElement>;
  zoomLevel: number;
  isPlaying: boolean;
}) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up a simple visualization
    ctx.fillStyle = '#fff7ed';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    
    // Draw the unit circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = '#e11d48';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw coordinate axes
    ctx.beginPath();
    ctx.moveTo(centerX - radius - 30, centerY);
    ctx.lineTo(centerX + radius + 30, centerY);
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius - 30);
    ctx.lineTo(centerX, centerY + radius + 30);
    ctx.stroke();
    
    // Calculate angle based on animation
    const now = new Date().getTime();
    const angle = isPlaying ? (now / 1000) % (Math.PI * 2) : Math.PI / 4;
    
    // Calculate point on circle
    const x = centerX + radius * Math.cos(angle);
    const y = centerY - radius * Math.sin(angle);
    
    // Draw radial line
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw sine line
    ctx.beginPath();
    ctx.moveTo(x, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw cosine line
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, centerY);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw point on circle
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#3b82f6';
    ctx.fill();
    
    // Label angle
    ctx.font = '14px Arial';
    ctx.fillStyle = '#1e40af';
    ctx.fillText(`θ = ${(angle * 180 / Math.PI).toFixed(1)}°`, centerX + 20, centerY - 20);
    
    // Label sin, cos, tan
    ctx.fillStyle = '#10b981';
    ctx.fillText(`sin(θ) = ${Math.sin(angle).toFixed(2)}`, 20, 30);
    
    ctx.fillStyle = '#f59e0b';
    ctx.fillText(`cos(θ) = ${Math.cos(angle).toFixed(2)}`, 20, 50);
    
    ctx.fillStyle = '#e11d48';
    ctx.fillText(`tan(θ) = ${Math.tan(angle).toFixed(2)}`, 20, 70);
    
    // Request animation frame if playing
    if (isPlaying) {
      requestAnimationFrame(() => {
        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            // Redraw
            TrigonometryVisualizer({ canvasRef, zoomLevel, isPlaying });
          }
        }
      });
    }
    
  }, [canvasRef, zoomLevel, isPlaying]);
  
  return null;
};

const StatisticsVisualizer = ({ 
  canvasRef, 
  zoomLevel, 
  isPlaying 
}: { 
  canvasRef: React.RefObject<HTMLCanvasElement>;
  zoomLevel: number;
  isPlaying: boolean;
}) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set up a simple visualization
    ctx.fillStyle = '#f5f3ff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Sample data
    const data = [12, 19, 8, 24, 16, 9, 22, 15, 7, 18, 13, 11];
    
    // Bar chart
    const barWidth = 40;
    const barSpacing = 20;
    const maxValue = Math.max(...data);
    const scaleY = (canvas.height - 100) / maxValue;
    
    // Draw x and y axes
    ctx.beginPath();
    ctx.moveTo(50, canvas.height - 50);
    ctx.lineTo(canvas.width - 50, canvas.height - 50);
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, canvas.height - 50);
    ctx.stroke();
    
    // Draw bars
    for (let i = 0; i < data.length; i++) {
      const x = 70 + i * (barWidth + barSpacing);
      const barHeight = data[i] * scaleY;
      const y = canvas.height - 50 - barHeight;
      
      // Animate bar height if playing
      const animatedHeight = isPlaying 
        ? barHeight * (0.5 + 0.5 * Math.sin((new Date().getTime() / 1000) + i)) 
        : barHeight;
      
      const animatedY = canvas.height - 50 - animatedHeight;
      
      ctx.fillStyle = '#8b5cf6';
      ctx.fillRect(x, animatedY, barWidth, animatedHeight);
      
      // Bar border
      ctx.strokeStyle = '#6d28d9';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, animatedY, barWidth, animatedHeight);
      
      // X-axis label
      ctx.fillStyle = '#64748b';
      ctx.font = '12px Arial';
      ctx.fillText((i + 1).toString(), x + barWidth / 2 - 4, canvas.height - 30);
    }
    
    // Y-axis labels
    for (let i = 0; i <= maxValue; i += 5) {
      const y = canvas.height - 50 - i * scaleY;
      
      ctx.beginPath();
      ctx.moveTo(45, y);
      ctx.lineTo(50, y);
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.fillStyle = '#64748b';
      ctx.font = '12px Arial';
      ctx.fillText(i.toString(), 30, y + 4);
    }
    
    // Chart title
    ctx.fillStyle = '#1e1b4b';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Sample Data Distribution', canvas.width / 2 - 100, 30);
    
    // Statistics
    const sum = data.reduce((a, b) => a + b, 0);
    const mean = sum / data.length;
    
    // Sort for median
    const sortedData = [...data].sort((a, b) => a - b);
    const median = data.length % 2 === 0 
      ? (sortedData[data.length / 2 - 1] + sortedData[data.length / 2]) / 2 
      : sortedData[Math.floor(data.length / 2)];
    
    // Calculate mode
    const counts: Record<number, number> = {};
    let mode = data[0];
    let maxCount = 0;
    
    for (const value of data) {
      counts[value] = (counts[value] || 0) + 1;
      if (counts[value] > maxCount) {
        maxCount = counts[value];
        mode = value;
      }
    }
    
    // Display statistics
    ctx.fillStyle = '#6d28d9';
    ctx.font = '14px Arial';
    ctx.fillText(`Mean: ${mean.toFixed(2)}`, canvas.width - 150, 70);
    ctx.fillText(`Median: ${median}`, canvas.width - 150, 90);
    ctx.fillText(`Mode: ${mode}`, canvas.width - 150, 110);
    
    // Request animation frame if playing
    if (isPlaying) {
      requestAnimationFrame(() => {
        if (canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            // Redraw
            StatisticsVisualizer({ canvasRef, zoomLevel, isPlaying });
          }
        }
      });
    }
    
  }, [canvasRef, zoomLevel, isPlaying]);
  
  return null;
};

export default VisualizerPage;