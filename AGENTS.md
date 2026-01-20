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

---

## 📋 Beads Issue Tracker (bd)

> **bd** is a distributed, git-backed issue tracker designed for AI agents. Use it for persistent task tracking across sessions.

### Essential Commands

| Command | Description |
|---------|-------------|
| `bd ready` | **Start here!** Shows tasks ready to work on (no blockers) |
| `bd list` | List all issues |
| `bd show <id>` | View issue details and history |
| `bd create "Title"` | Create a new issue |
| `bd create "Title" -p 0` | Create a P0 (highest priority) issue |
| `bd update <id> --status in_progress` | Mark issue as in-progress |
| `bd close <id>` | Close a completed issue |
| `bd close <id> --reason "reason"` | Close with explanation |
| `bd sync` | Sync issues with git (auto-runs, but use manually if needed) |
| `bd doctor` | Check system health |

### Issue IDs

Issues use hash-based IDs with project prefix: `mexico-history-<hash>` (e.g., `mexico-history-a3f2dd`)

### Dependencies

```bash
bd dep add <child> <parent>     # parent blocks child
bd dep tree <id>                # visualize dependency tree
```

### Workflow for Agents

1. **Session Start**: Run `bd ready` to see available work
2. **Claim Work**: `bd update <id> --status in_progress`
3. **Discover New Work**: `bd create "New task" -p <priority>`
4. **Complete Work**: `bd close <id> --reason "description"`
5. **Session End**: `bd sync` then `git push`

### Priority Levels

| Priority | Use For |
|----------|---------|
| P0 | Critical/blocking issues |
| P1 | High priority |
| P2 | Normal priority (default) |
| P3 | Low priority |
| P4 | Nice to have |

### Storage

- Issues stored in `.beads/` directory (git-tracked)
- JSONL format for easy merging across branches
- SQLite local cache for fast queries

---

## 🦸 Superpowers Skills System

> Skills from [obra/superpowers](https://github.com/obra/superpowers) - mandatory workflows for quality-first development.

### How to Use Skills

**CRITICAL:** Before starting ANY task, check if a skill applies. If there's even a 1% chance a skill is relevant, **you MUST read and follow it**.

To use a skill:
1. Read the full `SKILL.md` file at the path below
2. Follow its instructions exactly
3. Announce: "I'm using the [skill-name] skill"

### Skills Registry

| Skill | Path | When to Use |
|-------|------|-------------|
| **brainstorming** | `superpowers/skills/brainstorming/SKILL.md` | **MANDATORY** before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation. |
| **test-driven-development** | `superpowers/skills/test-driven-development/SKILL.md` | When implementing any feature or bugfix, before writing implementation code |
| **systematic-debugging** | `superpowers/skills/systematic-debugging/SKILL.md` | When encountering any bug, test failure, or unexpected behavior, before proposing fixes |
| **writing-plans** | `superpowers/skills/writing-plans/SKILL.md` | When you have a spec or requirements for a multi-step task, before touching code |
| **executing-plans** | `superpowers/skills/executing-plans/SKILL.md` | When you have a written implementation plan to execute in a separate session with review checkpoints |
| **subagent-driven-development** | `superpowers/skills/subagent-driven-development/SKILL.md` | When executing implementation plans with independent tasks in the current session |
| **dispatching-parallel-agents** | `superpowers/skills/dispatching-parallel-agents/SKILL.md` | When facing 2+ independent tasks that can be worked on without shared state or sequential dependencies |
| **using-git-worktrees** | `superpowers/skills/using-git-worktrees/SKILL.md` | When starting feature work that needs isolation from current workspace or before executing implementation plans |
| **finishing-a-development-branch** | `superpowers/skills/finishing-a-development-branch/SKILL.md` | When implementation is complete, all tests pass, and you need to decide how to integrate the work |
| **requesting-code-review** | `superpowers/skills/requesting-code-review/SKILL.md` | When completing tasks, implementing major features, or before merging to verify work meets requirements |
| **receiving-code-review** | `superpowers/skills/receiving-code-review/SKILL.md` | When receiving code review feedback, before implementing suggestions, especially if feedback seems unclear |
| **verification-before-completion** | `superpowers/skills/verification-before-completion/SKILL.md` | When about to claim work is complete, fixed, or passing, before committing or creating PRs |
| **writing-skills** | `superpowers/skills/writing-skills/SKILL.md` | When creating new skills, editing existing skills, or verifying skills work before deployment |
| **using-superpowers** | `superpowers/skills/using-superpowers/SKILL.md` | Reference for how the skills system works |

### Typical Workflows

| Situation | Skills to Use (in order) |
|-----------|--------------------------|
| New feature | brainstorming → writing-plans → test-driven-development → verification-before-completion |
| Bug fix | systematic-debugging → test-driven-development → verification-before-completion |
| Refactoring | test-driven-development (tests for existing behavior first) → verification-before-completion |
| Multi-step task | writing-plans → executing-plans OR subagent-driven-development |
| Isolated work | using-git-worktrees → [other skills] → finishing-a-development-branch |

### Iron Laws (Never Violate)

1. **TDD**: No production code without a failing test first
2. **Debugging**: No fixes without root cause investigation first  
3. **Verification**: No success claims without evidence (run the commands, show the output)
4. **Brainstorming**: No creative work without design exploration first

---

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **Check bd for remaining work**: `bd ready` - see what's left
2. **File issues for discovered work**: `bd create "Task title" -p <priority>`
3. **Close completed issues**: `bd close <id> --reason "description"`
4. **Run quality gates** (if code changed) - Tests, linters, builds
5. **SYNC AND PUSH** - This is MANDATORY:
   ```bash
   bd sync
   git pull --rebase
   git push
   git status  # MUST show "up to date with origin"
   ```
6. **Verify**: Run `bd doctor` to confirm no sync issues
7. **Hand off**: Summarize completed work and remaining `bd ready` items

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
- Always use `bd` to track work - it persists across sessions
