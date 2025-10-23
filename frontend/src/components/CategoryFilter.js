import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { getShopifyCollections } from '../data/shopifyCollections';
import { ChevronDown } from 'lucide-react';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const { t } = useTranslation();
  const { category } = useParams();
  const [collections, setCollections] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadCollections = async () => {
      const cols = await getShopifyCollections();
      
      // Filter collections based on current category
      const filtered = cols.filter(col => {
        const title = col.title.toLowerCase();
        const handle = col.handle.toLowerCase();
        
        if (category === 'julepynt') {
          // Only show Christmas-related collections
          return title.includes('jul') || 
                 title.includes('christmas') || 
                 title.includes('xmas') ||
                 title.includes('jule') ||
                 handle.includes('jul') ||
                 handle.includes('christmas');
        } else {
          // For gaver, show everything else (non-Christmas)
          return !(title.includes('jul') || 
                   title.includes('christmas') || 
                   title.includes('xmas') ||
                   title.includes('jule') ||
                   handle.includes('jul') ||
                   handle.includes('christmas'));
        }
      });
      
      setCollections(filtered);
    };
    loadCollections();
  }, [category]);

  const defaultCategories = [
    { handle: 'all', title: t('category.all') },
  ];

  const allCategories = [...defaultCategories, ...collections];

  return (
    <div className="mb-0">
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
