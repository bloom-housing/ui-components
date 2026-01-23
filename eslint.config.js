const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const react = require("eslint-plugin-react");
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

const {
    fixupConfigRules,
} = require("@eslint/compat");

const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",

        parserOptions: {
            project: true,
            tsconfigRootDir: __dirname,
        },
    },

    plugins: {
        react,
        eslintPluginPrettierRecommended
    },

    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended",
    )),

    rules: {
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/jsx-uses-vars": "warn",
        "react/jsx-uses-react": "warn",

        "@typescript-eslint/restrict-template-expressions": ["error", {
            allowNumber: true,
            allowAny: true,
        }],

        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
    },
}, globalIgnores([
    "**/node_modules",
    "**/storybook-static",
    "**/.next",
    "**/dist",
    "**/migration/",
    "**/*.stories.tsx",
    "**/.eslintrc.js",
    "**/*.config.js",
])]);
