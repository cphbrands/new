import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getShopifyProductsByCategory } from '../data/shopifyProducts';
import { ShoppingCart, Heart, Eye, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { useTranslation } from 'react-i18next';
import { toast } from '../hooks/use-toast';
import QuickViewModal from '../components/QuickViewModal';
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

  const title = t(`category.${category}.title`);
  const description = t(`category.${category}.desc`);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const shopifyProducts = await getShopifyProductsByCategory(category);
        setProducts(shopifyProducts);
      } catch (error) {
        console.error('Error loading products:', error);
        toast({
          title: "Fejl",
          description: "Kunne ikke hente produkter. Prøv igen senere.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category]);

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
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">{description}</p>
          <p className="text-sm text-zinc-500 mt-4">{products.length} {t('common.products')}</p>
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
          {products.map(product => (
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
                    Nyhed
                  </span>
                )}
                <Link to={`/produkt/${product.id}`}>
                  <p className="text-sm text-zinc-600">{product.brand}</p>
                  <h3 className="font-medium hover:underline line-clamp-2">{product.name}</h3>
                </Link>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{product.price.toFixed(2)} kr.</p>
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
