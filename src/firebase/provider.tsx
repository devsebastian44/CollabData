'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { FirebaseInstances } from './index';

const FirebaseContext = createContext<FirebaseInstances | null>(null);

export const FirebaseProvider = ({
    children,
    value,
}: {
    children: ReactNode;
    value: FirebaseInstances;
}) => {
    return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};

export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (context === null) {
        throw new Error('useFirebase must be used within a FirebaseProvider');
    }
    return context;
};

export const useAuth = () => {
    return useFirebase().auth;
};

export const useFirestore = () => {
    return useFirebase().firestore;
};
