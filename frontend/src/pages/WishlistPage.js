import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Heart, ShoppingBag } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import SEO from '../components/SEO';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Tilføjet til kurv",
      description: `${product.name} er tilføjet til din kurv.`,
    });
  };

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
    toast({
      title: "Fjernet fra ønskeliste",
      description: "Produktet er fjernet fra din ønskeliste.",
    });
  };

  if (wishlist.length === 0) {
    return (
      <>
        <SEO
          title="Min Ønskeliste | Bahne"
          description="Se dine gemte produkter"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-4 text-zinc-400" />
            <h2 className="text-2xl font-bold mb-4">Din ønskeliste er tom</h2>
            <p className="text-zinc-600 mb-8">
              Du har ingen produkter i din ønskeliste. Tilføj dine favoritter!
            </p>
            <Link
              to="/"
              className="inline-block bg-zinc-900 text-white px-8 py-3 rounded-md hover:bg-zinc-800 transition-colors"
            >
              Fortsæt med at handle
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Min Ønskeliste | Bahne"
        description="Se dine gemte produkter"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Min Ønskeliste</h1>
        <p className="text-zinc-600 mb-6">{wishlist.length} produkter</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map(product => (
            <div key={product.id} className="group relative">
              <Link to={`/produkt/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-zinc-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              
              <button
                onClick={() => handleRemove(product.id)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
                aria-label="Fjern fra ønskeliste"
              >
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </button>
              
              <div className="space-y-2">
                {product.isNew && (
                  <span className="inline-block bg-zinc-900 text-white text-xs px-2 py-1 rounded">
                    Nyhed
                  </span>
                )}
                <Link to={`/produkt/${product.id}`}>
                  <p className="text-sm text-zinc-600">{product.brand}</p>
                  <h3 className="font-medium hover:underline">{product.name}</h3>
                </Link>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{product.price.toFixed(2)} kr.</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-zinc-900 text-white p-2 rounded-md hover:bg-zinc-800 transition-colors"
                    aria-label="Tilføj til kurv"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
