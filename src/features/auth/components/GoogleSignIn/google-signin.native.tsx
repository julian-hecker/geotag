import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth';
import { Button } from 'react-native';

import { GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID } from '@/constants/environment';
import { auth } from '@/lib/firebase/auth';

GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    iosClientId: GOOGLE_IOS_CLIENT_ID,
});

async function handleGoogleSignIn() {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        const googleCredentials = GoogleAuthProvider.credential(userInfo.data?.idToken);
        return signInWithCredential(auth, googleCredentials);
    } catch (error) {
        console.error('Google Sign-in error:', error);
        throw error;
    }
}

export const GoogleSignInButton = () => {
    return <Button title="Sign in with Google" onPress={handleGoogleSignIn} />;
};
