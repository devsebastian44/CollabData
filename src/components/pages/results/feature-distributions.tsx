import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart2 } from 'lucide-react';

const charts = [
  {
    label: 'Monthly Charges',
    skew: '0.85',
    colors: 'bg-primary',
    bars: [
      { height: '20%', color: 'bg-primary/40 hover:bg-primary/60' },
      { height: '35%', color: 'bg-primary/40 hover:bg-primary/60' },
      { height: '50%', color: 'bg-primary/40 hover:bg-primary/60' },
      { height: '85%', color: 'bg-primary/60 hover:bg-primary/80' },
      { height: '60%', color: 'bg-primary hover:bg-blue-400' },
      { height: '40%', color: 'bg-primary/60 hover:bg-primary/80' },
      { height: '25%', color: 'bg-primary/40 hover:bg-primary/60' },
      { height: '10%', color: 'bg-primary/20 hover:bg-primary/40' },
    ],
  },
  {
    label: 'Tenure (Months)',
    skew: '-0.12',
    colors: 'bg-indigo-400',
    bars: [
      { height: '70%', color: 'bg-indigo-400/80 hover:bg-indigo-400' },
      { height: '35%', color: 'bg-indigo-400/40 hover:bg-indigo-400' },
      { height: '20%', color: 'bg-indigo-400/30 hover:bg-indigo-400' },
      { height: '25%', color: 'bg-indigo-400/30 hover:bg-indigo-400' },
      { height: '30%', color: 'bg-indigo-400/40 hover:bg-indigo-400' },
      { height: '45%', color: 'bg-indigo-400/50 hover:bg-indigo-400' },
      { height: '65%', color: 'bg-indigo-400/80 hover:bg-indigo-400' },
      { height: '80%', color: 'bg-indigo-500 hover:bg-indigo-300' },
    ],
  },
  {
    label: 'Age Distribution',
    skew: 'Normal',
    colors: 'bg-emerald-500',
    bars: [
      { height: '10%', color: 'bg-emerald-500/20 hover:bg-emerald-500/60' },
      { height: '30%', color: 'bg-emerald-500/40 hover:bg-emerald-500/60' },
      { height: '50%', color: 'bg-emerald-500/60 hover:bg-emerald-500/60' },
      { height: '80%', color: 'bg-emerald-500/80 hover:bg-emerald-500/60' },
      { height: '85%', color: 'bg-emerald-500 hover:bg-emerald-400' },
      { height: '75%', color: 'bg-emerald-500/80 hover:bg-emerald-500/60' },
      { height: '45%', color: 'bg-emerald-500/60 hover:bg-emerald-500/60' },
      { height: '20%', color: 'bg-emerald-500/30 hover:bg-emerald-500/60' },
    ],
  },
];

export function FeatureDistributions() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex-row justify-between items-center">
        <div className="flex gap-2 items-center">
          <BarChart2 className="text-primary" />
          <CardTitle className="text-lg">Feature Distributions</CardTitle>
        </div>
        <Button variant="link" className="text-primary p-0 h-auto">View All</Button>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {charts.map((chart) => (
          <div key={chart.label} className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <label className="text-xs font-semibold uppercase text-slate-500">{chart.label}</label>
              <span className="text-xs font-mono text-slate-400">Skew: {chart.skew}</span>
            </div>
            <div className="h-32 w-full bg-slate-50 dark:bg-[#111722] rounded-lg border border-dashed border-gray-300 dark:border-[#324467] relative flex items-end justify-between px-2 pt-4 pb-0 overflow-hidden">
              {chart.bars.map((bar, index) => (
                <div key={index} className={`w-[10%] rounded-t-sm transition-colors ${bar.color}`} style={{ height: bar.height }}></div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
