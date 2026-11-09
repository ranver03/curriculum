import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between h-7 px-4 bg-monokai-bg border-t border-monokai-muted/30 text-monokai-muted text-xs font-mono select-none">
      <div className="flex items-center space-x-4">
        <span className="flex items-center space-x-1">
          <span className="w-2 h-2 rounded-full bg-monokai-green inline-block"></span>
          <span>READY</span>
        </span>
        <span className="hidden sm:inline">Ln 1, Col 1</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span>TypeScript React</span>
      </div>
      <div className="flex items-center space-x-3">
        <span>portada.tsx</span>
        <span className="text-monokai-pink">© {new Date().getFullYear()} Rafael Velásquez</span>
      </div>
    </div>
  );
};

export default StatusBar;


