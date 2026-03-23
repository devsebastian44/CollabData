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
      <CardHeader className="flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart2 className="text-primary" />
          <CardTitle className="text-lg">Feature Distributions</CardTitle>
        </div>
        <Button variant="link" className="h-auto p-0 text-primary">
          View All
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {charts.map((chart) => (
          <div key={chart.label} className="flex flex-col gap-2">
            <div className="flex items-end justify-between">
              <label className="text-xs font-semibold uppercase text-slate-500">
                {chart.label}
              </label>
              <span className="font-mono text-xs text-slate-400">
                Skew: {chart.skew}
              </span>
            </div>
            <div className="relative flex h-32 w-full items-end justify-between overflow-hidden rounded-lg border border-dashed border-gray-300 bg-slate-50 px-2 pb-0 pt-4 dark:border-[#324467] dark:bg-[#111722]">
              {chart.bars.map((bar, index) => (
                <div
                  key={index}
                  className={`w-[10%] rounded-t-sm transition-colors ${bar.color}`}
                  style={{ height: bar.height }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
