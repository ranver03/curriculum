import React, { useState, useEffect } from 'react';
import SkillCube from './SkillCube';

const CATEGORIES = [
  {
    id: 'backend',
    name: 'BACKEND',
    tag: '// Core APIs',
    skills: ['C# .NET', 'Laravel', 'Node.js', 'REST APIs'],
    color: 'text-monokai-blue',
    borderColor: 'border-monokai-blue',
    bgColor: 'bg-monokai-blue/10',
  },
  {
    id: 'erp',
    name: 'ERP & DATA',
    tag: '// Database',
    skills: ['SAP B1', 'HANA', 'SQL Server', 'ETL'],
    color: 'text-monokai-green',
    borderColor: 'border-monokai-green',
    bgColor: 'bg-monokai-green/10',
  },
  {
    id: 'devops',
    name: 'DEVOPS',
    tag: '// Cloud & Infra',
    skills: ['Docker', 'Git', 'CI/CD', 'Linux'],
    color: 'text-monokai-orange',
    borderColor: 'border-monokai-orange',
    bgColor: 'bg-monokai-orange/10',
  },
  {
    id: 'arch',
    name: 'ARCHITECTURE',
    tag: '// Design',
    skills: ['DDD', 'SOLID', 'TDD', 'Clean Code'],
    color: 'text-monokai-pink',
    borderColor: 'border-monokai-pink',
    bgColor: 'bg-monokai-pink/10',
  },
];

const SkillsCubeAnimation: React.FC = () => {
  const [orbitAngle, setOrbitAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbitAngle((prev) => (prev + 0.6) % 360);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg h-[400px] flex flex-col items-center justify-center select-none py-2">
      <div className="relative w-full h-[320px] flex items-center justify-center perspective-1000">
        <div 
          className="absolute w-[220px] h-[220px] border border-dashed border-monokai-muted/30 rounded-full pointer-events-none transition-transform duration-700 ease-out"
          style={{ transform: `rotateX(65deg) rotateZ(${orbitAngle}deg)` }}
        />
        <div
          className="relative w-full h-full flex items-center justify-center preserve-3d transition-transform duration-700 ease-out"
          style={{ transform: `rotateX(12deg) rotateY(${orbitAngle}deg)` }}
        >
          {CATEGORIES.map((cat, index) => (
            <SkillCube
              key={cat.id}
              cat={cat}
              orbitAngle={orbitAngle}
              baseAngle={(index * 360) / CATEGORIES.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCubeAnimation;


