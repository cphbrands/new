import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allProducts } from '../data/mockProducts';
import { ShoppingCart, Heart, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from '../hooks/use-toast';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Produkt ikke fundet</h2>
        <button
          onClick={() => navigate('/')}
          className="text-zinc-600 hover:text-zinc-900 flex items-center gap-2 mx-auto"
        >
          <ChevronLeft className="w-4 h-4" />
          Tilbage til forsiden
        </button>
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

  return (
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
          <div className="aspect-square rounded-lg overflow-hidden bg-zinc-100">
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

          <div className="border-t border-zinc-200 pt-6">
            <p className="text-zinc-600 leading-relaxed mb-6">
              Et smukt og eksklusivt produkt fra {product.brand}. Perfekt til at skabe hygge og stemning i dit hjem.
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

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-zinc-900 text-white py-4 rounded-md hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <ShoppingCart className="w-5 h-5" />
              Tilføj til kurv
            </button>

            {/* Wishlist Button */}
            <button className="w-full border border-zinc-300 py-4 rounded-md hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 font-medium">
              <Heart className="w-5 h-5" />
              Tilføj til ønskeliste
            </button>
          </div>

          {/* Product Details */}
          <div className="border-t border-zinc-200 pt-6 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Levering</h3>
              <ul className="text-sm text-zinc-600 space-y-1">
                <li>• Levering 1-3 hverdage</li>
                <li>• Fri fragt ved køb over 499 kr.</li>
                <li>• Click & Collect gratis afhentning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Retur</h3>
              <p className="text-sm text-zinc-600">
                Udvidet retur for julegaver frem til januar 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
