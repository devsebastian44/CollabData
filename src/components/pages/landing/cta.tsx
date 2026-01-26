import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Cta() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background-light dark:bg-background-dark"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6 font-headline">
          Ready to engineer <br />
          <span className="text-primary">better data?</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Join 10,000+ data engineers and analysts who are saving hours every week with CollabData.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/30 transform hover:-translate-y-1" asChild>
            <Link href="/login">Start Free Trial</Link>
          </Button>
          <Button variant="secondary" size="lg" className="h-14 px-8 text-lg font-bold bg-slate-200 dark:bg-slate-800">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
