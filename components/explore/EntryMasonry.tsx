import React, { useMemo, useState } from 'react';
import { KnowledgeEntry, Category } from '../../data/categories';
import { EntryCard } from './EntryCard';

interface EntryMasonryProps {
  entries: KnowledgeEntry[];
  selectedCategory: Category | null;
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

export const EntryMasonry: React.FC<EntryMasonryProps> = ({
  entries,
  selectedCategory,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filter entries by selected category
  const filteredEntries = useMemo(() => {
    if (!selectedCategory) return entries;
    return entries.filter(entry => entry.category === selectedCategory);
  }, [entries, selectedCategory]);

  // Get related entries for an entry
  const getRelatedEntries = (entry: KnowledgeEntry): KnowledgeEntry[] => {
    if (!entry.relatedIds || entry.relatedIds.length === 0) return [];
    
    const related = entry.relatedIds
      .map(id => entries.find(e => e.id === id))
      .filter((e): e is KnowledgeEntry => e !== undefined)
      .slice(0, 5);
    
    return related;
  };

  // Handle toggle - collapse if already expanded, otherwise expand
  const handleToggle = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <>
      <style>{`
        .masonry-grid {
          column-count: 1;
          column-gap: 1rem;
          padding: 1rem;
        }

        @media (min-width: 768px) {
          .masonry-grid {
            column-count: 2;
            column-gap: 1.5rem;
            padding: 1.5rem;
          }
        }

        @media (min-width: 1280px) {
          .masonry-grid {
            column-count: 3;
            column-gap: 2rem;
            padding: 2rem;
          }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .masonry-item {
            margin-bottom: 1.5rem;
          }
        }

        @media (min-width: 1280px) {
          .masonry-item {
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <div className="masonry-grid">
        {filteredEntries.map(entry => (
          <div key={entry.id} className="masonry-item">
            <EntryCard
              entry={entry}
              isExpanded={expandedId === entry.id}
              onToggle={() => handleToggle(entry.id)}
              allEntries={getRelatedEntries(entry)}
              categoryColor={CATEGORY_COLORS[entry.category]}
            />
          </div>
        ))}
      </div>
    </>
  );
};
