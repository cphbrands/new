import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Truck, ShieldCheck, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { toast } from '../hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: t('toast.newsletterSuccess'),
        description: t('toast.newsletterDesc'),
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 mt-16">
      {/* Trust Badges */}
      <div className="bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-zinc-100 p-4 rounded-full">
                <Truck className="w-8 h-8 text-zinc-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('footer.shipping.fast')}</h3>
                <p className="text-sm text-zinc-600">{t('footer.shipping.desc')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-zinc-100 p-4 rounded-full">
                <ShieldCheck className="w-8 h-8 text-zinc-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('footer.payment')}</h3>
                <p className="text-sm text-zinc-600">{t('footer.payment.desc')}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-zinc-100 p-4 rounded-full">
                <Clock className="w-8 h-8 text-zinc-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('footer.return.extended')}</h3>
                <p className="text-sm text-zinc-600">{t('footer.return.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.about')}</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              {t('footer.about.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.help')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/levering" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {t('product.shipping')}
                </Link>
              </li>
              <li>
                <Link to="/retur" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {t('product.return')}
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.shop')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/kategori/julepynt" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {t('nav.jul')}
                </Link>
              </li>
              <li>
                <Link to="/kategori/gaver" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {t('nav.gaver')}
                </Link>
              </li>
              <li>
                <Link to="/nyheder" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {t('nav.nyheder')}
                </Link>
              </li>
              <li>
                <Link to="/gavekort" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {t('home.giftcard')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.newsletter')}</h3>
            <p className="text-zinc-600 text-sm mb-4">
              {t('footer.newsletter.desc')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.newsletter.placeholder')}
                required
                className="w-full px-4 py-2 border border-zinc-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
              />
              <button
                type="submit"
                className="w-full bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {t('footer.newsletter.submit')}
              </button>
            </form>
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
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
