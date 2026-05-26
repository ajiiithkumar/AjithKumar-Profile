import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = 250; // Threshold height from the top of the viewport
      
      let currentActive = activeSection;
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near or above the threshold, and the bottom is below the threshold
          if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
            currentActive = id;
            break;
          }
        }
      }
      
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, activeSection]);

  return activeSection;
}
