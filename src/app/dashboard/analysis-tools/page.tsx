import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AnalysisToolsPage() {
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-6');
  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/dashboard" className="text-text-secondary text-sm font-medium leading-normal hover:text-white transition-colors">Dashboard</Link>
              <span className="text-text-secondary text-sm font-medium leading-normal">/</span>
              <span className="text-white text-lg font-bold leading-normal">Analysis Tools</span>
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
          <div className="max-w-[1400px] mx-auto flex flex-col gap-8 items-center justify-center h-full">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Analysis Tools</h1>
                <p className="text-text-secondary">This is where you can find and manage your analysis tools.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
