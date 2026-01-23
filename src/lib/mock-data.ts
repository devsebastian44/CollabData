import type { Project, User, DatasetFile, DescriptiveStat } from '@/lib/types';
import { FileText, Table, Braces } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const users: { [key: string]: User } = {
  user1: { name: 'Alice', avatarUrl: PlaceHolderImages.find(p => p.id === 'user-1')?.imageUrl || '' },
  user2: { name: 'Bob', avatarUrl: PlaceHolderImages.find(p => p.id === 'user-2')?.imageUrl || '' },
  user3: { name: 'Charlie', avatarUrl: PlaceHolderImages.find(p => p.id === 'user-3')?.imageUrl || '' },
  user4: { name: 'David', avatarUrl: PlaceHolderImages.find(p => p.id === 'user-4')?.imageUrl || '' },
  user5: { name: 'Eve', avatarUrl: PlaceHolderImages.find(p => p.id === 'user-5')?.imageUrl || '' },
};

export const projects: Project[] = [
  {
    id: '1',
    name: 'Customer Churn Analysis Q3',
    status: 'Active',
    datasetCount: 12,
    lastActive: '2h ago',
    members: [users.user1, users.user2, users.user3],
  },
  {
    id: '2',
    name: 'Supply Chain Optimization',
    status: 'Processing',
    datasetCount: 18,
    lastActive: 'Yesterday',
    members: [users.user4],
  },
  {
    id: '3',
    name: 'Marketing ROI - Exploratory',
    status: 'Archived',
    datasetCount: 1,
    lastActive: 'Oct 24',
    members: [users.user5, users.user1],
  },
  {
    id: '4',
    name: 'Financial Forecasting 2024',
    status: 'Active',
    datasetCount: 8,
    lastActive: '5m ago',
    members: [users.user4, users.user2, users.user5, users.user1, users.user3],
  },
  {
    id: '5',
    name: 'User Behavior Segmentation',
    status: 'Review',
    datasetCount: 3,
    lastActive: '3d ago',
    members: [users.user5],
  },
];

export const files: DatasetFile[] = [
    { name: 'Q3_Sales_Data.csv', type: 'csv', size: '24MB', status: 'Synced', icon: <FileText className="text-green-400" />, isActive: true },
    { name: 'Customer_Survey_2023.xlsx', type: 'xlsx', size: '2MB', status: 'Local', icon: <Table className="text-blue-400" /> },
];

export const referenceFiles: DatasetFile[] = [
    { name: 'Manifest_Config.json', type: 'json', size: '14KB', status: 'Synced', icon: <Braces className="text-yellow-400" /> },
    { name: 'Historical_Log_2022.csv', type: 'csv', size: '156MB', status: 'Archived', icon: <FileText className="text-green-400" /> },
];

export const tableData = [
  { id: '#TRX-001', date: '2023-10-24', revenue: '$1,240.50', region: 'North America', sku: 'PRO-X-200', qty: 12, status: 'Completed', statusColor: 'bg-green-500' },
  { id: '#TRX-002', date: '2023-10-24', revenue: '$850.00', region: 'Europe', sku: 'LITE-S-100', qty: 5, status: 'Pending', statusColor: 'bg-yellow-500' },
  { id: '#TRX-003', date: '2023-10-23', revenue: '$3,420.00', region: 'Asia Pacific', sku: 'ENT-Z-900', qty: 3, status: 'Completed', statusColor: 'bg-green-500' },
  { id: '#TRX-004', date: '2023-10-23', revenue: '$125.00', region: 'North America', sku: 'ACC-M-010', qty: 25, status: 'Refunded', statusColor: 'bg-red-500' },
  { id: '#TRX-005', date: '2023-10-22', revenue: '$2,100.00', region: 'Europe', sku: 'PRO-X-200', qty: 8, status: 'Completed', statusColor: 'bg-green-500' },
  { id: '#TRX-006', date: '2023-10-22', revenue: '$450.00', region: 'North America', sku: 'LITE-S-100', qty: 2, status: 'Completed', statusColor: 'bg-green-500' },
  { id: '#TRX-007', date: '2023-10-21', revenue: '$9,800.00', region: 'Asia Pacific', sku: 'ENT-Z-MAX', qty: 1, status: 'Processing', statusColor: 'bg-gray-500' },
  { id: '#TRX-008', date: '2023-10-21', revenue: '$65.00', region: 'North America', sku: 'ACC-S-005', qty: 1, status: 'Completed', statusColor: 'bg-green-500' },
  { id: '#TRX-009', date: '2023-10-20', revenue: '$1,100.00', region: 'Europe', sku: 'PRO-X-200', qty: 4, status: 'Completed', statusColor: 'bg-green-500' },
  { id: '#TRX-010', date: '2023-10-20', revenue: '$320.00', region: 'Asia Pacific', sku: 'LITE-S-100', qty: 2, status: 'Completed', statusColor: 'bg-green-500' },
];

export const descriptiveStats: DescriptiveStat[] = [
    { variable: 'MonthlyCharge', type: 'float64', mean: '64.76', std: '30.09' },
    { variable: 'Tenure', type: 'int64', mean: '32.37', std: '24.55' },
    { variable: 'TotalCharges', type: 'float64', mean: '2283.30', std: '2266.77' },
    { variable: 'Age', type: 'int64', mean: '46.50', std: '16.70' },
    { variable: 'AccountScore', type: 'float64', mean: '705.2', std: '45.80' },
    { variable: 'SupportCalls', type: 'int64', mean: '1.40', std: '0.90' },
    { variable: 'AvgUsageGB', type: 'float64', mean: '45.2', std: '12.5' },
];
