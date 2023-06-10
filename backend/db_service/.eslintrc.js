module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module"
    },
    plugins: ["@typescript-eslint/eslint-plugin"],
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    root: true,
    env: {
        node: true,
        jest: true
    },
    ignorePatterns: [".eslintrc.js"],
    rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "no-debugger": "error",
        "brace-style": "error",
        "block-spacing": "error",
        "eol-last": ["error", "always"],
        "react/react-in-jsx-scope": "off",
        "comma-dangle": ["error", "never"],
        "arrow-parens": ["error", "as-needed"],
        "no-console": ["error", { allow: ["warn", "error"] }],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] }
        ],
        "newline-before-return": ["error"],
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"]
            }
        ],
        "import/no-named-as-default-member": ["off"],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never"
            }
        ],
        "import/no-unresolved": 0
    }
};
