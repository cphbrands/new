import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { julepyntProducts, gaverProducts } from '../data/mockProducts';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from '../hooks/use-toast';

const CategoryPage = () => {
  const { category } = useParams();
  const { addToCart } = useCart();

  const products = category === 'julepynt' ? julepyntProducts : gaverProducts;
  const title = category === 'julepynt' ? 'Jule Pynt' : 'Gaver';
  const description = category === 'julepynt' 
    ? 'Fortryllende figurer, smukke dekorationer og alt det, der spreder julestemning'
    : 'Mere end 10.000 gaveidéer til alle anledninger';

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Tilføjet til kurv",
      description: `${product.name} er tilføjet til din kurv.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="group">
            <Link to={`/produkt/${product.id}`} className="block">
              <div className="aspect-square overflow-hidden rounded-lg mb-3 bg-zinc-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
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
  );
};

export default CategoryPage;
