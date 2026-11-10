import React from 'react';
import {
  universityEducation,
  diplomaEducation,
  coursesCertifications,
} from '../data/educationData';
import EducationBackground from './EducationBackground';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative overflow-hidden min-h-screen flex items-center py-20 bg-monokai-sidebar scroll-mt-[56px]">
      <EducationBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-monokai-text font-mono inline-block">
            <span className="text-monokai-pink">const</span> <span className="text-monokai-blue">formacion</span> = <span className="text-monokai-yellow">[]</span>;
          </h2>
          <p className="text-monokai-muted mt-2 font-mono text-sm">// Trayectoria académica y certificaciones</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Formación Universitaria */}
          <div className="bg-monokai-bg rounded-xl shadow-2xl overflow-hidden border border-monokai-muted/20 flex flex-col transition-transform hover:-translate-y-1 duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src={import.meta.env.BASE_URL + "images/education/UPETEC.png"}
                alt="UPETEC Logo"
                className="h-full w-full object-cover transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-monokai-bg/80 to-transparent"></div> */}
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <p className="font-mono text-xs text-monokai-pink mb-4">
                // 01. universidad
              </p>
              <div className="space-y-6">
                {universityEducation.map((edu, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-monokai-blue/30">
                    <h3 className="text-lg font-bold text-monokai-text leading-tight">
                      {edu.title}
                    </h3>
                    <p className="text-monokai-muted text-sm mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-monokai-blue font-mono text-xs mt-1">
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Diplomado */}
          <div className="bg-monokai-bg rounded-xl shadow-2xl overflow-hidden border border-monokai-muted/20 flex flex-col transition-transform hover:-translate-y-1 duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src={import.meta.env.BASE_URL + "images/education/tech.webp"}
                alt="TECH Universidad Logo"
                className="h-full w-full object-cover transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-monokai-bg/80 to-transparent"></div> */}
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <p className="font-mono text-xs text-monokai-pink mb-4">
                // 02. diplomado
              </p>
              <div className="space-y-6">
                {diplomaEducation.map((diploma, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-monokai-yellow/30">
                    <h3 className="text-lg font-bold text-monokai-text leading-tight">
                      {diploma.title}
                    </h3>
                    <p className="text-monokai-muted text-sm mt-1">
                      {diploma.institution}
                    </p>
                    <p className="text-monokai-yellow font-mono text-xs mt-1">
                      {diploma.year}
                    </p>
                    {diploma.certificateCode && (
                      <p className="text-monokai-muted text-[10px] mt-2 font-mono">
                        ID: {diploma.certificateCode}
                      </p>
                    )}
                    {diploma.certificateUrl && (
                      <a
                        href={diploma.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-xs font-bold text-monokai-blue hover:text-blue-600 transition-colors"
                      >
                        Ver título <span className="ml-1 text-[10px]">↗</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Cursos y Certificaciones */}
          <div className="bg-monokai-bg rounded-xl shadow-2xl overflow-hidden border border-monokai-muted/20 flex flex-col transition-transform hover:-translate-y-1 duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src={import.meta.env.BASE_URL + "images/education/web.jpg"}
                alt="Web Certifications"
                className="h-full w-full object-cover transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-monokai-bg/80 to-transparent"></div> */}
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <p className="font-mono text-xs text-monokai-pink mb-4">
                // 03. cursos
              </p>
              <div className="space-y-6 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                {coursesCertifications.map((course, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-monokai-green/30">
                    <h3 className="text-base font-bold text-monokai-text leading-tight">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 mt-1">
                      <p className="text-monokai-muted text-xs">
                        {course.institution}
                      </p>
                      {course.year && (
                        <p className="text-monokai-green font-mono text-[10px]">
                          {course.year}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      {course.status === 'En progreso' ? (
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-monokai-orange bg-monokai-orange/10 rounded border border-monokai-orange/20">
                          &lt;En progreso /&gt;
                        </span>
                      ) : (
                        course.certificateUrl && (
                          <a
                            href={course.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold text-monokai-blue hover:underline flex items-center"
                          >
                            Certificado ↗
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(143, 139, 139, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(143, 139, 139, 0.4);
        }
      `}} />
    </section>
  );
};

export default EducationSection;
