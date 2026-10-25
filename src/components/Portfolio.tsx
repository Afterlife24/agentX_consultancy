import { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  Bot, 
  Cpu, 
  Database, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  BrainCircuit,
  MessageSquare
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  impact: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    id: 'food-index-ai',
    title: 'Automated Commodity & Food Index Analytics Agent',
    category: 'Conversational Intelligence',
    client: 'AgriStats Global',
    description: 'Autonomous multi-modal conversational assistant querying high-frequency food pricing datasets via live SQL and real-time WebRTC audio synthesis.',
    impact: 'Reduced research turnaround from 45 minutes to 3.2 seconds with sub-300ms speech synthesis response latency.',
    metrics: [
      { label: 'Query Speed', value: '<350ms' },
      { label: 'Data Accuracy', value: '99.8%' },
      { label: 'Queries Handled', value: '1.2M+' }
    ],
    tags: ['Pipecat WebRTC', 'Gemini 2.5', 'PostgreSQL pgvector', 'FastAPI'],
    gradient: 'from-chartreuse-400/20 via-emerald-500/10 to-transparent'
  },
  {
    id: 'telephony-dispatch',
    title: 'Autonomous Inbound Customer Voice Dispatcher',
    category: 'Voice AI & Telephony',
    client: 'FinVantage Care',
    description: 'Human-parity conversational IVR dispatcher handling round-the-clock banking tier-1 inquiries, identity verification, and warm escalation.',
    impact: 'Automated 78% of tier-1 support calls with zero queue wait times and a 4.8/5 CSAT rating.',
    metrics: [
      { label: 'First Call Resolution', value: '82%' },
      { label: 'Annual Cost Saved', value: '$1.4M' },
      { label: 'Concurrent Lines', value: '500+' }
    ],
    tags: ['Twilio Streams', 'SmallWebRTC', 'FastAPI', 'Docker'],
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent'
  },
  {
    id: 'omnichannel-agent',
    title: 'Omnichannel WhatsApp & Web Widget Orchestrator',
    category: 'Multi-Agent Systems',
    client: 'OmniRetail Europe',
    description: 'Unified cross-platform sales assistant operating seamlessly across WhatsApp and website chat widgets, sharing state, carts, and customer memory.',
    impact: 'Drove a 34% lift in abandoned cart conversions with real-time product recommendations and instant checkout assistance.',
    metrics: [
      { label: 'Conversion Lift', value: '+34%' },
      { label: 'Response Time', value: '1.1s' },
      { label: 'Active Users', value: '450k/mo' }
    ],
    tags: ['WhatsApp Adapter', 'SessionStorage Sync', 'Redis', 'TypeScript'],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent'
  },
  {
    id: 'rag-clinical-audit',
    title: 'Clinical Protocol & Regulatory Copilot',
    category: 'Enterprise Knowledge Agents',
    client: 'BioNexus Healthcare',
    description: 'Strictly grounded hallucination-free RAG agent that audits pharmaceutical trial logs against FDA compliance specifications.',
    impact: 'Flagged 100% of documentation discrepancies before submission, cutting audit approval times by half.',
    metrics: [
      { label: 'Audit Verification', value: '100%' },
      { label: 'Review Speedup', value: '2.4x' },
      { label: 'Doc Pass Rate', value: '98.9%' }
    ],
    tags: ['Hybrid Search', 'Langfuse', 'Python', 'pgvector'],
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Conversational Intelligence', 'Voice AI & Telephony', 'Multi-Agent Systems', 'Enterprise Knowledge Agents'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-petrol-950 text-petrol-50 selection:bg-chartreuse-400 selection:text-petrol-950">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-petrol-950/80 backdrop-blur-xl border-b border-petrol-800/60 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-chartreuse-400 to-chartreuse-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <BrainCircuit className="w-5 h-5 text-petrol-950" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-lg text-white tracking-tight">
              Cognis<span className="text-chartreuse-400">.</span>
            </span>
          </a>

          <a 
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-petrol-300 hover:text-chartreuse-400 transition-colors py-2 px-4 rounded-full border border-petrol-800 hover:border-chartreuse-400/50 bg-petrol-900/40"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-chartreuse-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-chartreuse-400/10 border border-chartreuse-400/20 text-chartreuse-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Client Deployments
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Engineered for Impact. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-chartreuse-300 via-chartreuse-400 to-emerald-400">
              Our AI Systems Portfolio
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-petrol-200 leading-relaxed mb-10">
            Explore how we design, deploy, and scale enterprise voice workflows, real-time multimodal agents, and autonomous data orchestrators.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 pt-2 border-t border-petrol-800/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-chartreuse-400 text-petrol-950 shadow-lg shadow-chartreuse-400/20 font-semibold'
                    : 'bg-petrol-900/60 text-petrol-300 hover:text-white hover:bg-petrol-800/80 border border-petrol-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-petrol-900/40 border border-petrol-800/80 hover:border-chartreuse-400/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-chartreuse-400/5 flex flex-col justify-between overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-chartreuse-400">
                      {project.category}
                    </span>
                    <span className="text-xs text-petrol-400 font-medium">
                      Client: {project.client}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-chartreuse-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-petrol-200 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact Highlight Box */}
                  <div className="p-4 rounded-xl bg-petrol-950/70 border border-petrol-800/70 mb-6">
                    <div className="flex items-start gap-2.5">
                      <TrendingUp className="w-4 h-4 text-chartreuse-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-petrol-100 font-medium leading-relaxed">
                        <strong className="text-white font-semibold">Key Result:</strong> {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-petrol-950/40 border border-petrol-800/50 text-center">
                        <div className="text-base sm:text-lg font-bold text-white font-display">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-petrol-400 font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags Footer */}
                <div className="pt-4 border-t border-petrol-800/60 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-petrol-950 text-petrol-300 border border-petrol-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Interactive Callout */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-petrol-900 via-petrol-900/90 to-petrol-950 border border-chartreuse-400/30 p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-chartreuse-400/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-2xl mx-auto relative z-10">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Have a specific architecture in mind?
              </h2>
              <p className="text-petrol-200 text-sm sm:text-base mb-8">
                Ask our AI Agent right now in the chat widget on this page, or start a live voice conversation to explore custom capabilities.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/"
                  className="px-6 py-3 rounded-full bg-chartreuse-400 hover:bg-chartreuse-300 text-petrol-950 font-semibold text-sm transition-all hover:scale-105"
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
