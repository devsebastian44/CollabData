import { WorkspaceHeader } from '@/components/pages/workspace/header';
import { FileExplorer } from '@/components/pages/workspace/file-explorer';
import { AnalysisToolbox } from '@/components/pages/workspace/analysis-toolbox';
import { DataTable } from '@/components/pages/workspace/data-table';
import { tableData, files, referenceFiles } from '@/lib/mock-data';

export default function WorkspacePage({ params }: { params: { id: string } }) {
  return (
    <div className="h-screen flex flex-col bg-background-dark">
      <WorkspaceHeader />
      <main className="flex flex-1 overflow-hidden w-full">
        <FileExplorer files={files} referenceFiles={referenceFiles} />
        <section className="flex-1 flex flex-col bg-surface-dark min-w-0 relative">
          <DataTable data={tableData} />
        </section>
        <AnalysisToolbox projectId={params.id}/>
      </main>
    </div>
  );
}
