import { User as FirebaseUser } from 'firebase/auth';

export type User = {
  name: string;
  avatarUrl: string;
};

export type ProjectStatus = 'Active' | 'Processing' | 'Archived' | 'Review' | 'Error';

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  datasetCount: number;
  createdAt: number;
  members: User[];
};

export type DatasetFile = {
  name: string;
  type: 'csv' | 'xlsx' | 'json';
  size: string;
  status: 'Synced' | 'Local' | 'Archived';
  icon: React.ReactNode;
  isActive?: boolean;
};

export type DescriptiveStat = {
  variable: string;
  type: string;
  mean: string;
  std: string;
};

export { FirebaseUser };
