'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useUser } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';

export function MainHeader() {
  const { user, loading } = useUser();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <header className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-primary size-8 flex items-center justify-center">
              <Share2 className="text-3xl" />
            </div>
            <h2 className="text-lg font-bold tracking-tight font-headline">CollabData</h2>
          </Link>
          <div className="flex items-center gap-3">
            {loading ? (
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-24" />
              </div>
            ) : user ? (
              <Button asChild className="font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild className="font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  <Link href="/login">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}
