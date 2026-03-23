import Link from 'next/link';
import { Share2 } from 'lucide-react';
import { TwitterIcon } from '@/components/icons/twitter-icon';
import { GithubIcon } from '@/components/icons/github-icon';

export function MainFooter() {
  const linkSections = [
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference'],
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-[#0f172a] md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-12 flex flex-wrap justify-between gap-8">
          <div className="pr-8">
            <div className="mb-4 flex items-center gap-2">
              <Share2 className="text-2xl text-primary" />
              <span className="font-headline text-lg font-bold">
                CollabData
              </span>
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              The collaborative platform for modern data teams. Automate EDA,
              manage datasets, and share insights in real-time.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-slate-400 transition-colors hover:text-primary"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon />
              </Link>
              <Link
                href="#"
                className="text-slate-400 transition-colors hover:text-primary"
              >
                <span className="sr-only">GitHub</span>
                <GithubIcon />
              </Link>
            </div>
          </div>
          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-headline font-bold text-slate-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500 md:flex-row">
          <p>© 2024 CollabData Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-slate-700 dark:hover:text-slate-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-slate-700 dark:hover:text-slate-300"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="hover:text-slate-700 dark:hover:text-slate-300"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
