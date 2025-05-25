import { getAuth } from '@react-native-firebase/auth';
import { app } from '../app';

export * from '@react-native-firebase/auth';
export const auth = getAuth(app);
