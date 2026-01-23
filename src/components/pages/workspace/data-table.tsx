import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Search, ArrowUpDown, ArrowDown, ChevronsLeft, ChevronLeft, ChevronsRight } from "lucide-react";
import Link from 'next/link';

type TableData = {
    id: string;
    date: string;
    revenue: string;
    region: string;
    sku: string;
    qty: number;
    status: string;
    statusColor: string;
};

const regionColors: { [key: string]: string } = {
    'North America': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Europe': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'Asia Pacific': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

export function DataTable({ data }: { data: TableData[] }) {
    return (
        <>
            <div className="h-14 border-b border-border-dark bg-background-dark/95 backdrop-blur flex items-center justify-between px-6 shrink-0 z-20">
                <div className="flex items-center gap-4 min-w-0">
                    <div className="flex items-center text-sm text-slate-400 whitespace-nowrap">
                        <Link href="/dashboard" className="hover:text-white cursor-pointer">Project X</Link>
                        <ChevronRight size={16} className="mx-1" />
                        <span className="text-white font-medium truncate">Q3_Sales_Data.csv</span>
                    </div>
                    <Badge variant="outline" className="border-green-500/20 bg-green-500/10 text-green-400 text-[10px] uppercase">Ready</Badge>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative hidden lg:block">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <Input placeholder="Filter rows..." type="text" className="bg-[#0f1520] border-border-dark rounded-md h-8 pl-9 pr-3 text-sm w-48" />
                    </div>
                    <div className="flex bg-[#0f1520] rounded-md p-0.5 border border-border-dark">
                        <Button variant="ghost" size="sm" className="px-3 py-1 bg-border-dark text-white text-xs font-medium h-auto shadow-sm">Grid</Button>
                        <Button variant="ghost" size="sm" className="px-3 py-1 text-slate-400 hover:text-white text-xs font-medium h-auto">Raw</Button>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-auto bg-surface-dark custom-scrollbar">
                <Table>
                    <TableHeader className="bg-[#1a2333] sticky top-0 z-10 shadow-sm">
                        <TableRow>
                            <TableHead className="whitespace-nowrap"><div className="flex items-center gap-1 cursor-pointer hover:text-white">ID <ArrowUpDown size={14} /></div></TableHead>
                            <TableHead className="whitespace-nowrap"><div className="flex items-center gap-1 cursor-pointer hover:text-white">Date <ArrowDown size={14} /></div></TableHead>
                            <TableHead className="whitespace-nowrap"><div className="flex items-center gap-1 cursor-pointer hover:text-white">Revenue (USD) <ArrowUpDown size={14} /></div></TableHead>
                            <TableHead className="whitespace-nowrap"><div className="flex items-center gap-1 cursor-pointer hover:text-white">Region <ArrowUpDown size={14} /></div></TableHead>
                            <TableHead className="whitespace-nowrap"><div className="flex items-center gap-1 cursor-pointer hover:text-white">SKU <ArrowUpDown size={14} /></div></TableHead>
                            <TableHead className="whitespace-nowrap text-right"><div className="flex items-center justify-end gap-1 cursor-pointer hover:text-white">Qty <ArrowUpDown size={14} /></div></TableHead>
                            <TableHead className="whitespace-nowrap"><div className="flex items-center gap-1 cursor-pointer hover:text-white">Status <ArrowUpDown size={14} /></div></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-border-dark">
                        {data.map((row, index) => (
                            <TableRow key={row.id} className={`hover:bg-[#1f293b] transition-colors ${index % 2 !== 0 ? 'bg-[#18202d]' : ''}`}>
                                <TableCell className="font-mono text-xs text-slate-400">{row.id}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell className="font-mono">{row.revenue}</TableCell>
                                <TableCell><Badge variant="outline" className={regionColors[row.region]}>{row.region}</Badge></TableCell>
                                <TableCell>{row.sku}</TableCell>
                                <TableCell className="font-mono text-right">{row.qty}</TableCell>
                                <TableCell><div className="flex items-center gap-1.5"><span className={`size-1.5 rounded-full ${row.statusColor}`}></span>{row.status}</div></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="h-12 border-t border-border-dark bg-background-dark flex items-center justify-between px-6 shrink-0 text-sm">
                <p className="text-slate-400">Showing <span className="text-white font-medium">1-10</span> of <span className="text-white font-medium">1,248</span> rows</p>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="size-8" disabled><ChevronsLeft size={18} /></Button>
                    <Button variant="ghost" size="icon" className="size-8" disabled><ChevronLeft size={18} /></Button>
                    <span className="text-xs text-white px-2">Page 1</span>
                    <Button variant="ghost" size="icon" className="size-8"><ChevronRight size={18} /></Button>
                    <Button variant="ghost" size="icon" className="size-8"><ChevronsRight size={18} /></Button>
                </div>
            </div>
        </>
    );
}
