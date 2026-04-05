'use client';

import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', revenue: 186, users: 80 },
  { month: 'February', revenue: 305, users: 200 },
  { month: 'March', revenue: 237, users: 120 },
  { month: 'April', revenue: 73, users: 190 },
  { month: 'May', revenue: 209, users: 130 },
  { month: 'June', revenue: 214, users: 140 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-1))',
  },
  users: {
    label: 'Users',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export function HeroChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-0 min-w-0"
    >
      <ComposedChart
        data={chartData}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          stroke="hsl(var(--border) / 0.5)"
        />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="hsl(var(--muted-foreground))"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          tickFormatter={(value) => `$${value}K`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="hsl(var(--muted-foreground))"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <Tooltip
          content={
            <ChartTooltipContent
              formatter={(value, name) => {
                if (name === 'revenue') {
                  return [
                    `$${((value as number) * 1000).toLocaleString()}`,
                    'Revenue',
                  ];
                }
                return [value, 'Active Users'];
              }}
            />
          }
          cursor={{ fill: 'hsl(var(--muted) / 0.2)' }}
        />
        <Bar
          dataKey="users"
          yAxisId="right"
          fill="hsl(var(--chart-2) / 0.5)"
          radius={4}
        />
        <Area
          type="monotone"
          dataKey="revenue"
          yAxisId="left"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          fill="url(#colorRevenue)"
        />
      </ComposedChart>
    </ChartContainer>
  );
}
