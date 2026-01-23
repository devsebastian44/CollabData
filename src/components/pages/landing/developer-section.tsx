import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Terminal, ExternalLink } from 'lucide-react';

const CodeLine = ({ number, children }: { number: number; children: React.ReactNode }) => (
  <div className="flex">
    <span className="text-slate-600 select-none mr-4">{number}</span>
    {children}
  </div>
);

export function DeveloperSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#0b1019] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-800">
          <div className="lg:w-1/2 p-0 flex flex-col border-r border-slate-800">
            <div className="flex items-center justify-between px-4 py-3 bg-[#0f1521] border-b border-slate-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-slate-500 font-mono">analysis.py</div>
            </div>
            <div className="p-6 overflow-x-auto custom-scrollbar font-mono text-sm leading-relaxed text-slate-300 bg-[#0f1521] h-full">
              <CodeLine number={1}><span className="text-purple-400">import</span> <span className="text-white">collabdata</span> <span className="text-purple-400">as</span> <span className="text-white">cd</span></CodeLine>
              <CodeLine number={2}></CodeLine>
              <CodeLine number={3}><span className="text-slate-500"># Initialize project</span></CodeLine>
              <CodeLine number={4}><span className="text-white">project</span> <span className="text-blue-400">=</span> <span className="text-white">cd.connect(</span><span className="text-green-400">"marketing_q3"</span><span className="text-white">)</span></CodeLine>
              <CodeLine number={5}></CodeLine>
              <CodeLine number={6}><span className="text-slate-500"># Auto-clean dataset</span></CodeLine>
              <CodeLine number={7}><span className="text-white">df</span> <span className="text-blue-400">=</span> <span className="text-white">project.load_data()</span></CodeLine>
              <CodeLine number={8}><span className="text-white">df.clean(</span><span className="text-orange-300">strategy</span><span className="text-blue-400">=</span><span className="text-green-400">"aggressive"</span><span className="text-white">)</span></CodeLine>
              <CodeLine number={9}></CodeLine>
              <CodeLine number={10}><span className="text-slate-500"># Generate insights</span></CodeLine>
              <CodeLine number={11}><span className="text-white">insights</span> <span className="text-blue-400">=</span> <span className="text-white">df.get_correlations(</span><span className="text-orange-300">target</span><span className="text-blue-400">=</span><span className="text-green-400">"conversion_rate"</span><span className="text-white">)</span></CodeLine>
              <CodeLine number={12}><span className="text-white">cd.publish(insights, </span><span className="text-orange-300">channel</span><span className="text-blue-400">=</span><span className="text-green-400">"slack"</span><span className="text-white">)</span></CodeLine>
            </div>
          </div>
          <div className="lg:w-1/2 p-10 flex flex-col justify-center bg-[#151e2e]">
            <div className="mb-6 h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Terminal className="text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 font-headline">Developer First API</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Integrate seamlessly with your existing Python and SQL workflows. Our SDK is designed to be intuitive for data scientists and powerful for data engineers.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" className="px-6 py-2.5 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors">
                View Documentation
              </Button>
              <Button variant="link" className="px-6 py-2.5 text-white font-medium">
                Browse GitHub <ExternalLink className="text-sm" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
