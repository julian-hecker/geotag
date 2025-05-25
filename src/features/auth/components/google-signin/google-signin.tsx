import { auth, GoogleAuthProvider, signInWithPopup } from '@/lib/firebase/auth';
import { Button } from 'react-native';

async function handleGoogleSignIn() {
    try {
        const result = await signInWithPopup(auth, new GoogleAuthProvider());
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // return signInWithCredential(auth, googleCredentials);
    } catch (error) {
        console.error('Google Sign-in error:', error);
        throw error;
    }
}

export const GoogleSigninButton = () => {
    return <Button title="Sign in with Google" onPress={handleGoogleSignIn} />;
};
