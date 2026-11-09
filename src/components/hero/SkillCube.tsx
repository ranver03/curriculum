import React from 'react';

interface CategoryData {
  id: string;
  name: string;
  tag: string;
  skills: string[];
  color: string;
  borderColor: string;
  bgColor: string;
}

interface SkillCubeProps {
  cat: CategoryData;
  orbitAngle: number;
  baseAngle: number;
}

const SkillCube: React.FC<SkillCubeProps> = ({ cat, orbitAngle, baseAngle }) => {
  const radius = 180;
  const angleRad = (baseAngle * Math.PI) / 180;
  const x = Math.sin(angleRad) * radius;
  const z = Math.cos(angleRad) * radius;

  return (
    <div
      className="absolute preserve-3d transition-all duration-1000 ease-in-out"
      style={{
        transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${-orbitAngle - baseAngle}deg)`,
        zIndex: Math.round(z + 200),
      }}
    >
      <div 
        className="relative w-48 h-48 preserve-3d"
        style={{
          transform: `rotateY(${-baseAngle}deg)`
        }}
      >
        <div className="relative w-full h-full preserve-3d"
          style={{
            animation: 'spin-self 12s linear infinite',
          }}
        >
          {/* FRONT FACE */}
          <div
            className={`absolute inset-0 p-5 bg-monokai-bg/95 backdrop-blur-md border-2 ${cat.borderColor} rounded-xl shadow-2xl flex flex-col justify-between`}
            style={{ transform: 'translateZ(96px)' }}
          >
            <div>
              <div className="text-[10px] text-monokai-muted font-mono mb-1">{cat.tag}</div>
              <h3 className={`font-bold text-lg tracking-wide ${cat.color}`}>{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span key={skill} className={`text-[11px] px-2 py-1 rounded border border-monokai-muted/30 font-mono bg-monokai-sidebar text-monokai-text`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* BACK FACE */}
          <div className={`absolute inset-0 p-5 bg-monokai-sidebar/95 border-2 ${cat.borderColor} rounded-xl flex flex-col justify-center items-center text-center font-mono`} style={{ transform: 'rotateY(180deg) translateZ(96px)' }}>
            <span className={`text-base font-bold ${cat.color}`}>{cat.name}</span>
          </div>
          {/* RIGHT FACE */}
          <div className={`absolute inset-0 bg-monokai-bg/90 border-2 ${cat.borderColor} rounded-xl flex items-center justify-center opacity-80`} style={{ transform: 'rotateY(90deg) translateZ(96px)' }}>
             <div className={`w-8 h-8 rounded-full border-2 ${cat.borderColor} animate-pulse`} />
          </div>
          {/* LEFT FACE */}
          <div className={`absolute inset-0 bg-monokai-bg/90 border-2 ${cat.borderColor} rounded-xl flex items-center justify-center opacity-80`} style={{ transform: 'rotateY(-90deg) translateZ(96px)' }}>
             <div className={`w-8 h-8 rounded-full border-2 ${cat.borderColor} animate-pulse`} />
          </div>
          {/* TOP FACE */}
          <div className={`absolute inset-0 bg-monokai-sidebar/80 border-2 ${cat.borderColor} rounded-xl opacity-40`} style={{ transform: 'rotateX(90deg) translateZ(96px)' }} />
          {/* BOTTOM FACE */}
          <div className={`absolute inset-0 bg-monokai-sidebar/80 border-2 ${cat.borderColor} rounded-xl opacity-40`} style={{ transform: 'rotateX(-90deg) translateZ(96px)' }} />
        </div>
      </div>
    </div>
  );
};

export default SkillCube;
