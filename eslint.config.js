// // https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
// version ^5.4.0 was broken
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
    expoConfig,
    eslintPluginPrettierRecommended,
    { ignores: ['dist/*', 'node_modules/*', '.expo/*'] },
    { rules: { 'prettier/prettier': 'warn' } },
]);
