import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getShopifyProductsByCategory, getShopifyProducts } from '../data/shopifyProducts';
import { getProductsByCollection } from '../data/shopifyCollections';
import { ShoppingCart, Heart, Eye, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { useTranslation } from 'react-i18next';
import { toast } from '../hooks/use-toast';
import QuickViewModal from '../components/QuickViewModal';
import CategoryFilter from '../components/CategoryFilter';
import SEO from '../components/SEO';

const CategoryPageNew = () => {
  const { category } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { formatPrice } = useCurrency();
  const { t } = useTranslation();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(20);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const title = useMemo(() => t(`category.${category}.title`), [category, t]);
  const description = useMemo(() => t(`category.${category}.desc`), [category, t]);
  
  const displayedProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by selected collection - only if not "all"
    if (selectedFilter !== 'all') {
      filtered = products.filter(p => {
        // Check if product has this collection in its tags
        return p.tags?.some(tag => {
          const tagLower = tag.toLowerCase();
          const filterLower = selectedFilter.toLowerCase();
          return tagLower.includes(filterLower) || filterLower.includes(tagLower);
        });
      });
    }
    
    // Sort products
    let sorted = [...filtered];
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Keep original order
        break;
    }
    
    return sorted.slice(0, displayCount);
  }, [products, displayCount, selectedFilter, sortBy]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        // Force refresh to get new categorization
        const shopifyProducts = await getShopifyProductsByCategory(category);
        setProducts(shopifyProducts);
        setDisplayCount(20); // Reset display count
        setSelectedFilter('all'); // Reset filter
      } catch (error) {
        console.error('Error loading products:', error);
        toast({
          title: t('common.error'),
          description: t('category.loadError'),
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
    // Cleanup function
    return () => {
      setProducts([]);
      setDisplayCount(20);
      setSelectedFilter('all');
    };
  }, [category, t]);
  
  const handleCategoryChange = (newCategory) => {
    setSelectedFilter(newCategory);
    setDisplayCount(20); // Reset pagination when changing filter
    
    console.log('Selected filter:', newCategory);
    console.log('Products before filter:', products.length);
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: t('product.addToCart'),
      description: `${product.name} ${t('toast.addedToCart')}`,
    });
  };

  const handleWishlistToggle = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    toast({
      title: isInWishlist(product.id) ? t('toast.removedFromWishlist') : t('toast.addedToWishlist'),
      description: `${product.name}`,
    });
  };

  const handleQuickView = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <>
      <SEO
        title={`${title} | Bahne`}
        description={description}
        keywords={`${title.toLowerCase()}, online shopping, dansk design`}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Category Header */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: category === 'julepynt' 
                ? 'url(https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1600)'
                : 'url(https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1600)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>
          <div className="relative text-center py-16 px-4 text-white">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {products.length} {t('common.products')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">{description}</p>
          </div>
        </div>

        {/* Filter and Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
          <CategoryFilter 
            selectedCategory={selectedFilter} 
            onCategoryChange={handleCategoryChange}
          />
          
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-zinc-700">{t('sort.label')}:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
            >
              <option value="default">{t('sort.default')}</option>
              <option value="newest">{t('sort.newest')}</option>
              <option value="price-asc">{t('sort.priceAsc')}</option>
              <option value="price-desc">{t('sort.priceDesc')}</option>
              <option value="name-asc">{t('sort.nameAsc')}</option>
              <option value="name-desc">{t('sort.nameDesc')}</option>
            </select>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-zinc-400" />
            <span className="ml-3 text-zinc-600">{t('category.loading')}</span>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-zinc-600">{t('category.none')}</p>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map(product => (
            <div key={product.id} className="group relative">
              <Link to={`/produkt/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-zinc-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Stock Badge */}
                  <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                    {product.inStock ? t('product.inStock') : t('product.outOfStock')}
                  </div>

                  {/* Quick Actions - Show on Hover */}
                  <div className="absolute inset-x-2 bottom-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={(e) => handleQuickView(e, product)}
                      className="flex-1 bg-white text-zinc-900 py-2 rounded-md hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 font-medium shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="hidden sm:inline">Quick View</span>
                    </button>
                  </div>
                </div>
              </Link>
              
              {/* Wishlist Button */}
              <button
                onClick={(e) => handleWishlistToggle(e, product)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-zinc-50 transition-colors z-10"
                aria-label="Tilføj til ønskeliste"
              >
                <Heart 
                  className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-zinc-600'}`} 
                />
              </button>
              
              <div className="space-y-2">
                {product.isNew && (
                  <span className="inline-block bg-zinc-900 text-white text-xs px-2 py-1 rounded">
                    {t('common.new')}
                  </span>
                )}
                <Link to={`/produkt/${product.id}`}>
                  <p className="text-sm text-zinc-600">{product.brand}</p>
                  <h3 className="font-medium hover:underline line-clamp-2">{product.name}</h3>
                </Link>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{formatPrice(product.price)}</p>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={!product.inStock}
                    className="bg-zinc-900 text-white p-2 rounded-md hover:bg-zinc-800 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed"
                    aria-label="Tilføj til kurv"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
          
          {/* Load More Button */}
          {displayCount < products.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setDisplayCount(prev => prev + 20)}
                className="bg-zinc-900 text-white px-8 py-3 rounded-md hover:bg-zinc-800 transition-colors"
              >
                {t('category.loadMore')} ({products.length - displayCount} {t('category.remaining')})
              </button>
            </div>
          )}
          </>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
};

export default CategoryPageNew;
