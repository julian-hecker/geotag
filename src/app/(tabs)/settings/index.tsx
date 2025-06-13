import { Link } from 'expo-router';
import { ScrollView } from 'react-native';

/**
 * App Permissions - Location, Notifications
 * Profile - Sign Out, Link Accounts
 * Appearance - Theme, Compass True/Magnetic
 * Terms, Privacy, Safety Disclaimer
 * Version, Bug Report
 */
const SETTINGS = [
    { title: 'Profile', slug: 'profile' },
    // { title: 'Location & Tracking', slug: 'location' },
    // { title: 'Appearance', slug: 'appearance' },
    // { title: 'Legal & Privacy', slug: 'legal' },
    // { title: 'About & Support', slug: 'about' },
] as const;

export default function SettingsPage() {
    return (
        <ScrollView>
            {SETTINGS.map(({ title, slug }) => (
                <Link key={slug} href={`/settings/${slug}`}>
                    {title}
                </Link>
            ))}
        </ScrollView>
    );
}
