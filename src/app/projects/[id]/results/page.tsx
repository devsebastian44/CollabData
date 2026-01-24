import { KpiCard } from '@/components/pages/results/kpi-card';
import { CorrelationHeatmap } from '@/components/pages/results/correlation-heatmap';
import { FeatureDistributions } from '@/components/pages/results/feature-distributions';
import { DescriptiveStatsTable } from '@/components/pages/results/descriptive-stats-table';
import { AIInsights } from '@/components/pages/results/ai-insights';
import { Rows, Columns, AlertTriangle, Copy } from 'lucide-react';
import { descriptiveStats } from '@/lib/mock-data';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ResultsPage() {
  const kpiData = [
    { title: 'Total Rows', value: '10,500', icon: <Rows className="text-6xl text-primary" />, hoverBorder: 'hover:border-primary/50' },
    { title: 'Total Columns', value: '15', subValue: 'Features', icon: <Columns className="text-6xl text-indigo-500" />, hoverBorder: 'hover:border-indigo-500/50' },
    { title: 'Missing Values', value: '2.3%', trend: '+0.5%', trendColor: 'text-amber-500', icon: <AlertTriangle className="text-6xl text-amber-500" />, hoverBorder: 'hover:border-amber-500/50' },
    { title: 'Duplicate Rows', value: '4', action: 'Review', icon: <Copy className="text-6xl text-rose-500" />, hoverBorder: 'hover:border-rose-500/50' },
  ];
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-6');

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
             <div className="flex flex-wrap items-center gap-2">
              <Link href="/dashboard" className="text-text-secondary text-sm font-medium leading-normal hover:text-white transition-colors">Dashboard</Link>
              <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
              <span className="text-white text-lg font-bold leading-normal">Results</span>
            </div>
            <div className="flex items-center gap-3">
              {userAvatar && (
                <Image
                    src={userAvatar.imageUrl}
                    alt="User profile picture"
                    width={40}
                    height={40}
                    className="rounded-full ring-2 ring-primary/20"
                    data-ai-hint={userAvatar.imageHint}
                />
              )}
              <div className="text-left hidden sm:block">
                <p className="text-sm text-white font-medium">Alex Johnson</p>
                <p className="text-xs text-white/50">Data Scientist</p>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <div className="max-w-[1600px] mx-auto space-y-6">
                <div className="flex flex-col xl:flex-row justify-between gap-6 pb-6 border-b border-gray-200 dark:border-[#232f48]">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                    <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] font-headline">Customer Churn Analysis - Feb 2024</h1>
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                        Completed
                    </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-[#92a4c9]">
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">calendar_today</span>Generated on Oct 24, 2023</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">timer</span>Runtime: 45s</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[18px]">dataset</span>Dataset: <span className="font-mono text-slate-700 dark:text-slate-300">churn_v2.csv</span></span>
                    </div>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpiData.map(kpi => <KpiCard key={kpi.title} {...kpi} />)}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">
                <div className="xl:col-span-2 flex flex-col gap-6">
                    <AIInsights />
                    <CorrelationHeatmap />
                    <FeatureDistributions />
                </div>
                <div className="xl:col-span-1 h-full">
                    <DescriptiveStatsTable stats={descriptiveStats} />
                </div>
                </div>
                <div className="py-6"></div>
            </div>
        </div>
      </main>
    </div>
  );
}
