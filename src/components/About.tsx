import { Cpu, Layers, Activity, ShieldAlert, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
  const [ref, isVisible] = useScrollAnimation();

  const strengths = [
    {
      icon: <Cpu className="text-accent-cyan" size={24} />,
      title: "AI-Augmented QA Pioneer",
      description: "Pioneering the integration of AI tools (ChatGPT, Antigravity) with standard frameworks to fast-track script generation, stabilize dynamic elements, and compress standard testing cycles."
    },
    {
      icon: <Layers className="text-accent-teal" size={24} />,
      title: "Scalable BDD Architecture",
      description: "Designing structured and maintainable Cucumber BDD architectures using the Page Object Model (POM) and hybrid framework configurations that remain resilient across complex system updates."
    },
    {
      icon: <Activity className="text-accent-cyan" size={24} />,
      title: "Performance & Load Verification",
      description: "Simulating heavy multi-user loads on CRM and Gaming application APIs using Gatling (Scala). Correlating metrics using Zabbix to identify bottlenecks early."
    },
    {
      icon: <ShieldAlert className="text-accent-teal" size={24} />,
      title: "Agile Quality Management",
      description: "Managing defect lifecycles and product backlogs seamlessly inside JIRA and ClickUp. Championing QA compliance, risk assessment, and transparent status reporting."
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref as any}
      className="py-24 bg-white dark:bg-primary-dark transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Professional bio, core values, and the key competencies I bring to engineering teams.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Bio text */}
          <div className={`lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed transition-all duration-700 delay-100 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p>
              I am a passionate <strong className="text-slate-950 dark:text-white font-semibold">QA Automation Engineer</strong> with 5+ years of dedicated experience in engineering robust software quality frameworks. Operating from Chennai, India, I specialize in designing end-to-end automation scripts that significantly accelerate deployment velocity.
            </p>
            <p>
              Throughout my journey at <strong className="text-slate-950 dark:text-white font-semibold">Digient Technologies</strong>, I have worked deeply on building CRM automation workflows, stabilizing test suites, and scaling performance verification rigs. I believe testing is not just about finding bugs; it’s about providing rapid, trustworthy feedback to product and development teams.
            </p>
            <p>
              By combining robust traditional tools like <strong className="text-accent-cyan font-semibold">Selenium</strong> and <strong className="text-accent-cyan font-semibold">Cucumber BDD</strong> with state-of-the-art AI-augmented workflows, I strive to establish QA operations that are both highly performant and exceptionally adaptive.
            </p>
          </div>

          {/* Quick Info Panel */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-primary-light/5 border border-slate-200 dark:border-slate-800 shadow-md">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Award className="text-accent-cyan" size={20} />
                Quick Highlights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Experience</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm">5+ Years (Since Apr 2021)</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Current Role</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm">QA Automation Engineer</span>
                </li>
                <li className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Location</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm">Chennai, India</span>
                </li>
                <li className="flex items-center justify-between pb-1">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">QA Methodology</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm">BDD, Hybrid, AI-Augmented</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strengths Cards */}
        <div>
          <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white text-center mb-10">
            My Core Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengths.map((item, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-2xl bg-slate-50/50 dark:bg-primary-deep/40 border border-slate-200 dark:border-slate-800 hover:border-accent-cyan/30 hover:-translate-y-1 shadow-sm transition-all duration-300 flex gap-4 transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(idx + 3) * 100}ms` }}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-primary-dark border border-slate-200 dark:border-slate-800 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
