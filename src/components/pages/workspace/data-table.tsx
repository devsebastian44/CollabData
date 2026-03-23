import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  ChevronRight,
  Search,
  ArrowUpDown,
  ArrowDown,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
} from 'lucide-react';
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
  Europe: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Asia Pacific': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

export function DataTable({ data }: { data: TableData[] }) {
  return (
    <>
      <div className="z-20 flex h-14 shrink-0 items-center justify-between border-b border-border-dark bg-background-dark/95 px-6 backdrop-blur">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex items-center whitespace-nowrap text-sm text-slate-400">
            <Link href="/dashboard" className="cursor-pointer hover:text-white">
              Project X
            </Link>
            <ChevronRight size={16} className="mx-1" />
            <span className="truncate font-medium text-white">
              Q3_Sales_Data.csv
            </span>
          </div>
          <Badge
            variant="outline"
            className="border-green-500/20 bg-green-500/10 text-[10px] uppercase text-green-400"
          >
            Ready
          </Badge>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block">
            <Search
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500"
              size={18}
            />
            <Input
              placeholder="Filter rows..."
              type="text"
              className="h-8 w-48 rounded-md border-border-dark bg-[#0f1520] pl-9 pr-3 text-sm"
            />
          </div>
          <div className="flex rounded-md border border-border-dark bg-[#0f1520] p-0.5">
            <Button
              variant="ghost"
              size="sm"
              className="h-auto bg-border-dark px-3 py-1 text-xs font-medium text-white shadow-sm"
            >
              Grid
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-auto px-3 py-1 text-xs font-medium text-slate-400 hover:text-white"
            >
              Raw
            </Button>
          </div>
        </div>
      </div>

      <div className="custom-scrollbar flex-1 overflow-auto bg-surface-dark">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-[#1a2333] shadow-sm">
            <TableRow>
              <TableHead className="whitespace-nowrap">
                <div className="flex cursor-pointer items-center gap-1 hover:text-white">
                  ID <ArrowUpDown size={14} />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap">
                <div className="flex cursor-pointer items-center gap-1 hover:text-white">
                  Date <ArrowDown size={14} />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap">
                <div className="flex cursor-pointer items-center gap-1 hover:text-white">
                  Revenue (USD) <ArrowUpDown size={14} />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap">
                <div className="flex cursor-pointer items-center gap-1 hover:text-white">
                  Region <ArrowUpDown size={14} />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap">
                <div className="flex cursor-pointer items-center gap-1 hover:text-white">
                  SKU <ArrowUpDown size={14} />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap text-right">
                <div className="flex cursor-pointer items-center justify-end gap-1 hover:text-white">
                  Qty <ArrowUpDown size={14} />
                </div>
              </TableHead>
              <TableHead className="whitespace-nowrap">
                <div className="flex cursor-pointer items-center gap-1 hover:text-white">
                  Status <ArrowUpDown size={14} />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-border-dark">
            {data.map((row, index) => (
              <TableRow
                key={row.id}
                className={`transition-colors hover:bg-[#1f293b] ${index % 2 !== 0 ? 'bg-[#18202d]' : ''}`}
              >
                <TableCell className="font-mono text-xs text-slate-400">
                  {row.id}
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell className="font-mono">{row.revenue}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={regionColors[row.region]}>
                    {row.region}
                  </Badge>
                </TableCell>
                <TableCell>{row.sku}</TableCell>
                <TableCell className="text-right font-mono">
                  {row.qty}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`size-1.5 rounded-full ${row.statusColor}`}
                    ></span>
                    {row.status}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex h-12 shrink-0 items-center justify-between border-t border-border-dark bg-background-dark px-6 text-sm">
        <p className="text-slate-400">
          Showing <span className="font-medium text-white">1-10</span> of{' '}
          <span className="font-medium text-white">1,248</span> rows
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="size-8" disabled>
            <ChevronsLeft size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="size-8" disabled>
            <ChevronLeft size={18} />
          </Button>
          <span className="px-2 text-xs text-white">Page 1</span>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronRight size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="size-8">
            <ChevronsRight size={18} />
          </Button>
        </div>
      </div>
    </>
  );
}
