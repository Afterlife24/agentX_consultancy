import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnerMarquee from '@/components/PartnerMarquee';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CaseStudies from '@/components/CaseStudies';
import Stats from '@/components/Stats';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';

function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : '/'
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname.toLowerCase());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('locationchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);

  const isPortfolio =
    currentPath.startsWith('/portifolio') ||
    currentPath.startsWith('/portfolio');

  if (isPortfolio) {
    return <Portfolio />;
  }

  return (
    <div className="min-h-screen bg-petrol-950 text-petrol-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PartnerMarquee />
        <Services />
        <Process />
        <CaseStudies />
        <Stats />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
