// .eslintrc.js
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  rules: {
    "@typescript-eslint/no-empty-interface": "off", // optional if you also use interfaces like `interface X {}`

    "@typescript-eslint/no-empty-object-type": [
      "warn",
      {
        allowObjectTypes: true // this lets you use {} like before
      }
    ],
    "@typescript-eslint/no-explicit-any": [
      "warn",
      {
        ignoreRestArgs: false,
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_", // allows unused `_args`
        varsIgnorePattern: "^_",
      }
    ],
    "@typescript-eslint/no-require-imports": "off", // only if you're using require() intentionally
    "@typescript-eslint/no-this-alias": "off", // if you're aliasing this
  },
};
