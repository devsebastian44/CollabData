'use client';

import { useState } from 'react';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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

const DatasetItem = ({ file, onDelete }: { file: DatasetFile, onDelete: (name: string) => void }) => {
    const router = useRouter();

    const handleViewAnalysis = () => {
        // Navigate to a generic project page for now
        router.push('/projects/1/results');
    };

    return (
        <div className="group flex items-center gap-4 p-4 bg-surface-dark border border-border-dark rounded-lg hover:border-primary/50 transition-all">
            <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg bg-background-dark">
                {file.icon}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate group-hover:text-primary">{file.name}</p>
                <p className="text-xs text-slate-400">{file.size} • {file.type.toUpperCase()} • {file.status}</p>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-text-secondary opacity-0 group-hover:opacity-100 -mr-2">
                        <MoreVertical />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={handleViewAnalysis}>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>Ver análisis</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500 focus:text-white focus:bg-red-500" onSelect={() => onDelete(file.name)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Borrar</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};


export default function DatasetsPage() {
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-6');
  const [allFiles, setAllFiles] = useState([...files, ...referenceFiles]);

  const handleDeleteFile = (fileName: string) => {
    setAllFiles(currentFiles => currentFiles.filter(f => f.name !== fileName));
  }

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/dashboard" className="text-text-secondary text-sm font-medium leading-normal hover:text-white transition-colors">Dashboard</Link>
              <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
              <span className="text-white text-lg font-bold leading-normal">Datasets</span>
            </div>
            <div className="flex items-center gap-3">
              {userAvatar && (
                <Image
                    src={userAvatar.imageUrl}
                    alt="User profile picture"
                    width={40}
                    height={40}
                    className="rounded-full ring-2 ring-primary/20"
                    data-ai-hint={userAvatar.imageHint}
                />
              )}
              <div className="text-left hidden sm:block">
                <p className="text-sm text-white font-medium">Alex Johnson</p>
                <p className="text-xs text-white/50">Data Scientist</p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">All Datasets</h1>
                <Button asChild>
                    <Link href="/dashboard/new-analysis">
                    <UploadCloud size={18} />
                    Upload Dataset
                    </Link>
                </Button>
            </div>
            {allFiles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {allFiles.map(file => (
                  <DatasetItem key={file.name} file={file} onDelete={handleDeleteFile} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-white mb-2">No datasets found</h2>
                <p className="text-text-secondary">Upload a dataset to get started.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
