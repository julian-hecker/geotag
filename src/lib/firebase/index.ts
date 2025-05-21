import { getApp, getApps, initializeApp } from '@react-native-firebase/app';
import { Platform } from 'react-native';
import 'setimmediate'; // web polyfill https://github.com/invertase/react-native-firebase/issues/7921

import { FIREBASE_CONFIGURATION } from '@/constants/environment';

if (Platform.OS !== 'android' && Platform.OS !== 'ios' && !getApps().length) {
    initializeApp(FIREBASE_CONFIGURATION);
}

export const firebase = getApp();
