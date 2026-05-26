import { useState } from 'react';
import { Bot, FileCode, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AIImplementation() {
  const [ref, isVisible] = useScrollAnimation();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Framework Setup via AI",
      description: "Fast-track environment initialization and architecture setup. Using prompt-engineered templates, I scaffold BDD Cucumber projects complete with robust Maven dependencies, WebDriver hooks, and parallel execution structures.",
      tools: ["ChatGPT", "Antigravity IDE", "Maven"],
      icon: <Bot className="text-accent-cyan" size={24} />,
      snippet: `// AI-Generated pom.xml snippet
<dependency>
    <groupId>io.cucumber</groupId>
    <artifactId>cucumber-java</artifactId>
    <version>7.14.0</version>
    <scope>test</scope>
</dependency>`
    },
    {
      number: "02",
      title: "Chrome DevTools Workflow Capture",
      description: "Utilize Chrome DevTools Recorder to capture complex manual workflows directly inside the browser. This exports raw, standard JSON recordings of user interactions, completely eliminating manual selector identification phase.",
      tools: ["Chrome DevTools Recorder", "Chrome browser"],
      icon: (
        <svg className="w-6 h-6 text-accent-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="21.17" y1="8" x2="12" y2="8" />
          <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
          <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
        </svg>
      ),
      snippet: `// Exported Chrome Recorder JSON
{
  "title": "CRM Login Workflow",
  "steps": [
    { "type": "click", "target": "main", "selectors": [["#user-email"]] },
    { "type": "change", "value": "test@company.com" }
  ]
}`
    },
    {
      number: "03",
      title: "AI-Generated Scenarios & Steps",
      description: "Convert captured JSON interaction flows directly into Gherkin feature scenarios and standard Cucumber Step Definitions. Customized prompt engineering maps browser JSON nodes to clear BDD syntax and Java code.",
      tools: ["ChatGPT", "Antigravity IDE", "Java Core"],
      icon: <FileCode className="text-accent-cyan" size={24} />,
      snippet: `// Generated BDD Step Definition
@When("user logs in with CRM credentials")
public void user_logs_in() {
    loginPage.enterEmail("test@company.com");
    loginPage.clickLoginButton();
}`
    },
    {
      number: "04",
      title: "Locator Stabilization via DOM Analysis",
      description: "Prevent flaky builds by using AI to analyze DOM hierarchies. The model inspects relative parent-child nodes, stabilizing brittle auto-generated locators and generating robust dynamic XPath/CSS queries.",
      tools: ["Antigravity DOM Analyzer", "XPath / CSS"],
      icon: <CheckCircle2 className="text-accent-teal" size={24} />,
      snippet: `// Brittle: //*[@id="button-3213a"]
// Stabilized XPath:
//div[@class='login-box']//button[contains(@class,'btn-submit')]`
    }
  ];

  return (
    <section 
      id="ai-approach" 
      ref={ref as any}
      className="py-24 bg-white dark:bg-primary-dark transition-colors duration-300 relative overflow-hidden"
    >
      {/* Visual background decor */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-accent-cyan/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu size={14} />
            <span>AI-Driven Automation</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 mb-4">
            My 4-Step AI-Augmented Workflow
          </h2>
          <div className="w-16 h-1 bg-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg max-w-3xl mx-auto">
            How I merge traditional QA testing practices with powerful modern generative AI capabilities to speed up scripting, reduce script flakiness, and supercharge test velocity.
          </p>
        </div>

        {/* Stepper Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stepper Sidebar Buttons */}
          <div className={`lg:col-span-4 space-y-4 transition-all duration-700 delay-100 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center space-x-4 ${
                  activeStep === idx
                    ? 'bg-slate-50 dark:bg-primary-light/5 border-accent-cyan shadow-md'
                    : 'bg-transparent border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                  activeStep === idx
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-teal text-primary-deep'
                    : 'bg-slate-100 dark:bg-primary-deep text-slate-500'
                }`}>
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h3 className={`font-semibold text-sm sm:text-base ${
                    activeStep === idx ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                <ChevronRight 
                  size={16} 
                  className={`transition-transform ${
                    activeStep === idx ? 'text-accent-cyan translate-x-1' : 'text-slate-400'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Stepper Main Display Panel */}
          <div className={`lg:col-span-8 transition-all duration-700 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-primary-light/5 border border-slate-200 dark:border-slate-800 shadow-md">
              
              {/* Top Row Icon + Step */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-primary-dark border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm">
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest">
                      Step {steps[activeStep].number}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>

              {/* Tools Tags */}
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-2">
                  Tools Used:
                </span>
                {steps[activeStep].tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-white dark:bg-primary-dark text-slate-700 dark:text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Snippet Code block */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Interactive Output / Demo
                </p>
                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 font-mono text-xs sm:text-sm overflow-x-auto shadow-inner leading-relaxed">
                  <pre>{steps[activeStep].snippet}</pre>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
