import { Award, ShieldCheck, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Certifications() {
  const [ref, isVisible] = useScrollAnimation();

  const certs = [
    {
      title: "Selenium with Java & Cucumber – Test Automation",
      description: "Advanced verification of BDD frameworks, POM architecture, script refactoring, and integration of automated Cucumber features.",
      category: "Automation Frameworks & SDET",
      icon: <Award className="text-accent-cyan" size={28} />
    },
    {
      title: "Manual Testing + Agile Methodologies + JIRA",
      description: "Comprehensive software quality processes, defect life cycle orchestration, manual verification matrices, and Agile workflow management.",
      category: "Software Quality Assurance",
      icon: <ShieldCheck className="text-accent-teal" size={28} />
    }
  ];

  return (
    <section 
      id="certifications" 
      ref={ref as any}
      className="py-24 bg-primary-light dark:bg-primary-deep transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-cyan/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 mb-4">
            Professional Certifications
          </h2>
          <div className="w-16 h-1 bg-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Accredited validations of my software quality engineering and test automation capabilities.
          </p>
        </div>

        {/* Certs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certs.map((c, idx) => (
            <div 
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-primary-dark border border-slate-200 dark:border-slate-800 hover:border-accent-cyan/20 hover:shadow-lg transition-all duration-300 flex items-start gap-6 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Badge Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 dark:bg-primary-deep/60 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm">
                {c.icon}
              </div>

              {/* Text info */}
              <div className="flex-grow">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                  {c.category}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-slate-100 mt-1 mb-3">
                  {c.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {c.description}
                </p>
                <div className="flex items-center gap-1.5 text-accent-teal font-semibold text-xs uppercase tracking-wider">
                  <CheckCircle size={14} />
                  <span>Credential Active & Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
