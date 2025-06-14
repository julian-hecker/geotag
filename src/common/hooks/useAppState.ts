import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export function useAppState(callback: (state: AppStateStatus) => void | Promise<void>) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        callbackRef.current(AppState.currentState);
        const subscription = AppState.addEventListener('change', callbackRef.current);
        return () => {
            subscription.remove();
        };
    }, []);
}
