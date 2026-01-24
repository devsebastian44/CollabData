'use client';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { app } from './config';

export * from './provider';
export * from './auth/use-user';

export interface FirebaseInstances {
    auth: Auth;
    firestore: Firestore;
}

export function initializeFirebase(): FirebaseInstances {
    const auth = getAuth(app);
    const firestore = getFirestore(app);

    return { auth, firestore };
}
