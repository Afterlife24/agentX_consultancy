import { Search, PencilRuler, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    duration: 'Week 1–2',
    description: 'We dive deep into your operations, data infrastructure, and business objectives to identify where AI creates the highest leverage.',
    deliverables: ['Opportunity matrix', 'Data readiness audit', 'ROI projections'],
  },
  {
    icon: PencilRuler,
    number: '02',
    title: 'Design',
    duration: 'Week 3–6',
    description: 'Our architects design the system blueprint — model selection, data pipelines, integration points, and evaluation criteria.',
    deliverables: ['Technical spec', 'Architecture diagram', 'Eval framework'],
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Deploy',
    duration: 'Week 7–12',
    description: 'We build, test, and ship. Iterative releases with your team embedded in every cycle so you own the outcome.',
    deliverables: ['Production system', 'Documentation', 'Team training'],
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Optimize',
    duration: 'Ongoing',
    description: 'Continuous monitoring, retraining, and enhancement. We measure real-world impact and push improvements monthly.',
    deliverables: ['Performance dashboards', 'Monthly reviews', 'Model updates'],
  },
];

export default function Process() {
  return (
    <section id="approach" className="relative py-24 lg:py-32 overflow-hidden bg-petrol-900/30">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-coral-500/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chartreuse-500/10 border border-chartreuse-500/20 mb-5">
            <div className="w-2 h-2 rounded-full bg-chartreuse-400 animate-pulse" />
            <span className="text-sm font-mono text-chartreuse-300">03 — How We Work</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            A proven path from{' '}
            <span className="text-gradient-chartreuse">idea to impact.</span>
          </h2>
          <p className="text-lg text-petrol-200 leading-relaxed">
            Every engagement follows our four-phase methodology. Transparent, iterative,
            and laser-focused on measurable business outcomes.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-petrol-600 to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Card */}
                <div className={`relative ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                  <div className="p-7 rounded-2xl glass hover:border-petrol-600/60 transition-all duration-500 group">
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-petrol-700 to-petrol-800 border border-petrol-600/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <step.icon className="w-6 h-6 text-chartreuse-400" strokeWidth={1.8} />
                      </div>
                      <div className={i % 2 === 1 ? 'lg:text-right' : ''}>
                        <div className="font-mono text-xs text-petrol-400">{step.duration}</div>
                        <h3 className="font-display text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-petrol-200 leading-relaxed mb-4">{step.description}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      {step.deliverables.map((d) => (
                        <span key={d} className="px-2.5 py-1 rounded-md bg-petrol-800/60 text-xs font-mono text-petrol-300">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-14 h-14 rounded-full bg-petrol-950 border-2 border-chartreuse-400/40 flex items-center justify-center font-mono font-bold text-chartreuse-400 text-sm glow-chartreuse">
                    {step.number}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
