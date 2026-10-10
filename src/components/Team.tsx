import { Linkedin, Twitter, GraduationCap, Briefcase } from 'lucide-react';

const team = [
  {
    name: 'Dr. Aanya Krishnan',
    role: 'Founder & Chief AI Officer',
    bio: 'Former Stanford AI Lab researcher. 15 years building production ML systems at Google Brain and DeepMind.',
    creds: ['PhD, Stanford', 'Ex-Google Brain', '12 patents'],
    accent: 'chartreuse',
  },
  {
    name: 'Marcus Vanderberg',
    role: 'Head of Engineering',
    bio: 'Scaled AI infrastructure at three unicorns. Expert in distributed training, MLOps, and low-latency serving.',
    creds: ['Ex-Scale AI', 'Ex-Databricks', 'ICPC Medalist'],
    accent: 'coral',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Lead Research Scientist',
    bio: 'Published 30+ papers on retrieval-augmented generation and multi-agent systems. Shapes our core methodology.',
    creds: ['PhD, MIT', 'NeurIPS reviewer', '30+ papers'],
    accent: 'chartreuse',
  },
  {
    name: 'Sofia Reyes',
    role: 'Director of AI Strategy',
    bio: 'Bridges business and technology. Former McKinsey partner who has guided AI transformations at 40+ Fortune 500s.',
    creds: ['Ex-McKinsey', 'MBA, Wharton', '40+ transformations'],
    accent: 'coral',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 overflow-hidden bg-petrol-900/30">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-coral-500/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-chartreuse-500/10 border border-chartreuse-500/20 mb-5">
            <div className="w-2 h-2 rounded-full bg-chartreuse-400 animate-pulse" />
            <span className="text-sm font-mono text-chartreuse-300">05 — The Team</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Researchers and operators{' '}
            <span className="text-gradient-chartreuse">who&apos;ve shipped.</span>
          </h2>
          <p className="text-lg text-petrol-200 leading-relaxed">
            Our team combines deep academic credentials with hard-won production experience
            at the world&apos;s leading AI companies. No theorists — just builders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative p-6 rounded-2xl glass hover:border-petrol-600/60 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Avatar placeholder with initials */}
              <div className="relative mb-5">
                <div className={`w-full aspect-square rounded-xl bg-gradient-to-br ${
                  member.accent === 'chartreuse'
                    ? 'from-petrol-700 to-petrol-900'
                    : 'from-petrol-700 to-petrol-900'
                } border border-petrol-600/30 flex items-center justify-center overflow-hidden`}>
                  <span className={`font-display text-5xl font-bold ${
                    member.accent === 'chartreuse' ? 'text-chartreuse-400/40' : 'text-coral-400/40'
                  } group-hover:scale-110 transition-transform duration-500`}>
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity ${
                    member.accent === 'chartreuse' ? 'bg-chartreuse-400' : 'bg-coral-400'
                  }`} />
                </div>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className={`text-sm font-medium mb-3 ${
                member.accent === 'chartreuse' ? 'text-chartreuse-400' : 'text-coral-400'
              }`}>
                {member.role}
              </p>
              <p className="text-xs text-petrol-200 leading-relaxed mb-4">{member.bio}</p>

              {/* Credentials */}
              <div className="space-y-1.5 mb-4">
                {member.creds.map((cred) => (
                  <div key={cred} className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-petrol-400" />
                    <span className="text-xs font-mono text-petrol-300">{cred}</span>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-3 pt-4 border-t border-petrol-800/50">
                <a href="#" className="text-petrol-400 hover:text-chartreuse-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-petrol-400 hover:text-chartreuse-400 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-petrol-400 hover:text-chartreuse-400 transition-colors">
                  <Briefcase className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
