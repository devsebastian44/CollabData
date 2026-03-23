'use client';

import { useProjectStore } from '@/hooks/use-project-store';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import { ProjectCard } from '@/components/pages/dashboard/project-card';
import { UserNav } from '@/components/layout/user-nav';

export default function TrashPage() {
  const { projects, deleteProject, restoreProject, renameProject } = useProjectStore();
  
  const archivedProjects = projects.filter(p => p.status === 'Archived');

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-white text-lg font-bold leading-normal">Trash</span>
            </div>
            <div className="flex items-center gap-3">
              <UserNav />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
            {archivedProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {archivedProjects.map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onArchive={() => {}} // No-op
                    onDelete={deleteProject} 
                    onRestore={restoreProject} 
                    onRename={renameProject}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-white mb-2">The trash is empty</h2>
                <p className="text-text-secondary">Deleted projects will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
