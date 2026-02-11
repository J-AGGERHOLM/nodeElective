const js = require("@eslint/js");
const globals = require("globals");
const prettier = require("eslint-config-prettier");


module.exports = [
  js.configs.recommended,
  prettier,

  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node, // important for Node/Express
    },

    rules: {
      /*
       ========================
       BUG PREVENTION
       ========================
      */

      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-empty-function": "warn",
      "no-unreachable": "error",
      "no-constant-condition": "warn",

      /*
       ========================
       SAFETY / BEST PRACTICE
       ========================
      */

      eqeqeq: ["error", "always"], // force === instead of ==
      curly: ["error", "all"], // require braces for if/loops
      "no-var": "error", // force let/const
      "prefer-const": "warn",
      "no-console": "off", // Node apps usually allow console

      /*
       ========================
       CODE CLARITY
       ========================
      */

      "max-depth": ["warn", 3],
      "max-lines-per-function": ["warn", 60],
      complexity: ["warn", 8],

      /*
       ========================
       COMMON JS GOTCHAS
       ========================
      */

      "no-shadow": "warn",
      "no-use-before-define": "warn",
      "consistent-return": "warn",

      /*
       ========================
       STYLE (LIGHT)
       ========================
      */

      semi: ["warn", "always"],
      quotes: ["warn", "double"],
      indent: ["warn", 2],
    },
  },
];
