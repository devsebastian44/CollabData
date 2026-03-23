import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Cta() {
  return (
    <section className="relative overflow-hidden pb-12 pt-24">
      <div className="absolute inset-0 bg-background-light dark:bg-background-dark"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 font-headline text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Ready to engineer <br />
          <span className="text-primary">better data?</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Join 10,000+ data engineers and analysts who are saving hours every
          week with CollabData.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-14 transform px-8 text-lg font-bold shadow-xl shadow-primary/30 hover:-translate-y-1"
            asChild
          >
            <Link href="/login">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
