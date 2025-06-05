import { auth, OAuthProvider, signInWithPopup } from '@/lib/firebase/auth';
import { Button } from 'react-native';

const provider = new OAuthProvider('apple.com');
provider.addScope('email');
provider.addScope('name');

async function handleAppleSignin() {
    try {
        const userCredential = await signInWithPopup(auth, provider);
        console.log(userCredential);
    } catch (error) {
        console.error('Apple Sign-in error:', error);
        throw error;
    }
}

export const AppleSigninButton = () => {
    return <Button title="Sign in with Apple" onPress={handleAppleSignin} />;
};
