import React, { useState, useEffect, useRef } from 'react';
import { experienceData } from '../data/experienceData';

const ExperienceTerminal: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const command = 'guest@rafael-dev : ~ $ ./load-experience-records.sh';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const lines = [
      command,
      '',
      ...experienceData.flatMap((exp, index) => [
        `[${index + 1}] ${exp.role} @ ${exp.company}`,
        `    ${exp.year}`,
        ...exp.description.map(desc => `    > ${desc}`),
        ''
      ]),
      'process finished with exit code 0'
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setDisplayedLines(prev => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600); // Velocidad más lenta

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} id="experiencia" className="min-h-screen flex items-center py-20 bg-monokai-sidebar scroll-mt-[56px]">
      <div className="container mx-auto px-4">
        <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-monokai-muted/30 font-mono text-sm md:text-base h-[600px] flex flex-col">
          {/* Header */}
          <div className="bg-[#2d2d2d] px-4 py-3 flex items-center justify-between border-b border-monokai-muted/20 shrink-0">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <span className="text-monokai-muted text-xs">zsh — experience.log</span>
          </div>
          
          {/* Content */}
          <div className="p-6 text-[#E0E0E0] overflow-y-auto custom-scrollbar flex-grow">
            {displayedLines.map((line, index) => (
              <div key={index} className="mb-1 whitespace-pre-wrap">
                <span className={index === 0 ? 'text-monokai-blue font-bold' : ''}>{line}</span>
                {index === displayedLines.length - 1 && <span className="animate-pulse ml-1">█</span>}
              </div>
            ))}
            {!hasStarted && <div className="text-monokai-muted italic">Scroll para cargar registros...</div>}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e1e1e;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3d3d3d;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #505050;
        }
      `}} />
    </section>
  );
};

export default ExperienceTerminal;

