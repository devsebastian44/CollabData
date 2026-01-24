import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

// The app instance is memoized to avoid re-initializing it on every render.
let app: FirebaseApp;
let auth: Auth;
let firestore: Firestore;

function initializeFirebase() {
  if (!app) {
    const apps = getApps();
    if (apps.length > 0) {
      app = apps[0];
    } else {
      app = initializeApp(firebaseConfig);
    }
    auth = getAuth(app);
    firestore = getFirestore(app);
  }
  return { app, auth, firestore };
}

// Export the hooks and providers
export {
  useUser,
} from '@/firebase/auth/use-user';
export {
  FirebaseProvider,
  useFirebaseApp,
  useAuth,
  useFirestore,
} from '@/firebase/provider';
export { FirebaseClientProvider } from '@/firebase/client-provider';
export { initializeFirebase };
