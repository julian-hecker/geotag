import { getFirestore } from 'firebase/firestore';
import { app } from '../app';

export * from 'firebase/firestore';
export const db = getFirestore(app);
