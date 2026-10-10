import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 180, suffix: '+', label: 'AI Systems Deployed', sublabel: 'Across 12 industries' },
  { value: 47, suffix: 'M', prefix: '$', label: 'Client Revenue Generated', sublabel: 'Tracked & verified' },
  { value: 98, suffix: '%', label: 'Client Retention Rate', sublabel: 'Year over year' },
  { value: 6, suffix: 'wk', label: 'Average Time to Value', sublabel: 'From kickoff to production' },
];

function Counter({ end, prefix = '', suffix = '' }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-petrol-900/40 via-petrol-950 to-petrol-900/40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative text-center p-8 rounded-2xl glass group hover:border-chartreuse-400/30 transition-all duration-500"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-gradient-chartreuse mb-2">
                <Counter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-petrol-400 font-mono">{stat.sublabel}</div>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-chartreuse-400/30 group-hover:border-chartreuse-400 transition-colors" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-coral-400/30 group-hover:border-coral-400 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
