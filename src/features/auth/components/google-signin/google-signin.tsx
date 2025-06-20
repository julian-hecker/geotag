import { auth, OAuthProvider, signInWithPopup } from '@/lib/firebase/auth';
import { Button } from 'react-native';

const provider = new OAuthProvider('google.com');
provider.addScope('email');
provider.addScope('profile');

async function handleGoogleSignIn() {
    try {
        const userCredential = await signInWithPopup(auth, provider);
        console.log(userCredential);
    } catch (error) {
        console.error('Google Sign-in error:', error);
        throw error;
    }
}

export const GoogleSigninButton = () => {
    return <Button title="Sign in with Google" onPress={handleGoogleSignIn} />;
};
