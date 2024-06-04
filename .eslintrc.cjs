/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:storybook/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        conditionNames: ["dev"],
      },
      node: true,
    },
    "import/internal-regex": "^@rv/",
    "import/external-module-folders": [".yarn"],
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/no-named-as-default-member": 0,
    "import/export": 0,
    "import/namespace": 0,
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
        ],
        alphabetize: {
          order: "asc",
          orderImportKind: "asc",
        },
      },
    ],
  },
  overrides: [
    // Typescript code
    {
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      extends: ["plugin:@typescript-eslint/strict-type-checked"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          {
            allowNullish: true,
            allowNumber: true,
          },
        ],
      },
    },
    // Production code
    {
      files: ["src/**/*"],
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
      plugins: ["i18next"],
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        "react/prop-types": "off",
        "i18next/no-literal-string": [
          "error",
          {
            mode: "jsx-only",
            "jsx-attributes": {
              exclude: ["appearance", "background", "border", "role", "style"],
            },
          },
        ],
      },
    },
    // MDX
    {
      files: ["**/*.mdx"],
      extends: [
        "plugin:mdx/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
      ],
      settings: {
        "mdx/code-blocks": true,
        react: {
          version: "detect",
        },
      },
    },
    // Jest code
    {
      files: ["tests/**/*"],
      env: {
        "jest/globals": true,
      },
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
    },
    // Non-production code
    {
      files: ["scripts/**/*", "tests/**/*", "stories/**/*"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
      },
    },
  ],
};
