import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';

export function MainHeader() {
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
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Features</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Pricing</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Docs</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Community</Link>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" className="hidden sm:flex" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <Link href="/login">Sign Up</Link>
            </Button>
          </div>
        </header>
      </div>
    </div>
  );
}
