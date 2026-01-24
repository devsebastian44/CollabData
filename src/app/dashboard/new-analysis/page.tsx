'use client';

import { useState } from 'react';
import { DashboardSidebar } from '@/components/pages/dashboard/sidebar';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { UploadCloud, Play, Link as LinkIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProjectStore } from '@/hooks/use-project-store';
import { useToast } from '@/hooks/use-toast';
import { UserNav } from '@/components/layout/user-nav';

const descriptiveStats = [
  { id: 'mean', label: 'Mean & Median', checked: true },
  { id: 'std', label: 'Standard Deviation', checked: true },
  { id: 'missing', label: 'Missing Values' },
  { id: 'skew', label: 'Skewness & Kurtosis' },
];

const visualizations = [
  { id: 'hist', label: 'Histograms', checked: true },
  { id: 'box', label: 'Boxplots', checked: true },
  { id: 'heatmap', label: 'Correlation Heatmap' },
  { id: 'scatter', label: 'Scatter Matrix' },
];

export default function NewAnalysisPage() {
  const router = useRouter();
  const { addProject } = useProjectStore();
  const { toast } = useToast();
  const [analysisName, setAnalysisName] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [datasetUrl, setDatasetUrl] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFile(event.target.files[0]);
      setDatasetUrl('');
    }
  };
  
  const handleCreateAnalysis = () => {
    if (!analysisName.trim()) {
      toast({
        variant: 'destructive',
        title: 'Analysis name is required',
        description: 'Please enter a name for your new analysis.',
      });
      return;
    }
    
    const hasFile = !!uploadedFile || !!datasetUrl.trim();
    addProject(analysisName, hasFile);
    
    toast({
        title: 'Analysis Created',
        description: hasFile 
            ? `Project "${analysisName}" has been created and is processing.`
            : `Project "${analysisName}" has been created. Upload a dataset to begin.`,
    });

    router.push('/dashboard');
  };

  return (
    <div className="flex h-screen w-full bg-background-dark">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="flex-none px-8 py-6 border-b border-border-dark/50 bg-background-dark/50 backdrop-blur-sm z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-white text-lg font-bold leading-normal">New Analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <UserNav />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-surface-dark border-border-dark">
                <CardHeader>
                    <CardTitle className="text-xl">Create New Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="space-y-2">
                        <Label htmlFor="analysis-name" className="text-white">Nombre del análisis</Label>
                        <Input 
                            id="analysis-name" 
                            placeholder="e.g., Customer Churn Q4" 
                            className="bg-[#111722] border-border-dark"
                            value={analysisName}
                            onChange={(e) => setAnalysisName(e.target.value)}
                         />
                    </div>

                    <div className="space-y-4">
                        <Label className="text-white">Herramientas de análisis</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div>
                                <h4 className="text-sm font-semibold text-slate-400 mb-3">Descriptive Statistics</h4>
                                <div className="space-y-2">
                                    {descriptiveStats.map(stat => (
                                    <div key={stat.id} className="flex items-center justify-between group cursor-pointer p-1">
                                        <Label htmlFor={stat.id} className="text-white text-sm group-hover:text-primary transition-colors cursor-pointer">{stat.label}</Label>
                                        <Checkbox id={stat.id} defaultChecked={stat.checked} />
                                    </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-400 mb-3">Visualizations</h4>
                                <div className="space-y-3">
                                    {visualizations.map(vis => (
                                    <div key={vis.id} className="flex items-center justify-between p-1">
                                        <Label htmlFor={vis.id} className="text-white text-sm cursor-pointer">{vis.label}</Label>
                                        <Switch id={vis.id} defaultChecked={vis.checked} />
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Label className="text-white">Subir Datasets</Label>
                        <Tabs defaultValue="upload" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-[#111722]">
                                <TabsTrigger value="upload">Upload File</TabsTrigger>
                                <TabsTrigger value="url">Import from URL</TabsTrigger>
                            </TabsList>
                            <TabsContent value="upload">
                                <div className="relative mt-4 border-2 border-dashed border-border-dark rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                                    <label htmlFor="file-upload" className="w-full h-full absolute inset-0 cursor-pointer"></label>
                                    <UploadCloud className="mx-auto h-12 w-12 text-slate-400" />
                                    <p className="mt-2 text-sm text-slate-400">
                                        <span className="font-semibold text-primary">
                                            Click to upload
                                        </span>
                                         or drag and drop
                                    </p>
                                    <p className="text-xs text-slate-500">CSV, XLSX, JSON up to 200MB</p>
                                    {uploadedFile && (
                                        <p className="mt-4 text-sm font-medium text-green-400">
                                            File selected: {uploadedFile.name}
                                        </p>
                                    )}
                                </div>
                            </TabsContent>
                            <TabsContent value="url">
                                <div className="mt-4 space-y-2">
                                    <Label htmlFor="dataset-url" className="text-white">Dataset URL</Label>
                                    <div className="relative">
                                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                        <Input 
                                            id="dataset-url" 
                                            placeholder="https://example.com/dataset.csv" 
                                            className="bg-[#111722] border-border-dark pl-10"
                                            value={datasetUrl}
                                            onChange={(e) => {
                                                setDatasetUrl(e.target.value);
                                                if (e.target.value) setUploadedFile(null);
                                            }}
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full h-11 font-bold shadow-lg shadow-primary/20" onClick={handleCreateAnalysis}>
                        <Play />
                        Create and Run Analysis
                    </Button>
                </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
