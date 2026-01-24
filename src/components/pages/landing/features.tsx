import { Users, LineChart, History, Database, Code, Lock } from 'lucide-react';

export function Features() {
  const mainFeatures = [
    {
      icon: <Users className="text-primary" />,
      title: 'Real-time Collaboration',
      description: 'Multi-cursor editing and live commenting directly on your datasets.',
      colorClass: 'bg-primary/10 text-primary'
    },
    {
      icon: <LineChart className="text-accent-teal" />,
      title: 'Automated EDA',
      description: 'Instant distribution plots, null value detection, and correlation matrices.',
      colorClass: 'bg-accent-teal/10 text-accent-teal'
    },
    {
      icon: <History className="text-purple-500" />,
      title: 'Version Control',
      description: 'Git-like history for your datasets to track changes and roll back instantly.',
      colorClass: 'bg-purple-500/10 text-purple-500'
    },
  ];

  const gridFeatures = [
    {
      icon: <Database className="text-6xl text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors duration-300" />,
      title: 'Connect Any Source',
      description: 'Seamlessly integrate with PostgreSQL, Snowflake, BigQuery, and S3 buckets with one click.',
      hoverBorder: 'hover:border-primary/50'
    },
    {
      icon: (
        <div className="w-full h-full p-4 flex flex-col gap-2">
          <div className="w-full h-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-pulse delay-75"></div>
          <div className="w-3/4 h-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-pulse delay-150"></div>
          <div className="w-1/2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full animate-pulse"></div>
        </div>
      ),
      title: 'Smart Cleaning',
      description: 'AI-suggested cleaning rules for messy data. Standardize dates and categorical values instantly.',
      hoverBorder: 'hover:border-accent-teal/50',
    },
    {
      icon: <Lock className="text-6xl text-slate-300 dark:text-slate-600 group-hover:text-purple-500 transition-colors duration-300" />,
      title: 'Enterprise Security',
      description: 'SOC2 Type II compliant. Role-based access control (RBAC) and audit logs built-in.',
      hoverBorder: 'hover:border-purple-500/50'
    },
    {
      icon: <Code className="text-6xl text-slate-300 dark:text-slate-600 group-hover:text-blue-400 transition-colors duration-300" />,
      title: 'Robust API',
      description: 'Programmatic access to all your datasets. Automate pipelines via our RESTful API.',
      hoverBorder: 'hover:border-blue-400/50',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background-light dark:bg-background-dark relative">
       <div className="absolute bottom-8 left-8 z-10 hidden md:block">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/50 border border-slate-700">
          <span className="font-bold text-white font-headline">N</span>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          <div className="md:w-1/3 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-black leading-tight font-headline">
              Engineered for <br />
              <span className="text-primary">Modern Data Teams</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Everything you need to manage complex datasets and automate your workflow. Say goodbye to fragmented Jupyter notebooks.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className={`p-2 rounded-lg ${feature.colorClass}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gridFeatures.map((feature, index) => (
              <div key={index} className={`group relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#151e2e] p-6 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 ${feature.hoverBorder}`}>
                <div className="h-40 w-full mb-6 bg-slate-100 dark:bg-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center">
                  {feature.icon}
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#151e2e] to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
