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

function App() {
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
