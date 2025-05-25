import { FIREBASE_CONFIGURATION } from '@/constants/environment';
import { getApp, getApps, initializeApp } from 'firebase/app';

export const app = getApps().length ? getApp() : initializeApp(FIREBASE_CONFIGURATION);
