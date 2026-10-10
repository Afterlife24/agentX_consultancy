import { Brain, Workflow, MessageSquareText, ShieldCheck, BarChart3, Layers } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Custom LLM Development',
    description: 'Fine-tuned language models trained on your domain data for precise, context-aware outputs that outperform off-the-shelf APIs.',
    tags: ['RAG', 'Fine-tuning', 'Prompt Engineering'],
    accent: 'chartreuse',
  },
  {
    icon: Workflow,
    title: 'Intelligent Automation',
    description: 'Replace repetitive manual workflows with AI agents that handle triage, data entry, reconciliation, and multi-step operations end-to-end.',
    tags: ['AI Agents', 'RPA', 'Orchestration'],
    accent: 'coral',
  },
  {
    icon: MessageSquareText,
    title: 'Conversational AI',
    description: 'Deploy production-grade chatbots and voice assistants that understand context, escalate intelligently, and integrate with your CRM.',
    tags: ['Chatbots', 'Voice AI', 'Multilingual'],
    accent: 'chartreuse',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Forecast demand, churn, and market shifts with ML models that learn continuously from your live business data.',
    tags: ['Forecasting', 'Churn', 'Anomaly Detection'],
    accent: 'coral',
  },
  {
    icon: ShieldCheck,
    title: 'AI Governance & Safety',
    description: 'Establish guardrails, evaluation pipelines, and compliance frameworks that keep your AI systems trustworthy and audit-ready.',
    tags: ['Eval', 'Compliance', 'Red-teaming'],
    accent: 'chartreuse',
  },
  {
    icon: Layers,
    title: 'AI Strategy & Roadmap',
    description: 'Identify the highest-ROI AI opportunities in your organization with a phased, pragmatic implementation plan built by veterans.',
    tags: ['Discovery', 'ROI Analysis', 'Roadmap'],
    accent: 'coral',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-chartreuse-500/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral-500/10 border border-coral-500/20 mb-5">
            <div className="w-2 h-2 rounded-full bg-coral-400 animate-pulse" />
            <span className="text-sm font-mono text-coral-300">02 — What We Do</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Full-spectrum AI capabilities,{' '}
            <span className="text-gradient-coral">one accountable partner.</span>
          </h2>
          <p className="text-lg text-petrol-200 leading-relaxed">
            We cover the entire AI value chain — from opportunity discovery to production deployment
            and ongoing optimization. No handoffs, no black boxes.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative p-7 rounded-2xl glass hover:border-petrol-600/60 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                service.accent === 'chartreuse' ? 'bg-chartreuse-500/5' : 'bg-coral-500/5'
              }`} />

              <div className="relative">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  service.accent === 'chartreuse'
                    ? 'bg-chartreuse-400/10 border border-chartreuse-400/20'
                    : 'bg-coral-400/10 border border-coral-400/20'
                }`}>
                  <service.icon className={`w-7 h-7 ${
                    service.accent === 'chartreuse' ? 'text-chartreuse-400' : 'text-coral-400'
                  }`} strokeWidth={1.8} />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-petrol-200 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-petrol-800/60 text-xs font-mono text-petrol-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-7 right-7 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                service.accent === 'chartreuse' ? 'bg-chartreuse-400' : 'bg-coral-400'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
