import React, { useState, useEffect, useRef } from 'react';
import Header from '../layout/Header';
import StatusBar from '../layout/StatusBar';
import SkillsCubeAnimation from './SkillsCubeAnimation';
import HeroBackgroundAnimation from './HeroBackgroundAnimation';
import { cvData } from '../../data/cvData';

const HeroSection: React.FC = () => {
  const [lineCount, setLineCount] = useState(24);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLineCount = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        const lineHeight = 22.4; // Approximate for text-sm leading-relaxed
        const lines = Math.floor((height - 40) / lineHeight); // Subtracting padding
        setLineCount(Math.max(10, lines));
      }
    };

    updateLineCount();
    window.addEventListener('resize', updateLineCount);
    return () => window.removeEventListener('resize', updateLineCount);
  }, []);

  return (
    <div className="min-h-screen bg-monokai-sidebar flex flex-col justify-between font-mono text-monokai-text selection:bg-monokai-pink selection:text-white relative overflow-hidden">
      {/* Background Animation */}
      <HeroBackgroundAnimation />

      <Header />

      <div id="inicio" ref={containerRef} className="flex-grow flex flex-col md:flex-row relative z-10">
        {/* Editor line numbers column */}
        <div className="hidden md:flex flex-col w-14 bg-monokai-sidebar/50 backdrop-blur-sm border-r border-monokai-muted/30 text-monokai-muted text-right pr-3 pt-10 select-none text-sm leading-relaxed font-mono">
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i} className="hover:text-monokai-pink transition-colors cursor-default">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Hero Content Area */}
        <div className="flex-grow max-w-[90%] mx-auto w-full px-6 py-10 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Left Content - Glassmorphism Card */}
          <div className="flex-[0.6] lg:flex-[0.7] space-y-6 z-10 bg-monokai-bg/60 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-monokai-sidebar/80 border border-monokai-muted/30 text-xs text-monokai-muted">
                <span className="w-2 h-2 rounded-full bg-monokai-green animate-pulse"></span>
                <span>Disponible para proyectos y arquitectura de software</span>
              </div>
              <p className="text-monokai-muted italic text-sm md:text-base">
                {"// Ingeniero en Informática & Arquitecto de Software"}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-monokai-text">
                <span className="text-monokai-pink">const</span> <span className="text-monokai-blue">Rafael</span> = <span className="text-monokai-yellow">"Velásquez"</span>;
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-monokai-text leading-relaxed max-w-2xl">
              {cvData.subtitle}
            </p>

            <div className="space-y-2">
              <p className="text-xs text-monokai-muted uppercase tracking-wider font-semibold">// Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {cvData.keyTechnologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-monokai-sidebar border border-monokai-muted/30 text-monokai-text text-sm rounded-md shadow-sm hover:border-monokai-blue hover:text-monokai-blue transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#experiencia"
                className="px-6 py-3 bg-monokai-blue text-white rounded-md font-bold hover:bg-blue-600 transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center space-x-2"
              >
                <span>Ver Experiencia</span>
                <span>→</span>
              </a>
              <a 
                href="#contacto"
                className="px-6 py-3 bg-monokai-sidebar border border-monokai-muted text-monokai-text rounded-md font-bold hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                Descargar CV (PDF)
              </a>
            </div>
          </div>

          {/* Right Content - 3D Cube Animation */}
          <div className="flex-[1.4] lg:flex-[1.3] w-full max-w-md md:max-w-none flex flex-col items-center justify-center py-6 mt-10 md:mt-0 gap-8">
            <SkillsCubeAnimation />
            
            <a 
              href="#habilidades"
              className="group relative px-8 py-3 bg-monokai-bg/80 backdrop-blur-sm border border-monokai-blue/50 text-monokai-blue rounded-full font-mono text-sm hover:bg-monokai-blue hover:text-white transition-all duration-300 shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-monokai-pink">0x01</span> Ver Habilidades Detalladas
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
          </div>

        </div>
      </div>

      <StatusBar />
    </div>
  );
};

export default HeroSection;



