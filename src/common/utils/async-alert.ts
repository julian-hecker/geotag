import { Alert, AlertButton, AlertOptions } from 'react-native';
import { isMobile, isWeb } from './platform';

export async function asyncAlert(
    title: string = '',
    message: string = '',
    /** Neutral, Negative, Positive. */
    buttons: AlertButton[] = [{ text: 'OK', onPress: () => {} }],
    options?: AlertOptions,
) {
    if (isMobile())
        return new Promise<void>((resolve) => {
            const alertButtons: AlertButton[] = buttons.map((button) => ({
                ...button,
                onPress: () => {
                    button.onPress?.();
                    resolve();
                },
            }));

            Alert.alert(title, message, alertButtons, options);
        });

    if (isWeb() && typeof window !== 'undefined') {
        const ok = window.confirm(message);
        // First button is "Cancel", second is "OK"
        buttons[ok ? 1 : 0]?.onPress?.();
        return Promise.resolve();
    }
}
