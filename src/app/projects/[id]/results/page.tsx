import { KpiCard } from '@/components/pages/results/kpi-card';
import { CorrelationHeatmap } from '@/components/pages/results/correlation-heatmap';
import { FeatureDistributions } from '@/components/pages/results/feature-distributions';
import { DescriptiveStatsTable } from '@/components/pages/results/descriptive-stats-table';
import { AIInsights } from '@/components/pages/results/ai-insights';
import { Rows, Columns, AlertTriangle, Copy, ChevronRight } from 'lucide-react';
import { descriptiveStats } from '@/lib/mock-data';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import Link from 'next/link';
import { UserNav } from '@/components/layout/user-nav';

export default function ResultsPage() {
  const kpiData = [
    {
      title: 'Total Rows',
      value: '10,500',
      icon: <Rows className="text-6xl text-primary" />,
      hoverBorder: 'hover:border-primary/50',
    },
    {
      title: 'Total Columns',
      value: '15',
      subValue: 'Features',
      icon: <Columns className="text-6xl text-indigo-500" />,
      hoverBorder: 'hover:border-indigo-500/50',
    },
    {
      title: 'Missing Values',
      value: '2.3%',
      trend: '+0.5%',
      trendColor: 'text-amber-500',
      icon: <AlertTriangle className="text-6xl text-amber-500" />,
      hoverBorder: 'hover:border-amber-500/50',
    },
    {
      title: 'Duplicate Rows',
      value: '4',
      action: 'Review',
      icon: <Copy className="text-6xl text-rose-500" />,
      hoverBorder: 'hover:border-rose-500/50',
    },
  ];

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="relative flex h-full flex-1 flex-col overflow-hidden">
        <header className="z-10 flex-none border-b border-border-dark/50 bg-background-dark/50 px-8 py-6 backdrop-blur-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-lg font-bold leading-normal">
                <Link
                  href="/dashboard"
                  className="text-text-secondary hover:text-white"
                >
                  Dashboard
                </Link>
                <ChevronRight
                  size={20}
                  className="shrink-0 text-text-secondary"
                />
                <span className="text-white">
                  Customer Churn Analysis - Feb 2024
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <UserNav />
            </div>
          </div>
        </header>
        <div className="custom-scrollbar flex-1 overflow-y-auto p-8">
          <div className="mx-auto max-w-[1600px] space-y-6">
            <div className="flex flex-col justify-between gap-6 border-b border-gray-200 pb-6 dark:border-[#232f48] xl:flex-row">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h1 className="font-headline text-3xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white md:text-4xl">
                    Customer Churn Analysis - Feb 2024
                  </h1>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-600 ring-1 ring-inset ring-emerald-500/20 dark:text-emerald-400">
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Completed
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-[#92a4c9]">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_today
                    </span>
                    Generated on Oct 24, 2023
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">
                      timer
                    </span>
                    Runtime: 45s
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">
                      dataset
                    </span>
                    Dataset:{' '}
                    <span className="font-mono text-slate-700 dark:text-slate-300">
                      churn_v2.csv
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {kpiData.map((kpi) => (
                <KpiCard key={kpi.title} {...kpi} />
              ))}
            </div>

            <div className="grid h-full grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="flex flex-col gap-6 xl:col-span-2">
                <AIInsights />
                <CorrelationHeatmap />
                <FeatureDistributions />
              </div>
              <div className="h-full xl:col-span-1">
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
