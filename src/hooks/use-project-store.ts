'use client';
import { useState, useCallback, useEffect } from 'react';
import { projects as initialProjects, users } from '@/lib/mock-data';
import type { Project } from '@/lib/types';

const LOCAL_STORAGE_KEY = 'collabdata-projects';

export const useProjectStore = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load from localStorage on initial client-side mount
    useEffect(() => {
        try {
            const storedProjects = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (storedProjects) {
                setProjects(JSON.parse(storedProjects));
            } else {
                // If nothing in storage, use initial mock data and set it in localStorage
                setProjects(initialProjects);
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialProjects));
            }
        } catch (error) {
            // If something goes wrong (e.g. private browsing), use mock data
            console.error("Failed to access localStorage:", error);
            setProjects(initialProjects);
        }
        setIsInitialized(true);
    }, []);

    // Save to localStorage whenever projects change
    useEffect(() => {
        // Only save after the initial load to prevent overwriting on first render
        if (isInitialized) {
            try {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
            } catch (error) {
                console.error("Failed to save to localStorage:", error);
            }
        }
    }, [projects, isInitialized]);

    const addProject = useCallback((projectName: string) => {
        if (!projectName) return;
        const newProject: Project = {
            id: new Date().getTime().toString(),
            name: projectName,
            status: 'Processing',
            datasetCount: 1,
            lastActive: 'Just now',
            members: [users.user1, users.user2],
        };
        setProjects(prevProjects => [newProject, ...prevProjects]);
    }, []);

    const archiveProject = useCallback((projectId: string) => {
        setProjects(prevProjects => 
            prevProjects.map(p => p.id === projectId ? { ...p, status: 'Archived' } : p)
        );
    }, []);

    const restoreProject = useCallback((projectId: string) => {
        setProjects(prevProjects => 
            prevProjects.map(p => p.id === projectId ? { ...p, status: 'Active' } : p)
        );
    }, []);

    const deleteProject = useCallback((projectId: string) => {
        setProjects(prevProjects => prevProjects.filter(p => p.id !== projectId));
    }, []);

    return { projects, addProject, archiveProject, restoreProject, deleteProject };
}
