module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
 parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    project: "./geolocator/tsconfig.json"
  },
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/quotemark": [true, "single"],
    "@typescript-eslint/indent": ["error", 4],
    // "@typescript-eslint/no-console": true,
    // "@typescript-eslint/interface-name": false,
    // "@typescript-eslint/ordered-imports": false,
    // "@typescript-eslint/object-literal-sort-keys": false,
    // "@typescript-eslint/no-consecutive-blank-lines": true,
    // "@typescript-eslint/trailing-comma": false,
    // "@typescript-eslint/space-before-function-paren": true,
    // "@typescript-eslint/no-explicit-any": false
  },
};