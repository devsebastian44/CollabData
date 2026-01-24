'use client';

import { useState, useMemo } from 'react';
import { useProjectStore } from '@/hooks/use-project-store';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import { ProjectCard } from '@/components/pages/dashboard/project-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown, LayoutGrid, List } from 'lucide-react';
import Link from 'next/link';
import { UserNav } from '@/components/layout/user-nav';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ProjectListItem } from '@/components/pages/dashboard/project-list-item';

type SortOption = 'createdAt' | 'name';
type ViewMode = 'grid' | 'list';

export default function DashboardPage() {
  const { projects, archiveProject, restoreProject, deleteProject, renameProject } = useProjectStore();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('createdAt');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filteredAndSortedProjects = useMemo(() => {
    const activeProjects = projects.filter(p => p.status !== 'Archived');

    const filtered = activeProjects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      }
      // 'createdAt' is the default
      return (b.createdAt || 0) - (a.createdAt || 0);
    });
  }, [projects, searchTerm, sortOption]);

  const sortLabels: Record<SortOption, string> = {
    createdAt: 'Last Active',
    name: 'Name',
  }

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-white text-lg font-bold leading-normal">Dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <UserNav />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" />
                <Input 
                  placeholder="Search projects by name or tags..." 
                  className="pl-12 h-11 bg-surface-dark border-border-dark focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" className="bg-[#232f48] hover:bg-[#2d3b55]">Sort: {sortLabels[sortOption]} <ChevronDown size={20} className="ml-2" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onSelect={() => setSortOption('createdAt')}>Last Active</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setSortOption('name')}>Name</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" className="bg-[#232f48] hover:bg-[#2d3b55]">Filter: All Owners <ChevronDown size={20} className="ml-2" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>All Owners</DropdownMenuItem>
                        <DropdownMenuItem>Owned by me</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="h-6 w-px bg-border-dark mx-1"></div>
                <div className="flex bg-[#232f48] rounded-lg p-1 gap-1">
                  <Button size="icon" variant="ghost" className={`${viewMode === 'grid' ? 'bg-background-dark shadow-sm' : 'text-text-secondary'} h-8 w-8`} onClick={() => setViewMode('grid')}><LayoutGrid size={20} /></Button>
                  <Button size="icon" variant="ghost" className={`${viewMode === 'list' ? 'bg-background-dark shadow-sm' : 'text-text-secondary'} h-8 w-8`} onClick={() => setViewMode('list')}><List size={20} /></Button>
                </div>
              </div>
            </div>

            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {filteredAndSortedProjects.map(project => (
                        <ProjectCard key={project.id} project={project} onArchive={archiveProject} onDelete={deleteProject} onRestore={restoreProject} onRename={renameProject} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col gap-2">
                    {filteredAndSortedProjects.map(project => (
                        <ProjectListItem key={project.id} project={project} onArchive={archiveProject} onDelete={deleteProject} onRestore={restoreProject} onRename={renameProject} />
                    ))}
                </div>
            )}

            {filteredAndSortedProjects.length === 0 && (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold text-white mb-2">No projects found</h2>
                    <p className="text-text-secondary">Try adjusting your search or filters.</p>
                </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
