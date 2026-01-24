'use client';

import { ReactNode, useMemo } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

export const FirebaseClientProvider = ({ children }: { children: ReactNode }) => {
    const firebase = useMemo(() => initializeFirebase(), []);
    return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
};
