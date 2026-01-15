import React from 'react';
import { Category, CATEGORY_LABELS, CATEGORY_ICONS } from '../../data/categories';
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
          const icon = CATEGORY_ICONS[category];
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
                {icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 text-center mb-2">
                {label}
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
