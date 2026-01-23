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

export function KpiCard({ title, value, subValue, trend, trendColor, action, icon, hoverBorder }: KpiCardProps) {
    return (
        <Card className={`relative overflow-hidden bg-white dark:bg-card border-gray-200 dark:border-[#324467] shadow-sm group transition-colors ${hoverBorder}`}>
            <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {icon}
            </div>
            <CardHeader className="pb-2">
                <CardTitle className="text-slate-500 dark:text-text-secondary text-sm font-medium uppercase tracking-wider">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-baseline gap-2 mt-2">
                    <p className="text-slate-900 dark:text-white text-3xl font-bold font-mono tracking-tight">{value}</p>
                    {subValue && <span className="text-xs font-medium text-slate-400">{subValue}</span>}
                    {trend && (
                        <span className={`text-xs font-medium flex items-center ${trendColor}`}>
                            <ArrowUp size={14} className="mr-1" /> {trend}
                        </span>
                    )}
                </div>
                {action && (
                     <button className="mt-2 ml-auto text-xs font-medium text-rose-500 hover:text-rose-400 underline decoration-dashed underline-offset-4">{action}</button>
                )}
            </CardContent>
        </Card>
    );
}
