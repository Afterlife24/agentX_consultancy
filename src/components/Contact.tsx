import { useState } from 'react';
import { ArrowRight, Mail, Phone, Building2, CheckCircle2, Sparkles } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-chartreuse-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: pitch */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chartreuse-500/10 border border-chartreuse-500/20">
              <Sparkles className="w-4 h-4 text-chartreuse-400" />
              <span className="text-sm font-mono text-chartreuse-300">Let&apos;s Build</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to put AI{' '}
              <span className="text-gradient-chartreuse">to work?</span>
            </h2>

            <p className="text-lg text-petrol-200 leading-relaxed">
              Tell us about your business and where you see AI creating leverage.
              We&apos;ll come back within 48 hours with initial thoughts — no templates, no hard sell.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { icon: Mail, label: 'Email', value: 'hello@cognis.ai' },
                { icon: Phone, label: 'Phone', value: '+1 (415) 555-0142' },
                { icon: Building2, label: 'Office', value: 'San Francisco · London · Singapore' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-petrol-800/60 border border-petrol-700/40 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-chartreuse-400" />
                  </div>
                  <div>
                    <div className="text-xs text-petrol-400 font-mono uppercase tracking-wider">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="relative">
            <div className="p-8 lg:p-10 rounded-2xl glass">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-chartreuse-400/10 border border-chartreuse-400/30 flex items-center justify-center mb-6 glow-chartreuse">
                    <CheckCircle2 className="w-10 h-10 text-chartreuse-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Message received</h3>
                  <p className="text-petrol-200 max-w-sm">
                    Thanks, {form.name || 'there'}. We&apos;ll review your note and get back to you
                    within 48 hours with initial thoughts.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', company: '', message: '' });
                    }}
                    className="mt-6 text-sm text-chartreuse-400 hover:text-chartreuse-300 font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-petrol-400 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-petrol-950/60 border border-petrol-700/40 text-white placeholder-petrol-400 focus:border-chartreuse-400/50 focus:outline-none focus:ring-1 focus:ring-chartreuse-400/30 transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-petrol-400 uppercase tracking-wider mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-petrol-950/60 border border-petrol-700/40 text-white placeholder-petrol-400 focus:border-chartreuse-400/50 focus:outline-none focus:ring-1 focus:ring-chartreuse-400/30 transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-petrol-400 uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-petrol-950/60 border border-petrol-700/40 text-white placeholder-petrol-400 focus:border-chartreuse-400/50 focus:outline-none focus:ring-1 focus:ring-chartreuse-400/30 transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-petrol-400 uppercase tracking-wider mb-2">
                      What are you exploring?
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-petrol-950/60 border border-petrol-700/40 text-white placeholder-petrol-400 focus:border-chartreuse-400/50 focus:outline-none focus:ring-1 focus:ring-chartreuse-400/30 transition-all resize-none"
                      placeholder="We're looking to automate our customer support triage..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-chartreuse-400 hover:bg-chartreuse-300 text-petrol-950 font-bold transition-all duration-300 hover:scale-[1.02] glow-chartreuse"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-xs text-petrol-400 text-center">
                    We respond within 48 hours. No automated sequences.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
