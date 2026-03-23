'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useUser } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';

export function MainHeader() {
  const { user, loading } = useUser();

  return (
    <div className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <header className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center text-primary">
              <Share2 className="text-3xl" />
            </div>
            <h2 className="font-headline text-lg font-bold tracking-tight">
              CollabData
            </h2>
          </Link>
          <div className="flex items-center gap-3">
            {loading ? (
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-24" />
              </div>
            ) : user ? (
              <Button
                asChild
                className="font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Log In</Link>
                </Button>
                <Button
                  asChild
                  className="font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                >
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
