import { useDarkMode } from './hooks/useDarkMode';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { AIImplementation } from './components/AIImplementation';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-primary-light text-slate-800 dark:bg-primary-deep dark:text-slate-100 transition-colors duration-300">
      <Navbar darkMode={isDark} toggleDarkMode={toggleDarkMode} />
      
      <main>
        {/* Sections rendered directly without wrappers for accurate offset/bounding client calculations */}
        <Hero />
        <About />
        <Skills />
        <AIImplementation />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
