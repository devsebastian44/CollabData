import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { HeroChart } from '@/components/pages/landing/hero-chart';

export function Hero() {
  return (
    <section className="relative px-4 py-16 md:py-24 lg:py-32 overflow-hidden pt-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent-teal/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v2.0 is now live
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight font-headline">
              Turn Raw Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">Collaborative Insights</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Automate EDA and manage multi-user datasets in real-time. The only platform engineered for data teams who need speed without sacrificing precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-12 px-8 font-bold text-base shadow-lg shadow-primary/25 group" asChild>
                <Link href="/dashboard">
                  Get Started
                  <ArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full relative group perspective-1000">
            <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden transform transition-transform duration-500 lg:group-hover:rotate-y-2 lg:rotate-y-6 lg:rotate-x-6 origin-center">
              <div className="h-10 border-b border-slate-700 bg-slate-800/50 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 w-64 h-6 rounded bg-slate-700/50"></div>
              </div>
              <div className="p-4 h-[calc(100%-2.5rem)] bg-[#0f172a]">
                <HeroChart />
              </div>
            </div>
            <div className="absolute -inset-4 bg-primary/20 blur-2xl -z-10 rounded-[30px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
