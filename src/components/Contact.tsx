import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ExternalLink, Loader2, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const [ref, isVisible] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<'message' | 'email'>('message');
  
  // Web3Forms Configuration: Users can replace this placeholder with their free key from web3forms.com
  const ACCESS_KEY: string = "0f0fe6fe-9a94-4c3f-b418-396ad52d906b"; 

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'SDET Role Discussion',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult('idle');

    // Robust Mock submission mode if key is placeholder
    if (ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitResult('success');
        setFormData({
          name: '',
          email: '',
          purpose: 'SDET Role Discussion',
          message: ''
        });
      }, 1500);
      return;
    }

    // Actual Web3Forms API submission
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Interview/Query: ${formData.purpose} - ${formData.name}`,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitResult('success');
        setFormData({
          name: '',
          email: '',
          purpose: 'SDET Role Discussion',
          message: ''
        });
      } else {
        setSubmitResult('error');
      }
    } catch (error) {
      setSubmitResult('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
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

          {/* Interactive Form Panel */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-200 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="rounded-3xl bg-slate-50 dark:bg-primary-light/5 border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden">
              
              {/* Tab Selector */}
              <div className="flex border-b border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setActiveTab('message')}
                  className={`flex-1 py-4 text-center text-sm font-semibold transition-all ${
                    activeTab === 'message'
                      ? 'text-accent-cyan border-b-2 border-accent-cyan bg-slate-100/50 dark:bg-slate-900/30'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-350'
                  }`}
                >
                  Direct Message Form
                </button>
                <button
                  onClick={() => setActiveTab('email')}
                  className={`flex-1 py-4 text-center text-sm font-semibold transition-all ${
                    activeTab === 'email'
                      ? 'text-accent-cyan border-b-2 border-accent-cyan bg-slate-100/50 dark:bg-slate-900/30'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-350'
                  }`}
                >
                  Open Email Client
                </button>
              </div>

              {/* Tab Content: Form */}
              {activeTab === 'message' && (
                <div className="p-6 sm:p-8">
                  {submitResult === 'success' ? (
                    <div className="py-8 text-center space-y-4 animate-fade-in">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-teal/10 text-accent-teal border border-accent-teal/20 mb-2">
                        <CheckCircle2 size={36} />
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out! Your interview/collaboration request has been delivered to my inbox. I will get back to you shortly.
                      </p>
                      {ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" && (
                        <div className="p-3.5 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs text-left max-w-sm mx-auto">
                          <strong>Note:</strong> Running in <strong>Mock Mode</strong> because ACCESS_KEY is placeholder. Register a free key at <u>web3forms.com</u> to receive real emails!
                        </div>
                      )}
                      <button
                        onClick={() => setSubmitResult('idle')}
                        className="px-6 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Alex Morgan"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-primary-deep/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-accent-cyan focus:outline-none transition-colors text-sm"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="alex@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-primary-deep/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-accent-cyan focus:outline-none transition-colors text-sm"
                          />
                        </div>
                      </div>

                      {/* Purpose Select */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                          Purpose of Contact
                        </label>
                        <select
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-primary-deep/50 text-slate-800 dark:text-slate-100 focus:border-accent-cyan focus:outline-none transition-colors text-sm"
                        >
                          <option value="SDET Role Discussion" className="bg-white dark:bg-primary-dark">SDET / QA Role Discussion</option>
                          <option value="Mock QA Interview" className="bg-white dark:bg-primary-dark">Mock QA Technical Interview</option>
                          <option value="Project Collaboration" className="bg-white dark:bg-primary-dark">Project Collaboration</option>
                          <option value="General Inquiry" className="bg-white dark:bg-primary-dark">General Inquiry</option>
                        </select>
                      </div>

                      {/* Message details */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                          Your Message / Interview details
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please provide details about the job role, interview format, or message inquiry..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-primary-deep/50 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-accent-cyan focus:outline-none transition-colors text-sm resize-none"
                        ></textarea>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-teal text-primary-deep shadow-md hover:scale-[1.02] hover:shadow-cyan-500/10 transition-all disabled:opacity-50 disabled:scale-100 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin" size={18} />
                            <span>Sending message...</span>
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Submit Direct Message</span>
                          </>
                        )}
                      </button>

                      {submitResult === 'error' && (
                        <p className="text-xs text-red-500 font-semibold text-center mt-2">
                          Failed to deliver message. Please try again or use the Email client tab.
                        </p>
                      )}
                    </form>
                  )}
                </div>
              )}

              {/* Tab Content: Mailto Button */}
              {activeTab === 'email' && (
                <div className="p-8 sm:p-10 text-center space-y-6">
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                    Start a Conversation
                  </h3>
                  <p className="text-slate-600 dark:text-slate-350 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                    Click the link below to launch your default local mail program and send a message directly to **ajithbabuofficial@gmail.com**!
                  </p>
                  
                  <a
                    href="mailto:ajithbabuofficial@gmail.com"
                    className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-teal text-primary-deep shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all text-base w-full sm:w-auto"
                  >
                    <Mail size={20} />
                    <span>Send Me an Email</span>
                  </a>
                  
                  <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <CheckCircle2 size={14} className="text-accent-teal" />
                    <span>Direct inbox delivery · Fast response</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
