// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: "module"

  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    'no-unused-vars': ["error", { "args": "none", "caughtErrors": "none" }],
    "array-callback-return" : ['error'],
    "no-return-assign": 2,
    "strict": ['error', 'global'],
    "template-curly-spacing": ["error", "never"],
    "prefer-const": ["error", {
      "destructuring": "all",
      "ignoreReadBeforeAssign": false
    }],
    /*Disallow eval() (no-eval)*/
    "no-eval": 2,
    // /* disallow the use of console (no-console)*/
    "no-console": 1,
    /*Disallow multiple spaces (no-multi-spaces)*/
    "no-multi-spaces": 1,
    // /*require braces around arrow function bodies*/
    // "arrow-body-style": [1, "always"],
    // /*disallow unused expressions*/
    // "no-unused-expressions": [1, { "allowTernary": true }],
    /*enforce consistent indentation [default style is 4 spaces]*/
    "indent": [1, 2],
    // /*quotes*/
    // "quotes": [ 1, "single" ],
    /*enforce consistent spacing after the // or /* in a comment*/
    "spaced-comment": 2,
    // /*enforce a maximum line length*/
    // "max-len": [1, { "code": 120 }],
    /*enforce camelcase naming convention*/
    "camelcase": 0,
    // /*require or disallow trailing commas*/
    // "comma-dangle": [1, "never"],
    /*enforce consistent spacing inside array brackets*/
    "array-bracket-spacing": [1, "always"],
    // /*require parentheses around arrow function arguments*/
    // "arrow-parens": [0, { "requireForBlockBody": true }],
    /*enforce consistent spacing inside braces*/
    "object-curly-spacing": [1, "always"],
    /*disallow nested ternary expressions*/
    "no-nested-ternary": 1,
    // /*Ensure consistent use of file extension within the import path*/
    // "import/extensions": [0],
    // /*disallow dangling underscores in identifiers*/
    // "no-underscore-dangle": [1, { "allowAfterThis": true }],
    // // disallow else blocks after return statements in if statements
    // "no-else-return": 1,
    /*require constructor names to begin with a capital letter (new-cap)*/
    "new-cap": ["error", { "newIsCap": true }],
    // /*Suggest using template literals instead of string concatenation. (prefer-template)*/
    // "prefer-template": 1,
    // /*Require Default Case in Switch Statements (default-case)*/
    // "default-case": 1
  }
}
