import React, { useState } from 'react';

interface HeaderProps {
  currentTab?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio', active: true },
    { label: 'Habilidades', href: '#habilidades', active: false },
    { label: 'Educacion', href: '#education', active: false },
    { label: 'Experiencia', href: '#experiencia', active: false },
    { label: 'Proyectos', href: '#proyectos', active: false },
    { label: 'Contacto', href: '#contacto', active: false },
  ];

  return (
    <header className="sticky top-0 z-50 bg-monokai-bg border-b-2 border-monokai-pink/80 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand / Logo + Window dots */}
          <div className="flex items-center space-x-4">
            {/* Window control dots (IDE touch) */}
            <div className="hidden sm:flex items-center space-x-1.5 pr-2 border-r border-monokai-muted/30">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
            </div>

            {/* Code Brand Logo */}
            <a href="#inicio" className="flex items-center font-mono font-bold text-lg text-monokai-text hover:opacity-90 transition-opacity">
              <span className="text-monokai-pink">&lt;</span>
              <span className="text-monokai-blue">Rafael</span>
              <span className="text-monokai-yellow">.Velásquez</span>
              <span className="text-monokai-pink">&nbsp;/&gt;</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
                  link.active
                    ? 'bg-monokai-sidebar text-monokai-pink font-semibold border-b-2 border-monokai-pink'
                    : 'text-monokai-text hover:text-monokai-blue hover:bg-monokai-sidebar/60'
                }`}
              >
                <span className="text-monokai-muted text-xs mr-1">//</span>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#contacto"
              className="px-4 py-1.5 text-xs font-mono font-bold rounded-md text-white bg-monokai-blue hover:bg-blue-600 transition-all shadow hover:shadow-md transform hover:-translate-y-0.5"
            >
              Descargar CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-monokai-text hover:text-monokai-pink hover:bg-monokai-sidebar focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-monokai-bg border-b border-monokai-muted/20 px-4 pt-2 pb-4 space-y-2 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                link.active
                  ? 'bg-monokai-sidebar text-monokai-pink font-semibold'
                  : 'text-monokai-text hover:bg-monokai-sidebar/60'
              }`}
            >
              <span className="text-monokai-muted mr-2">//</span>
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full px-4 py-2 text-xs font-bold text-white bg-monokai-blue rounded-md hover:bg-blue-600"
            >
              Descargar CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
