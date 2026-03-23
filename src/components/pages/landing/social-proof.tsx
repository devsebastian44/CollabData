export function SocialProof() {
  const logos = [
    {
      name: 'Python',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python logo"
          className="h-6 w-6"
        />
      ),
    },
    {
      name: 'Pandas',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
          alt="Pandas logo"
          className="h-6 w-6"
        />
      ),
    },
    {
      name: 'NumPy',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
          alt="NumPy logo"
          className="h-6 w-6"
        />
      ),
    },
    {
      name: 'Scikit-learn',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
          alt="Scikit-learn logo"
          className="h-6 w-6"
        />
      ),
    },
    {
      name: 'TensorFlow',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
          alt="TensorFlow logo"
          className="h-6 w-6"
        />
      ),
    },
    {
      name: 'PyTorch',
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
          alt="PyTorch logo"
          className="h-6 w-6"
        />
      ),
    },
  ];

  return (
    <section className="border-y border-border bg-white py-8 dark:bg-[#0f172a]">
      <div className="mx-auto max-w-[1280px] px-4 text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-wider text-slate-500">
          Powered by the leading data science ecosystem
        </p>
        <div className="flex flex-wrap justify-center gap-8 transition-all duration-500 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-3 text-lg font-bold text-slate-600 dark:text-slate-400"
            >
              {logo.icon}
              <span className="font-headline">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
