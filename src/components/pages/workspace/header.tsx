'use client';
import Link from 'next/link';
import { Database, LogOut, Settings } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { Skeleton } from '@/components/ui/skeleton';


export function WorkspaceHeader() {
  const { user, loading } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };
  
  const userAvatar = user?.photoURL 
    ? { imageUrl: user.photoURL, imageHint: 'user profile' } 
    : (PlaceHolderImages.find(p => p.id === 'user-6') || { imageUrl: 'https://picsum.photos/seed/1/36/36', imageHint: 'person professional' });


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
          <Link className="text-white/70 hover:text-white text-sm font-medium leading-normal" href="/dashboard/datasets">Datasets</Link>
          <Link className="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="/dashboard/analysis-tools">Analysis Tools</Link>
        </nav>
        <div className="flex items-center gap-3 pl-4 border-l border-border-dark">
           {loading ? (
             <Skeleton className="h-9 w-9 rounded-full" />
           ) : user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="ghost" className="flex items-center gap-3 relative h-auto p-0">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-white font-medium">{user.displayName || 'Alex Johnson'}</p>
                    <p className="text-[10px] text-white/50">{user.email}</p>
                  </div>
                  {userAvatar && (
                    <Image
                        src={userAvatar.imageUrl}
                        alt="User profile picture"
                        width={36}
                        height={36}
                        className="rounded-full object-cover ring-2 ring-border-dark"
                        data-ai-hint={userAvatar.imageHint}
                    />
                  )}
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.displayName}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => router.push('/dashboard/settings')}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
