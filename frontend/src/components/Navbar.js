import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-zinc-900 text-white text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 overflow-x-auto">
            <span className="whitespace-nowrap">✨ Fri fragt over 499 kr.</span>
            <span className="whitespace-nowrap">📦 Levering 1-3 hverdage</span>
            <span className="whitespace-nowrap">🏪 Click & Collect</span>
            <span className="whitespace-nowrap">🎁 Udvidet retur for julegaver</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-wider">
              bahne
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/kategori/julepynt" className="text-zinc-700 hover:text-zinc-900 transition-colors">
                Jul
              </Link>
              <Link to="/kategori/gaver" className="text-zinc-700 hover:text-zinc-900 transition-colors">
                Gaver
              </Link>
              <Link to="/nyheder" className="text-zinc-700 hover:text-zinc-900 transition-colors">
                Nyheder
              </Link>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Søg efter produkter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Search className="w-5 h-5 text-zinc-400" />
                </button>
              </div>
            </form>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block text-zinc-700 hover:text-zinc-900 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="hidden md:block text-zinc-700 hover:text-zinc-900 transition-colors">
                <MapPin className="w-5 h-5" />
              </button>
              <Link to="/kurv" className="relative text-zinc-700 hover:text-zinc-900 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-zinc-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {getCartCount()}
                  </span>
                )}
              </Link>
              <button
                className="md:hidden text-zinc-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 bg-white">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Søg efter produkter..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Search className="w-5 h-5 text-zinc-400" />
                  </button>
                </div>
              </form>
              <Link
                to="/kategori/julepynt"
                className="block py-2 text-zinc-700 hover:text-zinc-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Jul
              </Link>
              <Link
                to="/kategori/gaver"
                className="block py-2 text-zinc-700 hover:text-zinc-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Gaver
              </Link>
              <Link
                to="/nyheder"
                className="block py-2 text-zinc-700 hover:text-zinc-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Nyheder
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
