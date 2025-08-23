import js from "@eslint/js";
import globals from "globals";


export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,   // 👈 habilita console, process, __dirname, etc
        ...globals.es2021, // habilita recursos do ES moderno
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
];
