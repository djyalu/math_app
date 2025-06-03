import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopicProvider } from './contexts/TopicContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { LessonProvider } from './contexts/LessonContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import TopicPage from './pages/TopicPage';
import LessonPage from './pages/LessonPage';
import PracticePage from './pages/PracticePage';
import VideoPage from './pages/VideoPage';
import VisualizerPage from './pages/VisualizerPage';
import ProgressPage from './pages/ProgressPage';
import RandomPractice from './components/RandomPractice';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import UnlockAccountPage from './pages/UnlockAccountPage';
import './App.css';

// 메인 애플리케이션 컴포넌트 (인증 후)
const MainApp: React.FC = () => {
  return (
    <TopicProvider>
      <ProgressProvider>
        <LessonProvider>
          <Router>
            <Routes>
              {/* 잠금 해제 페이지는 Layout 없이 독립적으로 렌더링 */}
              <Route path="/unlock-account" element={<UnlockAccountPage />} />
              
              {/* 나머지 페이지들은 Layout으로 감싸짐 */}
              <Route path="/*" element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topic/:topicId" element={<TopicPage />} />
                    <Route path="/lesson/:lessonId" element={<LessonPage />} />
                    <Route path="/practice/:topicId" element={<PracticePage />} />
                    <Route path="/video/:topicId" element={<VideoPage />} />
                    <Route path="/visualizer/:type" element={<VisualizerPage />} />
                    <Route path="/progress" element={<ProgressPage />} />
                    <Route path="/random-practice" element={<RandomPractice />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Layout>
              } />
            </Routes>
          </Router>
        </LessonProvider>
      </ProgressProvider>
    </TopicProvider>
  );
};

// 인증 상태에 따른 라우팅 컴포넌트
const AuthenticatedApp: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/unlock-account" element={<UnlockAccountPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    );
  }

  return <MainApp />;
};

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AuthenticatedApp />
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;