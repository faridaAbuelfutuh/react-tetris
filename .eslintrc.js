module.exports = {
    "parser": "@typescript-eslint/parser", // Specifies the ESLint parser
    "extends": [
        "airbnb",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    "parserOptions": {
        "ecmaVersion": 2020, // Allows for the parsing of modern ECMAScript features
        "sourceType": "module", // Allows for the use of imports
        "ecmaFeatures": {
            "jsx": true // Allows for the parsing of JSX
        }
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
            "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        "import/resolver": { // Helps eslint-plugin-import resolve Typescript modules
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    "rules": {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }], // Allow JSX in .tsx files
        "func-names": "off", // Allow unnamed functions
        "new-cap": ["error", { "newIsCap": true, "capIsNew": true, "capIsNewExceptions": ["List", "Map"] }], // Keep original new-cap rule
        "linebreak-style": "off", // Ignore linebreak style
        "import/extensions": [ // Ensure imports include extensions where required (needed for TS)
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "no-use-before-define": "off", // Disable base rule as @typescript-eslint/no-use-before-define handles it
        "@typescript-eslint/no-use-before-define": ["error"],
        "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
        "@typescript-eslint/no-explicit-any": "warn", // Warn on explicit 'any'
        "max-len": ["warn", { "code": 120 }], // Warn on lines longer than 120 chars
        "react/jsx-props-no-spreading": "off", // Allow prop spreading
        "import/prefer-default-export": "off", // Allow named exports
        "no-shadow": "off", // Disable base rule as @typescript-eslint/no-shadow handles it
        "@typescript-eslint/no-shadow": ["error"],
        "jsx-a11y/anchor-is-valid": "off", // Allow anchor tags without href (used for buttons/links)
        "jsx-a11y/click-events-have-key-events": "off", // Allow click events without key events
        "jsx-a11y/no-static-element-interactions": "off", // Allow static elements with interactions
        "react/require-default-props": "off", // Default props are less necessary with TS
        "no-unused-vars": "off", // Disable base rule as @typescript-eslint/no-unused-vars handles it
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }] // Warn on unused vars, allowing underscore prefix
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    }
};
