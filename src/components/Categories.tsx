import React from 'react';
import { categories } from '../data/products';
import { Coffee, Key, Frame, Square, Clock } from 'lucide-react';

const iconMap = {
  Coffee,
  Key,
  Frame,
  Square,
  Clock
};

interface CategoriesProps {
  onCategorySelect: (categoryId: string) => void;
  selectedCategory: string | null;
}

export const Categories: React.FC<CategoriesProps> = ({ onCategorySelect, selectedCategory }) => {
  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Gift Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of personalized gifts for every occasion and person
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const isSelected = selectedCategory === category.id;
            
            return (
              <div
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`group relative bg-white rounded-xl p-6 shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fadeInUp border-2 ${
                  isSelected 
                    ? 'border-rose-500 shadow-rose-200' 
                    : 'border-transparent hover:border-rose-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    isSelected 
                      ? 'bg-rose-500 text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-rose-100 group-hover:text-rose-600'
                  }`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                    isSelected ? 'text-rose-600' : 'text-gray-900 group-hover:text-rose-600'
                  }`}>
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {category.subcategories.length} variants
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {category.subcategories.slice(0, 2).map((sub, subIndex) => (
                      <span
                        key={subIndex}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {sub}
                      </span>
                    ))}
                    {category.subcategories.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        +{category.subcategories.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Clear filter button */}
        {selectedCategory && (
          <div className="text-center mt-8 animate-fadeIn">
            <button
              onClick={() => onCategorySelect('')}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              Show All Categories
            </button>
          </div>
        )}
      </div>
    </section>
  );
};