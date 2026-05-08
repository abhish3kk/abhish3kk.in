# Next.js + MDX Migration Plan

## Phase 0 Baseline

This document captures the starting point for migrating the current Vue/Vite
personal site into a static-first Next.js + MDX engineering portfolio.

### Current branch

- Baseline branch: `main`
- Migration branch: `codex-next-mdx-migration`
- Preferred branch name `codex/next-mdx-migration` could not be created in the
  local workspace because Git could not create the nested ref path. The flat
  branch name keeps the migration isolated without changing repository history.

### Current public routes

| Current route    | Purpose         | Migration target |
| ---------------- | --------------- | ---------------- |
| `/`              | Home/about page | `/`              |
| `/projects`      | Project index   | `/work`          |
| `/project/:slug` | Project detail  | `/work/:slug`    |

The current repository contains `src/pages/NotFound.vue`, but there is no
catch-all route wired into Vue Router.

### Current content sources

- `src/content/projects/abhish3kk.in.md`
- `src/content/projects/repofinder-react.md`
- `src/i18n/locales/en.json` for home page copy

The migration should preserve the existing Markdown content, then reshape it
into typed MDX case studies under `content/work`.

### Current deployment assumptions

- Hosting: Azure Static Web Apps
- CI/CD: GitHub Actions
- Current output folder: `dist`
- Target static output folder after Next.js migration: `out`
- Existing Azure SWA navigation fallback should remain useful for static routes
  and legacy redirects.

### Local verification status

Initial `npm run build` failed because local dependencies were not installed in
this workspace:

```text
sh: 1: vue-tsc: not found
```

After running `npm ci`, the baseline production build completed successfully:

```text
vue-tsc -b && vite build
```

Observed baseline warnings:

- Local shell is using Node `v24.15.0`, while the repo declares Node `22.14.0`.
- `npm ci` reported dependency vulnerabilities.
- Vite reported use of `eval` inside `gray-matter`.
- Vite reported large chunks, with the main bundle over 1 MB minified. Mermaid
  and related diagram chunks are a major contributor.

Before the migration is merged, verify the migrated app with Node `22.14.0` or
update the project engine intentionally.

### Rollback baseline

Rollback remains simple while `main` is untouched:

- keep the Vue/Vite implementation available on `main`
- keep migration work isolated on this branch
- use small commits for each phase
- avoid deleting the old `src` implementation until the Next.js static export
  has route and content parity
- if deployment fails after the CI update, revert the workflow/output-folder
  change first

### Phase 0 completion criteria

- [x] Confirm initial repository branch and status
- [x] Create isolated migration branch
- [x] Record current route map
- [x] Record content sources
- [x] Record Azure deployment assumptions
- [x] Record rollback approach
- [x] Verify clean local production build after dependencies are installed
