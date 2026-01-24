'use client';

import { ReactNode } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

export const FirebaseClientProvider = ({ children }: { children: ReactNode }) => {
    const firebase = initializeFirebase();
    return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
};
