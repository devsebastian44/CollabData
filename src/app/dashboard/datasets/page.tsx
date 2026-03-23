'use client';

import { useState } from 'react';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import Link from 'next/link';
import { files, referenceFiles } from '@/lib/mock-data';
import type { DatasetFile } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { MoreVertical, UploadCloud, Eye, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { UserNav } from '@/components/layout/user-nav';

const DatasetItem = ({
  file,
  onDelete,
}: {
  file: DatasetFile;
  onDelete: (_name: string) => void;
}) => {
  const router = useRouter();

  const handleViewAnalysis = () => {
    // Navigate to a generic project page for now
    router.push('/projects/1/results');
  };

  return (
    <div className="group flex items-center gap-4 rounded-lg border border-border-dark bg-surface-dark p-4 transition-all hover:border-primary/50">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background-dark">
        {file.icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-white group-hover:text-primary">
          {file.name}
        </p>
        <p className="text-xs text-slate-400">
          {file.size} • {file.type.toUpperCase()} • {file.status}
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="-mr-2 text-text-secondary opacity-0 group-hover:opacity-100"
          >
            <MoreVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={handleViewAnalysis}>
            <Eye className="mr-2 h-4 w-4" />
            <span>Ver análisis</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-red-500 focus:bg-red-500 focus:text-white"
            onSelect={() => onDelete(file.name)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Borrar</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default function DatasetsPage() {
  const [allFiles, setAllFiles] = useState([...files, ...referenceFiles]);

  const handleDeleteFile = (fileName: string) => {
    setAllFiles((currentFiles) =>
      currentFiles.filter((f) => f.name !== fileName)
    );
  };

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="relative flex h-full flex-1 flex-col overflow-hidden">
        <header className="z-10 flex-none border-b border-border-dark/50 bg-background-dark/50 px-8 py-6 backdrop-blur-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="text-lg font-bold leading-normal text-white">
                Datasets
              </span>
            </div>
            <div className="flex items-center gap-3">
              <UserNav />
            </div>
          </div>
        </header>

        <div className="custom-scrollbar flex-1 overflow-y-auto p-8">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">All Datasets</h1>
              <Button asChild>
                <Link href="/dashboard/new-analysis">
                  <UploadCloud size={18} />
                  Upload Dataset
                </Link>
              </Button>
            </div>
            {allFiles.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {allFiles.map((file) => (
                  <DatasetItem
                    key={file.name}
                    file={file}
                    onDelete={handleDeleteFile}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  No datasets found
                </h2>
                <p className="text-text-secondary">
                  Upload a dataset to get started.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
