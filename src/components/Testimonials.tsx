import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Cognis didn't just deliver an AI system — they transformed how our entire operations team works. The fraud detection model paid for itself in the first month. I've never seen a consulting engagement deliver this much value this fast.",
    author: 'Jenifer Park',
    title: 'VP of Risk, PayBridge',
    accent: 'chartreuse',
  },
  {
    quote: "What sets Cognis apart is they actually understand the business side. Every technical decision was tied to a measurable outcome. No vanity metrics, no science projects — just systems that move the needle.",
    author: 'Robert Chen',
    title: 'CTO, MediCore Health',
    accent: 'coral',
  },
  {
    quote: "We'd been burned by two previous AI vendors. Cognis was different — transparent process, honest timelines, and they trained our team to own the system after handoff. The recommendation engine they built now drives 23% of our revenue.",
    author: 'Elena Volkov',
    title: 'Head of Product, Vault & Vine',
    accent: 'chartreuse',
  },
];

export default function Testimonials() {
  return (
    <section id="insights" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-chartreuse-500/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral-500/10 border border-coral-500/20 mb-5">
            <div className="w-2 h-2 rounded-full bg-coral-400 animate-pulse" />
            <span className="text-sm font-mono text-coral-300">06 — Voices</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            What our partners{' '}
            <span className="text-gradient-coral">say about us.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`relative p-8 rounded-2xl glass hover:border-petrol-600/60 transition-all duration-500 ${
                i === 1 ? 'lg:-translate-y-6' : ''
              }`}
            >
              <Quote className={`w-10 h-10 mb-5 ${
                t.accent === 'chartreuse' ? 'text-chartreuse-400/40' : 'text-coral-400/40'
              }`} />

              <p className="text-petrol-100 leading-relaxed mb-8 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-petrol-800/50">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm ${
                  t.accent === 'chartreuse'
                    ? 'bg-chartreuse-400/10 text-chartreuse-400 border border-chartreuse-400/20'
                    : 'bg-coral-400/10 text-coral-400 border border-coral-400/20'
                }`}>
                  {t.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.author}</div>
                  <div className="text-xs text-petrol-400">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
