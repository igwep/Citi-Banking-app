import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="border-t-4 border-b-4 border-t-[#004D8E] border-b-[#004D8E] w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
