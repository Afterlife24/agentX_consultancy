import { TrendingUp, Clock, DollarSign, Quote } from 'lucide-react';

const caseStudies = [
  {
    industry: 'Fintech',
    company: 'PayBridge',
    title: 'Real-time fraud detection across 12M daily transactions',
    description: 'We built a streaming anomaly detection system that flags fraudulent payments in under 50ms — reducing chargebacks by 73% without adding false positives.',
    metrics: [
      { icon: TrendingUp, label: 'Fraud caught', value: '73%' },
      { icon: Clock, label: 'Latency', value: '50ms' },
      { icon: DollarSign, label: 'Annual savings', value: '$4.2M' },
    ],
    accent: 'chartreuse',
  },
  {
    industry: 'Healthcare',
    company: 'MediCore',
    title: 'Clinical documentation copilot for 800+ physicians',
    description: 'A HIPAA-compliant voice-to-EHR assistant that transcribes patient visits and auto-generates structured notes — giving doctors back 2+ hours per day.',
    metrics: [
      { icon: Clock, label: 'Time saved', value: '2.5h/day' },
      { icon: TrendingUp, label: 'Adoption', value: '94%' },
      { icon: DollarSign, label: 'Cost reduction', value: '41%' },
    ],
    accent: 'coral',
  },
  {
    industry: 'E-commerce',
    company: 'Vault & Vine',
    title: 'Personalized product discovery for 3M SKUs',
    description: 'A hybrid recommendation engine combining collaborative filtering with LLM-based intent understanding that lifted average order value by 28%.',
    metrics: [
      { icon: TrendingUp, label: 'AOV lift', value: '28%' },
      { icon: TrendingUp, label: 'Conversion', value: '+19%' },
      { icon: DollarSign, label: 'Revenue uplift', value: '$11M' },
    ],
    accent: 'chartreuse',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-chartreuse-500/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral-500/10 border border-coral-500/20 mb-5">
            <div className="w-2 h-2 rounded-full bg-coral-400 animate-pulse" />
            <span className="text-sm font-mono text-coral-300">04 — Case Studies</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Real systems.{' '}
            <span className="text-gradient-coral">Real numbers.</span>
          </h2>
          <p className="text-lg text-petrol-200 leading-relaxed">
            A selection of recent engagements where our AI systems delivered measurable,
            bottom-line impact within the first quarter of deployment.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.company}
              className="group relative grid lg:grid-cols-12 gap-6 p-8 rounded-2xl glass hover:border-petrol-600/60 transition-all duration-500 overflow-hidden"
            >
              {/* Accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                cs.accent === 'chartreuse' ? 'bg-chartreuse-400' : 'bg-coral-400'
              }`} />

              {/* Hover glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                cs.accent === 'chartreuse' ? 'bg-chartreuse-500/3' : 'bg-coral-500/3'
              }`} />

              {/* Left: content */}
              <div className="lg:col-span-7 relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                    cs.accent === 'chartreuse'
                      ? 'bg-chartreuse-400/10 text-chartreuse-300 border border-chartreuse-400/20'
                      : 'bg-coral-400/10 text-coral-300 border border-coral-400/20'
                  }`}>
                    {cs.industry}
                  </span>
                  <span className="text-petrol-400 text-sm font-mono">{cs.company}</span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                  {cs.title}
                </h3>

                <p className="text-petrol-200 leading-relaxed mb-6">
                  {cs.description}
                </p>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group/link ${
                    cs.accent === 'chartreuse' ? 'text-chartreuse-400 hover:text-chartreuse-300' : 'text-coral-400 hover:text-coral-300'
                  }`}
                >
                  <Quote className="w-4 h-4" />
                  Read full case study
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>

              {/* Right: metrics */}
              <div className="lg:col-span-5 relative">
                <div className="grid grid-cols-3 gap-3 h-full">
                  {cs.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-petrol-950/60 border border-petrol-800/50"
                    >
                      <metric.icon className={`w-5 h-5 mb-2 ${
                        cs.accent === 'chartreuse' ? 'text-chartreuse-400' : 'text-coral-400'
                      }`} />
                      <div className="font-display text-xl font-bold text-white">{metric.value}</div>
                      <div className="text-[10px] text-petrol-400 font-mono text-center mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
