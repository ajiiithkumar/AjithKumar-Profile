import { Mail, Phone, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  const contactDetails = [
    {
      icon: <Mail className="text-accent-cyan" size={20} />,
      label: "Email Address",
      value: "ajithbabuofficial@gmail.com",
      link: "mailto:ajithbabuofficial@gmail.com"
    },
    {
      icon: <Phone className="text-accent-teal" size={20} />,
      label: "Phone Contact",
      value: "+91 63791 31350",
      link: "tel:+916379131350"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-accent-cyan" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
        </svg>
      ),
      label: "LinkedIn Profile",
      value: "linkedin.com/in/ajithbabu03",
      link: "https://linkedin.com/in/ajithbabu03"
    },
    {
      icon: <MapPin className="text-accent-teal" size={20} />,
      label: "Location",
      value: "Chennai, India",
      link: null
    }
  ];

  return (
    <section 
      id="contact" 
      ref={ref as any}
      className="py-24 bg-white dark:bg-primary-dark transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-accent-teal/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-accent-teal/20 bg-accent-teal/10 text-accent-teal text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-teal"></span>
            </span>
            <span>Open to QA Automation & SDET Roles</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 dark:text-slate-100 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-accent-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Let's connect! I am always open to discussing new test automation projects, quality engineering strategies, or professional career opportunities.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Details Sidebar */}
          <div className={`lg:col-span-5 space-y-4 transition-all duration-700 delay-100 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {contactDetails.map((detail, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-primary-deep/50 border border-slate-200 dark:border-slate-800 flex items-center space-x-4 group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white dark:bg-primary-dark border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-sm">
                  {detail.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                    {detail.label}
                  </p>
                  {detail.link ? (
                    <a 
                      href={detail.link}
                      target={detail.link.startsWith('http') ? '_blank' : undefined}
                      rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200 hover:text-accent-cyan transition-colors truncate block flex items-center gap-1"
                    >
                      {detail.value}
                      {detail.link.startsWith('http') && <ExternalLink size={12} />}
                    </a>
                  ) : (
                    <p className="font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200 truncate">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Core mailto CTA Box */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-primary-light/5 border border-slate-200 dark:border-slate-800 shadow-md text-center">
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
                Start a Conversation
              </h3>
              <p className="text-slate-600 dark:text-slate-350 text-sm sm:text-base leading-relaxed mb-8">
                Click the link below to drop a line directly into my email box! I typically respond within 24 hours.
              </p>
              
              <a
                href="mailto:ajithbabuofficial@gmail.com"
                className="inline-flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl font-bold bg-gradient-to-r from-accent-cyan to-accent-teal text-primary-deep shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all text-base sm:text-lg w-full sm:w-auto"
              >
                <Mail size={22} />
                <span>Send Me an Email</span>
              </a>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <CheckCircle2 size={14} className="text-accent-teal" />
                <span>Secure direct contact · No spam</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
