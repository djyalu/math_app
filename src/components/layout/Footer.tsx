import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Import arrow icons

const Footer = () => {
  // Basic navigation functions - these would typically interact with a router or state management
  const handlePrevious = () => {
    window.history.back(); // Navigate to the previous page in history
  };

  const handleNext = () => {
    window.history.forward(); // Navigate to the next page in history
  };

  return (
    <footer className="bg-white border-t py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
        <div className="flex space-x-4">
          <button 
            onClick={handlePrevious} 
            className="cursor-pointer hover:text-blue-600 p-2" 
            aria-label="이전 화면"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={handleNext} 
            className="cursor-pointer hover:text-blue-600 p-2" 
            aria-label="다음 화면"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;