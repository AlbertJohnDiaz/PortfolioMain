import { useEffect, useState } from 'react';
import { initEmailJS } from './utils/email';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import ParticleBackground from './components/ParticleBackground';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

initEmailJS();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050816] text-[#F8FAFC] overflow-x-hidden">
      <LoadingScreen isLoading={isLoading} />
      <ScrollProgress />
      <CursorGlow />
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>

      <BackToTop />
    </div>
  );
}
