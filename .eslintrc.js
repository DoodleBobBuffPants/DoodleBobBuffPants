module.exports = {
  env: { browser: true, es2022: true },
  extends: ["prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "tsconfig.json", sourceType: "module" },
  plugins: ["@typescript-eslint", "unused-imports", "react", "react-hooks"],
  rules: {
    eqeqeq: "error",
    "no-restricted-syntax": [
      "error",
      { selector: "ImportDeclaration[source.value=react] ImportDefaultSpecifier[local.name=React]", message: "React should not be imported as automatic JSX imports are enabled" },
    ],
    "unused-imports/no-unused-imports": "error",
    "react/no-array-index-key": "error",
    "react-hooks/rules-of-hooks": "error",
  },
};
