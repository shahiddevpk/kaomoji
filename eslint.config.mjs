import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Local audit / QA scratch (not app source):
    "_audit_export/**",
    ".qa-*.cjs",
    ".qa-*.js",
    // One-shot Node stubs (CommonJS require; not app source):
    "scripts/**",
  ]),
]);

export default eslintConfig;
