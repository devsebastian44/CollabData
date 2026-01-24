'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MoreVertical, 
  Database as DatabaseIcon, 
  Clock, 
  ArrowRight, 
  History,
  Edit,
  Archive,
  Trash2,
  PenLine
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


type ProjectCardProps = {
  project: Project;
  onArchive: (projectId: string) => void;
  onDelete: (projectId: string) => void;
  onRestore: (projectId: string) => void;
  onRename: (projectId: string, newName: string) => void;
};

const statusStyles: { [key: string]: string } = {
  Active: 'bg-emerald-400/10 text-emerald-400 ring-emerald-400/20',
  Processing: 'bg-amber-400/10 text-amber-400 ring-amber-400/20',
  Archived: 'bg-slate-400/10 text-slate-400 ring-slate-400/20',
  Review: 'bg-purple-400/10 text-purple-400 ring-purple-400/20',
};

export function ProjectCard({ project, onArchive, onDelete, onRestore, onRename }: ProjectCardProps) {
  const router = useRouter();
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false);
  const [newName, setNewName] = useState(project.name);

  const handleRename = () => {
    onRename(project.id, newName);
    setIsRenameDialogOpen(false);
  };

  const displayedMembers = project.members.slice(0, 3);
  const remainingMembers = project.members.length - displayedMembers.length;

  return (
    <>
      <Card className="group flex flex-col gap-4 bg-surface-dark border-border-dark hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
              <Link href={`/projects/${project.id}`}>{project.name}</Link>
            </CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white -mt-2">
                  <MoreVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => router.push(`/projects/${project.id}/results`)}>
                  <ArrowRight className="mr-2 h-4 w-4" />
                  <span>View Analysis</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => router.push(`/projects/${project.id}`)}>
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Open Workspace</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setIsRenameDialogOpen(true)}>
                  <PenLine className="mr-2 h-4 w-4" />
                  <span>Rename</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => onArchive(project.id)}>
                  <Archive className="mr-2 h-4 w-4" />
                  <span>Archive</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500 focus:text-white focus:bg-red-500" onSelect={() => onDelete(project.id)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Badge variant="outline" className={`w-fit ${statusStyles[project.status]}`}>{project.status}</Badge>
        </CardHeader>
        <CardContent className="flex items-center gap-4 text-text-secondary text-sm pt-0 pb-2">
          <div className="flex items-center gap-1.5" title="Datasets">
            <DatabaseIcon size={18} />
            <span>{project.datasetCount} Datasets</span>
          </div>
          <div className="flex items-center gap-1.5" title="Last Active">
            <Clock size={18} />
            <span>{project.lastActive}</span>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between pt-2">
          {project.members.length > 1 ? (
            <div className="flex -space-x-2 overflow-hidden">
              {displayedMembers.map(member => (
                <Image
                  key={member.name}
                  src={member.avatarUrl}
                  alt={member.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full ring-2 ring-background-dark object-cover aspect-square"
                  data-ai-hint="person face"
                />
              ))}
              {remainingMembers > 0 && (
                <div className="inline-block size-8 rounded-full flex items-center justify-center bg-[#232f48] text-xs font-medium text-white ring-2 ring-background-dark">
                  +{remainingMembers}
                </div>
              )}
            </div>
          ) : (
            <div />
          )}
          
          {project.status === 'Archived' ? (
            <Button variant="link" className="text-primary p-0 h-auto group/link" onClick={() => onRestore(project.id)}>
              Restore <History size={16} className="ml-1 group-hover/link:translate-x-0.5 transition-transform" />
            </Button>
          ) : (
            <Button variant="link" className="text-primary p-0 h-auto group/link" asChild>
              <Link href={`/projects/${project.id}/results`}>
                {project.status === 'Processing' ? 'View Analysis' : 'Run EDA'}
                <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
      <Dialog open={isRenameDialogOpen} onOpenChange={setIsRenameDialogOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Rename project</DialogTitle>
                <DialogDescription>
                    Current name: "{project.name}"
                </DialogDescription>
            </DialogHeader>
            <div className="py-2">
                <Label htmlFor="new-name" className="sr-only">New Name</Label>
                <Input
                    id="new-name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter new project name"
                    onKeyDown={(e) => e.key === 'Enter' && handleRename()}
                />
            </div>
            <DialogFooter>
                <Button variant="ghost" onClick={() => { setIsRenameDialogOpen(false); setNewName(project.name); }}>Cancel</Button>
                <Button onClick={handleRename}>Rename</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
    </>
  );
}
