import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Wrench, Play } from 'lucide-react';
import Link from 'next/link';

export function AnalysisToolbox({ projectId }: { projectId: string }) {
  const descriptiveStats = [
    { id: 'mean', label: 'Mean & Median', checked: true },
    { id: 'std', label: 'Standard Deviation', checked: true },
    { id: 'missing', label: 'Missing Values' },
    { id: 'skew', label: 'Skewness & Kurtosis' },
  ];

  const visualizations = [
    { id: 'hist', label: 'Histograms', checked: true },
    { id: 'box', label: 'Boxplots', checked: true },
    { id: 'heatmap', label: 'Correlation Heatmap' },
    { id: 'scatter', label: 'Scatter Matrix' },
  ];

  return (
    <aside className="z-10 hidden w-80 shrink-0 flex-col border-l border-border-dark bg-background-dark lg:flex">
      <div className="flex items-center gap-2 border-b border-border-dark px-5 py-4">
        <Wrench className="text-primary" size={20} />
        <h3 className="text-sm font-bold uppercase tracking-wider text-white">
          Analysis Toolbox
        </h3>
      </div>
      <div className="custom-scrollbar flex-1 space-y-6 overflow-y-auto p-5">
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Descriptive Statistics
          </h4>
          <div className="space-y-2">
            {descriptiveStats.map((stat) => (
              <div
                key={stat.id}
                className="group flex cursor-pointer items-center justify-between"
              >
                <Label
                  htmlFor={stat.id}
                  className="cursor-pointer text-sm text-white transition-colors group-hover:text-primary"
                >
                  {stat.label}
                </Label>
                <Checkbox id={stat.id} defaultChecked={stat.checked} />
              </div>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-border-dark"></div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Visualizations
          </h4>
          <div className="space-y-3">
            {visualizations.map((vis) => (
              <div key={vis.id} className="flex items-center justify-between">
                <Label
                  htmlFor={vis.id}
                  className="cursor-pointer text-sm text-white"
                >
                  {vis.label}
                </Label>
                <Switch id={vis.id} defaultChecked={vis.checked} />
              </div>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-border-dark"></div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Target Variable
          </h4>
          <Select defaultValue="revenue">
            <SelectTrigger>
              <SelectValue placeholder="Select a variable" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="revenue">Revenue (USD)</SelectItem>
              <SelectItem value="qty">Qty</SelectItem>
              <SelectItem value="region">Region</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="border-t border-border-dark bg-background-dark p-5">
        <Button
          className="h-11 w-full font-bold shadow-lg shadow-blue-900/20 active:scale-[0.98]"
          asChild
        >
          <Link href={`/projects/${projectId}/results`}>
            <Play />
            Run Analysis
          </Link>
        </Button>
      </div>
    </aside>
  );
}
