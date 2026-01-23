import Link from 'next/link';
import { Share2 } from 'lucide-react';
import { TwitterIcon } from '@/components/icons/twitter-icon';
import { GithubIcon } from '@/components/icons/github-icon';

export function MainFooter() {
  const linkSections = [
    {
      title: 'Product',
      links: ['Features', 'Integrations', 'Pricing', 'Changelog'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Community', 'Status'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Contact'],
    },
  ];

  return (
    <footer className="bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800 py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-4">
              <Share2 className="text-primary text-2xl" />
              <span className="text-lg font-bold font-headline">CollabData</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              The collaborative platform for modern data teams. Automate EDA, manage datasets, and share insights in real-time.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="sr-only">Twitter</span><TwitterIcon /></Link>
              <Link href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="sr-only">GitHub</span><GithubIcon /></Link>
            </div>
          </div>
          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold font-headline text-slate-900 dark:text-white mb-4">{section.title}</h3>
              <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                {section.links.map((link) => (
                  <li key={link}><Link href="#" className="hover:text-primary">{link}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© 2024 CollabData Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-700 dark:hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-700 dark:hover:text-slate-300">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-700 dark:hover:text-slate-300">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
