import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getShopifyProducts, getShopifyProductById } from '../data/shopifyProducts';
import { ShoppingCart, Heart, ChevronLeft, Share2, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import { useCurrency } from '../context/CurrencyContext';
import { useTranslation } from 'react-i18next';
import { toast } from '../hooks/use-toast';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import SEO from '../components/SEO';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { recentlyViewed, addToRecentlyViewed } = useRecentlyViewed();
  const { formatPrice } = useCurrency();
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const productData = await getShopifyProductById(id);
        if (productData) {
          setProduct(productData);
          addToRecentlyViewed(productData);
          
          // Load related products
          const allProducts = await getShopifyProducts();
          const related = allProducts
            .filter(p => p.category === productData.category && p.id !== productData.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, addToRecentlyViewed]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">{t('product.notFound')}</h2>
        <button
          onClick={() => navigate('/')}
          className="text-zinc-600 hover:text-zinc-900 flex items-center gap-2 mx-auto"
        >
          <ChevronLeft className="w-4 h-4" />
          {t('product.back')}
        </button>
      </div>
    );
  }

  const recentlyViewedFiltered = recentlyViewed.filter(p => p.id !== id).slice(0, 4);
  const shareUrl = window.location.href;

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-zinc-400" />
        <span className="ml-3 text-zinc-600">{t('common.loading')}</span>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Tilføjet til kurv",
      description: `${quantity} x ${product.name} er tilføjet til din kurv.`,
    });
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product);
    toast({
      title: isInWishlist(product.id) ? "Fjernet fra ønskeliste" : "Tilføjet til ønskeliste",
      description: isInWishlist(product.id) 
        ? `${product.name} er fjernet fra din ønskeliste.`
        : `${product.name} er tilføjet til din ønskeliste.`,
    });
  };

  return (
    <>
      <SEO
        title={`${product.name} | ${product.brand} | Bahne`}
        description={`Køb ${product.name} fra ${product.brand}. ${product.price.toFixed(2)} kr.`}
        image={product.image}
        type="product"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Tilbage
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-zinc-100 sticky top-24">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.isNew && (
              <span className="inline-block bg-zinc-900 text-white text-xs px-3 py-1 rounded">
                Nyhed
              </span>
            )}
            
            <div>
              <p className="text-zinc-600 mb-2">{product.brand}</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold">{product.price.toFixed(2)} kr.</p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 p-4 bg-zinc-50 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="font-medium">
                {product.inStock ? 'På lager - Klar til levering' : 'Midlertidigt udsolgt'}
              </span>
            </div>

            <div className="border-t border-zinc-200 pt-6">
              <p className="text-zinc-600 leading-relaxed mb-6">
                Et smukt og eksklusivt produkt fra {product.brand}. Perfekt til at skabe hygge og stemning i dit hjem. Kvalitet og design i højeste klasse.
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Antal</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-zinc-300 rounded-md hover:bg-zinc-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-zinc-300 rounded-md hover:bg-zinc-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-zinc-900 text-white py-4 rounded-md hover:bg-zinc-800 transition-colors disabled:bg-zinc-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
              >
                <ShoppingCart className="w-5 h-5" />
                Tilføj til kurv
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleWishlistToggle}
                  className="border border-zinc-300 py-3 rounded-md hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  Ønskeliste
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="w-full border border-zinc-300 py-3 rounded-md hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Share2 className="w-5 h-5" />
                    Del
                  </button>
                  
                  {showShareMenu && (
                    <div className="absolute top-full mt-2 left-0 bg-white border border-zinc-200 rounded-lg shadow-lg p-3 z-10 flex gap-2">
                      <FacebookShareButton url={shareUrl} quote={product.name}>
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                      <TwitterShareButton url={shareUrl} title={product.name}>
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                      <WhatsappShareButton url={shareUrl} title={product.name}>
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t border-zinc-200 pt-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Levering</h3>
                <ul className="text-sm text-zinc-600 space-y-1">
                  <li>• Fri levering 2-5 hverdage</li>
                  <li>• Levering til pakkeshop eller hjemmeadresse</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Retur</h3>
                <p className="text-sm text-zinc-600">
                  Udvidet retur for julegaver frem til januar 2026. 30 dages returret på alle produkter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Relaterede produkter</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link key={relatedProduct.id} to={`/produkt/${relatedProduct.id}`} className="group">
                  <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-zinc-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-zinc-600">{relatedProduct.brand}</p>
                  <h3 className="font-medium group-hover:underline line-clamp-2">{relatedProduct.name}</h3>
                  <p className="font-semibold">{relatedProduct.price.toFixed(2)} kr.</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed */}
        {recentlyViewedFiltered.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Senest sete produkter</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recentlyViewedFiltered.map(viewedProduct => (
                <Link key={viewedProduct.id} to={`/produkt/${viewedProduct.id}`} className="group">
                  <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-zinc-100">
                    <img
                      src={viewedProduct.image}
                      alt={viewedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-zinc-600">{viewedProduct.brand}</p>
                  <h3 className="font-medium group-hover:underline line-clamp-2">{viewedProduct.name}</h3>
                  <p className="font-semibold">{viewedProduct.price.toFixed(2)} kr.</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
