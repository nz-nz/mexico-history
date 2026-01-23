import React from 'react';
import { KnowledgeEntry, CATEGORY_ICONS, Category } from '../../data/categories';
import { formatDateWithEmoji } from '../../utils/dateEmoji';
import { X } from 'lucide-react';

interface EntryCardProps {
  entry: KnowledgeEntry;
  allEntries: KnowledgeEntry[];
  categoryColor: string;
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
  [Category.LITERATURA]: '#9370DB',
  [Category.MUSICA]: '#FF1493',
  [Category.PINTURA_CINE]: '#FF69B4',
  [Category.CIENCIA_DEPORTES]: '#00CED1',
};

export const EntryCard: React.FC<EntryCardProps> = ({
  entry,
  allEntries,
  categoryColor,
}) => {
  const getRelatedEntries = (): KnowledgeEntry[] => {
    if (!entry.relatedIds || entry.relatedIds.length === 0) {
      return [];
    }
    return entry.relatedIds
      .map(id => allEntries.find(e => e.id === id))
      .filter((e): e is KnowledgeEntry => e !== undefined)
      .slice(0, 5);
  };

  const relatedEntries = getRelatedEntries();
  const dateDisplay = formatDateWithEmoji(entry.date, entry.dateYear);
  const categoryIcon = CATEGORY_ICONS[entry.category];

  const hasImage = !!entry.imageUrl;

  return (
    <div
      className="masonry-item rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white dark:bg-[#16213e] shadow-md hover:shadow-lg"
      style={{ borderColor: categoryColor }}
    >
      {/* Image - Only show if has image */}
      {hasImage && (
        <div className="relative overflow-hidden h-64 md:h-80">
          <img
            src={entry.imageUrl}
            alt={entry.question}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-4">
        {/* Question */}
        <h3
          className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100"
        >
          {entry.question}
        </h3>

        {/* Date */}
        {dateDisplay && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {dateDisplay}
          </p>
        )}

        {/* Answer - Always show (cards expanded by default) */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {entry.answer}
        </p>

        {/* Famous Quote */}
        {entry.famousQuote && (
          <blockquote className="border-l-4 pl-4 py-2 mb-4 italic text-gray-600 dark:text-gray-400"
            style={{ borderColor: categoryColor }}>
            <p className="mb-1">"{entry.famousQuote.text}"</p>
            <footer className="text-sm text-gray-500 dark:text-gray-500">
              — {entry.famousQuote.attribution}
            </footer>
          </blockquote>
        )}

        {/* Related Entries */}
        {relatedEntries.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Relacionado:
            </h4>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {relatedEntries.map(related => (
                <RelatedThumbnail
                  key={related.id}
                  entry={related}
                  categoryColor={CATEGORY_COLORS[related.category]}
                  onClick={(e) => {
                    e.stopPropagation();
                    // This will be handled by parent component
                    // We'll need to pass onSelectRelated callback
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Related Entry Thumbnail Component
interface RelatedThumbnailProps {
  entry: KnowledgeEntry;
  categoryColor: string;
  onClick: (e: React.MouseEvent) => void;
}

const RelatedThumbnail: React.FC<RelatedThumbnailProps> = ({
  entry,
  categoryColor,
  onClick,
}) => {
  const categoryIcon = CATEGORY_ICONS[entry.category];

  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 hover:scale-105 transition-transform shadow-sm"
      style={{ borderColor: categoryColor }}
      title={entry.question}
    >
      {entry.imageUrl ? (
        <img
          src={entry.imageUrl}
          alt={entry.question}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: categoryColor + '20' }}
        >
          <span className="text-2xl" style={{ color: categoryColor }}>
            {categoryIcon}
          </span>
        </div>
      )}
    </button>
  );
};
