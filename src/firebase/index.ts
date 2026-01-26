'use client';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';

export * from './provider';
export * from './auth/use-user';

export interface FirebaseInstances {
    auth: Auth;
    firestore: Firestore;
}

export function initializeFirebase(): FirebaseInstances {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    const auth = getAuth(app);
    const firestore = getFirestore(app);

    return { auth, firestore };
}
