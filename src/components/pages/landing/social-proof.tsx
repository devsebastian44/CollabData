import { Flame, Cog, Cuboid, Grid } from 'lucide-react';

const PythonIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 10H14V14H17.5C18.88 14 20 12.88 20 11.5C20 10.12 18.88 10 17.5 10Z" />
      <path d="M6.5 14H10V10H6.5C5.12 10 4 11.12 4 12.5C4 13.88 5.12 14 6.5 14Z" />
      <path d="M11 4V10H5V7.5C5 5.57 6.57 4 8.5 4H11Z" />
      <path d="M13 20V14H19V16.5C19 18.43 17.43 20 15.5 20H13Z" />
    </svg>
);

const NumpyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h4l-4 8h4"/>
        <path d="M11 8v8"/>
        <path d="M15 8l4 8"/>
        <path d="M19 8l-4 8"/>
    </svg>
);

export function SocialProof() {
  const logos = [
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'Pandas', icon: <Grid /> },
    { name: 'NumPy', icon: <NumpyIcon /> },
    { name: 'Scikit-learn', icon: <Cog /> },
    { name: 'TensorFlow', icon: <Cuboid /> },
    { name: 'PyTorch', icon: <Flame /> },
  ];

  return (
    <section className="border-y border-border bg-white dark:bg-[#0f172a] py-8">
      <div className="max-w-[1280px] mx-auto px-4 text-center">
        <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">Powered by the leading data science ecosystem</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-90 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-3 font-bold text-lg text-slate-400 dark:text-slate-300">
              {logo.icon}
              <span className="font-headline">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
