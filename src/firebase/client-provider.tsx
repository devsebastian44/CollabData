'use client';

import { FirebaseProvider, initializeFirebase } from '.';

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const firebase = initializeFirebase();
  return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
}
