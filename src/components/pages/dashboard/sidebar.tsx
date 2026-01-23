import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Database, ScatterChart, Settings } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const navLinks = [
  { href: '#', icon: <LayoutGrid />, text: 'Dashboard', active: true },
  { href: '/projects/1', icon: <Database />, text: 'Datasets' },
  { href: '#', icon: <ScatterChart />, text: 'Analysis Tools' },
  { href: '#', icon: <Settings />, text: 'Settings' },
];

export function DashboardSidebar() {
  const workspaceAvatar = PlaceHolderImages.find(p => p.id === 'workspace-avatar');
  
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
            {navLinks.map(link => (
              <Link key={link.text} href={link.href} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                link.active ? 'bg-[#232f48] text-white' : 'text-text-secondary hover:bg-[#232f48]/50 hover:text-white'
              }`}>
                {link.icon}
                <p className="text-sm font-medium leading-normal">{link.text}</p>
              </Link>
            ))}
          </nav>
        </div>
        <Button>New Analysis</Button>
      </div>
    </aside>
  );
}
