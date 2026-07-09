# AGENTS.md

## Purpose

Guide for coding agents working in this Astro portfolio repository.
Use this file as the default implementation and validation rulebook.

## Rule Sources Checked

- `.cursor/rules/`: not found
- `.cursorrules`: not found
- `.github/copilot-instructions.md`: not found
  No Cursor/Copilot-specific instructions exist currently.

## Stack Overview

- Astro 5 app (`output: 'server'`) with Vercel adapter
- UI: Astro components + one React/TSX animation component
- Styles: Tailwind utilities + SCSS + global SCSS variables
- Lint: ESLint flat config (`typescript-eslint`, `astro`, `jsx-a11y`)
- Format: Prettier (+ Astro, organize-imports, tailwindcss plugins)
- TypeScript: strict (`astro/tsconfigs/strict`)

## Package Manager and Environment

- `pnpm-lock.yaml` exists: prefer `pnpm`
- No required environment variables at this time

## Build / Lint / Test Commands

Run from repository root.

### Install

- `pnpm install`

### Dev Server

- `pnpm dev`
- `pnpm start` (same as `dev`)

### Build

- `pnpm build`
- Runs `astro check && astro build`
- Primary validation command before handoff

### Preview

- `pnpm preview`

### Lint

- `pnpm lint:start`
- `pnpm lint:fix`
- `pnpm lint` (same as `lint:start`)

### Format

- `pnpm format`
- `pnpm format:check`

### Type Check (direct)

- `pnpm astro check`

## Test Status (Important)

- No dedicated test runner is configured yet
- No `*.test.*` / `*.spec.*` files found
- No Vitest/Jest/Playwright/Cypress config found
  Validation fallback:
- `pnpm lint:start`
- `pnpm build`

### Running a Single Test

Not currently possible (no test framework configured).
If a framework is added, update this section with exact commands, for example:

- `pnpm vitest path/to/file.test.ts`
- `pnpm vitest -t "case name"`

## Source Structure

- `src/pages/`: route entry files
- `src/app/`: layout shell and app-level UI
- `src/widgets/`: page sections
- `src/shared/`: shared UI, constants, and shared assets/styles
- `src/entities/`: reserved placeholder
- `public/`: static assets/fonts

## Import Conventions

- Prefer path aliases over deep relative imports:
  - `@app/*`, `@pages/*`, `@shared/*`, `@widgets/*`, `@entities/*`
- Keep import groups separated by one blank line:
  - framework/external
  - internal alias imports
- Let Prettier organize imports; avoid manual reordering unless required

## Formatting Conventions

From `.prettierrc`:

- `semi: false`
- `singleQuote: true`
- `printWidth: 80`
- `trailingComma: 'all'`
- `useTabs: false`
- `tabWidth: 2`
- `*.json`, `*.md`, `*.toml`, `*.yml` use spaces (`useTabs: false`)
  Always run formatting after substantial edits.

## Type and Props Conventions

- Keep strict typing; do not loosen TS settings
- In Astro files, define `Props` for non-trivial component props
- Prefer `import type` for type-only imports
- Use literal unions for constrained string props
- Avoid `any`; use narrowed explicit types/interfaces

## Naming Conventions

- Component files: PascalCase (`Header.astro`, `AnimationFade.tsx`)
- Variables and props: camelCase
- Exported constants: UPPER_SNAKE_CASE (`PROJECTS`)
- Keep section IDs stable (`#home`, `#about`, etc.) to avoid nav/modal breakage

## Styling Conventions

- Reuse CSS variables from `src/shared/assets/scss/variables.scss`
- Keep component-local styles in `<style>` blocks or nearby SCSS files
- Follow current mixed strategy:
  - Tailwind for layout/utility classes
  - SCSS for themed component blocks
- Preserve established typography scale and font-family usage

## Error Handling Guidance

The repo is mostly presentational. For new logic (forms, async work, API calls):

- Validate inputs early
- Render clear failure states
- Avoid silent failures/catches
- Keep user-facing errors concise and actionable

## Accessibility Guidance

- Preserve semantic tags (`nav`, `header`, `section`, `form`, etc.)
- Keep meaningful image `alt` text
- Preserve keyboard and dialog usability
- Respect ESLint a11y checks from Astro config

## Agent Execution Checklist

Before completing a task:

1. Run `pnpm run format:check`
2. Run `pnpm lint:start`
3. Run `pnpm build`
4. Report failures with exact file paths and likely causes
5. Keep edits scoped; avoid unrelated refactors
6. Preserve alias/import/format conventions

## High-Value Config Files

- `package.json`
- `eslint.config.ts`
- `.prettierrc`
- `tsconfig.json`
- `astro.config.mjs`
- `src/shared/assets/scss/variables.scss`

## Maintenance Note

When adding new toolchain rules (tests, CI, lint, format, or agent rules),
update this file in the same PR so future coding agents stay accurate.
