import {
  Users,
  LineChart,
  History,
  Database,
  Code,
  Lock,
  Sparkles,
} from 'lucide-react';

export function Features() {
  const mainFeatures = [
    {
      icon: <Users className="text-primary" />,
      title: 'Real-time Collaboration',
      description:
        'Multi-cursor editing and live commenting directly on your datasets.',
      colorClass: 'bg-primary/10 text-primary',
    },
    {
      icon: <LineChart className="text-accent-teal" />,
      title: 'Automated EDA',
      description:
        'Instant distribution plots, null value detection, and correlation matrices.',
      colorClass: 'bg-accent-teal/10 text-accent-teal',
    },
    {
      icon: <History className="text-purple-500" />,
      title: 'Version Control',
      description:
        'Git-like history for your datasets to track changes and roll back instantly.',
      colorClass: 'bg-purple-500/10 text-purple-500',
    },
  ];

  const gridFeatures = [
    {
      icon: (
        <>
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent" />
          <Database className="text-5xl text-primary" />
        </>
      ),
      title: 'Connect Any Source',
      description:
        'Seamlessly integrate with PostgreSQL, Snowflake, BigQuery, and S3 buckets with one click.',
      hoverBorder: 'hover:border-primary/50',
    },
    {
      icon: (
        <>
          <div className="absolute inset-0 bg-gradient-radial from-accent-teal/10 to-transparent" />
          <Sparkles className="text-5xl text-accent-teal" />
        </>
      ),
      title: 'Smart Cleaning',
      description:
        'AI-suggested cleaning rules for messy data. Standardize dates and categorical values instantly.',
      hoverBorder: 'hover:border-accent-teal/50',
    },
    {
      icon: (
        <>
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 to-transparent" />
          <Lock className="text-5xl text-purple-500" />
        </>
      ),
      title: 'Enterprise Security',
      description:
        'SOC2 Type II compliant. Role-based access control (RBAC) and audit logs built-in.',
      hoverBorder: 'hover:border-purple-500/50',
    },
    {
      icon: (
        <>
          <div className="absolute inset-0 bg-gradient-radial from-blue-400/10 to-transparent" />
          <Code className="text-5xl text-blue-400" />
        </>
      ),
      title: 'Robust API',
      description:
        'Programmatic access to all your datasets. Automate pipelines via our RESTful API.',
      hoverBorder: 'hover:border-blue-400/50',
    },
  ];

  return (
    <section className="relative bg-background-light py-20 dark:bg-background-dark md:py-32">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row lg:gap-20">
          <div className="flex flex-col gap-6 md:w-1/3">
            <h2 className="font-headline text-3xl font-black leading-tight md:text-4xl">
              Engineered for <br />
              <span className="text-primary">Modern Data Teams</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Everything you need to manage complex datasets and automate your
              workflow. Say goodbye to fragmented Jupyter notebooks.
            </p>
            <div className="mt-4 flex flex-col gap-4">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800/50"
                >
                  <div className={`rounded-lg p-2 ${feature.colorClass}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:w-2/3">
            {gridFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-[#151e2e] ${feature.hoverBorder}`}
              >
                <div className="relative mb-6 flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
