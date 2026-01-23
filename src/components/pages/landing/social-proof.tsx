import { Gem, Rocket, Zap, Cloud, Globe } from 'lucide-react';

export function SocialProof() {
  const logos = [
    { name: 'ACME Corp', icon: <Gem /> },
    { name: 'StarTech', icon: <Rocket /> },
    { name: 'EnergyIO', icon: <Zap /> },
    { name: 'NebuData', icon: <Cloud /> },
    { name: 'GlobalNet', icon: <Globe /> },
  ];

  return (
    <section className="border-y border-border bg-white dark:bg-[#0f172a] py-8">
      <div className="max-w-[1280px] mx-auto px-4 text-center">
        <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">Trusted by data teams at</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 font-bold text-xl text-slate-400 dark:text-slate-300">
              {logo.icon}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
