import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Om Bahne</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Vi er ikke en kæde. Vi er en familie af butikker med plads til kundeoplevelser, begejstring og et udvalg skabt ud fra det, vi selv kan lide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hjælp</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/levering" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Levering
                </Link>
              </li>
              <li>
                <Link to="/retur" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Retur & Bytte
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/kategori/julepynt" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Jul
                </Link>
              </li>
              <li>
                <Link to="/kategori/gaver" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Gaver
                </Link>
              </li>
              <li>
                <Link to="/nyheder" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Nyheder
                </Link>
              </li>
              <li>
                <Link to="/gavekort" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Gavekort
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nyhedsbrev</h3>
            <p className="text-zinc-600 text-sm mb-4">
              Få de nyeste tilbud og nyheder direkte i din indbakke.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Din email"
                className="flex-1 px-3 py-2 border border-zinc-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
              />
              <button className="bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 mt-12 pt-8 text-center text-sm text-zinc-600">
          <p>© 2025 Bahne. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
