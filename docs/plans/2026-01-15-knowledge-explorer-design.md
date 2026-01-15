# Knowledge Explorer (Explorar) - Design Document

> **Date**: January 15, 2026  
> **Status**: Approved  
> **Feature**: Interactive knowledge graph for browsing the knowledge base

---

## Overview

A standalone view for exploring the knowledge base as an interactive graph, where users can discover connections between Mexican history, culture, and civics content.

### Key Decisions

| Aspect | Decision |
|--------|----------|
| **Type** | Interactive knowledge graph |
| **Connections** | Category-based with cross-category links |
| **Navigation** | Click to focus, progressive exploration |
| **Node visuals** | Mixed: images for visual entries, icons for text |
| **Algorithm** | Smart matching (tags, text, temporal, geographic) |
| **Location** | Standalone "Explorar" section (not a game mode) |
| **Library** | d3-force + SVG (lightweight) |

---

## Architecture

### Directory Structure

```
components/
├── ExploreMode.tsx              # Main container, graph state
├── explore/
│   ├── KnowledgeGraph.tsx       # SVG graph rendering with d3-force
│   ├── GraphNode.tsx            # Individual node (image vs icon)
│   └── NodeDetail.tsx           # Side panel with full entry info

utils/
└── connectionFinder.ts          # Smart matching algorithm
```

### Navigation Flow

```
Main Menu
├── Estudiar (existing)
├── Quiz (existing)
├── ... other modes ...
└── 📚 Explorar ← NEW standalone section
    └── Knowledge Graph View
        ├── Initial: Category clusters
        ├── Click node → Focus + show connections
        └── Click connected node → Navigate deeper
```

---

## Smart Connection Algorithm

### Connection Types & Weights

```typescript
type ConnectionType = 
  | 'explicit'      // relatedIds (weight: 1.0)
  | 'shared_tag'    // same tag (weight: 0.7)
  | 'subcategory'   // same subcategory (weight: 0.6)
  | 'text_match'    // name appears in answer (weight: 0.8)
  | 'temporal'      // same decade/period (weight: 0.4)
  | 'geographic';   // same location tag (weight: 0.5)
```

### Matching Rules (Priority Order)

1. **Explicit Links** (1.0) - `relatedIds` if populated
2. **Text Match** (0.8) - Answer mentions another entry's key term
3. **Shared Tags** (0.7) - Common tags create connections
4. **Same Subcategory** (0.6) - Entries in same group
5. **Geographic** (0.5) - Location-based tags
6. **Temporal** (0.4) - Same era/decade

### Example

For entry "Frida Kahlo" (PIN_PIN_001):
```
Connections found:
├── Diego Rivera (PIN_MUR_002) - text_match [0.8]
├── Casa Azul (PIN_PIN_003) - shared_tag [0.7]
├── Las Dos Fridas (PIN_PIN_002) - subcategory [0.6]
├── Muralismo (PIN_MUR_001) - shared_tag [0.7]
└── Coyoacán (GEO_...) - geographic [0.5]
```

---

## Visual Design

### Node Types

**With Image:**
- 60x60px thumbnail
- Label below
- Border: category color

**Without Image:**
- 48px category emoji
- Label below
- Border: category color

### Category Colors

```typescript
const CATEGORY_COLORS: Record<Category, string> = {
  PREHISPANICO: '#8B4513',      // Sienna (earth)
  CONQUISTA_COLONIA: '#DAA520', // Goldenrod
  INDEPENDENCIA: '#228B22',     // Forest green
  REVOLUCION: '#B22222',        // Firebrick red
  CONTEMPORANEO: '#4169E1',     // Royal blue
  CIVISMO: '#2F4F4F',           // Dark slate
  TRADICIONES: '#FF6347',       // Tomato
  GASTRONOMIA: '#FF8C00',       // Dark orange
  GEOGRAFIA: '#3CB371',         // Medium sea green
  LITERATURA_MUSICA: '#9370DB', // Medium purple
  PINTURA_CINE: '#DB7093',      // Pale violet red
  CIENCIA_DEPORTES: '#20B2AA',  // Light sea green
};
```

### Layout States

**Initial View:** Category clusters with 5-8 sample nodes per category

**Focused View:** Selected node centered, connections visible, non-connected nodes faded to 30% opacity

### Detail Panel

Right-side panel (bottom sheet on mobile) showing:
- Large image (if available)
- Question/Answer
- Tags
- List of connections

---

## Interaction Model

### State Structure

```typescript
interface ExploreState {
  nodes: GraphNode[];
  connections: Connection[];
  focusedNodeId: string | null;
  visibleNodeIds: Set<string>;
  navigationHistory: string[];
  activeCategories: Category[];
  searchQuery: string;
}
```

### User Actions

| Action | Response |
|--------|----------|
| Opens Explorar | Show category clusters |
| Clicks node | Center node, show connections, display detail panel |
| Clicks connected node | Navigate to that node |
| Clicks background | Unfocus, return to overview |
| Clicks Back button | Pop history, focus previous |
| Types in search | Filter visible nodes |

### Navigation History

```
Explorar > Frida Kahlo > Diego Rivera > Muralismo
[← Back] returns to Diego Rivera
```

---

## Implementation Phases

### Phase 1: Foundation (MVP)

| Task | Files |
|------|-------|
| Add EXPLORE to GameMode enum | `types.ts` |
| Add "Explorar" button to menu | `GameMenu.tsx` |
| Create connection finder utility | `utils/connectionFinder.ts` |
| Create ExploreMode container | `components/ExploreMode.tsx` |
| Create GraphNode component | `components/explore/GraphNode.tsx` |
| Create NodeDetail panel | `components/explore/NodeDetail.tsx` |
| Basic SVG layout with d3-force | `components/explore/KnowledgeGraph.tsx` |
| Wire up App.tsx routing | `App.tsx` |

**MVP Deliverable:** Navigate knowledge graph, see connections, view details

### Phase 2: Polish

- Animate node transitions
- Navigation history + back button
- Category color coding
- Connection line thickness by strength
- Lazy load images
- Mobile responsive layout

### Phase 3: Enhancements (Future)

- Search bar with instant filter
- Category filter chips
- "Random exploration" button
- Save favorite paths
- Integration with SRS

---

## Dependencies

```json
{
  "d3-force": "^3.0.0"
}
```

---

## Performance Considerations

1. **Lazy image loading** - Only load thumbnails for visible nodes
2. **Connection cache** - Precompute all connections on first render
3. **Virtual rendering** - Only render nodes in viewport (if >100 visible)
4. **Debounced search** - 300ms delay before filtering

---

## Mobile Considerations

- Detail panel slides up from bottom (sheet)
- Nodes slightly larger for touch targets (min 44px)
- Pinch-to-zoom disabled (focus navigation only)
- Swipe left = back
