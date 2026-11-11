import React from 'react';

const softSkills = [
  'Responsabilidad',
  'Adaptabilidad a Legados',
  'Ética & Transparencia',
  'Organización',
  'Aprendizaje Continuo',
  'Compostura Bajo Presión'
];

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="min-h-screen py-20 bg-[#F0EDE6] text-[#5D5752] font-mono scroll-mt-[56px]">
      <div className="max-w-4xl mx-auto px-6 h-full flex flex-col justify-center">
        {/* Card Container */}
        <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#D5D0C6] shadow-xl">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 pb-8 border-b border-[#D5D0C6]">
            <img 
              src="/curriculum/images/foto.jpg" 
              alt="Rafael Velásquez" 
              className="w-32 h-32 rounded-full border-4 border-[#D5D0C6] object-cover shadow-lg"
            />
            <div className="flex-grow text-center md:text-left pt-2">
              <h2 className="text-3xl font-bold text-[#2d2d2d]">Rafael Velásquez</h2>
              <p className="text-[#88847E] text-lg">Caracas, Venezuela</p>
              
              {/* Stats Bar */}
              <div className="mt-4 flex flex-col items-center md:items-start gap-2">
                <div className="flex gap-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={`w-8 h-2 rounded ${i < 4 ? 'bg-[#a9dc76]' : 'bg-[#D5D0C6]'}`}></div>
                  ))}
                </div>
                <div className="flex gap-8 text-xs font-bold text-[#88847E]">
                  <div>RATING <span className="text-[#2d2d2d] ml-1">66%</span></div>
                  <div>ACTIVITY <span className="text-[#2d2d2d] ml-1">95%</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-[#88847E] w-20">Email</span>
                <span className="text-[#2d2d2d]">rafahel171@gmail.com</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#88847E] w-20">Ciudad</span>
                <span className="text-[#2d2d2d]">Caracas</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#88847E] w-20">Estado</span>
                <span className="text-[#2d2d2d]">Distrito Capital</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-[#88847E] w-20">País</span>
                <span className="text-[#2d2d2d]">Venezuela</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#88847E] w-20">Teléfono</span>
                <span className="text-[#2d2d2d]">+58 424-1657377</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#88847E] w-20">LinkedIn</span>
                <a 
                  href="https://www.linkedin.com/in/rafael-andres-velasquez-ramos/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  rafael-velasquez
                </a>
              </div>
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="mt-8 pt-8 border-t border-[#D5D0C6]">
            <h3 className="text-xs uppercase font-bold text-[#88847E] mb-4">// Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-monokai-sidebar border border-monokai-muted/30 text-monokai-text text-[10px] rounded-md shadow-sm hover:border-monokai-blue hover:text-monokai-blue transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;