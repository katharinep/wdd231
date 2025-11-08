import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

import pluginJs from "@esling/js";

export default [
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      semi: "error",
      "prefer-const": "error"
    }
  }
];
