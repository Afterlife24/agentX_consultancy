import { BrainCircuit, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: ['Custom LLMs', 'Intelligent Automation', 'Conversational AI', 'Predictive Analytics', 'AI Governance'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Case Studies', 'Team', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Research Papers', 'AI Maturity Quiz', 'Newsletter', 'Documentation'],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-petrol-800/50 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-chartreuse-500/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chartreuse-400 to-chartreuse-600 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-petrol-950" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Cognis<span className="text-chartreuse-400">.</span>
              </span>
            </div>
            <p className="text-sm text-petrol-200 leading-relaxed max-w-sm">
              We engineer intelligent systems that transform how ambitious companies operate.
              From strategy to production — one accountable partner.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-petrol-800/60 border border-petrol-700/40 flex items-center justify-center text-petrol-300 hover:text-chartreuse-400 hover:border-chartreuse-400/30 transition-all"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-petrol-300 hover:text-chartreuse-400 transition-colors flex items-center gap-1 group"
                      >
                        {link}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-petrol-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-petrol-400 font-mono">
            © 2026 Cognis AI Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-petrol-400 hover:text-chartreuse-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-petrol-400 hover:text-chartreuse-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-petrol-400 hover:text-chartreuse-400 transition-colors">SOC 2 Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
