import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Globe, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEO />
      <div className="min-h-screen">
      {/* Split Hero Section */}
      <div className="h-[calc(100vh-10rem)] flex flex-col md:flex-row">
        {/* Left Side - Jule Pynt */}
        <Link
          to="/kategori/julepynt"
          className="relative flex-1 group overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
            <div className="flex items-center gap-2 mb-3 text-sm opacity-90">
              <Award className="w-4 h-4" />
              <span>{t('home.nordic.quality')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center tracking-wide">
              {t('category.julepynt.title')}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-center opacity-90">
              {t('home.hero.jul')}
            </p>
            <div className="flex items-center gap-2 text-lg font-medium group-hover:gap-4 transition-all">
              <span>{t('home.hero.explore')}</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </Link>

        {/* Right Side - Gaver */}
        <Link
          to="/kategori/gaver"
          className="relative flex-1 group overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
            <div className="flex items-center gap-2 mb-3 text-sm opacity-90">
              <Award className="w-4 h-4" />
              <span>{t('home.nordic.quality')}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center tracking-wide">
              {t('category.gaver.title')}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-center opacity-90">
              {t('home.hero.gaver')}
            </p>
            <div className="flex items-center gap-2 text-lg font-medium group-hover:gap-4 transition-all">
              <span>{t('home.hero.find')}</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </div>

      {/* Nordic Quality Banner */}
      <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 py-12 border-y border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-8 h-8 text-zinc-900" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{t('home.nordic.title')}</h2>
            <p className="text-lg text-zinc-700 leading-relaxed">
              {t('home.nordic.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-8 border-y border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl">📦</div>
              <h3 className="font-semibold">{t('footer.shipping.fast')}</h3>
              <p className="text-sm text-zinc-600">{t('footer.shipping.desc')}</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🛡️</div>
              <h3 className="font-semibold">{t('footer.payment')}</h3>
              <p className="text-sm text-zinc-600">{t('footer.payment.desc')}</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🎁</div>
              <h3 className="font-semibold">{t('footer.return.extended')}</h3>
              <p className="text-sm text-zinc-600">{t('footer.return.desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Highlights */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('common.popularCategories')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/kategori/julepynt" className="group">
            <div className="aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400"
                alt="Jule Pynt"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-center">{t('category.julepynt.title')}</h3>
          </Link>
          <Link to="/kategori/gaver" className="group">
            <div className="aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.unsplash.com/photo-1549371156-49e1985e8ff6?w=400"
                alt="Gaver"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-center">{t('category.gaver.title')}</h3>
          </Link>
          <Link to="/nyheder" className="group">
            <div className="aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400"
                alt="Nyheder"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-center">{t('nav.nyheder')}</h3>
          </Link>
          <Link to="/gavekort" className="group">
            <div className="aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400"
                alt="Gavekort"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium text-center">{t('home.giftcard')}</h3>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
