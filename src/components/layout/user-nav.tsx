'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { useAuth, useUser } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { LogOut } from "lucide-react";

export function UserNav() {
  const { user } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  const userAvatar = user?.photoURL 
    ? { imageUrl: user.photoURL, imageHint: 'user profile' } 
    : (PlaceHolderImages.find(p => p.id === 'user-6') || { imageUrl: 'https://picsum.photos/seed/1/40/40', imageHint: 'person professional' });

  if (!user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-3 relative h-auto p-0">
          <div className="flex items-center gap-3">
              {userAvatar && (
                <Image
                    src={userAvatar.imageUrl}
                    alt="User profile picture"
                    width={40}
                    height={40}
                    className="rounded-full ring-2 ring-primary/20"
                    data-ai-hint={userAvatar.imageHint || 'user'}
                />
              )}
              <div className="text-left hidden sm:block">
                <p className="text-sm text-white font-medium">{user.displayName || 'Alex Johnson'}</p>
                <p className="text-xs text-white/50">{user.email}</p>
              </div>
            </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.displayName || 'Alex Johnson'}</p>
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
  );
}
