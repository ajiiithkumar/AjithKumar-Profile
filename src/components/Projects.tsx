import { Code2, Cpu, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      title: "AI-Enhanced CRM Test Automation",
      description: "A robust Selenium test suite written in Java that automates user journeys, reports, and campaign scheduling within enterprise CRM environments. Features custom AI integrations to auto-generate Gherkin test definitions.",
      tech: ["Java", "Selenium", "Cucumber BDD", "TestNG", "Maven"],
      icon: <Cpu className="text-accent-cyan" size={24} />,
      link: "https://github.com/ajiiithkumar/"
    },
    {
      title: "API Performance & Load Testing Suite",
      description: "Scale simulation testing built with Gatling and Scala to verify heavy traffic throughput on high-load CRM and gaming server APIs. Integrates directly with Zabbix metric agents to measure backend health.",
      tech: ["Gatling", "Scala", "Zabbix", "HTML Reports"],
      icon: <Zap className="text-accent-teal" size={24} />,
      link: "https://github.com/ajiiithkumar/"
    },
    {
      title: "Session State Injection System",
      description: "An optimization system that pre-injects active cookies and localStorage credentials directly into the driver context. Bypasses repetitive login scripts, saving 50% on test framework durations.",
      tech: ["Java", "Selenium", "JavaScript", "WebDriver API"],
      icon: <Code2 className="text-accent-cyan" size={24} />,
      link: "https://github.com/ajiiithkumar/"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref as any}
      className="py-24 bg-white dark:bg-primary-dark transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 mb-4">
            Showcase Projects
          </h2>
          <div className="w-16 h-1 bg-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Key software quality projects, performance suites, and automation tools built for optimal reliability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className={`flex flex-col p-6 rounded-3xl bg-slate-50 dark:bg-primary-light/5 border border-slate-200 dark:border-slate-800 hover:border-accent-cyan/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Header Icon & Links */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary-dark border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm">
                  {proj.icon}
                </div>
                <div className="flex items-center space-x-2 text-slate-500">
                  <a 
                    href={proj.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white dark:bg-primary-dark border border-slate-200 dark:border-slate-800 hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors shadow-sm"
                    aria-label="View Source Code on GitHub"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-grow">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-slate-100 group-hover:text-accent-cyan mb-3">
                  {proj.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Footer Tech badging */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-1 rounded-md text-[10px] sm:text-xs font-semibold bg-white dark:bg-primary-dark border border-slate-200 dark:border-slate-800/50 text-slate-600 dark:text-slate-350"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
