module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "node": true,

  },
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended"
  ],
  "overrides": [
      {
          "env": {
              "node": true
          },
          "files": [
              ".eslintrc.{js,cjs}"
          ],
          "parserOptions": {
              "sourceType": "script"
          }
      }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint",
      "react"
  ],
  "rules": {
    '@typescript-eslint/no-var-requires':'off',
    '@typescript-eslint/no-explicit-any':'off',
  }
}
