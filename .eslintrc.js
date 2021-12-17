// What is this file? https://eslint.org/docs/user-guide/configuring/configuration-files

module.exports = {
  root: true,
  overrides: [
    {
      // Many of the files in this repository are TypeScript files.
      files: ["**/*.ts", "**/*.tsx"],

      plugins: [
        // TypeScript linting
        // https://typescript-eslint.io/docs/linting/linting
        "@typescript-eslint",

        // TypeScript documentation linting
        // https://tsdoc.org/pages/packages/eslint-plugin-tsdoc/
        "eslint-plugin-tsdoc",
      ],
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",

        // Prevent misspelling of file paths and import names.
        // https://github.com/import-js/eslint-plugin-import
        "plugin:import/recommended",
        "plugin:import/typescript",

        // Add React-specific linting rules.
        // https://github.com/yannickcr/eslint-plugin-react
        // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",

        // Add accessibility rules.
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
        "plugin:jsx-a11y/strict",

        // Add rules/configuration recommended by Next.js.
        // https://nextjs.org/docs/basic-features/eslint
        "next/core-web-vitals",

        // Turn off formatting rules that are unnecessary or might conflict with Prettier.
        // https://prettier.io/docs/en/integrating-with-linters.html
        "prettier",
      ],
      rules: {
        // Enable documentation linting rules.
        "tsdoc/syntax": "warn",

        // Avoid next/image because it is not supported with "next export" static website mode
        "@next/next/no-img-element": "off",
      },
    },
    {
      // The reason why some JavaScript files exist in this TypeScript repository is to configure tools such as ESLint, Next.js, ...
      files: ["**/*.js"],
      extends: [
        // Start with default ESLint recommended rules.
        // https://eslint.org/docs/rules/
        "eslint:recommended",

        // Acknowledge Node.js conventions (such as using "require" and "process").
        // https://github.com/mysticatea/eslint-plugin-node
        "plugin:node/recommended",

        // Add documentation linting rules.
        // https://github.com/gajus/eslint-plugin-jsdoc
        "plugin:jsdoc/recommended",

        // Turn off formatting rules that are unnecessary or might conflict with Prettier.
        // https://prettier.io/docs/en/integrating-with-linters.html
        "prettier",
      ],
    },
  ],
};
