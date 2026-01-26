import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';

export function DeveloperSection() {
  const codeSnippet = `
fetch('https://api.collabdata.com/v1/projects/1/analysis', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    dataset: 'Q3_Sales_Data.csv',
    analyses: ['descriptive', 'correlation']
  })
})
.then(res => res.json())
.then(data => console.log(data));
  `.trim();

  return (
    <section className="py-20 md:py-32 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-black leading-tight font-headline">
              A Developer-First API
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mt-4">
              Integrate with your existing tools and workflows. Our REST API provides programmatic access to all your data and analyses.
            </p>
            <Button variant="secondary" size="lg" className="mt-8">Read API Docs</Button>
          </div>
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-border-dark">
                <div className="flex items-center gap-3">
                    <Terminal className="text-primary" />
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Example API Request</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
            </div>
            <div className="p-4">
                <pre className="bg-slate-100 dark:bg-[#0f172a] p-4 rounded-md text-sm text-slate-800 dark:text-slate-200 overflow-x-auto custom-scrollbar">
                  <code>
                    {codeSnippet}
                  </code>
                </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
