import { WorkspaceHeader } from '@/components/pages/workspace/header';
import { FileExplorer } from '@/components/pages/workspace/file-explorer';
import { AnalysisToolbox } from '@/components/pages/workspace/analysis-toolbox';
import { DataTable } from '@/components/pages/workspace/data-table';
import { tableData, files, referenceFiles } from '@/lib/mock-data';

export default function WorkspacePage({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-screen flex-col bg-background-dark">
      <WorkspaceHeader />
      <main className="flex w-full flex-1 overflow-hidden">
        <FileExplorer files={files} referenceFiles={referenceFiles} />
        <section className="relative flex min-w-0 flex-1 flex-col bg-surface-dark">
          <DataTable data={tableData} />
        </section>
        <AnalysisToolbox projectId={params.id} />
      </main>
    </div>
  );
}
