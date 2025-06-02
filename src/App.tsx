import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopicProvider } from './contexts/TopicContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { LessonProvider } from './contexts/LessonContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';
import LessonPage from './pages/LessonPage';
import PracticePage from './pages/PracticePage';
import VideoPage from './pages/VideoPage';
import VisualizerPage from './pages/VisualizerPage';
import ProgressPage from './pages/ProgressPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <TopicProvider>
        <ProgressProvider>
          <LessonProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/topic/:topicId" element={<TopicPage />} />
                <Route path="/lesson/:lessonId" element={<LessonPage />} />
                <Route path="/practice/:topicId" element={<PracticePage />} />
                <Route path="/video/:topicId" element={<VideoPage />} />
                <Route path="/visualizer/:type" element={<VisualizerPage />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          </LessonProvider>
        </ProgressProvider>
      </TopicProvider>
    </Router>
  );
}

export default App;