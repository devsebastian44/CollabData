'use client';

import { createContext, useContext, ReactNode } from 'react';
import type { FirebaseInstances } from './index';

const FirebaseContext = createContext<FirebaseInstances | null>(null);

export const FirebaseProvider = ({
    children,
    value,
}: {
    children: ReactNode;
    value: FirebaseInstances | null;
}) => {
    return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};

export const useFirebase = () => {
    return useContext(FirebaseContext);
};

export const useAuth = () => {
    return useFirebase()?.auth;
};

export const useFirestore = () => {
    return useFirebase()?.firestore;
};
