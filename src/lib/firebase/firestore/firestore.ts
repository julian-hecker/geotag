import { getFirestore } from '@react-native-firebase/firestore';
import { app } from '../app';

export * from '@react-native-firebase/firestore';
export const db = getFirestore(app);
