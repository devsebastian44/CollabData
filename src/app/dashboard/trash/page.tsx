'use client';

import { useProjectStore } from '@/hooks/use-project-store';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import { ProjectCard } from '@/components/pages/dashboard/project-card';
import { UserNav } from '@/components/layout/user-nav';

export default function TrashPage() {
  const { projects, deleteProject, restoreProject, renameProject } =
    useProjectStore();

  const archivedProjects = projects.filter((p) => p.status === 'Archived');

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="relative flex h-full flex-1 flex-col overflow-hidden">
        <header className="z-10 flex-none border-b border-border-dark/50 bg-background-dark/50 px-8 py-6 backdrop-blur-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="text-lg font-bold leading-normal text-white">
                Trash
              </span>
            </div>
            <div className="flex items-center gap-3">
              <UserNav />
            </div>
          </div>
        </header>

        <div className="custom-scrollbar flex-1 overflow-y-auto p-8">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
            {archivedProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {archivedProjects.map((project) => (
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
              <div className="py-20 text-center">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  The trash is empty
                </h2>
                <p className="text-text-secondary">
                  Deleted projects will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
