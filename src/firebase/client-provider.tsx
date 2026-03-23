'use client';

import { ReactNode, useState, useEffect } from 'react';
import { initializeFirebase, type FirebaseInstances } from './index';
import { FirebaseProvider } from './provider';

export const FirebaseClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [firebase, setFirebase] = useState<FirebaseInstances | null>(null);

  useEffect(() => {
    // Initialize firebase only on the client side, where env vars are available.
    if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
      setFirebase(initializeFirebase());
    }
  }, []);

  return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
};
