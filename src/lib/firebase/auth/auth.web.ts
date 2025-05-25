import { getAuth } from 'firebase/auth';
import { app } from '../app';

export * from 'firebase/auth';
export const auth = getAuth(app);
