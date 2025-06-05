import {
    AppleAuthenticationButton,
    AppleAuthenticationButtonStyle,
    AppleAuthenticationButtonType,
    AppleAuthenticationScope,
    signInAsync,
} from 'expo-apple-authentication';
import { CryptoDigestAlgorithm, digestStringAsync, randomUUID } from 'expo-crypto';
import { Platform } from 'react-native';

import { AppleAuthProvider, auth, signInWithCredential } from '@/lib/firebase/auth';

async function initiateAppleSignin() {
    const rawNonce = randomUUID();
    const hashedNonce = await digestStringAsync(CryptoDigestAlgorithm.SHA256, rawNonce);
    const credential = await signInAsync({
        requestedScopes: [AppleAuthenticationScope.FULL_NAME, AppleAuthenticationScope.EMAIL],
        nonce: hashedNonce,
    });

    if (!credential.identityToken)
        throw new Error('Apple Sign-in failed: No identity token received');

    return { token: credential.identityToken, nonce: rawNonce };
}

async function handleAppleSignin() {
    try {
        const { token, nonce } = await initiateAppleSignin();

        const credential = AppleAuthProvider.credential(token, nonce);

        await signInWithCredential(auth, credential);
    } catch (error) {
        console.error('Apple Sign-in error:', error);
        throw error;
    }
}

export const AppleSigninButton = () => {
    if (Platform.OS !== 'ios') return null;

    return (
        <AppleAuthenticationButton
            onPress={handleAppleSignin}
            buttonType={AppleAuthenticationButtonType.SIGN_IN}
            buttonStyle={AppleAuthenticationButtonStyle.WHITE}
            style={{ width: '100%', height: 44 }}
        />
    );
};
