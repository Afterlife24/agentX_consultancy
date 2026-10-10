const partners = [
  'PayBridge',
  'MediCore',
  'Vault & Vine',
  'Nexora',
  'Helix Labs',
  'BrightCloud',
  'Quantix',
  'Forge Dynamics',
];

export default function PartnerMarquee() {
  return (
    <section className="relative py-10 border-y border-petrol-800/40 overflow-hidden bg-petrol-900/20">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs font-mono text-petrol-400 uppercase tracking-[0.2em]">
          Trusted by teams building the future
        </p>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-petrol-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-petrol-950 to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-3 mx-8 group"
            >
              <div className="w-7 h-7 rounded-lg border border-petrol-700/50 flex items-center justify-center group-hover:border-chartreuse-400/30 transition-colors">
                <div className="w-3 h-3 rounded-sm bg-petrol-600 group-hover:bg-chartreuse-400/50 transition-colors" />
              </div>
              <span className="font-display text-xl font-semibold text-petrol-300 group-hover:text-petrol-100 transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
