import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SEO from '../components/SEO';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const shippingCost = 0; // Fri fragt altid
  const total = subtotal + shippingCost;

  if (cart.length === 0) {
    return (
      <>
        <SEO
          title="Indkøbskurv | Bahne"
          description="Din indkøbskurv"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-zinc-400" />
            <h2 className="text-2xl font-bold mb-4">Din kurv er tom</h2>
            <p className="text-zinc-600 mb-8">
              Du har ingen varer i din kurv. Begynd at handle nu!
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
        title="Indkøbskurv | Bahne"
        description="Din indkøbskurv"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Indkøbskurv</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white border border-zinc-200 rounded-lg p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm text-zinc-600">{item.brand}</p>
                        <h3 className="font-medium">{item.name}</h3>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-zinc-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-zinc-300 rounded-md hover:bg-zinc-100 transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-zinc-300 rounded-md hover:bg-zinc-100 transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-lg font-semibold">
                        {(item.price * item.quantity).toFixed(2)} kr.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Ordre oversigt</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-zinc-600">
                  <span>Subtotal</span>
                  <span>{subtotal.toFixed(2)} kr.</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>Fragt</span>
                  <span>{shippingCost === 0 ? 'Gratis' : `${shippingCost.toFixed(2)} kr.`}</span>
                </div>
                {subtotal < 499 && (
                  <p className="text-sm text-zinc-500">
                    Køb for {(499 - subtotal).toFixed(2)} kr. mere for fri fragt
                  </p>
                )}
                <div className="border-t border-zinc-300 pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>{total.toFixed(2)} kr.</span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert('Checkout funktionalitet vil blive implementeret senere');
                }}
                className="w-full bg-zinc-900 text-white py-4 rounded-md hover:bg-zinc-800 transition-colors font-medium mb-3"
              >
                Gå til kassen
              </button>
              
              <Link
                to="/"
                className="block text-center text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Fortsæt med at handle
              </Link>

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t border-zinc-300 space-y-3 text-sm text-zinc-600">
                <p className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Fri levering 2-5 hverdage</span>
                </p>
                <p className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Udvidet retur for julegaver</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
