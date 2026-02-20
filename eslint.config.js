import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
      "unused-imports": unusedImportsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    languageOptions: {
      globals: { ...globals.browser },
      parser: tsParser,
      parserOptions: { project: "tsconfig.json" },
      sourceType: "module",
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // eslint rules
      eqeqeq: ["error", "smart"],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ImportDeclaration[source.value=react] ImportDefaultSpecifier[local.name=React]",
          message: "React should not be imported as automatic JSX imports are enabled",
        },
        {
          selector: 'ImportDeclaration:not([importKind="type"])[source.value=@mui/material]',
          message: "Importing from @mui/material loads all components which is slow. Use narrower imports instead such as @mui/material/Button",
        },
      ],
      // unused-imports rules
      "unused-imports/no-unused-imports": "error",
      // react rules
      "react/no-array-index-key": "error",
      // react-hooks rules
      "react-hooks/rules-of-hooks": "error",
    },
  },
];
