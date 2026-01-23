import { Button } from '@/components/ui/button';
import { PlusCircle, FileUp, MoreVertical } from 'lucide-react';
import type { DatasetFile } from '@/lib/types';

type FileExplorerProps = {
  files: DatasetFile[];
  referenceFiles: DatasetFile[];
};

const FileItem = ({ file }: { file: DatasetFile }) => (
    <div className={`group flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${file.isActive ? 'bg-primary/10 border border-primary/20' : 'hover:bg-white/5'}`}>
        <div className="flex items-center justify-center shrink-0">
            {file.icon}
        </div>
        <div className="flex-1 min-w-0">
            <p className={`${file.isActive ? 'text-white' : 'text-white/80'} text-sm font-medium truncate`}>{file.name}</p>
            <p className="text-xs text-slate-400">{file.size} • {file.status}</p>
        </div>
        <div className={file.isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}>
            <MoreVertical className="text-white/50" size={18} />
        </div>
    </div>
);

export function FileExplorer({ files, referenceFiles }: FileExplorerProps) {
  return (
    <aside className="w-72 bg-background-dark border-r border-border-dark flex-col shrink-0 z-10 hidden md:flex">
      <div className="px-4 py-4 flex items-center justify-between border-b border-border-dark">
        <h3 className="text-white text-sm font-bold uppercase tracking-wider">Project Files</h3>
        <Button variant="ghost" size="icon" className="text-primary hover:text-blue-400 h-auto w-auto p-0">
          <PlusCircle />
        </Button>
      </div>

      <div className="p-4 pb-2">
        <Button className="w-full font-bold">
          <FileUp size={18} />
          Upload Dataset
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
        <div className="px-2 py-2">
          <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide pl-2">Current Project</p>
          {files.map(file => <FileItem key={file.name} file={file} />)}
        </div>
        <div className="px-2 py-2 mt-2 border-t border-border-dark">
          <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide pl-2">Reference Data</p>
          {referenceFiles.map(file => <FileItem key={file.name} file={file} />)}
        </div>
      </div>

      <div className="p-4 border-t border-border-dark bg-surface-dark/50">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>Storage</span>
          <span>75%</span>
        </div>
        <div className="w-full bg-border-dark rounded-full h-1.5">
          <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="text-[10px] text-slate-500 mt-2">1.5GB of 2GB Used</p>
      </div>
    </aside>
  );
}
