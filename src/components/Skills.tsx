import { 
  Bot, 
  Terminal, 
  Cpu, 
  FolderGit2, 
  ShieldAlert, 
  BarChart4, 
  Settings, 
  FolderSync, 
  Briefcase 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  const skillGroups = [
    {
      title: "Test Automation",
      icon: <Terminal className="text-accent-cyan" size={20} />,
      skills: ["Selenium WebDriver", "Playwright", "TestNG", "Cucumber BDD", "POM (Page Object Model)", "Data-Driven Testing"]
    },
    {
      title: "Languages",
      icon: <Cpu className="text-accent-teal" size={20} />,
      skills: ["Java (Core)", "JavaScript", "Gherkin", "XPath", "CSS Selectors"]
    },
    {
      title: "Frameworks",
      icon: <FolderSync className="text-accent-cyan" size={20} />,
      skills: ["BDD Framework", "Hybrid Framework", "Maven Project Structure"]
    },
    {
      title: "Build & Dev Tools",
      icon: <FolderGit2 className="text-accent-teal" size={20} />,
      skills: ["Maven", "IntelliJ IDEA", "Git", "Chrome DevTools Recorder"]
    },
    {
      title: "Performance Testing",
      icon: <BarChart4 className="text-accent-cyan" size={20} />,
      skills: ["Gatling", "Zabbix (Monitoring)"]
    },
    {
      title: "Security Testing",
      icon: <ShieldAlert className="text-accent-teal" size={20} />,
      skills: ["Burp Suite"]
    },
    {
      title: "Reporting",
      icon: <Settings className="text-accent-cyan" size={20} />,
      skills: ["Extent Reports", "HTML Reports"]
    },
    {
      title: "AI Tooling",
      icon: <Bot className="text-accent-teal" size={20} />,
      skills: ["ChatGPT", "Antigravity IDE"]
    },
    {
      title: "Management",
      icon: <Briefcase className="text-accent-cyan" size={20} />,
      skills: ["ClickUp", "JIRA"]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={ref as any}
      className="py-24 bg-primary-light dark:bg-primary-deep transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent-teal/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Comprehensive breakdown of my engineering core skillsets and automation tool stacks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <div 
              key={groupIdx}
              className={`p-6 rounded-2xl bg-white dark:bg-primary-dark border border-slate-200 dark:border-slate-800 hover:border-accent-cyan/30 hover:shadow-lg transition-all duration-300 group transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${groupIdx * 50}ms` }}
            >
              {/* Card Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-primary-light/5 text-slate-700 dark:text-slate-300 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-colors shadow-sm">
                  {group.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-slate-100 group-hover:text-accent-cyan transition-colors">
                  {group.title}
                </h3>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-primary-deep/50 border border-slate-100 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 group-hover:border-accent-cyan/20 dark:group-hover:border-accent-cyan/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
