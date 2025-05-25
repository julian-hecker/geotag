import { getApp, type ReactNativeFirebase } from '@react-native-firebase/app';
import type { FirebaseApp } from 'firebase/app';

export const app = getApp() as FirebaseApp & ReactNativeFirebase.FirebaseApp;
