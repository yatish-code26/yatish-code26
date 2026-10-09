import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EngineeringLifecycle } from './components/EngineeringLifecycle';
import { ProjectGallery } from './components/ProjectGallery';
import { TechMatrix } from './components/TechMatrix';
import { Credentials } from './components/Credentials';
import { ContactSection } from './components/ContactSection';

export function App() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const handleToggleMotion = () => {
    setReducedMotion(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-white">
      <Navbar reducedMotion={reducedMotion} onToggleMotion={handleToggleMotion} />
      <main className="flex-1">
        <HeroSection reducedMotion={reducedMotion} />
        <EngineeringLifecycle />
        <ProjectGallery />
        <TechMatrix />
        <Credentials />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
