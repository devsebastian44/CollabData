import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Grid, Filter, Download } from 'lucide-react';

const heatmapData = [
  {
    label: 'Age',
    values: [1.0, 0.32, 0.15, -0.45, 0.05, 0.55],
    colors: [
      'bg-primary dark:bg-primary',
      'bg-indigo-200 dark:bg-indigo-900/40',
      'bg-indigo-100 dark:bg-indigo-900/20',
      'bg-rose-200 dark:bg-rose-900/40',
      'bg-indigo-50 dark:bg-indigo-900/10',
      'bg-indigo-300 dark:bg-indigo-900/60',
    ],
  },
  {
    label: 'Tenure',
    values: [0.32, 1.0, 0.85, 0.12, -0.05, 0.25],
    colors: [
      'bg-indigo-200 dark:bg-indigo-900/40',
      'bg-primary dark:bg-primary',
      'bg-indigo-400 dark:bg-indigo-800',
      'bg-indigo-100 dark:bg-indigo-900/20',
      'bg-rose-100 dark:bg-rose-900/20',
      'bg-indigo-200 dark:bg-indigo-900/40',
    ],
  },
  {
    label: 'Charge',
    values: [0.15, 0.85, 1.0, 0.42, 0.18, -0.65],
    colors: [
      'bg-indigo-100 dark:bg-indigo-900/20',
      'bg-indigo-400 dark:bg-indigo-800',
      'bg-primary dark:bg-primary',
      'bg-indigo-200 dark:bg-indigo-900/40',
      'bg-indigo-100 dark:bg-indigo-900/20',
      'bg-rose-300 dark:bg-rose-900/60',
    ],
  },
  {
    label: 'Usage',
    values: [-0.45, 0.12, 0.42, 1.0, 0.91, 0.02],
    colors: [
      'bg-rose-200 dark:bg-rose-900/40',
      'bg-indigo-100 dark:bg-indigo-900/20',
      'bg-indigo-200 dark:bg-indigo-900/40',
      'bg-primary dark:bg-primary',
      'bg-indigo-500 dark:bg-indigo-600',
      'bg-indigo-50 dark:bg-indigo-900/10',
    ],
  },
];
const headers = ['Age', 'Tenure', 'Charge', 'Usage', 'Calls', 'Score'];

export function CorrelationHeatmap() {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Grid className="text-primary" />
          <CardTitle className="text-lg">Correlation Matrix</CardTitle>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Filter size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Download size={20} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="custom-scrollbar overflow-x-auto">
        <div className="flex min-w-[500px] flex-col gap-1">
          <div className="mb-2 ml-24 flex gap-1 text-center font-mono text-xs text-slate-500 dark:text-slate-400">
            {headers.map((h) => (
              <div key={h} className="w-20">
                {h}
              </div>
            ))}
          </div>
          {heatmapData.map((row) => (
            <div key={row.label} className="flex items-center gap-1">
              <div className="w-24 pr-4 text-right text-xs font-medium text-slate-600 dark:text-slate-300">
                {row.label}
              </div>
              {row.values.map((value, index) => (
                <div
                  key={index}
                  className={`flex h-12 w-20 items-center justify-center rounded text-xs font-bold ${row.colors[index]} ${Math.abs(value) > 0.5 ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}
                >
                  {value.toFixed(2)}
                </div>
              ))}
            </div>
          ))}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-xs text-slate-500">-1</span>
            <div
              className="h-2 w-32 rounded-full bg-gradient-to-r from-rose-500 via-slate-100 to-indigo-600 dark:via-[#1a2332]"
              data-alt="Gradient bar representing correlation scale from negative (red) to positive (blue)"
            ></div>
            <span className="text-xs text-slate-500">1</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
