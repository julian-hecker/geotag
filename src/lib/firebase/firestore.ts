import { getFirestore } from '@react-native-firebase/firestore';

import { firebase } from '.';

export * from '@react-native-firebase/firestore';

export const db = getFirestore(firebase);
