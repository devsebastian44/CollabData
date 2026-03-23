import { Button } from '@/components/ui/button';
import { PlusCircle, FileUp, MoreVertical } from 'lucide-react';
import type { DatasetFile } from '@/lib/types';

type FileExplorerProps = {
  files: DatasetFile[];
  referenceFiles: DatasetFile[];
};

const FileItem = ({ file }: { file: DatasetFile }) => (
  <div
    className={`group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-all ${file.isActive ? 'border border-primary/20 bg-primary/10' : 'hover:bg-white/5'}`}
  >
    <div className="flex shrink-0 items-center justify-center">{file.icon}</div>
    <div className="min-w-0 flex-1">
      <p
        className={`${file.isActive ? 'text-white' : 'text-white/80'} truncate text-sm font-medium`}
      >
        {file.name}
      </p>
      <p className="text-xs text-slate-400">
        {file.size} • {file.status}
      </p>
    </div>
    <div
      className={
        file.isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }
    >
      <MoreVertical className="text-white/50" size={18} />
    </div>
  </div>
);

export function FileExplorer({ files, referenceFiles }: FileExplorerProps) {
  return (
    <aside className="z-10 hidden w-72 shrink-0 flex-col border-r border-border-dark bg-background-dark md:flex">
      <div className="flex items-center justify-between border-b border-border-dark px-4 py-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-white">
          Project Files
        </h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-auto w-auto p-0 text-primary hover:text-blue-400"
        >
          <PlusCircle />
        </Button>
      </div>

      <div className="p-4 pb-2">
        <Button className="w-full font-bold">
          <FileUp size={18} />
          Upload Dataset
        </Button>
      </div>

      <div className="custom-scrollbar flex-1 space-y-1 overflow-y-auto p-2">
        <div className="px-2 py-2">
          <p className="mb-2 pl-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Current Project
          </p>
          {files.map((file) => (
            <FileItem key={file.name} file={file} />
          ))}
        </div>
        <div className="mt-2 border-t border-border-dark px-2 py-2">
          <p className="mb-2 pl-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Reference Data
          </p>
          {referenceFiles.map((file) => (
            <FileItem key={file.name} file={file} />
          ))}
        </div>
      </div>

      <div className="border-t border-border-dark bg-surface-dark/50 p-4">
        <div className="mb-1 flex justify-between text-xs text-slate-400">
          <span>Storage</span>
          <span>75%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-border-dark">
          <div
            className="h-1.5 rounded-full bg-primary"
            style={{ width: '75%' }}
          ></div>
        </div>
        <p className="mt-2 text-[10px] text-slate-500">1.5GB of 2GB Used</p>
      </div>
    </aside>
  );
}
