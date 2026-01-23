import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/dashboard" className="text-text-secondary text-sm font-medium leading-normal hover:text-white transition-colors">Dashboard</Link>
              <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
              <span className="text-white text-lg font-bold leading-normal">Settings</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-8 items-center justify-center h-full">
             <div className="text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Settings</h1>
                <p className="text-text-secondary">Manage your account and workspace settings here.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
