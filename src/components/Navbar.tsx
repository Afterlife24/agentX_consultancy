import { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Team', href: '#team' },
  { label: 'Insights', href: '#insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-petrol-950/80 backdrop-blur-xl border-b border-petrol-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chartreuse-400 to-chartreuse-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <BrainCircuit className="w-5.5 h-5.5 text-petrol-950" strokeWidth={2.5} />
            </div>
            <div className="absolute inset-0 rounded-xl bg-chartreuse-400/40 blur-lg -z-10 group-hover:bg-chartreuse-400/60 transition-all" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            Cognis<span className="text-chartreuse-400">.</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-petrol-200 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-chartreuse-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="group flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-chartreuse-400 hover:bg-chartreuse-300 text-petrol-950 font-semibold text-sm transition-all duration-300 hover:scale-105 glow-chartreuse"
          >
            Book a Consult
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-petrol-950/95 backdrop-blur-xl border-b border-petrol-800 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-petrol-200 hover:text-white font-medium py-2 border-b border-petrol-800/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-chartreuse-400 text-petrol-950 font-semibold text-sm"
            >
              Book a Consult
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
