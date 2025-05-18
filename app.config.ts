import { ConfigContext, ExpoConfig } from 'expo/config';
import { version } from './package.json';

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    slug: config.slug!,
    name: config.name!,
    version,
    android: {
        ...config.android,
        googleServicesFile: process.env.GOOGLE_SERVICES_JSON ?? config.android?.googleServicesFile,
    },
    ios: {
        ...config.ios,
        googleServicesFile: process.env.GOOGLE_SERVICES_PLIST ?? config.ios?.googleServicesFile,
    },
});

/** Todo:
 * - Add multiple variants for different environments https://docs.expo.dev/tutorial/eas/multiple-app-variants/
 * Add environment variables https://docs.expo.dev/eas/environment-variables/#creating-and-using-environment-variables
 */
