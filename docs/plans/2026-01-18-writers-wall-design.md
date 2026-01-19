# Writers Wall - Explorar Section Redesign

## Overview

Reimagine the Explorar section for Mexican writers as a visual "magazine wall" inspired by physical mood boards. Users browse a single scrollable canvas with author clusters arranged organically, featuring portraits, book covers, and key exam facts surfaced via tooltips.

**Goals:**
- Discovery & exploration (visually engaging, museum-like browsing)
- Study & memorization (exam facts accessible via tooltips)

## Data Structure

New `WriterProfile` type in `data/writers.ts`:

```typescript
interface Work {
  title: string;
  year?: number;
  coverUrl?: string;
  examFact: string;
}

interface Achievement {
  label: string;
  year?: number;
  examFact?: string;
}

interface WriterProfile {
  id: string;
  name: string;
  portraitUrl: string;
  birth: string;
  death?: string;
  title?: string;
  category: 'escritor' | 'poeta' | 'dramaturgo' | 'cronista';
  works: Work[];
  achievements: Achievement[];
  examFacts: string[];
}

export const WRITERS: WriterProfile[] = [...];
```

## Visual Layout

Wall collage with author clusters of varied sizes:

```
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────┐                    ┌───────────────┐               │
│  │ RULFO   │  ┌──────┐          │   OCTAVIO PAZ │  ┌──────┐     │
│  │ portrait│  │Pedro │          │   portrait    │  │Laber.│     │
│  │         │  │Páramo│          │   (larger)    │  │Soled.│     │
│  └─────────┘  └──────┘          └───────────────┘  └──────┘     │
│      ┌──────┐     ┌─────────┐        ┌──────┐                   │
│      │Llano │     │ FUENTES │        │Nobel │                   │
│      │Llamas│     │ portrait│        │ 1990 │                   │
│      └──────┘     └─────────┘        └──────┘                   │
│  ┌──────┐  ┌──────┐  ┌──────┐                                   │
│  │Aura  │  │Artemio│ │Region│    ┌───────────┐                  │
│  └──────┘  │ Cruz  │ │Transp│    │SOR JUANA  │  ┌──────┐        │
│            └──────┘  └──────┘    │ portrait  │  │Primero│       │
│                                  └───────────┘  │ Sueño │       │
└─────────────────────────────────────────────────────────────────┘
```

**Sizing:**
- Major authors (Paz, Fuentes, Rulfo, Sor Juana): larger portraits
- Book covers: consistent small size
- Achievement badges: compact pills

## Component Structure

```
components/explore/
├── WritersWall.tsx           # Main wall container, CSS grid layout
├── WriterCluster.tsx         # Author portrait + works + achievements
├── WorkCard.tsx              # Book cover card with title
├── AchievementBadge.tsx      # Small badge (Nobel, prizes)
└── WallTooltip.tsx           # Shared tooltip component
```

**Component hierarchy:**
```
WritersWall
├── WriterCluster (one per author)
│   ├── AuthorPortrait (photo + name + title)
│   ├── WorkCard (book cover + title) - multiple
│   └── AchievementBadge (Nobel, prizes) - optional
└── WallTooltip (shared, appears on hover/tap)
```

## Interaction Model

**Tooltip behavior:**
- Desktop: Hover triggers tooltip after 200ms delay
- Mobile: Tap shows tooltip, tap elsewhere dismisses
- Position: Above/below element, avoids viewport edges

**Tooltip content by element:**
| Element | Tooltip shows |
|---------|---------------|
| Author portrait | Name, years, one-line title |
| Book cover | "Pedro Páramo (1955) - Novela fundacional del realismo mágico" |
| Achievement badge | "Premio Nobel de Literatura, 1990" |

**Visual feedback:**
- Hovered/tapped element: scale(1.05) + shadow lift
- Rest of wall stays visible (no dimming)
- Tooltip has slight blur backdrop

**Accessibility:**
- Tab navigates between elements
- Enter/Space triggers tooltip
- Escape dismisses

## Writer Data (17 Authors)

### Escritores (9)

| Author | Works | Exam Facts |
|--------|-------|------------|
| Juan Rulfo | Pedro Páramo, El Llano en Llamas | Solo 2 obras, padre del realismo mágico |
| Octavio Paz | El Laberinto de la Soledad | Nobel 1990, único mexicano |
| Carlos Fuentes | Aura, Artemio Cruz, La región más transparente, Gringo viejo | Boom latinoamericano |
| Laura Esquivel | Como Agua para Chocolate | Realismo mágico contemporáneo |
| Mariano Azuela | Los de Abajo | Novela de la Revolución |
| Francisco Rojas González | El Diosero | Cuentos indigenistas |
| José Joaquín Fernández de Lizardi | El Periquillo Sarniento | Primera novela latinoamericana (1816) |
| Elena Poniatowska | La Noche de Tlatelolco | Premio Cervantes 2013, crónica del 68 |
| Jorge Ibargüengoitia | Los Relámpagos de Agosto | Sátira de la Revolución |

### Poetas (5)

| Author | Works | Exam Facts |
|--------|-------|------------|
| Sor Juana Inés de la Cruz | Primero Sueño, "Hombres necios..." | "Décima Musa", siglo XVII |
| Ramón López Velarde | Suave Patria | Poeta nacional de México |
| José Gorostiza | Muerte sin fin | Grupo Contemporáneos |
| Amado Nervo | La amada inmóvil, En paz | Poeta modernista |
| Manuel Acuña | Nocturno a Rosario | Poeta romántico |

### Dramaturgos (1)

| Author | Works | Exam Facts |
|--------|-------|------------|
| Rodolfo Usigli | El Gesticulador | Padre del teatro mexicano moderno |

### Cronistas (2)

| Author | Works | Exam Facts |
|--------|-------|------------|
| José Emilio Pacheco | Las Batallas en el Desierto | Poeta, narrador, cronista |
| Paco Ignacio Taibo II | Temporada de Zopilotes | Novela histórica, detective |

## Image Sources

**Portraits:**
- Wikipedia/Wikimedia Commons (public domain)
- Example: `https://upload.wikimedia.org/wikipedia/commons/...`

**Book covers:**
- Open Library API: `https://covers.openlibrary.org/b/isbn/{ISBN}-M.jpg`
- Curated URLs for Mexican editions where available
- Fallback: styled placeholder with book title

## File Changes

**New files:**
```
data/writers.ts                      # WriterProfile[] data
components/explore/WritersWall.tsx   # Main container
components/explore/WriterCluster.tsx # Author cluster
components/explore/WorkCard.tsx      # Book cover card
components/explore/AchievementBadge.tsx
components/explore/WallTooltip.tsx
```

**Modified files:**
```
components/ExploreMode.tsx           # Route "Escritores" to WritersWall
```

## Implementation Notes

- Use CSS Grid with `grid-template-columns: repeat(12, 1fr)` for flexible placement
- Each WriterCluster spans different column counts based on author importance
- Works flow using flex-wrap within clusters
- Tooltip uses React Portal for proper z-index stacking
- Images lazy-loaded with loading="lazy"
- Dark mode support via existing ThemeContext
