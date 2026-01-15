# Knowledge Explorer - Simple Design
**Date:** 2026-01-15  
**Status:** Validated

## Overview
A simple, browsable interface for exploring the Mexican history knowledge base. Users select a category, browse entries in a masonry grid, click to expand entries in place, and discover related content through explicit connections.

## User Flow
1. User clicks "Explorar" from main menu
2. See 12 category cards in a responsive grid
3. Click a category → filter to show only that category's entries
4. See masonry grid of entry cards (2-3 columns desktop, 1 mobile)
5. Click a card → it expands in place, pushing other cards around
6. Expanded view shows full details + related entry thumbnails
7. Click related thumbnail → that card expands, previous collapses
8. Click breadcrumb → return to category picker

## Component Architecture

### ExploreMode.tsx (Main Container)
**State:**
- `selectedCategory: Category | null` - Active category filter
- `expandedEntryId: string | null` - Currently expanded entry

**Responsibilities:**
- Manage category selection and entry expansion
- Render CategoryPicker or EntryMasonry based on state
- Show breadcrumb navigation

### CategoryPicker.tsx
**Props:**
- `onSelectCategory: (category: Category) => void`

**Display:**
- 12 category cards in `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`
- Each card shows:
  - Category icon (from `CATEGORY_LABELS`)
  - Category name
  - Entry count (e.g., "45 entradas")
  - Category color theme (from `CATEGORY_COLORS`)
- Same visual style as GameMenu

### EntryMasonry.tsx
**Props:**
- `entries: KnowledgeEntry[]` - Filtered by category
- `expandedId: string | null`
- `onExpand: (id: string) => void`
- `onCollapse: () => void`

**Layout:**
- CSS columns: `column-count: 2` desktop, `column-count: 1` mobile
- No external masonry library needed

### EntryCard.tsx
**Props:**
- `entry: KnowledgeEntry`
- `isExpanded: boolean`
- `onToggle: () => void`
- `allEntries: KnowledgeEntry[]` - For finding related entries

**Collapsed State:**
- Image or category icon at top
- Question text (2 lines max with ellipsis)
- Date emoji + year at bottom
- Hover: scale + shadow

**Expanded State:**
- Full image (larger, no crop)
- Question text (full)
- Complete answer text
- Date emoji with full date string
- Famous quote in blockquote (if exists)
- Related thumbnails row (3-5 items)
- Collapse button (X) in top-right

### RelatedThumbnails.tsx
**Props:**
- `relatedIds: string[]`
- `allEntries: KnowledgeEntry[]`
- `onSelect: (id: string) => void`

**Display:**
- Horizontal row of 80px x 80px thumbnails
- Show image or category icon
- Title on hover
- Click → expand that entry

## Data & Logic

### Category Colors
```typescript
const CATEGORY_COLORS: Record<Category, string> = {
  PREHISPANICO: '#8B4513',        // Brown
  CONQUISTA_COLONIA: '#DC143C',   // Crimson
  INDEPENDENCIA: '#008000',       // Green
  REVOLUCION: '#FF4500',          // Orange-red
  CONTEMPORANEO: '#4169E1',       // Royal blue
  CIVISMO: '#FFD700',             // Gold
  TRADICIONES: '#9370DB',         // Medium purple
  GASTRONOMIA: '#FF6347',         // Tomato
  GEOGRAFIA: '#20B2AA',           // Light sea green
  LITERATURA_MUSICA: '#FF1493',   // Deep pink
  PINTURA_CINE: '#FF69B4',        // Hot pink
  CIENCIA_DEPORTES: '#00CED1',    // Dark turquoise
};
```

### Related Entries Logic
```typescript
function getRelatedEntries(
  entry: KnowledgeEntry,
  allEntries: KnowledgeEntry[]
): KnowledgeEntry[] {
  if (!entry.relatedIds || entry.relatedIds.length === 0) {
    return []; // No thumbnails if no explicit relations
  }
  
  return entry.relatedIds
    .map(id => allEntries.find(e => e.id === id))
    .filter(e => e !== undefined)
    .slice(0, 5); // Max 5 thumbnails
}
```

### Entry Count by Category
```typescript
function getCategoryCount(category: Category, entries: KnowledgeEntry[]): number {
  return entries.filter(e => e.category === category).length;
}
```

## Styling

### Card Styling
- White/dark mode background
- `rounded-2xl shadow-md` (collapsed)
- `shadow-xl` (expanded)
- Category color accent border (2px solid)
- Smooth transitions: `transition-all duration-300`

### Masonry CSS
```css
.masonry-grid {
  column-count: 2;
  column-gap: 1rem;
}

@media (max-width: 768px) {
  .masonry-grid {
    column-count: 1;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}
```

### Image Display
- Collapsed: `h-48 object-cover`
- Expanded: `h-64 md:h-80 object-cover`
- Lazy loading: `loading="lazy"`
- Fallback: Large category icon with colored background

## Performance

### Optimization
- Filter entries by category (max ~50 per category)
- Lazy load images
- CSS-only animations (no JS)
- No pre-computation or complex algorithms

### Bundle Size
- No new dependencies needed
- Uses existing: React, TypeScript, Tailwind, Lucide icons

## Edge Cases

| Case | Handling |
|------|----------|
| No image | Show large category icon with colored background |
| No relatedIds | Hide "Related" section entirely |
| Empty category | Show "No entries in this category" |
| Long text | `line-clamp-2` collapsed, full when expanded |
| Mobile | Single column, larger tap targets |

## Accessibility

- **Keyboard:** Tab to cards, Enter/Space to expand, Escape to collapse
- **ARIA:** `role="button"`, `aria-expanded`, `aria-label`
- **Screen readers:** Descriptive labels for all interactive elements
- **Focus:** Visible focus rings on all interactive elements

## Integration

### Types (types.ts)
```typescript
export enum GameMode {
  MENU = 'MENU',
  MATCHING = 'MATCHING',
  TIMELINE = 'TIMELINE',
  MAP = 'MAP',
  QUIZ = 'QUIZ',
  STUDY = 'STUDY',
  EXPLORE = 'EXPLORE' // Add this
}
```

### GameMenu (GameMenu.tsx)
Add new menu item:
```typescript
{
  mode: GameMode.EXPLORE,
  title: 'Explorar',
  description: 'Browse the knowledge base by category.',
  icon: <Compass size={32} />,
  color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 hover:border-teal-300 dark:hover:border-teal-600',
  progress: 'Nuevo!'
}
```

### App.tsx Routing
```typescript
case GameMode.EXPLORE:
  return <ExploreMode onBack={() => setCurrentMode(GameMode.MENU)} />;
```

## Success Criteria

- ✅ User can browse all 12 categories
- ✅ Masonry grid shows entries with images and dates
- ✅ Cards expand smoothly in place
- ✅ Related entries show as clickable thumbnails
- ✅ Works on mobile and desktop
- ✅ Dark mode support
- ✅ No performance issues with 400 entries

## Out of Scope

- ❌ Search/filter within category
- ❌ Cross-category connections
- ❌ Graph visualization
- ❌ Force-directed layout
- ❌ Complex connection algorithms
- ❌ Favorites or bookmarks
- ❌ Sorting options

## Dependencies

**New:** None  
**Existing:** React, TypeScript, Tailwind CSS, Lucide Icons

## Estimated Complexity

**Low** - Simple React state management, no complex algorithms, CSS-only masonry, straightforward component hierarchy.
