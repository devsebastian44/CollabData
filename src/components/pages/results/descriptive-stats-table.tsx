import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sigma, Search } from 'lucide-react';
import type { DescriptiveStat } from "@/lib/types";

export function DescriptiveStatsTable({ stats }: { stats: DescriptiveStat[] }) {
    return (
        <Card className="shadow-sm flex flex-col h-full overflow-hidden">
            <CardHeader className="flex-row justify-between items-center bg-gray-50/50 dark:bg-card">
                <div className="flex gap-2 items-center">
                    <Sigma className="text-primary" />
                    <CardTitle className="text-lg">Descriptive Stats</CardTitle>
                </div>
                <div className="relative">
                    <Search className="absolute left-2 top-1.5 text-gray-400" size={16} />
                    <Input placeholder="Search var..." type="text" className="bg-white dark:bg-[#111722] border-gray-300 dark:border-[#324467] text-xs rounded-lg pl-8 pr-3 py-1.5 h-auto w-32 focus:w-40 transition-all" />
                </div>
            </CardHeader>
            <div className="overflow-y-auto flex-1 custom-scrollbar">
                <Table>
                    <TableHeader className="bg-gray-50 dark:bg-secondary sticky top-0 z-10 shadow-sm">
                        <TableRow>
                            <TableHead>Variable</TableHead>
                            <TableHead className="text-right">Mean</TableHead>
                            <TableHead className="text-right">Std</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-100 dark:divide-[#232f48]">
                        {stats.map(stat => (
                            <TableRow key={stat.variable} className="group hover:bg-blue-50/50 dark:hover:bg-[#232f48]/50 transition-colors cursor-pointer border-l-4 border-transparent hover:border-primary">
                                <TableCell>
                                    <div className="text-sm font-semibold">{stat.variable}</div>
                                    <div className="text-[10px] text-slate-400 font-mono">{stat.type}</div>
                                </TableCell>
                                <TableCell className="font-mono text-right">{stat.mean}</TableCell>
                                <TableCell className="font-mono text-right">{stat.std}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <CardFooter className="bg-gray-50 dark:bg-card p-3">
                 <Button variant="ghost" className="w-full h-auto py-2 text-xs font-bold text-primary hover:bg-primary/10">View Full Statistics Table</Button>
            </CardFooter>
        </Card>
    );
}
