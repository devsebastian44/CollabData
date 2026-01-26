import { Cog, Table } from 'lucide-react';

const PythonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.022 5.828h6.58V2h-8.525C7.94 2 6.188 3.74 6.188 5.866v3.29c0 .28.225.504.504.504h3.29c1.928 0 3.49-1.562 3.49-3.49s-1.562-3.49-3.49-3.49zm-.022 12.344h-6.58V22h8.525c2.127 0 3.878-1.74 3.878-3.866v-3.29c0-.28-.225-.504-.504-.504h-3.29c-1.928 0-3.49 1.562-3.49 3.49s1.562 3.49 3.49 3.49zm.022-1.94c.85 0 1.543-.693 1.543-1.55s-.693-1.55-1.543-1.55H8.732v3.1h3.312zm0-8.52h-3.31V4.62c0-.857-.694-1.55-1.55-1.55H6.702v3.1h3.29c.85 0 1.543.693 1.543 1.55s-.693 1.55-1.543-1.55z"/>
    </svg>
);

const NumpyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.14 4.14c-.39.39-.39 1.02 0 1.41l1.41 1.41c-1.17 1.17-1.17 3.07 0 4.24l-1.41 1.41c-.39.39-.39 1.02 0 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l1.41-1.41c1.17-1.17 3.07-1.17 4.24 0l1.41 1.41c.39.39 1.02.39 1.41 0l4.24-4.24c.39-.39.39-1.02 0-1.41l-1.41-1.41c1.17-1.17 1.17-3.07 0-4.24l1.41-1.41c.39-.39.39-1.02 0-1.41L15.54 4.14c-.39-.39-1.02-.39-1.41 0L12.72 5.55c-1.17 1.17-3.07 1.17-4.24 0L7.07 4.14c-.39-.39-1.02-.39-1.41 0z"/>
    </svg>
);

const TensorFlowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.92 2.72H18.1V5.04H13.84V21.28H10.16V5.04H5.92V2.72Z"/>
    </svg>
);

const PyTorchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.74 2.85c-.9 0-1.57.25-2 .7-.43.45-.63 1.1-.63 1.87 0 .5.13.94.38 1.3L15.3 20.3c.3.43.7.64 1.15.64.9 0 1.57-.25 2-.7.43-.45.63-1.1.63-1.87 0-.5-.13-.94-.38-1.3L8.88 3.47c-.3-.43-.7-.62-1.14-.62zM3.46 13.9a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8zm17.08-3.8a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8z"/>
    </svg>
);

export function SocialProof() {
  const logos = [
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'Pandas', icon: <Table /> },
    { name: 'NumPy', icon: <NumpyIcon /> },
    { name: 'Scikit-learn', icon: <Cog /> },
    { name: 'TensorFlow', icon: <TensorFlowIcon /> },
    { name: 'PyTorch', icon: <PyTorchIcon /> },
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