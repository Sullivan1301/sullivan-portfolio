---
name: ui-ux-pro-max
description: AI-powered design intelligence with UI styles, color palettes, font pairings, UX guidelines, and chart types across many tech stacks.
metadata:
  author: NextLevelBuilder
  version: "2.5.0"
  install: "npx uipro-cli init --ai {{platform}}"
---

# UI/UX Pro Max Skill

Provides searchable databases of UI styles, color palettes, typography, chart types, and UX guidelines. Supports multiple platforms (Claude, Cursor, etc.) and tech stacks.

## Usage

```bash
python3 src/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> [-n <max_results>]
```

Supported domains: `product`, `style`, `typography`, `color`, `landing`, `chart`, `ux`.

Supported stacks: `html-tailwind` (default), `react`, `nextjs`, `astro`, `vue`, `nuxtjs`, `nuxt-ui`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`.

## Installation

```bash
npx uipro-cli init --ai <platform>
```

Replace `<platform>` with one of the supported platforms (e.g., `claude`, `cursor`, `codex`).

## Architecture

```
src/ui-ux-pro-max/
├─ data/          # CSV databases
├─ scripts/       # Search engine
└─ templates/    # Skill templates
```

## Sync Rules

- Edit source files under `src/ui-ux-pro-max/`.
- Run sync scripts to copy assets to CLI bundle before publishing.
