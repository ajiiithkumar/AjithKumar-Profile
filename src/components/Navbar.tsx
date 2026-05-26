import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const sectionIds = [
    'hero',
    'about',
    'skills',
    'ai-approach',
    'experience',
    'projects',
    'certifications',
    'contact'
  ];
  
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'ai-approach', label: 'AI Approach' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/80 dark:bg-primary-deep/80 backdrop-blur-md shadow-lg border-b border-slate-200/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Monogram / Brand */}
          <div 
            onClick={() => handleScrollTo('hero')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-teal text-primary-deep font-bold text-lg shadow-md transition-transform group-hover:scale-105">
              AK
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-accent-cyan animate-pulse"></span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-semibold text-lg tracking-wider text-slate-800 dark:text-slate-100 group-hover:text-accent-cyan transition-colors">
                Ajith Kumar A
              </span>
              <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">
                QA Automation Engineer
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-accent-cyan'
                    : 'text-slate-600 dark:text-slate-300 hover:text-accent-cyan dark:hover:text-accent-cyan'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Socials & Theme Toggle */}
            <div className="flex items-center space-x-3 ml-4 border-l border-slate-200 dark:border-slate-800 pl-4">
              <a 
                href="https://github.com/ajiiithkumar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/ajithbabu03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                </svg>
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-slate-100 dark:bg-primary-dark text-slate-600 dark:text-slate-300 hover:text-accent-cyan dark:hover:text-accent-cyan transition-all"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-primary-dark text-slate-600 dark:text-slate-300 hover:text-accent-cyan dark:hover:text-accent-cyan transition-all"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-accent-cyan hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden fixed top-20 left-0 right-0 bottom-0 bg-slate-950/95 backdrop-blur-lg border-t border-slate-900 transition-all duration-300 z-40 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col justify-center items-center h-full">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`w-full py-4 text-center text-lg font-semibold rounded-lg transition-colors ${
                activeSection === link.id
                  ? 'text-accent-cyan bg-slate-900/60'
                  : 'text-slate-300 hover:text-accent-cyan'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center space-x-8 pt-6 border-t border-slate-800 w-full justify-center">
            <a 
              href="https://github.com/ajiiithkumar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-accent-cyan transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/ajithbabu03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-accent-cyan transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
