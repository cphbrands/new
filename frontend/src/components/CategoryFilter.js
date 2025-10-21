import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getShopifyCollections } from '../data/shopifyCollections';
import { ChevronDown } from 'lucide-react';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const { t } = useTranslation();
  const [collections, setCollections] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadCollections = async () => {
      const cols = await getShopifyCollections();
      setCollections(cols);
    };
    loadCollections();
  }, []);

  const defaultCategories = [
    { handle: 'all', title: t('category.all') },
    { handle: 'julepynt', title: t('category.julepynt.title') },
    { handle: 'gaver', title: t('category.gaver.title') },
  ];

  const allCategories = [...defaultCategories, ...collections];

  return (
    <div className="mb-8">
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 border border-zinc-300 rounded-md hover:bg-zinc-50 transition-colors"
        >
          <span className="font-medium">
            {selectedCategory === 'all' 
              ? t('category.all')
              : allCategories.find(c => c.handle === selectedCategory)?.title || t('category.all')
            }
          </span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white border border-zinc-200 rounded-lg shadow-lg py-2 min-w-[200px] max-h-[400px] overflow-y-auto z-20">
            {allCategories.map(cat => (
              <button
                key={cat.handle}
                onClick={() => {
                  onCategoryChange(cat.handle);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-zinc-50 transition-colors ${
                  selectedCategory === cat.handle ? 'bg-zinc-100 font-medium' : ''
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
