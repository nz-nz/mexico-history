import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Category, CATEGORY_LABELS } from '../data/categories';
import CategoryPicker from './explore/CategoryPicker';
import EntryMasonry from './explore/EntryMasonry';
import WritersWall from './explore/WritersWall';
import ArtistsWall from './explore/ArtistsWall';
import MusiciansWall from './explore/MusiciansWall';
import CienciaDeportesWall from './explore/CienciaDeportesWall';
import GastronomiaWall from './explore/GastronomiaWall';
import TradicionesWall from './explore/TradicionesWall';
import CivismoWall from './explore/CivismoWall';
import ContemporaneoWall from './explore/ContemporaneoWall';
import GeografiaWall from './explore/GeografiaWall';
import RevolucionWall from './explore/RevolucionWall';

interface ExploreModProps {
  onBack: () => void;
}

const CATEGORY_COLORS: Record<Category, string> = {
  [Category.PREHISPANICO]: '#8B4513',
  [Category.CONQUISTA_COLONIA]: '#B8860B',
  [Category.INDEPENDENCIA]: '#006847',
  [Category.REVOLUCION]: '#CE1126',
  [Category.CONTEMPORANEO]: '#4169E1',
  [Category.CIVISMO]: '#FFD700',
  [Category.TRADICIONES]: '#FF69B4',
  [Category.GASTRONOMIA]: '#FF6347',
  [Category.GEOGRAFIA]: '#32CD32',
  [Category.LITERATURA]: '#9370DB',
  [Category.MUSICA]: '#FF1493',
  [Category.PINTURA_CINE]: '#FF8C00',
  [Category.CIENCIA_DEPORTES]: '#1E90FF',
};

export default function ExploreMode({ onBack }: ExploreModProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleBack = () => {
    if (selectedCategory) {
      // Viewing category → go back to picker
      setSelectedCategory(null);
    } else {
      // At picker → go back to menu
      onBack();
    }
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleReturnToPicker = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={handleBack}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Volver"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          
          <div className="flex items-center gap-2 text-lg font-semibold">
            {selectedCategory ? (
              <>
                <button
                  onClick={handleReturnToPicker}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  Explorar
                </button>
                <span className="text-gray-400 dark:text-gray-500">/</span>
                <span
                  className="text-gray-900 dark:text-white"
                  style={{ color: CATEGORY_COLORS[selectedCategory] }}
                >
                  {CATEGORY_LABELS[selectedCategory]}
                </span>
              </>
            ) : (
              <span className="text-gray-900 dark:text-white">Explorar</span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {selectedCategory ? (
          selectedCategory === Category.LITERATURA ? (
            <WritersWall />
          ) : selectedCategory === Category.PINTURA_CINE ? (
            <ArtistsWall />
          ) : selectedCategory === Category.MUSICA ? (
            <MusiciansWall />
          ) : selectedCategory === Category.CIENCIA_DEPORTES ? (
            <CienciaDeportesWall />
          ) : selectedCategory === Category.GASTRONOMIA ? (
            <GastronomiaWall />
          ) : selectedCategory === Category.TRADICIONES ? (
            <TradicionesWall />
          ) : selectedCategory === Category.CIVISMO ? (
            <CivismoWall />
          ) : selectedCategory === Category.CONTEMPORANEO ? (
            <ContemporaneoWall />
          ) : selectedCategory === Category.GEOGRAFIA ? (
            <GeografiaWall />
          ) : selectedCategory === Category.REVOLUCION ? (
            <RevolucionWall />
          ) : (
            <EntryMasonry category={selectedCategory} />
          )
        ) : (
          <CategoryPicker onSelectCategory={handleCategorySelect} />
        )}
      </div>
    </div>
  );
}
