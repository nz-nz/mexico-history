# 🤖 AI Agent Context - Mexico History Study App

> **Purpose**: This document provides AI agents with comprehensive context about the application architecture, data structures, and development patterns.

---

## 📋 Application Overview

**Name**: Mexican Naturalization Study App  
**Purpose**: Interactive learning tool for Mexican history, culture, and civics - designed for naturalization exam preparation  
**Stack**: React + TypeScript + Vite  
**Port**: http://localhost:3000

---

## 🏗️ Architecture

### Directory Structure

```
/
├── App.tsx                 # Main app with routing between game modes
├── index.tsx               # React entry point
├── types.ts                # Game-related TypeScript types
├── constants.ts            # Game data with visual assets (images, coords)
├── vite.config.ts          # Vite config (port 3000)
│
├── components/
│   ├── GameMenu.tsx        # Main menu with mode selection
│   ├── StudyMode.tsx       # SRS flashcard study interface
│   ├── QuizGame.tsx        # Multiple choice quiz game
│   ├── MatchingGame.tsx    # Drag-and-drop matching game
│   ├── TimelineGame.tsx    # Historical timeline sorting
│   ├── MapGame.tsx         # Geographic location game
│   ├── StandardCard.tsx    # Q&A flashcard component
│   └── ClozeCard.tsx       # Fill-in-the-blank card component
│
├── contexts/
│   └── ThemeContext.tsx    # Dark/light theme provider
│
├── data/
│   ├── content.ts          # Generates modules from knowledge base
│   └── categories/
│       ├── types.ts        # Category enum, KnowledgeEntry interface (NO IMPORTS)
│       ├── index.ts        # Re-exports types + KNOWLEDGE_BASE array + lookup functions
│       ├── prehispanico.ts
│       ├── conquistaColonia.ts
│       ├── independencia.ts
│       ├── revolucion.ts
│       ├── contemporaneo.ts
│       ├── civismo.ts
│       ├── tradiciones.ts
│       ├── gastronomia.ts
│       ├── geografia.ts
│       ├── literaturaMusica.ts
│       ├── pinturaCine.ts
│       ├── cienciaDeportes.ts
│       └── geoCoordinates.ts
│
├── hooks/
│   └── useSRS.ts           # Spaced repetition system hook
│
├── utils/
│   └── dateEmoji.ts        # Date-to-emoji visualization utilities
│
└── public/                 # Static assets
```

---

## 📊 Data Layer

### Knowledge Base Structure

The **single source of truth** is the knowledge base in `/data/categories/`. All content (~400+ entries) organized by:

#### Categories (12 total)
```typescript
enum Category {
  PREHISPANICO        // 🏛️ México Prehispánico
  CONQUISTA_COLONIA   // ⚔️ Conquista y Colonia
  INDEPENDENCIA       // 🔔 Independencia
  REVOLUCION          // 🎺 Revolución
  CONTEMPORANEO       // 🏙️ México Contemporáneo
  CIVISMO             // 📜 Civismo
  TRADICIONES         // 🎭 Tradiciones y Cultura
  GASTRONOMIA         // 🌮 Gastronomía
  GEOGRAFIA           // 🗺️ Geografía y Población
  LITERATURA_MUSICA   // 📚 Literatura y Música
  PINTURA_CINE        // 🎨 Pintura y Cine
  CIENCIA_DEPORTES    // 🔬 Ciencia y Deportes
}
```

#### KnowledgeEntry Interface
```typescript
interface KnowledgeEntry {
  id: string;              // e.g., "PRE_OLM_001"
  category: Category;
  subcategory: string;     // e.g., "Olmeca", "Azteca"
  question: string;
  answer: string;
  tags: string[];
  famousQuote?: { text: string; attribution: string };
  imageUrl?: string;
  relatedIds?: string[];
  coordinates?: { lat: number; lng: number };
  date?: string;           // e.g., "16 sep 1810"
  dateYear?: number;       // e.g., 1810
  period?: string;
}
```

### ⚠️ Critical: Circular Dependency Prevention

**Problem Solved**: The `types.ts` file was created to break circular imports.

**Rule**: Category data files (`prehispanico.ts`, etc.) must import from `./types`, NOT from `./index`:
```typescript
// ✅ CORRECT
import { KnowledgeEntry, Category } from './types';

// ❌ WRONG - causes circular dependency
import { KnowledgeEntry, Category } from './index';
```

**Why**: `index.ts` imports all category files to build `KNOWLEDGE_BASE[]`. If category files import from `index.ts`, you get a circular reference where `Category` enum is undefined at runtime.

---

## 🎮 Game Modes

| Mode | Component | Description |
|------|-----------|-------------|
| `MENU` | `GameMenu.tsx` | Category/mode selection |
| `STUDY` | `StudyMode.tsx` | SRS flashcard review |
| `QUIZ` | `QuizGame.tsx` | Multiple choice questions |
| `MATCHING` | `MatchingGame.tsx` | Term-definition matching |
| `TIMELINE` | `TimelineGame.tsx` | Chronological sorting |
| `MAP` | `MapGame.tsx` | Geographic location placement |

---

## 📚 Spaced Repetition System (SRS)

### Algorithm: Leitner 5-Box Method

```
Box 1 → Review in 1 day   (new/failed cards)
Box 2 → Review in 3 days
Box 3 → Review in 7 days
Box 4 → Review in 14 days
Box 5 → Review in 30 days (mastered)
```

### SRS State Structure
```typescript
interface SRSState {
  box: number;           // 1-5
  lastReviewed: string;  // ISO date
  nextReview: string;    // ISO date
  correctStreak: number;
  totalReviews: number;
  correctReviews: number;
}
```

### Storage
- **Key**: `mexico_naturalization_srs_state_v2`
- **Format**: `{ srsState: Record<cardId, SRSState>, settings: SessionSettings }`

### Session Settings
```typescript
interface SessionSettings {
  maxNewCardsPerSession: number;    // Default: 20
  maxReviewCardsPerSession: number; // Default: 100
  showQuotesInContext: boolean;
  autoPlayAudio: boolean;
  enableTimer: boolean;
  timerSeconds: number;
}
```

---

## 🎨 Visual Features

### Date Emoji System (`utils/dateEmoji.ts`)

Converts dates to memorable emoji representations:

```typescript
// Month emojis (seasonal/cultural associations)
MONTH_EMOJIS = {
  1: '❄️',      // January - Winter
  2: '💕',      // February - Valentine's/Love
  3: '🌸',      // March - Spring begins
  4: '🌧️',      // April - Rainy season
  5: '🌺',      // May - Flowers bloom
  6: '☀️',      // June - Summer begins
  7: '🏖️',      // July - Summer vacation
  8: '🌽',      // August - Corn harvest
  9: '🇲🇽',      // September - Mexican Independence
  10: '💀',     // October - Día de Muertos prep
  11: '🍂',     // November - Autumn/Día de Muertos
  12: '🎄',     // December - Christmas
}

// Special dates
SPECIAL_DATES = {
  '16 sep': '🇲🇽🔔🎉',  // Independence Day
  '5 may': '⚔️🇲🇽',     // Batalla de Puebla
  '2 nov': '💀🌺',       // Día de Muertos
  ...
}

// Era emojis
ERA_EMOJIS = {
  prehispanic: '🏛️',
  colonial: '⛪',
  independence: '🔔',
  revolution: '🎺',
  modern: '🏙️'
}
```

### Card Components

- **StandardCard**: Shows question → reveals answer with date emoji
- **ClozeCard**: Fill-in-the-blank with {{cloze}} syntax

---

## 🔧 Development Commands

```bash
npm install     # Install dependencies
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build
```

---

## 📝 Common Tasks

### Adding New Knowledge Entries

1. Find the appropriate category file in `/data/categories/`
2. Add entry following `KnowledgeEntry` interface
3. Ensure unique `id` with pattern: `{CAT}_{SUB}_{NUM}` (e.g., `PRE_MAY_015`)

### Adding New Category

1. Add to `Category` enum in `/data/categories/types.ts`
2. Add labels/icons in same file
3. Create new data file (e.g., `newCategory.ts`)
4. Import from `./types` (NOT `./index`)
5. Export data array and import in `index.ts`

### Modifying SRS Algorithm

- Intervals: `SRS_INTERVALS` in `constants.ts`
- Logic: `useSRS.ts` hook
- Storage key: `STORAGE_KEY` in `constants.ts`

---

## 🐛 Known Issues / Gotchas

1. **Circular imports**: Always import Category/KnowledgeEntry from `./types` in data files
2. **LocalStorage versioning**: Changed storage key to `_v2` - old data won't migrate
3. **HMR**: Multiple HMR updates are normal during development

---

## 📅 Last Updated

January 2026 - Added date emoji visualization, fixed circular dependency

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
