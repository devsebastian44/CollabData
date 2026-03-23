import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sigma, Search } from 'lucide-react';
import type { DescriptiveStat } from '@/lib/types';

export function DescriptiveStatsTable({ stats }: { stats: DescriptiveStat[] }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-sm">
      <CardHeader className="flex-row items-center justify-between bg-gray-50/50 dark:bg-card">
        <div className="flex items-center gap-2">
          <Sigma className="text-primary" />
          <CardTitle className="text-lg">Descriptive Stats</CardTitle>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-1.5 text-gray-400" size={16} />
          <Input
            placeholder="Search var..."
            type="text"
            className="h-auto w-32 rounded-lg border-gray-300 bg-white py-1.5 pl-8 pr-3 text-xs transition-all focus:w-40 dark:border-[#324467] dark:bg-[#111722]"
          />
        </div>
      </CardHeader>
      <div className="custom-scrollbar flex-1 overflow-y-auto">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-gray-50 shadow-sm dark:bg-secondary">
            <TableRow>
              <TableHead>Variable</TableHead>
              <TableHead className="text-right">Mean</TableHead>
              <TableHead className="text-right">Std</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-[#232f48]">
            {stats.map((stat) => (
              <TableRow
                key={stat.variable}
                className="group cursor-pointer border-l-4 border-transparent transition-colors hover:border-primary hover:bg-blue-50/50 dark:hover:bg-[#232f48]/50"
              >
                <TableCell>
                  <div className="text-sm font-semibold">{stat.variable}</div>
                  <div className="font-mono text-[10px] text-slate-400">
                    {stat.type}
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono">
                  {stat.mean}
                </TableCell>
                <TableCell className="text-right font-mono">
                  {stat.std}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <CardFooter className="bg-gray-50 p-3 dark:bg-card">
        <Button
          variant="ghost"
          className="h-auto w-full py-2 text-xs font-bold text-primary hover:bg-primary/10"
        >
          View Full Statistics Table
        </Button>
      </CardFooter>
    </Card>
  );
}
