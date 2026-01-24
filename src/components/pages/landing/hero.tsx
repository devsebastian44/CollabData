import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

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
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-lg text-green-500">check_circle</span>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-lg text-green-500">check_circle</span>
                <span>No credit card required</span>
              </div>
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
              <div className="p-6 grid grid-cols-3 gap-4 h-full bg-[#0f172a]">
                <div className="col-span-1 flex flex-col gap-3">
                  <div className="h-8 w-3/4 bg-slate-700 rounded animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-slate-800 rounded"></div>
                  <div className="h-4 w-2/3 bg-slate-800 rounded"></div>
                  <div className="h-4 w-1/2 bg-slate-800 rounded"></div>
                  <div className="mt-4 h-32 w-full bg-slate-800/50 rounded border border-slate-700 p-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-accent-teal"></div>
                      <div className="text-xs text-slate-400">Active Users</div>
                    </div>
                    <div className="h-16 w-full flex items-end justify-between gap-1">
                      <div className="w-full bg-primary/20 h-[40%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/40 h-[70%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/60 h-[50%] rounded-t-sm"></div>
                      <div className="w-full bg-primary h-[85%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/50 h-[60%] rounded-t-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="h-8 w-1/3 bg-slate-700 rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-primary rounded"></div>
                      <div className="h-8 w-8 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                  <div className="grow w-full bg-slate-800/30 rounded border border-slate-700 relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full text-primary" preserveAspectRatio="none">
                      <path d="M0,150 C50,120 100,160 150,100 C200,40 250,80 300,50 C350,20 400,60 450,90 C500,120 550,80 600,100 L600,200 L0,200 Z" fill="url(#gradient-primary)" opacity="0.2"></path>
                      <path d="M0,150 C50,120 100,160 150,100 C200,40 250,80 300,50 C350,20 400,60 450,90 C500,120 550,80 600,100" fill="none" stroke="currentColor" strokeWidth="3"></path>
                      <defs>
                        <linearGradient id="gradient-primary" x1="0%" x2="0%" y1="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "currentColor", stopOpacity: 1 }}></stop>
                          <stop offset="100%" style={{ stopColor: "currentColor", stopOpacity: 0 }}></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute top-[25%] left-[50%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] border-2 border-primary"></div>
                    <div className="absolute top-[15%] left-[50%] bg-slate-800 text-white text-xs px-2 py-1 rounded border border-slate-600 shadow-lg transform -translate-x-1/2 mb-2">
                      $42,593.00
                    </div>
                  </div>
                  <div className="h-12 w-full flex gap-2">
                    <div className="h-full flex-1 bg-slate-800/50 rounded border border-slate-700"></div>
                    <div className="h-full flex-1 bg-slate-800/50 rounded border border-slate-700"></div>
                    <div className="h-full flex-1 bg-slate-800/50 rounded border border-slate-700"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-primary/20 blur-2xl -z-10 rounded-[30px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
