import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    <aside className="w-80 bg-background-dark border-l border-border-dark flex-col shrink-0 z-10 hidden lg:flex">
      <div className="px-5 py-4 border-b border-border-dark flex items-center gap-2">
        <Wrench className="text-primary" size={20} />
        <h3 className="text-white text-sm font-bold uppercase tracking-wider">Analysis Toolbox</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar">
        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Descriptive Statistics</h4>
          <div className="space-y-2">
            {descriptiveStats.map(stat => (
              <div key={stat.id} className="flex items-center justify-between group cursor-pointer">
                <Label htmlFor={stat.id} className="text-white text-sm group-hover:text-primary transition-colors cursor-pointer">{stat.label}</Label>
                <Checkbox id={stat.id} defaultChecked={stat.checked} />
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-border-dark w-full"></div>
        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Visualizations</h4>
          <div className="space-y-3">
            {visualizations.map(vis => (
              <div key={vis.id} className="flex items-center justify-between">
                <Label htmlFor={vis.id} className="text-white text-sm cursor-pointer">{vis.label}</Label>
                <Switch id={vis.id} defaultChecked={vis.checked} />
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-border-dark w-full"></div>
        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Target Variable</h4>
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
      <div className="p-5 border-t border-border-dark bg-background-dark">
        <Button className="w-full h-11 font-bold shadow-lg shadow-blue-900/20 active:scale-[0.98]" asChild>
          <Link href={`/projects/${projectId}/results`}>
            <Play />
            Run Analysis
          </Link>
        </Button>
      </div>
    </aside>
  );
}
