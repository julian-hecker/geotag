import { Stack } from 'expo-router';

export const unstable_settings = {
    initialRouteName: 'index',
};

export default function SettingsLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Settings' }} />
            <Stack.Screen name="profile" options={{ title: 'Profile' }} />
        </Stack>
    );
}
