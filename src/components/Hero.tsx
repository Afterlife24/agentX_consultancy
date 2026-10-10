import { ArrowRight, Sparkles, Cpu, Network, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-petrol-950 via-petrol-950/80 to-petrol-950" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-chartreuse-500/15 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-coral-500/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light animate-fade-up">
            <Sparkles className="w-4 h-4 text-chartreuse-400" />
            <span className="text-sm text-petrol-100 font-medium">AI Consulting for Forward-Thinkers</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            We engineer{' '}
            <span className="text-gradient-chartreuse">intelligent systems</span>{' '}
            that transform how your business operates.
          </h1>

          <p className="text-lg lg:text-xl text-petrol-200 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            From strategy to deployment, Cognis partners with ambitious companies to build
            custom AI solutions that automate workflows, unlock insights, and scale revenue.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-7 py-4 rounded-full bg-chartreuse-400 hover:bg-chartreuse-300 text-petrol-950 font-bold text-base transition-all duration-300 hover:scale-105 glow-chartreuse"
            >
              Start Your AI Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#case-studies"
              className="group flex items-center gap-2 px-7 py-4 rounded-full border border-petrol-600 hover:border-chartreuse-400/50 text-white font-semibold text-base transition-all duration-300"
            >
              See Our Work
              <span className="w-2 h-2 rounded-full bg-coral-400 group-hover:scale-150 transition-transform" />
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {['SOC 2 Certified', 'GPT-5 Partners', '180+ Deployments', '98% Retention'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-chartreuse-400" />
                <span className="text-sm text-petrol-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="lg:col-span-5 relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Central ring */}
            <div className="absolute inset-0 rounded-full border border-petrol-700/40 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border border-chartreuse-500/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            <div className="absolute inset-16 rounded-full border border-coral-500/20" />

            {/* Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-petrol-700 to-petrol-900 border border-chartreuse-500/30 flex items-center justify-center shadow-2xl glow-chartreuse">
                <Cpu className="w-14 h-14 text-chartreuse-400" strokeWidth={1.5} />
              </div>
            </div>

            {/* Orbiting nodes */}
            {[
              { icon: Zap, label: 'Automation', color: 'chartreuse', angle: 'top-0 left-1/2 -translate-x-1/2' },
              { icon: Network, label: 'Integration', color: 'coral', angle: 'top-1/2 right-0 -translate-y-1/2' },
              { icon: Sparkles, label: 'Insights', color: 'chartreuse', angle: 'bottom-0 left-1/2 -translate-x-1/2' },
              { icon: Cpu, label: 'Models', color: 'coral', angle: 'top-1/2 left-0 -translate-y-1/2' },
            ].map((node, i) => (
              <div
                key={node.label}
                className={`absolute ${node.angle} animate-float`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl glass flex items-center justify-center group hover:scale-110 transition-transform cursor-default`}>
                  <node.icon className={`w-7 h-7 ${node.color === 'chartreuse' ? 'text-chartreuse-400' : 'text-coral-400'}`} strokeWidth={1.8} />
                </div>
                <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-[10px] text-petrol-300 font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {node.label}
                </div>
              </div>
            ))}

            {/* Connecting lines effect */}
            <div className="absolute inset-0 rounded-full bg-radial-glow from-chartreuse-500/5 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-petrol-950 to-transparent" />
    </section>
  );
}
