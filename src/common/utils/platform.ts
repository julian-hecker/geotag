import { Platform } from 'react-native';

export const isMobile = () => Platform.OS === 'ios' || Platform.OS === 'android';
export const isIOS = () => Platform.OS === 'ios';
export const isAndroid = () => Platform.OS === 'android';
export const isWeb = () => Platform.OS === 'web';
