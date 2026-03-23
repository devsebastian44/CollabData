import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import { UserNav } from '@/components/layout/user-nav';

export default function AnalysisToolsPage() {
  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="relative flex h-full flex-1 flex-col overflow-hidden">
        <header className="z-10 flex-none border-b border-border-dark/50 bg-background-dark/50 px-8 py-6 backdrop-blur-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="text-lg font-bold leading-normal text-white">
                Analysis Tools
              </span>
            </div>
            <div className="flex items-center gap-3">
              <UserNav />
            </div>
          </div>
        </header>

        <div className="custom-scrollbar flex-1 overflow-y-auto p-8">
          <div className="mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center gap-8">
            <div className="text-center">
              <h1 className="mb-4 text-2xl font-bold text-white">
                Analysis Tools
              </h1>
              <p className="text-text-secondary">
                This is where you can find and manage your analysis tools.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
