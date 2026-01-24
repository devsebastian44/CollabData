'use client';

import { useProjectStore } from '@/hooks/use-project-store';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import { ProjectCard } from '@/components/pages/dashboard/project-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown, LayoutGrid, List } from 'lucide-react';
import type { Project } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function DashboardPage() {
  const { projects, archiveProject, restoreProject, deleteProject } = useProjectStore();
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-6');

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-white text-lg font-bold leading-normal">Projects</span>
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
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <Input placeholder="Search projects by name or tags..." className="pl-12 h-11 bg-surface-dark border-border-dark focus:border-primary" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="secondary" className="bg-[#232f48] hover:bg-[#2d3b55]">Sort: Last Active <ChevronDown size={20} className="ml-2" /></Button>
                <Button variant="secondary" className="bg-[#232f48] hover:bg-[#2d3b55]">Filter: All Owners <ChevronDown size={20} className="ml-2" /></Button>
                <div className="h-6 w-px bg-border-dark mx-1"></div>
                <div className="flex bg-[#232f48] rounded-lg p-1 gap-1">
                  <Button size="icon" variant="ghost" className="bg-background-dark shadow-sm h-8 w-8"><LayoutGrid size={20} /></Button>
                  <Button size="icon" variant="ghost" className="text-text-secondary h-8 w-8"><List size={20} /></Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {projects.filter(p => p.status !== 'Archived').map(project => (
                <ProjectCard key={project.id} project={project} onArchive={archiveProject} onDelete={archiveProject} onRestore={restoreProject} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
