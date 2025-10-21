import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  da: {
    translation: {
      // Navigation
      'nav.jul': 'Jul',
      'nav.gaver': 'Gaver',
      'nav.nyheder': 'Nyheder',
      'nav.search': 'Søg efter produkter...',
      'nav.wishlist': 'Ønskeliste',
      'nav.cart': 'Kurv',
      
      // Top Banner
      'banner.christmas': '🎄 Glædelig Jul',
      'banner.shipping': '📦 Fri Levering 2-5 hverdage',
      'banner.return': '🎁 Udvidet retur for julegaver',
      
      // Category
      'category.julepynt.title': 'Jule Pynt',
      'category.julepynt.desc': 'Fortryllende figurer, smukke dekorationer og alt det, der spreder julestemning',
      'category.gaver.title': 'Gaver',
      'category.gaver.desc': 'Mere end 10.000 gaveidéer til alle anledninger',
      'category.products': 'produkter',
      'category.loading': 'Henter produkter...',
      'category.none': 'Ingen produkter fundet i denne kategori.',
      
      // Product
      'product.brand': 'Mærke',
      'product.inStock': 'På lager - Klar til levering',
      'product.outOfStock': 'Midlertidigt udsolgt',
      'product.quantity': 'Antal',
      'product.addToCart': 'Tilføj til kurv',
      'product.addToWishlist': 'Tilføj til ønskeliste',
      'product.removeFromWishlist': 'Fjern fra ønskeliste',
      'product.share': 'Del',
      'product.back': 'Tilbage',
      'product.shipping': 'Levering',
      'product.shipping.info': 'Fri levering 2-5 hverdage',
      'product.return': 'Retur',
      'product.return.info': 'Udvidet retur for julegaver frem til januar 2026. 30 dages returret på alle produkter.',
      'product.related': 'Relaterede produkter',
      'product.recentlyViewed': 'Senest sete produkter',
      
      // Cart
      'cart.title': 'Indkøbskurv',
      'cart.empty': 'Din kurv er tom',
      'cart.empty.desc': 'Du har ingen varer i din kurv. Begynd at handle nu!',
      'cart.continue': 'Fortsæt med at handle',
      'cart.subtotal': 'Subtotal',
      'cart.shipping': 'Fragt',
      'cart.shippingFree': 'Gratis',
      'cart.total': 'Total',
      'cart.checkout': 'Gå til kassen',
      'cart.summary': 'Ordre oversigt',
      
      // Wishlist
      'wishlist.title': 'Min Ønskeliste',
      'wishlist.empty': 'Din ønskeliste er tom',
      'wishlist.empty.desc': 'Du har ingen produkter i din ønskeliste. Tilføj dine favoritter!',
      
      // Footer
      'footer.about': 'Om Bahne',
      'footer.about.desc': 'Vi er ikke en kæde. Vi er en familie af butikker med plads til kundeoplevelser, begejstring og et udvalg skabt ud fra det, vi selv kan lide.',
      'footer.help': 'Hjælp',
      'footer.shop': 'Shop',
      'footer.newsletter': 'Nyhedsbrev',
      'footer.newsletter.desc': 'Få ekslusive tilbud og nyheder direkte i din indbakke.',
      'footer.newsletter.placeholder': 'Din email',
      'footer.newsletter.submit': 'Tilmeld',
      'footer.shipping.fast': 'Fri Levering 2-5 hverdage',
      'footer.shipping.desc': 'Hurtig og sikker levering',
      'footer.payment': 'Sikker betaling',
      'footer.payment.desc': '100% beskyttede transaktioner',
      'footer.return.extended': 'Udvidet retur',
      'footer.return.desc': 'Julegaver frem til januar 2026',
      
      // Common
      'common.new': 'Nyhed',
      'common.loading': 'Henter...',
      'common.error': 'Fejl',
      'common.home': 'Hjem',
      'common.categories': 'Kategorier',
      'common.product': 'Produkt',
      'common.products': 'produkter',
      'common.popularCategories': 'Populære kategorier',
      
      // Toast messages
      'toast.addedToCart': 'er tilføjet til din kurv',
      'toast.addedToWishlist': 'Tilføjet til ønskeliste',
      'toast.removedFromWishlist': 'Fjernet fra ønskeliste',
      'toast.newsletterSuccess': 'Tak for din tilmelding!',
      'toast.newsletterDesc': 'Du vil nu modtage vores nyhedsbrev.',
      
      // Breadcrumbs  
      'breadcrumb.home': 'Hjem',
      'breadcrumb.categories': 'Kategorier',
      'breadcrumb.product': 'Produkt',
      'breadcrumb.wishlist': 'Ønskeliste',
      'breadcrumb.cart': 'Indkøbskurv',
    }
  },
  en: {
    translation: {
      'nav.jul': 'Christmas',
      'nav.gaver': 'Gifts',
      'nav.nyheder': 'News',
      'nav.search': 'Search for products...',
      'nav.wishlist': 'Wishlist',
      'nav.cart': 'Cart',
      
      'banner.christmas': '🎄 Merry Christmas',
      'banner.shipping': '📦 Free Shipping 2-5 business days',
      'banner.return': '🎁 Extended returns for Christmas gifts',
      
      'category.julepynt.title': 'Christmas Decorations',
      'category.julepynt.desc': 'Enchanting figures, beautiful decorations and everything that spreads Christmas spirit',
      'category.gaver.title': 'Gifts',
      'category.gaver.desc': 'More than 10,000 gift ideas for all occasions',
      'category.products': 'products',
      'category.loading': 'Loading products...',
      'category.none': 'No products found in this category.',
      
      'product.brand': 'Brand',
      'product.inStock': 'In stock - Ready for delivery',
      'product.outOfStock': 'Temporarily out of stock',
      'product.quantity': 'Quantity',
      'product.addToCart': 'Add to cart',
      'product.addToWishlist': 'Add to wishlist',
      'product.removeFromWishlist': 'Remove from wishlist',
      'product.share': 'Share',
      'product.back': 'Back',
      'product.shipping': 'Shipping',
      'product.shipping.info': 'Free shipping 2-5 business days',
      'product.return': 'Returns',
      'product.return.info': 'Extended returns for Christmas gifts until January 2026. 30-day return policy on all products.',
      'product.related': 'Related products',
      'product.recentlyViewed': 'Recently viewed products',
      
      'cart.title': 'Shopping Cart',
      'cart.empty': 'Your cart is empty',
      'cart.empty.desc': 'You have no items in your cart. Start shopping now!',
      'cart.continue': 'Continue shopping',
      'cart.subtotal': 'Subtotal',
      'cart.shipping': 'Shipping',
      'cart.shippingFree': 'Free',
      'cart.total': 'Total',
      'cart.checkout': 'Proceed to checkout',
      'cart.summary': 'Order summary',
      
      'wishlist.title': 'My Wishlist',
      'wishlist.empty': 'Your wishlist is empty',
      'wishlist.empty.desc': 'You have no products in your wishlist. Add your favorites!',
      
      'footer.about': 'About Bahne',
      'footer.about.desc': 'We are not a chain. We are a family of stores with room for customer experiences, enthusiasm and a selection created from what we like.',
      'footer.help': 'Help',
      'footer.shop': 'Shop',
      'footer.newsletter': 'Newsletter',
      'footer.newsletter.desc': 'Get exclusive offers and news directly in your inbox.',
      'footer.newsletter.placeholder': 'Your email',
      'footer.newsletter.submit': 'Subscribe',
      'footer.shipping.fast': 'Free Shipping 2-5 days',
      'footer.shipping.desc': 'Fast and secure delivery',
      'footer.payment': 'Secure payment',
      'footer.payment.desc': '100% protected transactions',
      'footer.return.extended': 'Extended returns',
      'footer.return.desc': 'Christmas gifts until January 2026',
      
      'common.new': 'New',
      'common.loading': 'Loading...',
      'common.error': 'Error',
      'common.home': 'Home',
      'common.categories': 'Categories',
      'common.product': 'Product',
      'common.products': 'products',
      'common.popularCategories': 'Popular categories',
      
      // Toast messages
      'toast.addedToCart': 'added to your cart',
      'toast.addedToWishlist': 'Added to wishlist',
      'toast.removedFromWishlist': 'Removed from wishlist',
      'toast.newsletterSuccess': 'Thank you for subscribing!',
      'toast.newsletterDesc': 'You will now receive our newsletter.',
      
      // Breadcrumbs
      'breadcrumb.home': 'Home',
      'breadcrumb.categories': 'Categories',
      'breadcrumb.product': 'Product',
      'breadcrumb.wishlist': 'Wishlist',
      'breadcrumb.cart': 'Shopping Cart',
    }
  },
  sv: {
    translation: {
      'nav.jul': 'Jul',
      'nav.gaver': 'Presenter',
      'nav.nyheder': 'Nyheter',
      'nav.search': 'Sök efter produkter...',
      'nav.wishlist': 'Önskelista',
      'nav.cart': 'Varukorg',
      
      'banner.christmas': '🎄 God Jul',
      'banner.shipping': '📦 Fri frakt 2-5 arbetsdagar',
      'banner.return': '🎁 Förlängd retur för julklappar',
      
      'category.julepynt.title': 'Julpynt',
      'category.julepynt.desc': 'Förtrollande figurer, vackra dekorationer och allt som sprider julstämning',
      'category.gaver.title': 'Presenter',
      'category.gaver.desc': 'Mer än 10 000 presentidéer för alla tillfällen',
      'category.products': 'produkter',
      'category.loading': 'Laddar produkter...',
      'category.none': 'Inga produkter hittades i denna kategori.',
      
      'product.inStock': 'I lager - Redo för leverans',
      'product.addToCart': 'Lägg till i varukorgen',
      'cart.title': 'Varukorg',
      'wishlist.title': 'Min Önskelista',
    }
  },
  no: {
    translation: {
      'nav.jul': 'Jul',
      'nav.gaver': 'Gaver',
      'nav.nyheder': 'Nyheter',
      'nav.search': 'Søk etter produkter...',
      'nav.wishlist': 'Ønskeliste',
      'nav.cart': 'Handlekurv',
      
      'banner.christmas': '🎄 God Jul',
      'banner.shipping': '📦 Fri frakt 2-5 virkedager',
      'banner.return': '🎁 Utvidet retur for julegaver',
      
      'category.julepynt.title': 'Julepynt',
      'category.gaver.title': 'Gaver',
      'product.inStock': 'På lager - Klar for levering',
      'product.addToCart': 'Legg til i handlekurv',
      'cart.title': 'Handlekurv',
      'wishlist.title': 'Min Ønskeliste',
    }
  },
  de: {
    translation: {
      'nav.jul': 'Weihnachten',
      'nav.gaver': 'Geschenke',
      'nav.nyheder': 'Neuheiten',
      'nav.search': 'Produkte suchen...',
      'nav.wishlist': 'Wunschliste',
      'nav.cart': 'Warenkorb',
      
      'banner.christmas': '🎄 Frohe Weihnachten',
      'banner.shipping': '📦 Kostenloser Versand 2-5 Werktage',
      'banner.return': '🎁 Verlängerte Rückgabe für Weihnachtsgeschenke',
      
      'category.julepynt.title': 'Weihnachtsdekoration',
      'category.gaver.title': 'Geschenke',
      'product.inStock': 'Auf Lager - Versandbereit',
      'product.addToCart': 'In den Warenkorb',
      'cart.title': 'Warenkorb',
      'wishlist.title': 'Meine Wunschliste',
    }
  },
  fr: {
    translation: {
      'nav.jul': 'Noël',
      'nav.gaver': 'Cadeaux',
      'nav.nyheder': 'Nouveautés',
      'nav.search': 'Rechercher des produits...',
      'nav.wishlist': 'Liste de souhaits',
      'nav.cart': 'Panier',
      
      'banner.christmas': '🎄 Joyeux Noël',
      'banner.shipping': '📦 Livraison gratuite 2-5 jours ouvrables',
      'banner.return': '🎁 Retour prolongé pour les cadeaux de Noël',
      
      'category.julepynt.title': 'Décorations de Noël',
      'category.gaver.title': 'Cadeaux',
      'product.inStock': 'En stock - Prêt à être expédié',
      'product.addToCart': 'Ajouter au panier',
      'cart.title': 'Panier',
      'wishlist.title': 'Ma liste de souhaits',
    }
  },
  es: {
    translation: {
      'nav.jul': 'Navidad',
      'nav.gaver': 'Regalos',
      'nav.nyheder': 'Novedades',
      'nav.search': 'Buscar productos...',
      'nav.wishlist': 'Lista de deseos',
      'nav.cart': 'Carrito',
      
      'banner.christmas': '🎄 Feliz Navidad',
      'banner.shipping': '📦 Envío gratis 2-5 días laborables',
      'banner.return': '🎁 Devolución ampliada para regalos navideños',
      
      'category.julepynt.title': 'Decoración navideña',
      'category.gaver.title': 'Regalos',
      'product.inStock': 'En stock - Listo para enviar',
      'product.addToCart': 'Añadir al carrito',
      'cart.title': 'Carrito de compras',
      'wishlist.title': 'Mi lista de deseos',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'da',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
