import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e1e1e] text-monokai-muted py-8 border-t border-monokai-muted/20 font-mono text-xs">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          © 2026 Rafael Velásquez · Ingeniero en Informática
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/rafaelvelasquez" target="_blank" rel="noopener noreferrer" className="hover:text-monokai-pink transition-colors">GitHub</a>
          <a href="mailto:rafael@example.com" className="hover:text-monokai-pink transition-colors">Email</a>
        </div>
        <div className="flex items-center space-x-4">
          <span>UTF-8</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
