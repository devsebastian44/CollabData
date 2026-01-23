import Link from 'next/link';
import { Database } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function WorkspaceHeader() {
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-6');

  return (
    <header className="flex shrink-0 items-center justify-between whitespace-nowrap border-b border-solid border-border-dark bg-background-dark px-6 py-3 h-16">
      <Link href="/" className="flex items-center gap-4">
        <div className="size-8 flex items-center justify-center bg-primary rounded-lg">
          <Database className="text-white" size={20} />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] font-headline">CollabData</h2>
      </Link>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="/dashboard">Dashboard</Link>
          <Link className="text-white text-sm font-medium leading-normal" href="/dashboard">Projects</Link>
          <Link className="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Team</Link>
          <Link className="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Settings</Link>
        </nav>
        <div className="flex items-center gap-3 pl-4 border-l border-border-dark">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-white font-medium">Alex Johnson</p>
            <p className="text-[10px] text-white/50">Data Scientist</p>
          </div>
          {userAvatar && (
            <Image
                src={userAvatar.imageUrl}
                alt="User profile picture"
                width={36}
                height={36}
                className="rounded-full ring-2 ring-border-dark"
                data-ai-hint={userAvatar.imageHint}
            />
          )}
        </div>
      </div>
    </header>
  );
}
