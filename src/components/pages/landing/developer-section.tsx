import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function DeveloperSection() {
  const codeSnippet = 
`import collabdata as cd

# Initialize project
project = cd.connect("marketing_q3")

# Auto-clean dataset
df = project.load_data()
df.clean(strategy="aggressive")

# Generate insights
insights = df.get_correlations(target="conversion_rate")
cd.publish(insights, channel="slack")`.trim();

  return (
    <section className="py-20 md:py-32 bg-background-light dark:bg-[#0f172a] border-y border-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-border-dark">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 font-mono">analysis.py</p>
                <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
            </div>
            <div className="p-4">
                <pre className="bg-slate-100 dark:bg-[#0f172a] p-4 rounded-md text-sm text-slate-800 dark:text-slate-200 overflow-x-auto custom-scrollbar">
                  <code className="font-mono whitespace-pre">
                    {codeSnippet}
                  </code>
                </pre>
            </div>
          </div>
          
          <div className="max-w-md">
            <div className="inline-flex size-12 items-center justify-center mb-6 rounded-lg bg-surface-dark border border-border-dark">
                <span className="font-mono text-xl text-slate-400">&gt;_</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight font-headline">
              Developer First API
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mt-4">
              Integrate seamlessly with your existing Python and SQL workflows. Our SDK is designed to be intuitive for data scientists and powerful for data engineers.
            </p>
            <div className="flex items-center gap-4 mt-8">
                <Button size="lg" variant="secondary" className="font-medium">View Documentation</Button>
                <Button variant="ghost" asChild>
                    <Link href="#">
                        Browse GitHub <ArrowUpRight className="ml-1 size-4" />
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
