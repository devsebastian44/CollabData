import type { Project } from '@/lib/types';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreVertical, Database as DatabaseIcon, Clock, ArrowRight, History } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

const statusStyles: { [key: string]: string } = {
  Active: 'bg-emerald-400/10 text-emerald-400 ring-emerald-400/20',
  Processing: 'bg-amber-400/10 text-amber-400 ring-amber-400/20',
  Archived: 'bg-slate-400/10 text-slate-400 ring-slate-400/20',
  Review: 'bg-purple-400/10 text-purple-400 ring-purple-400/20',
};

export function ProjectCard({ project }: ProjectCardProps) {
  const displayedMembers = project.members.slice(0, 3);
  const remainingMembers = project.members.length - displayedMembers.length;

  return (
    <Card className="group flex flex-col gap-4 bg-surface-dark border-border-dark hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
      <CardHeader className="flex-row justify-between items-start pb-2">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
            <Link href={`/projects/${project.id}`}>{project.name}</Link>
          </CardTitle>
          <Badge variant="outline" className={`w-fit ${statusStyles[project.status]}`}>{project.status}</Badge>
        </div>
        <Button variant="ghost" size="icon" className="text-text-secondary hover:text-white -mr-2 -mt-2">
          <MoreVertical />
        </Button>
      </CardHeader>
      <CardContent className="flex items-center gap-4 text-text-secondary text-sm pt-0 pb-2">
        <div className="flex items-center gap-1.5" title="Datasets">
          <DatabaseIcon size={18} />
          <span>{project.datasetCount} Datasets</span>
        </div>
        <div className="flex items-center gap-1.5" title="Last Active">
          <Clock size={18} />
          <span>{project.lastActive}</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2">
        <div className="flex -space-x-2 overflow-hidden">
          {displayedMembers.map(member => (
            <Image
              key={member.name}
              src={member.avatarUrl}
              alt={member.name}
              width={32}
              height={32}
              className="inline-block rounded-full ring-2 ring-background-dark"
              data-ai-hint="person face"
            />
          ))}
          {remainingMembers > 0 && (
            <div className="inline-block size-8 rounded-full flex items-center justify-center bg-[#232f48] text-xs font-medium text-white ring-2 ring-background-dark">
              +{remainingMembers}
            </div>
          )}
        </div>
        
        {project.status === 'Archived' ? (
          <Button variant="link" className="text-primary p-0 h-auto group/link" asChild>
            <Link href="#">
              Restore <History size={16} className="ml-1 group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        ) : (
          <Button variant="link" className="text-primary p-0 h-auto group/link" asChild>
            <Link href={project.status === 'Processing' ? `/projects/${project.id}` : `/projects/${project.id}/results`}>
              {project.status === 'Processing' ? 'View Project' : 'Run EDA'}
              <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
