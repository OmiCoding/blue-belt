module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: false,
      },
    ],
  },
}
