'use client';
import Link from 'next/link';
import { Database, LogOut } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useAuth, useUser } from '@/firebase';
import { signOut } from 'firebase/auth';
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

export function WorkspaceHeader() {
  const { user } = useUser();
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
          <Link className="text-white text-sm font-medium leading-normal" href="/dashboard">Projects</Link>
          <Link className="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Team</Link>
          <Link className="text-white/70 hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Settings</Link>
        </nav>
        <div className="flex items-center gap-3 pl-4 border-l border-border-dark">
           {user && (
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
                        className="rounded-full ring-2 ring-border-dark"
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
