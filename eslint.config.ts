import tseslint from 'typescript-eslint'
import { createRequire } from 'node:module'
import { defineConfig, globalIgnores } from 'eslint/config'
import type { Linter } from 'eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'
import js from '@eslint/js'

const require = createRequire(import.meta.url)
const jsxA11y = require('eslint-plugin-jsx-a11y') as {
  flatConfigs: {
    recommended: Linter.Config
  }
}

export default defineConfig([
  globalIgnores([
    '.vercel/',
    'node_modules/',
    'dist/',
    'build/',
    'out/',
    '.agents/',
    '.astro/',
  ]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...jsxA11y.flatConfigs.recommended,
    files: ['**/*.{jsx,tsx}'],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    plugins: {},
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  // Disable rules that conflict with Prettier.
  eslintConfigPrettier,
])
