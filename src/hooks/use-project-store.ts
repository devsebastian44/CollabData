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

    const addProject = useCallback((projectName: string, hasFile: boolean) => {
        if (!projectName) return;
        const newProject: Project = {
            id: new Date().getTime().toString(),
            name: projectName,
            status: hasFile ? 'Processing' : 'Review',
            datasetCount: hasFile ? 1 : 0,
            createdAt: Date.now(),
            members: [users.user1, users.user2],
        };
        setProjects(prevProjects => [newProject, ...prevProjects]);
        
        if (hasFile) {
            // Simulate processing only if there's a file
            setTimeout(() => {
                setProjects(prevProjects =>
                    prevProjects.map(p => {
                        if (p.id === newProject.id) {
                            // Randomly succeed or fail
                            const newStatus = Math.random() > 0.3 ? 'Active' : 'Error';
                            return { ...p, status: newStatus };
                        }
                        return p;
                    })
                );
            }, 5000); // 5 seconds delay
        }
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

    const renameProject = useCallback((projectId: string, newName: string) => {
        if (!newName.trim()) return;
        setProjects(prevProjects =>
            prevProjects.map(p => (p.id === projectId ? { ...p, name: newName } : p))
        );
    }, []);

    return { projects, addProject, archiveProject, restoreProject, deleteProject, renameProject };
}
