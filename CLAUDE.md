# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm install         # Install dependencies
npm run dev         # Start dev server (localhost:3000, hot reload)
npm run build       # Production build to /dist
npm run preview     # Preview production build on localhost:8080
```

No linting or test runners are configured - TypeScript checking happens via tsconfig during build.

## Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS (via CDN in index.html)
- Framer Motion for animations
- Leaflet + React-Leaflet for map game
- Lucide React for icons

## Architecture Overview

This is an interactive study app for Mexican naturalization exam preparation with 6 game modes:
- **STUDY**: SRS flashcard review (Leitner 5-Box method)
- **QUIZ**: Multiple choice questions
- **MATCHING**: Drag-and-drop term matching
- **TIMELINE**: Chronological sorting
- **MAP**: Geographic location placement
- **EXPLORE**: Browse knowledge base entries

### Data Flow

```
data/categories/*.ts → data/categories/index.ts → data/content.ts → Components
       ↓
   KnowledgeEntry[]  →  KNOWLEDGE_BASE  →  Modules/Decks  →  Game State
```

### Critical: Circular Dependency Prevention

Category data files (`data/categories/*.ts`) **MUST** import from `./types`, NOT from `./index`:

```typescript
// CORRECT
import { KnowledgeEntry, Category } from './types';

// WRONG - causes circular dependency where Category is undefined at runtime
import { KnowledgeEntry, Category } from './index';
```

This pattern exists because `index.ts` imports all category files to build `KNOWLEDGE_BASE[]`.

### SRS Storage

- **LocalStorage key**: `mexico_naturalization_srs_state_v2`
- State includes card box levels (1-5), review dates, and session settings

### Theme System

`ThemeContext` provides dark/light mode toggle, persisted to `mexico_history_theme` in localStorage.

## Knowledge Base IDs

Entry IDs follow pattern: `{CAT}_{SUB}_{NUM}` (e.g., `PRE_MAY_015` for Pre-Hispanic Maya entry #15)

## Additional Context

See `AGENTS.md` for comprehensive documentation including:
- Full KnowledgeEntry interface and Category enum details
- SRS algorithm intervals and state structure
- Date emoji visualization system
- Beads (bd) issue tracker commands and workflow
- Superpowers skills system for development workflows
