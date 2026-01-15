# Knowledge Explorer (Simple) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a simple, browsable knowledge explorer where users select a category, browse entries in a masonry grid, expand entries in place, and discover related content.

**Architecture:** Category picker → Masonry grid → Expandable cards with related thumbnails. Pure React state management, CSS-only masonry layout, no external libraries.

**Tech Stack:** React, TypeScript, Tailwind CSS, Lucide Icons (existing stack)

---

## Task 1: Add EXPLORE GameMode

**Files:**
- Modify: `types.ts` (line ~6)

**Step 1: Add EXPLORE to GameMode enum**

Add after STUDY:
```typescript
export enum GameMode {
  MENU = 'MENU',
  MATCHING = 'MATCHING',
  TIMELINE = 'TIMELINE',
  MAP = 'MAP',
  QUIZ = 'QUIZ',
  STUDY = 'STUDY',
  EXPLORE = 'EXPLORE'
}
```

**Step 2: Commit**

```bash
git add types.ts
git commit -m "feat: add EXPLORE game mode to types"
```

---

## Task 2: Create CategoryPicker Component

**Files:**
- Create: `components/explore/CategoryPicker.tsx`

**Step 1: Create component file**

```typescript
import React from 'react';
import { Category, CATEGORY_LABELS } from '../../data/categories';
import { KNOWLEDGE_BASE } from '../../data/categories';

interface CategoryPickerProps {
  onSelectCategory: (category: Category) => void;
}

const CATEGORY_COLORS: Record<Category, string> = {
  [Category.PREHISPANICO]: '#8B4513',
  [Category.CONQUISTA_COLONIA]: '#DC143C',
  [Category.INDEPENDENCIA]: '#008000',
  [Category.REVOLUCION]: '#FF4500',
  [Category.CONTEMPORANEO]: '#4169E1',
  [Category.CIVISMO]: '#FFD700',
  [Category.TRADICIONES]: '#9370DB',
  [Category.GASTRONOMIA]: '#FF6347',
  [Category.GEOGRAFIA]: '#20B2AA',
  [Category.LITERATURA_MUSICA]: '#FF1493',
  [Category.PINTURA_CINE]: '#FF69B4',
  [Category.CIENCIA_DEPORTES]: '#00CED1',
};

export const CategoryPicker: React.FC<CategoryPickerProps> = ({ onSelectCategory }) => {
  const getCategoryCount = (category: Category): number => {
    return KNOWLEDGE_BASE.filter(e => e.category === category).length;
  };

  const categories = Object.values(Category);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Selecciona una Categoría
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(category => {
          const label = CATEGORY_LABELS[category];
          const count = getCategoryCount(category);
          const colorHex = CATEGORY_COLORS[category];
          
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="flex flex-col items-center p-6 rounded-2xl shadow-md border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-[#16213e]"
              style={{ borderColor: colorHex + '40' }}
            >
              <div 
                className="text-5xl mb-3 p-4 rounded-xl"
                style={{ backgroundColor: colorHex + '20' }}
              >
                {label.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 text-center mb-2">
                {label.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {count} entradas
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPicker;
```

**Step 2: Commit**

```bash
git add components/explore/CategoryPicker.tsx
git commit -m "feat: create CategoryPicker component"
```

---

## Task 3: Create EntryCard Component

**Files:**
- Create: `components/explore/EntryCard.tsx`

**Step 1: Create component file**

```typescript
import React from 'react';
import { KnowledgeEntry, Category } from '../../data/categories';
import { X } from 'lucide-react';
import { getDateEmoji } from '../../utils/dateEmoji';

interface EntryCardProps {
  entry: KnowledgeEntry;
  isExpanded: boolean;
  onToggle: () => void;
  categoryColor: string;
  relatedEntries: KnowledgeEntry[];
  onSelectRelated: (id: string) => void;
}

const getCategoryIcon = (category: Category): string => {
  const icons: Record<Category, string> = {
    [Category.PREHISPANICO]: '🏛️',
    [Category.CONQUISTA_COLONIA]: '⚔️',
    [Category.INDEPENDENCIA]: '🔔',
    [Category.REVOLUCION]: '🎺',
    [Category.CONTEMPORANEO]: '🏙️',
    [Category.CIVISMO]: '📜',
    [Category.TRADICIONES]: '🎭',
    [Category.GASTRONOMIA]: '🌮',
    [Category.GEOGRAFIA]: '🗺️',
    [Category.LITERATURA_MUSICA]: '📚',
    [Category.PINTURA_CINE]: '🎨',
    [Category.CIENCIA_DEPORTES]: '🔬',
  };
  return icons[category] || '📖';
};

export const EntryCard: React.FC<EntryCardProps> = ({
  entry,
  isExpanded,
  onToggle,
  categoryColor,
  relatedEntries,
  onSelectRelated,
}) => {
  const dateEmoji = entry.date ? getDateEmoji(entry.date, entry.dateYear) : '';
  const displayDate = entry.date || (entry.dateYear ? `${entry.dateYear}` : '');

  return (
    <div 
      className={`
        masonry-item rounded-2xl overflow-hidden border-2 transition-all duration-300
        ${isExpanded ? 'shadow-2xl' : 'shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer'}
        bg-white dark:bg-[#16213e]
      `}
      style={{ borderColor: categoryColor + '60' }}
      onClick={() => !isExpanded && onToggle()}
    >
      {/* Image or Icon */}
      {entry.imageUrl ? (
        <img 
          src={entry.imageUrl} 
          alt={entry.question}
          className={`w-full object-cover ${isExpanded ? 'h-64 md:h-80' : 'h-48'}`}
          loading="lazy"
        />
      ) : (
        <div 
          className={`w-full flex items-center justify-center ${isExpanded ? 'h-64' : 'h-48'}`}
          style={{ backgroundColor: categoryColor + '20' }}
        >
          <span className="text-8xl">{getCategoryIcon(entry.category)}</span>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Collapse button when expanded */}
        {isExpanded && (
          <button
            onClick={(e) => { e.stopPropagation(); onToggle(); }}
            className="float-right p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Collapse"
          >
            <X size={20} />
          </button>
        )}

        {/* Question */}
        <h3 className={`font-bold text-gray-800 dark:text-gray-100 mb-2 ${isExpanded ? 'text-xl' : 'text-lg line-clamp-2'}`}>
          {entry.question}
        </h3>

        {/* Answer (only when expanded) */}
        {isExpanded && (
          <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
            {entry.answer}
          </p>
        )}

        {/* Date */}
        {displayDate && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {dateEmoji} {displayDate}
          </p>
        )}

        {/* Famous Quote (only when expanded) */}
        {isExpanded && entry.famousQuote && (
          <blockquote className="border-l-4 pl-4 py-2 my-4 italic text-gray-700 dark:text-gray-300"
            style={{ borderColor: categoryColor }}
          >
            <p className="mb-1">"{entry.famousQuote.text}"</p>
            <footer className="text-sm text-gray-600 dark:text-gray-400">
              — {entry.famousQuote.attribution}
            </footer>
          </blockquote>
        )}

        {/* Related Entries (only when expanded and has related) */}
        {isExpanded && relatedEntries.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
              Relacionado
            </h4>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {relatedEntries.map(related => (
                <button
                  key={related.id}
                  onClick={(e) => { e.stopPropagation(); onSelectRelated(related.id); }}
                  className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 hover:scale-110 transition"
                  style={{ borderColor: categoryColor }}
                  title={related.question}
                >
                  {related.imageUrl ? (
                    <img 
                      src={related.imageUrl} 
                      alt={related.question}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: categoryColor + '20' }}
                    >
                      <span className="text-3xl">{getCategoryIcon(related.category)}</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntryCard;
```

**Step 2: Commit**

```bash
git add components/explore/EntryCard.tsx
git commit -m "feat: create EntryCard component with expand/collapse"
```

---

## Task 4: Create EntryMasonry Component

**Files:**
- Create: `components/explore/EntryMasonry.tsx`

**Step 1: Create component file**

```typescript
import React, { useMemo } from 'react';
import { KnowledgeEntry, Category } from '../../data/categories';
import { KNOWLEDGE_BASE } from '../../data/categories';
import EntryCard from './EntryCard';

interface EntryMasonryProps {
  category: Category;
  expandedId: string | null;
  onExpand: (id: string) => void;
  onCollapse: () => void;
  categoryColor: string;
}

export const EntryMasonry: React.FC<EntryMasonryProps> = ({
  category,
  expandedId,
  onExpand,
  onCollapse,
  categoryColor,
}) => {
  const entries = useMemo(() => {
    return KNOWLEDGE_BASE.filter(e => e.category === category);
  }, [category]);

  const getRelatedEntries = (entry: KnowledgeEntry): KnowledgeEntry[] => {
    if (!entry.relatedIds || entry.relatedIds.length === 0) {
      return [];
    }
    
    return entry.relatedIds
      .map(id => KNOWLEDGE_BASE.find(e => e.id === id))
      .filter((e): e is KnowledgeEntry => e !== undefined)
      .slice(0, 5);
  };

  const handleToggle = (id: string) => {
    if (expandedId === id) {
      onCollapse();
    } else {
      onExpand(id);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <style>{`
        .masonry-grid {
          column-count: 1;
          column-gap: 1rem;
        }
        
        @media (min-width: 768px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        
        @media (min-width: 1280px) {
          .masonry-grid {
            column-count: 3;
          }
        }
        
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
        }
      `}</style>
      
      <div className="masonry-grid">
        {entries.map(entry => {
          const isExpanded = entry.id === expandedId;
          const relatedEntries = isExpanded ? getRelatedEntries(entry) : [];
          
          return (
            <EntryCard
              key={entry.id}
              entry={entry}
              isExpanded={isExpanded}
              onToggle={() => handleToggle(entry.id)}
              categoryColor={categoryColor}
              relatedEntries={relatedEntries}
              onSelectRelated={(id) => onExpand(id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EntryMasonry;
```

**Step 2: Commit**

```bash
git add components/explore/EntryMasonry.tsx
git commit -m "feat: create EntryMasonry component with CSS masonry layout"
```

---

## Task 5: Create ExploreMode Main Component

**Files:**
- Create: `components/ExploreMode.tsx`

**Step 1: Create component file**

```typescript
import React, { useState } from 'react';
import { Category, CATEGORY_LABELS } from '../data/categories';
import { ArrowLeft } from 'lucide-react';
import CategoryPicker from './explore/CategoryPicker';
import EntryMasonry from './explore/EntryMasonry';

interface ExploreModeProps {
  onBack: () => void;
}

const CATEGORY_COLORS: Record<Category, string> = {
  [Category.PREHISPANICO]: '#8B4513',
  [Category.CONQUISTA_COLONIA]: '#DC143C',
  [Category.INDEPENDENCIA]: '#008000',
  [Category.REVOLUCION]: '#FF4500',
  [Category.CONTEMPORANEO]: '#4169E1',
  [Category.CIVISMO]: '#FFD700',
  [Category.TRADICIONES]: '#9370DB',
  [Category.GASTRONOMIA]: '#FF6347',
  [Category.GEOGRAFIA]: '#20B2AA',
  [Category.LITERATURA_MUSICA]: '#FF1493',
  [Category.PINTURA_CINE]: '#FF69B4',
  [Category.CIENCIA_DEPORTES]: '#00CED1',
};

export const ExploreMode: React.FC<ExploreModeProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [expandedEntryId, setExpandedEntryId] = useState<string | null>(null);

  const handleBack = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
      setExpandedEntryId(null);
    } else {
      onBack();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#1a1a2e]">
      {/* Header with breadcrumb */}
      <div className="w-full bg-white dark:bg-[#16213e] shadow-md p-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Back"
          >
            <ArrowLeft size={24} />
          </button>
          
          <div className="flex items-center gap-2 text-lg">
            <span 
              className="font-semibold cursor-pointer hover:underline"
              onClick={() => {
                setSelectedCategory(null);
                setExpandedEntryId(null);
              }}
            >
              Explorar
            </span>
            
            {selectedCategory && (
              <>
                <span className="text-gray-400">/</span>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  {CATEGORY_LABELS[selectedCategory].icon} {CATEGORY_LABELS[selectedCategory].name}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto py-6">
        {selectedCategory ? (
          <EntryMasonry
            category={selectedCategory}
            expandedId={expandedEntryId}
            onExpand={setExpandedEntryId}
            onCollapse={() => setExpandedEntryId(null)}
            categoryColor={CATEGORY_COLORS[selectedCategory]}
          />
        ) : (
          <CategoryPicker onSelectCategory={setSelectedCategory} />
        )}
      </div>
    </div>
  );
};

export default ExploreMode;
```

**Step 2: Commit**

```bash
git add components/ExploreMode.tsx
git commit -m "feat: create ExploreMode main component with state management"
```

---

## Task 6: Add Explorar to GameMenu

**Files:**
- Modify: `components/GameMenu.tsx` (add after Map Explorer item, around line 75)

**Step 1: Import Compass icon**

Add to imports at top:
```typescript
import { Layers, Trophy, Map, Crosshair, HelpCircle, Sun, Moon, BookOpen, Compass } from 'lucide-react';
```

**Step 2: Add menu item**

Add after the Map Explorer item in the `menuItems` array:
```typescript
    {
      mode: GameMode.EXPLORE,
      title: 'Explorar',
      description: 'Browse the knowledge base by category.',
      icon: <Compass size={32} />,
      color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 hover:border-teal-300 dark:hover:border-teal-600',
      progress: 'Nuevo!'
    },
```

**Step 3: Commit**

```bash
git add components/GameMenu.tsx
git commit -m "feat: add Explorar menu item with Compass icon"
```

---

## Task 7: Wire Up App Routing

**Files:**
- Modify: `App.tsx` (add import and routing case)

**Step 1: Import ExploreMode**

Add to imports at top:
```typescript
import ExploreMode from './components/ExploreMode';
```

**Step 2: Add routing case**

Add case in the switch statement (around line 30):
```typescript
      case GameMode.EXPLORE:
        return <ExploreMode onBack={() => setCurrentMode(GameMode.MENU)} />;
```

**Step 3: Exclude from header**

Update the header condition to exclude EXPLORE:
```typescript
      {currentMode !== GameMode.MENU && currentMode !== GameMode.EXPLORE && (
```

**Step 4: Commit**

```bash
git add App.tsx
git commit -m "feat: wire up ExploreMode routing in App"
```

---

## Task 8: Test the Feature

**Step 1: Start dev server**

```bash
npm run dev
```

Expected: Server starts at http://localhost:3000

**Step 2: Manual testing checklist**

- [ ] Click "Explorar" from main menu
- [ ] See 12 category cards with icons and counts
- [ ] Click a category (e.g., "🎨 Pintura y Cine")
- [ ] See masonry grid with entry cards
- [ ] Click a card to expand it
- [ ] See full content, date, quote (if exists)
- [ ] See related thumbnails (if entry has relatedIds)
- [ ] Click a related thumbnail to expand that entry
- [ ] Click X to collapse expanded entry
- [ ] Click breadcrumb "Explorar" to return to category picker
- [ ] Click back arrow to return to main menu
- [ ] Test on mobile viewport (responsive layout)
- [ ] Test dark mode toggle

**Step 3: Fix any issues found**

If issues found, create fix commits following TDD principles.

**Step 4: Final commit (if needed)**

```bash
git add -A
git commit -m "fix: address issues found in manual testing"
```

---

## Completion Checklist

- [ ] All 8 tasks completed
- [ ] Manual testing passed
- [ ] Code committed to `feature/knowledge-explorer-simple` branch
- [ ] Ready to merge to main

## Next Steps (After Completion)

1. Use @superpowers:finishing-a-development-branch to merge
2. Update bd issue `mexico-history-zfj` to completed
3. Test in production build
