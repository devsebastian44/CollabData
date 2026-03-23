import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { HeroChart } from '@/components/pages/landing/hero-chart';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 pt-32 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[800px] rounded-full bg-accent-teal/5 blur-[120px]"></div>
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="mx-auto flex max-w-2xl flex-1 flex-col gap-6 text-center lg:mx-0 lg:text-left">
            <div className="inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary lg:self-start">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              v2.0 is now live
            </div>
            <h1 className="font-headline text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Turn Raw Data into{' '}
              <span className="bg-gradient-to-r from-primary to-accent-teal bg-clip-text text-transparent">
                Collaborative Insights
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0">
              Automate EDA and manage multi-user datasets in real-time. The only
              platform engineered for data teams who need speed without
              sacrificing precision.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="group h-12 px-8 text-base font-bold shadow-lg shadow-primary/25"
                asChild
              >
                <Link href="/dashboard">
                  Get Started
                  <ArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="perspective-1000 group relative w-full flex-1">
            <div className="lg:group-hover:rotate-y-2 lg:rotate-y-6 lg:rotate-x-6 relative aspect-[16/10] w-full origin-center transform overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl transition-transform duration-500">
              <div className="flex h-10 items-center gap-2 border-b border-slate-700 bg-slate-800/50 px-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 h-6 w-64 rounded bg-slate-700/50"></div>
              </div>
              <div className="h-[calc(100%-2.5rem)] bg-[#0f172a] p-4">
                <HeroChart />
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 rounded-[30px] bg-primary/20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
