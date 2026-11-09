import React from 'react';

interface VSCodeHeaderProps {
  title: string;
  fileName: string;
}

const VSCodeHeader: React.FC<VSCodeHeaderProps> = ({ title, fileName }) => {
  return (
    <div className="flex items-center justify-between h-8 px-2 bg-monokai-sidebar text-monokai-muted text-sm rounded-t-lg">
      {/* Left controls */}
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      {/* Title */}
      <div className="flex-grow text-center">
        <span>{title} - {fileName}</span>
      </div>

      {/* Right controls (empty for now) */}
      <div className="w-16"></div>
    </div>
  );
};

export default VSCodeHeader;

