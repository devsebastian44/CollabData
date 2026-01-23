'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Database, ScatterChart, Trash2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/dashboard', icon: <LayoutGrid />, text: 'Dashboard' },
  { href: '/dashboard/datasets', icon: <Database />, text: 'Datasets' },
  { href: '/dashboard/analysis-tools', icon: <ScatterChart />, text: 'Analysis Tools' },
  { href: '/dashboard/trash', icon: <Trash2 />, text: 'Trash' },
];

export function DashboardSidebar() {
  const workspaceAvatar = PlaceHolderImages.find(p => p.id === 'workspace-avatar');
  const pathname = usePathname();
  
  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-border-dark bg-[#111722] shrink-0 h-full overflow-y-auto">
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex gap-3 items-center mb-4 px-2">
            {workspaceAvatar && (
                <Image
                    src={workspaceAvatar.imageUrl}
                    alt="Abstract blue gradient avatar"
                    width={40}
                    height={40}
                    className="rounded-full shadow-inner"
                    data-ai-hint={workspaceAvatar.imageHint}
                />
            )}
            <div className="flex flex-col">
              <h1 className="text-white text-base font-medium leading-normal font-headline">CollabData</h1>
              <p className="text-text-secondary text-sm font-normal leading-normal">Pro Workspace</p>
            </div>
          </Link>
          <nav className="flex flex-col gap-2">
            {navLinks.map(link => {
              const isDashboardActive = link.href === '/dashboard' && pathname === '/dashboard';
              const isDatasetsSection = link.text === 'Datasets' && (pathname.startsWith('/dashboard/datasets') || pathname.startsWith('/projects'));
              const isOtherPageActive = link.href !== '/dashboard' && link.text !== 'Datasets' && pathname.startsWith(link.href);

              const isActive = isDashboardActive || isDatasetsSection || isOtherPageActive;

              return (
                <Link key={link.text} href={link.href} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-[#232f48] text-white' : 'text-text-secondary hover:bg-[#232f48]/50 hover:text-white'
                }`}>
                  {link.icon}
                  <p className="text-sm font-medium leading-normal">{link.text}</p>
                </Link>
              );
            })}
          </nav>
        </div>
        <Button asChild>
          <Link href="/dashboard/new-analysis">New Analysis</Link>
        </Button>
      </div>
    </aside>
  );
}
