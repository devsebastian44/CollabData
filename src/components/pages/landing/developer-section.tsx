import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function DeveloperSection() {
  return (
    <section className="border-y border-border bg-[#0f172a] py-12">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-5 lg:gap-20">
          <div className="rounded-xl border border-slate-200 bg-white shadow-lg dark:border-border-dark dark:bg-background-dark md:col-span-3">
            <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-border-dark">
              <p className="font-mono text-sm font-medium text-slate-700 dark:text-slate-300">
                analysis.py
              </p>
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-4">
              <pre className="rounded-md bg-slate-100 p-4 text-sm text-slate-300 dark:bg-[#0f172a]">
                <code className="whitespace-pre-wrap text-left font-mono">
                  <span className="text-chart-4">import</span> collabdata{' '}
                  <span className="text-chart-4">as</span> cd
                  <br />
                  <br />
                  <span className="text-muted-foreground">
                    # Initialize project
                  </span>
                  <br />
                  <span className="text-foreground">project</span>{' '}
                  <span className="text-muted-foreground">=</span>{' '}
                  <span className="text-chart-3">cd</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-chart-3">connect</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-chart-2">"marketing_q3"</span>
                  <span className="text-muted-foreground">)</span>
                  <br />
                  <br />
                  <span className="text-muted-foreground">
                    # Auto-clean dataset
                  </span>
                  <br />
                  <span className="text-foreground">df</span>{' '}
                  <span className="text-muted-foreground">=</span>{' '}
                  <span className="text-foreground">project</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-chart-3">load_data</span>
                  <span className="text-muted-foreground">()</span>
                  <br />
                  <span className="text-foreground">df</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-chart-3">clean</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-chart-1">strategy</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-chart-2">"aggressive"</span>
                  <span className="text-muted-foreground">)</span>
                  <br />
                  <br />
                  <span className="text-muted-foreground">
                    # Generate insights
                  </span>
                  <br />
                  <span className="text-foreground">insights</span>{' '}
                  <span className="text-muted-foreground">=</span>{' '}
                  <span className="text-foreground">df</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-chart-3">get_correlations</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-chart-1">target</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-chart-2">"conversion_rate"</span>
                  <span className="text-muted-foreground">)</span>
                  <br />
                  <span className="text-foreground">cd</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-chart-3">publish</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-foreground">insights</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-chart-1">channel</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-chart-2">"slack"</span>
                  <span className="text-muted-foreground">)</span>
                </code>
              </pre>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-headline text-3xl font-black leading-tight md:text-4xl">
              Developer First API
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Integrate seamlessly with your existing Python and SQL workflows.
              Our SDK is designed to be intuitive for data scientists and
              powerful for data engineers.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button size="lg" variant="secondary" className="font-medium">
                View Documentation
              </Button>
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
