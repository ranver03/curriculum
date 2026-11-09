import React, { useState } from 'react';
import { skillsData } from '../../data/skillsData';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);
  const activeData = skillsData.find(s => s.category === activeCategory) || skillsData[0];

  return (
    <section id="habilidades" className="min-h-screen bg-monokai-bg py-16 md:py-24 font-mono text-monokai-text">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-monokai-pink font-bold">0x02</span>
            <span className="h-px w-12 bg-monokai-muted/30"></span>
            <span className="text-monokai-muted text-xs uppercase tracking-widest font-semibold">Specializations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-monokai-purple">class</span> <span className="text-monokai-blue">SkillSet</span> <span className="text-monokai-muted">{"{"}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            {skillsData.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group ${
                  activeCategory === category.category
                    ? 'bg-white border-monokai-blue shadow-md'
                    : 'bg-monokai-sidebar/50 border-transparent hover:bg-white hover:border-monokai-muted/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full transition-all ${
                    activeCategory === category.category ? 'bg-monokai-blue scale-125' : 'bg-monokai-muted group-hover:bg-monokai-blue'
                  }`}></span>
                  <span className={`font-bold text-sm md:text-base ${activeCategory === category.category ? 'text-monokai-blue' : 'text-monokai-text'}`}>
                    {category.category}
                  </span>
                </div>
                <span className={`text-xs transition-transform ${activeCategory === category.category ? 'rotate-90 text-monokai-blue' : 'text-monokai-muted'}`}>→</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeData.skills.map((skill, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-monokai-muted/10 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-monokai-green text-sm font-bold">{"{}"}</span>
                    <h3 className="font-bold text-monokai-text group-hover:text-monokai-pink transition-colors">{skill.name}</h3>
                  </div>
                  <p className="text-sm text-monokai-muted leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#2d2a2e] rounded-xl overflow-hidden shadow-2xl mt-4 border border-white/5">
              <div className="bg-[#19181a] px-4 py-2.5 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff6188]/80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffd866]/80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#a9dc76]/80"></div>
                  </div>
                  <span className="text-[10px] text-white/30 ml-4 uppercase tracking-widest font-mono">zsh — experience.log</span>
                </div>
              </div>

              <div className="p-6 font-mono text-sm sm:text-base leading-relaxed">
                <div className="flex items-start gap-2 mb-3">
                  <span className="text-[#a9dc76]">guest@rafael-dev</span>
                  <span className="text-white">:</span>
                  <span className="text-[#78dce8]">~</span>
                  <span className="text-white">$</span>
                  <span className="text-white">tail -f experience.txt</span>
                </div>
                <p className="text-[#fcfaf6]/90 mt-4 border-l-2 border-monokai-pink/50 pl-4 py-1 italic">
                  {activeData.experience}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-[#a9dc76]">guest@rafael-dev</span>
                  <span className="text-white">:</span>
                  <span className="text-[#78dce8]">~</span>
                  <span className="text-white">$</span>
                  <span className="w-2 h-5 bg-[#ff6188] animate-pulse inline-block align-middle ml-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-monokai-muted">{"}"}</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
