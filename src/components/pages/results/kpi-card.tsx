import { ArrowUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type KpiCardProps = {
  title: string;
  value: string;
  subValue?: string;
  trend?: string;
  trendColor?: string;
  action?: string;
  icon: React.ReactNode;
  hoverBorder: string;
};

export function KpiCard({
  title,
  value,
  subValue,
  trend,
  trendColor,
  action,
  icon,
  hoverBorder,
}: KpiCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden border-gray-200 bg-white shadow-sm transition-colors dark:border-[#324467] dark:bg-card ${hoverBorder}`}
    >
      <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
        {icon}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-text-secondary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-2 flex items-baseline gap-2">
          <p className="font-mono text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {value}
          </p>
          {subValue && (
            <span className="text-xs font-medium text-slate-400">
              {subValue}
            </span>
          )}
          {trend && (
            <span
              className={`flex items-center text-xs font-medium ${trendColor}`}
            >
              <ArrowUp size={14} className="mr-1" /> {trend}
            </span>
          )}
        </div>
        {action && (
          <button className="ml-auto mt-2 text-xs font-medium text-rose-500 underline decoration-dashed underline-offset-4 hover:text-rose-400">
            {action}
          </button>
        )}
      </CardContent>
    </Card>
  );
}
