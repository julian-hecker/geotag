import { initializeAnalytics } from '@react-native-firebase/analytics';
import { app } from '../app';

export * from '@react-native-firebase/analytics';
export const analytics = initializeAnalytics(app);
