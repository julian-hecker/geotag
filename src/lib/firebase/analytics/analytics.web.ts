import { initializeAnalytics, isSupported, logEvent } from 'firebase/analytics';
import { app } from '../app';

// @ts-ignore
if (__DEV__) globalThis.RNFBDebug = true;

export * from 'firebase/analytics';
export let analytics: ReturnType<typeof initializeAnalytics>;

isSupported()
    .then((supported) => {
        if (supported) {
            analytics = initializeAnalytics(app);
        } else {
            console.warn('Firebase Analytics is not supported in this environment.');
        }
    })
    .catch((error) => {
        console.error('Error initializing Firebase Analytics:', error);
    });

type LogEventArgs = Parameters<typeof logEvent> extends [any, ...infer Rest] ? Rest : never;

export function trackEvent(...args: LogEventArgs) {
    if (!analytics) {
        console.warn('Analytics is not initialized. Cannot track event.');
        return;
    }
}
