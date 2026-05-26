import { useState, useEffect } from 'react';
import { Terminal, Download, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Hero() {
  const [ref, isVisible] = useScrollAnimation();
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "QA Automation Engineer",
    "SDET",
    "Performance Testing Expert",
    "AI-Augmented Tester"
  ];
  
  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  useEffect(() => {
    let timer: any;
    const currentFullRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentFullRole.substring(0, text.length - 1));
      }, DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setText(currentFullRole.substring(0, text.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && text === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const chips = [
    'Selenium WebDriver',
    'Cucumber BDD',
    'Gatling Performance',
    'TestNG',
    'Java Core',
    'AI-Assisted QA'
  ];

  return (
    <section 
      id="hero" 
      ref={ref as any}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-primary-light dark:bg-primary-deep"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent-cyan/10 dark:bg-accent-cyan/5 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent-teal/10 dark:bg-accent-teal/5 blur-3xl animate-float-fast"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm">
            <Terminal size={14} />
            <span>Welcome to the Future of QA Automation</span>
          </div>

          {/* Name & Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight mb-4 text-slate-900 dark:text-slate-100">
            Ajith Kumar A
          </h1>

          <div className="h-12 sm:h-16 flex items-center justify-center mb-6">
            <span className="font-display font-bold text-2xl sm:text-4xl text-slate-800 dark:text-slate-200">
              I am a <span className="glow-text underline decoration-accent-cyan/40">{text}</span>
              <span className="inline-block w-1 h-8 sm:h-10 ml-1 bg-accent-cyan animate-pulse">|</span>
            </span>
          </div>

          <h2 className="font-display font-semibold text-lg sm:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            "Building Confidence Into Every Release"
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            5+ years of quality engineering expertise at <span className="text-accent-cyan font-semibold">Digient Technologies</span>, architecting AI-driven BDD automation frameworks for high-scale CRM & iGaming applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={() => handleScrollTo('experience')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-teal text-primary-deep shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              <span>Explore My Experience</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="/AjithKumar_Resume.pdf"
              download="AjithKumar_Resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-bold border border-slate-300 dark:border-slate-800 bg-white/5 backdrop-blur-md text-slate-800 dark:text-slate-200 hover:border-accent-cyan/50 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all cursor-pointer"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Tech stack chips */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-4">
              Core QA Automation Stack
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {chips.map((chip, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-white dark:bg-primary-dark border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-accent-cyan/40 hover:text-accent-cyan shadow-sm transition-all cursor-default"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
