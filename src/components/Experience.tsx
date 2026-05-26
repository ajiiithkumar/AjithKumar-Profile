import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Experience() {
  const [ref, isVisible] = useScrollAnimation();

  const caseStudies = [
    {
      title: "AI-Enhanced CRM Test Automation Framework",
      role: "Lead Automation Designer",
      tags: ["Selenium WebDriver", "Cucumber BDD", "TestNG", "Java", "AI-Augmented QA"],
      metrics: [
        { label: "Execution Time Cut", value: "~50%" },
        { label: "Manual Effort Reduced", value: "60%+" }
      ],
      details: [
        "Architected a modular BDD framework using the Page Object Model (POM) to automate user journeys, campaigns, and audience segments inside our enterprise CRM system.",
        "Created an AI-assisted Gherkin parsing module to accelerate manual test case translation into Step Definitions by generating high-quality boilerplate script scaffolding.",
        "Engineered a dynamic session state injection mechanism (bypassing full UI login loops by pre-injecting active cookie/localStorage states) which cut execution durations in half."
      ]
    },
    {
      title: "API Performance & Load Testing Suite",
      role: "Performance Specialist",
      tags: ["Gatling", "Scala", "Zabbix", "API Testing"],
      metrics: [
        { label: "Simulated Concurrent Users", value: "10K+" },
        { label: "API Bottlenecks Fixed", value: "15+" }
      ],
      details: [
        "Authored high-fidelity Gatling test scripts in Scala to simulate thousands of concurrent API requests targeting gaming and CRM login/reporting endpoints.",
        "Integrated Zabbix monitoring agents to correlate heavy traffic injection with real-time CPU utilization, JVM heap sizes, and database connections on target staging environments.",
        "Generated highly detailed HTML report analytics capturing error rates, throughput (RPS), and percentile response times, directly guiding developer optimization cycles."
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={ref as any}
      className="py-24 bg-primary-light dark:bg-primary-deep transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Deep dive into my 5+ year tenure at Digient Technologies, with case studies detailing direct business and quality impact.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          
          {/* Employer Info Circle Badge */}
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-r from-accent-cyan to-accent-teal flex items-center justify-center text-primary-deep font-bold shadow-md">
            <Briefcase size={14} />
          </div>

          {/* Employer Header */}
          <div className={`transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 uppercase tracking-wider mb-2">
              Current Employer
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Digient Technologies Pvt Ltd
            </h3>
            <div className="flex flex-wrap gap-4 mt-2 text-slate-500 dark:text-slate-400 text-sm sm:text-base font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-slate-400" />
                Chennai, India
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} className="text-slate-400" />
                Apr 2021 – Present (5+ Years)
              </span>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-350 max-w-3xl leading-relaxed">
              Serving as a QA Automation Engineer. Responsible for planning test strategy, building test suites, accelerating deployment workflows with automated pipelines, and assuring peak API response performance.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-primary-dark border border-slate-200 dark:border-slate-800 hover:border-accent-cyan/20 hover:shadow-lg transition-all duration-300 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Title */}
                <h4 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-slate-100 group-hover:text-accent-cyan mb-2">
                  {cs.title}
                </h4>
                <p className="text-xs font-semibold text-accent-cyan/80 dark:text-accent-cyan uppercase tracking-wider mb-6">
                  Role: {cs.role}
                </p>

                {/* Impact Metrics Panel */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-primary-deep/50 border border-slate-100 dark:border-slate-800/80 mb-6">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <p className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white glow-text">
                        {m.value}
                      </p>
                      <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Subtitle / Details */}
                <div className="space-y-3 mb-6">
                  {cs.details.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      <CheckCircle2 size={16} className="text-accent-teal mt-1 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {cs.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-semibold bg-slate-100 dark:bg-primary-deep border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
