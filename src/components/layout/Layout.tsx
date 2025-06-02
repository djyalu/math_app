import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  BookOpen, 
  Home, 
  Menu, 
  X, 
  ChevronRight,
  LogOut
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 bg-blue-600 text-white">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen size={24} />
            <span className="text-lg font-semibold">Think! Math G3</span>
          </Link>
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <p className="mb-2 text-xs font-semibold text-gray-500 uppercase">
            학습 메뉴
          </p>
          <nav className="space-y-1">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg ${
                isActive('/') 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <Home size={18} />
              <span>홈</span>
            </Link>
            <div className="px-3 py-2">
              <p className="mb-1 text-xs font-semibold text-gray-500">학습 단원</p>
              <div className="space-y-1">
                <Link
                  to="/topic/congruence-similarity"
                  className={`flex items-center justify-between px-4 py-2 rounded-lg ${
                    location.pathname.includes('/topic/congruence-similarity') 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span>합동과 닮음</span>
                  <ChevronRight size={16} />
                </Link>
                <Link
                  to="/topic/pythagorean-theorem"
                  className={`flex items-center justify-between px-4 py-2 rounded-lg ${
                    location.pathname.includes('/topic/pythagorean-theorem') 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span>피타고라스 정리</span>
                  <ChevronRight size={16} />
                </Link>
                <Link
                  to="/topic/trigonometric-ratios"
                  className={`flex items-center justify-between px-4 py-2 rounded-lg ${
                    location.pathname.includes('/topic/trigonometric-ratios') 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span>삼각비</span>
                  <ChevronRight size={16} />
                </Link>
                <Link
                  to="/topic/volume-surface-area"
                  className={`flex items-center justify-between px-4 py-2 rounded-lg ${
                    location.pathname.includes('/topic/volume-surface-area') 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span>입체도형의 부피와 겉넓이</span>
                  <ChevronRight size={16} />
                </Link>
                <Link
                  to="/topic/probability"
                  className={`flex items-center justify-between px-4 py-2 rounded-lg ${
                    location.pathname.includes('/topic/probability') 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span>확률</span>
                  <ChevronRight size={16} />
                </Link>
                <Link
                  to="/topic/statistics"
                  className={`flex items-center justify-between px-4 py-2 rounded-lg ${
                    location.pathname.includes('/topic/statistics') 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span>통계</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button className="flex w-full items-center justify-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
            <LogOut size={18} />
            <span>진도 초기화</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header>
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="p-2 rounded-md lg:hidden"
          >
            <Menu size={24} />
          </button>
        </Header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;