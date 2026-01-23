'use client';

import { useState } from 'react';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import { ProjectCard } from '@/components/pages/dashboard/project-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { projects as initialProjects } from '@/lib/mock-data';
import type { Project } from '@/lib/types';
import Link from 'next/link';

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleArchive = (projectId: string) => {
    setProjects(projects.map(p => p.id === projectId ? { ...p, status: 'Archived' } : p));
  };

  const handleRestore = (projectId: string) => {
    setProjects(projects.map(p => p.id === projectId ? { ...p, status: 'Active' } : p));
  };

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="#" className="text-text-secondary text-sm font-medium leading-normal hover:text-white transition-colors">Home</Link>
              <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
              <span className="text-white text-lg font-bold leading-normal">Projects</span>
            </div>
            <Button asChild className="min-w-[140px] font-bold shadow-lg shadow-blue-900/20">
              <Link href="/projects/1">
                <Plus size={20} />
                Create New Project
              </Link>
            </Button>
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
                <ProjectCard key={project.id} project={project} onArchive={handleArchive} onDelete={handleArchive} onRestore={handleRestore} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
