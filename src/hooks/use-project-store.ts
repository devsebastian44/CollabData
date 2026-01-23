'use client';
import { useState, useCallback, useEffect } from 'react';
import { projects as initialProjects } from '@/lib/mock-data';
import type { Project } from '@/lib/types';

// This is a simple in-memory store.
// For a real app, you'd use a proper state management library or context.
let projectsStore: Project[] = [...initialProjects];
const listeners = new Set<() => void>();

const notify = () => listeners.forEach(l => l());

export const useProjectStore = () => {
    const [projects, setProjects] = useState<Project[]>(projectsStore);

    useEffect(() => {
        const listener = () => setProjects([...projectsStore]);
        listeners.add(listener);
        listener(); // Sync on mount
        return () => listeners.delete(listener);
    }, []);

    const archiveProject = useCallback((projectId: string) => {
        projectsStore = projectsStore.map(p => p.id === projectId ? { ...p, status: 'Archived' } : p);
        notify();
    }, []);

    const restoreProject = useCallback((projectId: string) => {
        projectsStore = projectsStore.map(p => p.id === projectId ? { ...p, status: 'Active' } : p);
        notify();
    }, []);

    const deleteProject = useCallback((projectId: string) => {
        projectsStore = projectsStore.filter(p => p.id !== projectId);
        notify();
    }, []);

    return { projects, archiveProject, restoreProject, deleteProject };
}
