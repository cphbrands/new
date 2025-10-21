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
      'category.all': 'Alle produkter',
      'category.products': 'produkter',
      'category.loading': 'Henter produkter...',
      'category.none': 'Ingen produkter fundet i denne kategori.',
      'category.loadError': 'Kunne ikke hente produkter. Prøv igen senere.',
      'category.loadMore': 'Vis flere produkter',
      'category.remaining': 'tilbage',
      
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
      'product.notFound': 'Produkt ikke fundet',
      'product.buy': 'Køb',
      'product.from': 'fra',
      'product.shipping': 'Levering',
      'product.shipping.info': 'Fri levering 2-5 hverdage',
      'product.shipping.delivery': 'Levering til pakkeshop eller hjemmeadresse',
      'product.return': 'Retur',
      'product.return.info': 'Udvidet retur for julegaver frem til januar 2026.',
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
      'cart.checkoutAlert': 'Checkout funktionalitet vil blive implementeret senere',
      'cart.summary': 'Ordre oversigt',
      'cart.christmasGift': 'Dette er en julegave',
      'cart.christmasGift.info': 'Udvidet returret gælder frem til januar 2026',
      
      // Wishlist
      'wishlist.title': 'Min Ønskeliste',
      'wishlist.empty': 'Din ønskeliste er tom',
      'wishlist.empty.desc': 'Du har ingen produkter i din ønskeliste. Tilføj dine favoritter!',
      
      // Footer
      'footer.about': 'Om Bahne',
      'footer.about.desc': 'Vi er ikke en kæde. Vi er en familie af butikker med plads til kundeoplevelser, begejstring og et udvalg skabt ud fra det, vi selv kan lide.',
      'footer.help': 'Hjælp',
      'footer.shop': 'Shop',
      'footer.contact': 'Kontakt',
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
      'footer.copyright': '© 2025 Bahne. Alle rettigheder forbeholdes.',
      
      // Common
      'common.new': 'Nyhed',
      'common.loading': 'Henter...',
      'common.error': 'Fejl',
      'common.home': 'Hjem',
      'common.categories': 'Kategorier',
      'common.product': 'Produkt',
      'common.products': 'produkter',
      'common.popularCategories': 'Populære kategorier',
      
      // Home
      'home.hero.jul': 'Træd ind i et magisk juleunivers',
      'home.hero.gaver': 'Mere end 10.000 gaveidéer',
      'home.hero.explore': 'Udforsk kollektionen',
      'home.hero.find': 'Find den perfekte gave',
      'home.giftcard': 'Gavekort',
      
      // Toast messages
      'toast.addedToCart': 'er tilføjet til din kurv',
      'toast.addedToWishlist': 'Tilføjet til ønskeliste',
      'toast.removedFromWishlist': 'Fjernet fra ønskeliste',
      'toast.newsletterSuccess': 'Tak for din tilmelding!',
      'toast.newsletterDesc': 'Du vil nu modtage vores nyhedsbrev.',
      
      // Sort
      'sort.label': 'Sorter',
      'sort.default': 'Standard',
      'sort.newest': 'Nyeste først',
      'sort.priceAsc': 'Pris: Lav til høj',
      'sort.priceDesc': 'Pris: Høj til lav',
      'sort.nameAsc': 'Navn: A-Å',
      'sort.nameDesc': 'Navn: Å-A',
      
      // Quick View
      'quickview.title': 'Hurtig visning',
      'quickview.fullDetails': 'Se fulde detaljer',
      'quickview.quality': 'Kvalitetsprodukt fra',
      
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
      'category.all': 'All products',
      'category.products': 'products',
      'category.loading': 'Loading products...',
      'category.none': 'No products found in this category.',
      'category.loadError': 'Could not load products. Please try again later.',
      'category.loadMore': 'Load more products',
      'category.remaining': 'remaining',
      
      'product.brand': 'Brand',
      'product.inStock': 'In stock - Ready for delivery',
      'product.outOfStock': 'Temporarily out of stock',
      'product.quantity': 'Quantity',
      'product.addToCart': 'Add to cart',
      'product.addToWishlist': 'Add to wishlist',
      'product.removeFromWishlist': 'Remove from wishlist',
      'product.share': 'Share',
      'product.back': 'Back',
      'product.notFound': 'Product not found',
      'product.buy': 'Buy',
      'product.from': 'from',
      'product.shipping': 'Shipping',
      'product.shipping.info': 'Free shipping 2-5 business days',
      'product.shipping.delivery': 'Delivery to parcel shop or home address',
      'product.return': 'Returns',
      'product.return.info': 'Extended returns for Christmas gifts until January 2026.',
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
      'cart.checkoutAlert': 'Checkout functionality will be implemented later',
      'cart.summary': 'Order summary',
      'cart.christmasGift': 'This is a Christmas gift',
      'cart.christmasGift.info': 'Extended return policy applies until January 2026',
      
      'wishlist.title': 'My Wishlist',
      'wishlist.empty': 'Your wishlist is empty',
      'wishlist.empty.desc': 'You have no products in your wishlist. Add your favorites!',
      
      'footer.about': 'About Bahne',
      'footer.about.desc': 'We are not a chain. We are a family of stores with room for customer experiences, enthusiasm and a selection created from what we like.',
      'footer.help': 'Help',
      'footer.shop': 'Shop',
      'footer.contact': 'Contact',
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
      'footer.copyright': '© 2025 Bahne. All rights reserved.',
      
      'common.new': 'New',
      'common.loading': 'Loading...',
      'common.error': 'Error',
      'common.home': 'Home',
      'common.categories': 'Categories',
      'common.product': 'Product',
      'common.products': 'products',
      'common.popularCategories': 'Popular categories',
      
      // Home
      'home.hero.jul': 'Step into a magical Christmas universe',
      'home.hero.gaver': 'More than 10,000 gift ideas',
      'home.hero.explore': 'Explore the collection',
      'home.hero.find': 'Find the perfect gift',
      'home.giftcard': 'Gift Card',
      
      // Toast messages
      'toast.addedToCart': 'added to your cart',
      'toast.addedToWishlist': 'Added to wishlist',
      'toast.removedFromWishlist': 'Removed from wishlist',
      'toast.newsletterSuccess': 'Thank you for subscribing!',
      'toast.newsletterDesc': 'You will now receive our newsletter.',
      
      // Sort
      'sort.label': 'Sort by',
      'sort.default': 'Default',
      'sort.newest': 'Newest first',
      'sort.priceAsc': 'Price: Low to High',
      'sort.priceDesc': 'Price: High to Low',
      'sort.nameAsc': 'Name: A-Z',
      'sort.nameDesc': 'Name: Z-A',
      
      // Quick View
      'quickview.title': 'Quick View',
      'quickview.fullDetails': 'View full details',
      'quickview.quality': 'Quality product from',
      
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
      'category.all': 'Alla produkter',
      'category.products': 'produkter',
      'category.loading': 'Laddar produkter...',
      'category.none': 'Inga produkter hittades i denna kategori.',
      'category.loadMore': 'Ladda fler produkter',
      'category.remaining': 'kvar',
      
      'product.inStock': 'I lager - Redo för leverans',
      'product.outOfStock': 'Tillfälligt slut i lager',
      'product.quantity': 'Antal',
      'product.addToCart': 'Lägg till i varukorgen',
      'product.back': 'Tillbaka',
      'product.share': 'Dela',
      'product.shipping': 'Leverans',
      'product.shipping.info': 'Fri frakt 2-5 arbetsdagar',
      'product.related': 'Relaterade produkter',
      
      // Sort
      'sort.label': 'Sortera',
      'sort.default': 'Standard',
      'sort.newest': 'Nyaste först',
      'sort.priceAsc': 'Pris: Låg till Hög',
      'sort.priceDesc': 'Pris: Hög till Låg',
      'sort.nameAsc': 'Namn: A-Ö',
      'sort.nameDesc': 'Namn: Ö-A',
      
      // Quick View
      'quickview.title': 'Snabbvisning',
      'quickview.fullDetails': 'Visa fullständiga detaljer',
      'quickview.quality': 'Kvalitetsprodukt från',
      
      // Toast
      'toast.addedToCart': 'tillagd i varukorgen',
      'toast.addedToWishlist': 'Tillagd i önskelistan',
      'toast.removedFromWishlist': 'Borttagen från önskelistan',
      
      'cart.title': 'Varukorg',
      'cart.empty': 'Din varukorg är tom',
      'cart.empty.desc': 'Du har inga varor i din varukorg. Börja handla nu!',
      'cart.continue': 'Fortsätt handla',
      'cart.checkout': 'Gå till kassan',
      'cart.christmasGift': 'Detta är en julklapp',
      'cart.christmasGift.info': 'Förlängd returpolicy gäller till januari 2026',
      
      'wishlist.title': 'Min Önskelista',
      'wishlist.empty': 'Din önskelista är tom',
      'wishlist.empty.desc': 'Du har inga produkter i din önskelista. Lägg till dina favoriter!',
      
      'common.new': 'Nyhet',
      'common.home': 'Hem',
      'common.loading': 'Laddar...',
      'common.products': 'produkter',
      'common.popularCategories': 'Populära kategorier',
      
      'home.hero.jul': 'Kliv in i ett magiskt juluniversum',
      'home.hero.gaver': 'Mer än 10 000 presentidéer',
      'home.hero.explore': 'Utforska kollektionen',
      'home.hero.find': 'Hitta den perfekta presenten',
      'home.giftcard': 'Presentkort',
      
      'home.hero.jul': 'Kliv in i ett magiskt juluniversum',
      'home.hero.gaver': 'Mer än 10 000 presentidéer',
      'home.hero.explore': 'Utforska kollektionen',
      'home.hero.find': 'Hitta den perfekta presenten',
      'home.giftcard': 'Presentkort',
      
      'footer.shipping.fast': 'Fri frakt 2-5 dagar',
      'footer.shipping.desc': 'Snabb och säker leverans',
      'footer.payment': 'Säker betalning',
      'footer.payment.desc': '100% skyddade transaktioner',
      'footer.return.extended': 'Förlängd retur',
      'footer.return.desc': 'Julklappar till januari 2026',
      'footer.about': 'Om Bahne',
      'footer.about.desc': 'Vi är inte en kedja. Vi är en familj av butiker med plats för kundupplevelser, entusiasm och ett urval skapat utifrån det vi gillar.',
      'footer.help': 'Hjälp',
      'footer.shop': 'Handla',
      'footer.contact': 'Kontakt',
      'footer.newsletter': 'Nyhetsbrev',
      'footer.newsletter.desc': 'Få exklusiva erbjudanden och nyheter direkt i din inkorg.',
      'footer.newsletter.placeholder': 'Din e-post',
      'footer.newsletter.submit': 'Prenumerera',
      'footer.copyright': '© 2025 Bahne. Alla rättigheter förbehållna.',
      
      // Breadcrumbs
      'breadcrumb.home': 'Hem',
      'breadcrumb.categories': 'Kategorier',
      'breadcrumb.product': 'Produkt',
      'breadcrumb.wishlist': 'Önskelista',
      'breadcrumb.cart': 'Varukorg',
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
      'category.julepynt.desc': 'Fortryllende figurer, vakre dekorasjoner og alt som sprer julestemning',
      'category.gaver.title': 'Gaver',
      'category.gaver.desc': 'Mer enn 10 000 gaveideer for alle anledninger',
      'category.all': 'Alle produkter',
      'category.products': 'produkter',
      'category.loading': 'Laster produkter...',
      'category.none': 'Ingen produkter funnet i denne kategorien.',
      'category.loadMore': 'Last flere produkter',
      'category.remaining': 'igjen',
      
      'product.inStock': 'På lager - Klar for levering',
      'product.outOfStock': 'Midlertidig utsolgt',
      'product.quantity': 'Antall',
      'product.addToCart': 'Legg til i handlekurv',
      'product.back': 'Tilbake',
      'product.share': 'Del',
      'product.shipping': 'Levering',
      'product.shipping.info': 'Fri frakt 2-5 virkedager',
      'product.related': 'Relaterte produkter',
      
      // Sort
      'sort.label': 'Sorter',
      'sort.default': 'Standard',
      'sort.newest': 'Nyeste først',
      'sort.priceAsc': 'Pris: Lav til Høy',
      'sort.priceDesc': 'Pris: Høy til Lav',
      'sort.nameAsc': 'Navn: A-Å',
      'sort.nameDesc': 'Navn: Å-A',
      
      // Quick View
      'quickview.title': 'Rask visning',
      'quickview.fullDetails': 'Se alle detaljer',
      'quickview.quality': 'Kvalitetsprodukt fra',
      
      // Toast
      'toast.addedToCart': 'lagt til i handlekurven',
      'toast.addedToWishlist': 'Lagt til ønskelisten',
      'toast.removedFromWishlist': 'Fjernet fra ønskelisten',
      
      'cart.title': 'Handlekurv',
      'cart.empty': 'Din handlekurv er tom',
      'cart.empty.desc': 'Du har ingen varer i handlekurven. Begynn å handle nå!',
      'cart.continue': 'Fortsett å handle',
      'cart.checkout': 'Gå til kassen',
      'cart.christmasGift': 'Dette er en julegave',
      'cart.christmasGift.info': 'Utvidet returrett gjelder til januar 2026',
      
      'wishlist.title': 'Min Ønskeliste',
      'wishlist.empty': 'Din ønskeliste er tom',
      'wishlist.empty.desc': 'Du har ingen produkter i din ønskeliste. Legg til dine favoritter!',
      
      'common.new': 'Nyhet',
      'common.home': 'Hjem',
      'common.loading': 'Laster...',
      'common.products': 'produkter',
      'common.popularCategories': 'Populære kategorier',
      
      'home.hero.jul': 'Tre inn i et magisk juleunivers',
      'home.hero.gaver': 'Mer enn 10 000 gaveideer',
      'home.hero.explore': 'Utforsk kolleksjonen',
      'home.hero.find': 'Finn den perfekte gaven',
      'home.giftcard': 'Gavekort',
      
      'home.hero.jul': 'Tre inn i et magisk juleunivers',
      'home.hero.gaver': 'Mer enn 10 000 gaveideer',
      'home.hero.explore': 'Utforsk kolleksjonen',
      'home.hero.find': 'Finn den perfekte gaven',
      'home.giftcard': 'Gavekort',
      
      'footer.shipping.fast': 'Fri frakt 2-5 dager',
      'footer.shipping.desc': 'Rask og sikker levering',
      'footer.payment': 'Sikker betaling',
      'footer.payment.desc': '100% beskyttede transaksjoner',
      'footer.return.extended': 'Utvidet retur',
      'footer.return.desc': 'Julegaver til januar 2026',
      'footer.about': 'Om Bahne',
      'footer.about.desc': 'Vi er ikke en kjede. Vi er en familie av butikker med plass til kundeopplevelser, entusiasme og et utvalg skapt ut fra det vi liker.',
      'footer.help': 'Hjelp',
      'footer.shop': 'Handle',
      'footer.contact': 'Kontakt',
      'footer.newsletter': 'Nyhetsbrev',
      'footer.newsletter.desc': 'Få eksklusive tilbud og nyheter direkte i innboksen din.',
      'footer.newsletter.placeholder': 'Din e-post',
      'footer.newsletter.submit': 'Abonner',
      'footer.copyright': '© 2025 Bahne. Alle rettigheter forbeholdt.',
      
      // Breadcrumbs
      'breadcrumb.home': 'Hjem',
      'breadcrumb.categories': 'Kategorier',
      'breadcrumb.product': 'Produkt',
      'breadcrumb.wishlist': 'Ønskeliste',
      'breadcrumb.cart': 'Handlekurv',
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
      'category.julepynt.desc': 'Bezaubernde Figuren, schöne Dekorationen und alles, was Weihnachtsstimmung verbreitet',
      'category.gaver.title': 'Geschenke',
      'category.gaver.desc': 'Mehr als 10.000 Geschenkideen für alle Anlässe',
      'category.all': 'Alle Produkte',
      'category.products': 'Produkte',
      'category.loading': 'Produkte werden geladen...',
      'category.none': 'Keine Produkte in dieser Kategorie gefunden.',
      'category.loadMore': 'Mehr Produkte laden',
      'category.remaining': 'übrig',
      
      'product.inStock': 'Auf Lager - Versandbereit',
      'product.outOfStock': 'Vorübergehend ausverkauft',
      'product.quantity': 'Menge',
      'product.addToCart': 'In den Warenkorb',
      'product.back': 'Zurück',
      'product.share': 'Teilen',
      'product.shipping': 'Lieferung',
      'product.shipping.info': 'Kostenloser Versand 2-5 Werktage',
      'product.shipping.delivery': 'Lieferung an Paketshop oder Hausadresse',
      'product.return': 'Rückgabe',
      'product.return.info': 'Verlängerte Rückgabe für Weihnachtsgeschenke bis Januar 2026.',
      'product.related': 'Ähnliche Produkte',
      'product.recentlyViewed': 'Kürzlich angesehene Produkte',
      
      // Sort
      'sort.label': 'Sortieren',
      'sort.default': 'Standard',
      'sort.newest': 'Neueste zuerst',
      'sort.priceAsc': 'Preis: Niedrig bis Hoch',
      'sort.priceDesc': 'Preis: Hoch bis Niedrig',
      'sort.nameAsc': 'Name: A-Z',
      'sort.nameDesc': 'Name: Z-A',
      
      // Quick View
      'quickview.title': 'Schnellansicht',
      'quickview.fullDetails': 'Vollständige Details anzeigen',
      'quickview.quality': 'Qualitätsprodukt von',
      
      // Toast
      'toast.addedToCart': 'zum Warenkorb hinzugefügt',
      'toast.addedToWishlist': 'Zur Wunschliste hinzugefügt',
      'toast.removedFromWishlist': 'Von der Wunschliste entfernt',
      
      'cart.title': 'Warenkorb',
      'cart.empty': 'Ihr Warenkorb ist leer',
      'cart.continue': 'Weiter einkaufen',
      'cart.checkout': 'Zur Kasse gehen',
      'cart.summary': 'Bestellübersicht',
      'cart.subtotal': 'Zwischensumme',
      'cart.shipping': 'Versand',
      'cart.shippingFree': 'Kostenlos',
      'cart.total': 'Gesamt',
      'cart.christmasGift': 'Dies ist ein Weihnachtsgeschenk',
      'cart.christmasGift.info': 'Verlängerte Rückgabefrist gilt bis Januar 2026',
      
      'wishlist.title': 'Meine Wunschliste',
      'wishlist.empty': 'Ihre Wunschliste ist leer',
      'wishlist.empty.desc': 'Sie haben keine Produkte in Ihrer Wunschliste. Fügen Sie Ihre Favoriten hinzu!',
      
      'common.new': 'Neu',
      'common.home': 'Startseite',
      'common.loading': 'Lädt...',
      'common.products': 'Produkte',
      'common.popularCategories': 'Beliebte Kategorien',
      
      'home.hero.jul': 'Treten Sie ein in ein magisches Weihnachtsuniversum',
      'home.hero.gaver': 'Mehr als 10.000 Geschenkideen',
      'home.hero.explore': 'Kollektion erkunden',
      'home.hero.find': 'Finden Sie das perfekte Geschenk',
      'home.giftcard': 'Geschenkkarte',
      
      'footer.about': 'Über Bahne',
      'footer.help': 'Hilfe',
      'footer.shop': 'Shop',
      'footer.newsletter': 'Newsletter',
      'footer.newsletter.placeholder': 'Ihre E-Mail',
      'footer.newsletter.submit': 'Abonnieren',
      'footer.shipping.fast': 'Kostenloser Versand 2-5 Tage',
      'footer.shipping.desc': 'Schnelle und sichere Lieferung',
      'footer.payment': 'Sichere Zahlung',
      'footer.payment.desc': '100% geschützte Transaktionen',
      'footer.return.extended': 'Verlängerte Rückgabe',
      'footer.return.desc': 'Weihnachtsgeschenke bis Januar 2026',
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
      'category.julepynt.desc': 'Figurines enchanteresses, belles décorations et tout ce qui répand l\'esprit de Noël',
      'category.gaver.title': 'Cadeaux',
      'category.gaver.desc': 'Plus de 10 000 idées de cadeaux pour toutes les occasions',
      'category.all': 'Tous les produits',
      'category.products': 'produits',
      'category.loading': 'Chargement des produits...',
      'category.none': 'Aucun produit trouvé dans cette catégorie.',
      'category.loadMore': 'Charger plus de produits',
      'category.remaining': 'restants',
      
      'product.inStock': 'En stock - Prêt à être expédié',
      'product.outOfStock': 'Temporairement en rupture de stock',
      'product.quantity': 'Quantité',
      'product.addToCart': 'Ajouter au panier',
      'product.back': 'Retour',
      'product.share': 'Partager',
      'product.shipping': 'Livraison',
      'product.shipping.info': 'Livraison gratuite 2-5 jours ouvrables',
      'product.related': 'Produits connexes',
      'product.recentlyViewed': 'Produits récemment consultés',
      
      // Sort
      'sort.label': 'Trier par',
      'sort.default': 'Défaut',
      'sort.newest': 'Plus récent',
      'sort.priceAsc': 'Prix: Bas à Élevé',
      'sort.priceDesc': 'Prix: Élevé à Bas',
      'sort.nameAsc': 'Nom: A-Z',
      'sort.nameDesc': 'Nom: Z-A',
      
      // Quick View
      'quickview.title': 'Aperçu rapide',
      'quickview.fullDetails': 'Voir tous les détails',
      'quickview.quality': 'Produit de qualité de',
      
      // Toast
      'toast.addedToCart': 'ajouté à votre panier',
      'toast.addedToWishlist': 'Ajouté à la liste de souhaits',
      'toast.removedFromWishlist': 'Retiré de la liste de souhaits',
      
      'cart.title': 'Panier',
      'cart.empty': 'Votre panier est vide',
      'cart.empty.desc': 'Vous n\'avez aucun article dans votre panier. Commencez vos achats maintenant!',
      'cart.continue': 'Continuer vos achats',
      'cart.checkout': 'Passer à la caisse',
      'cart.summary': 'Résumé de la commande',
      'cart.subtotal': 'Sous-total',
      'cart.shipping': 'Livraison',
      'cart.shippingFree': 'Gratuit',
      'cart.total': 'Total',
      'cart.christmasGift': 'Ceci est un cadeau de Noël',
      'cart.christmasGift.info': 'Politique de retour prolongée applicable jusqu\'en janvier 2026',
      
      'wishlist.title': 'Ma liste de souhaits',
      'wishlist.empty': 'Votre liste de souhaits est vide',
      'wishlist.empty.desc': 'Vous n\'avez aucun produit dans votre liste de souhaits. Ajoutez vos favoris!',
      
      'common.new': 'Nouveau',
      'common.home': 'Accueil',
      'common.loading': 'Chargement...',
      'common.products': 'produits',
      'common.popularCategories': 'Catégories populaires',
      
      'home.hero.jul': 'Entrez dans un univers de Noël magique',
      'home.hero.gaver': 'Plus de 10 000 idées de cadeaux',
      'home.hero.explore': 'Explorer la collection',
      'home.hero.find': 'Trouvez le cadeau parfait',
      'home.giftcard': 'Carte cadeau',
      
      'footer.shipping.fast': 'Livraison gratuite 2-5 jours',
      'footer.shipping.desc': 'Livraison rapide et sécurisée',
      'footer.payment': 'Paiement sécurisé',
      'footer.payment.desc': 'Transactions 100% protégées',
      'footer.return.extended': 'Retour prolongé',
      'footer.return.desc': 'Cadeaux de Noël jusqu\'en janvier 2026',
      'footer.about': 'À propos de Bahne',
      'footer.about.desc': 'Nous ne sommes pas une chaîne. Nous sommes une famille de magasins avec de la place pour les expériences clients, l\'enthousiasme et une sélection créée à partir de ce que nous aimons.',
      'footer.help': 'Aide',
      'footer.shop': 'Boutique',
      'footer.contact': 'Contact',
      'footer.newsletter': 'Newsletter',
      'footer.newsletter.desc': 'Recevez des offres exclusives et des nouvelles directement dans votre boîte de réception.',
      'footer.newsletter.placeholder': 'Votre email',
      'footer.newsletter.submit': 'S\'abonner',
      'footer.copyright': '© 2025 Bahne. Tous droits réservés.',
      
      // Breadcrumbs
      'breadcrumb.home': 'Accueil',
      'breadcrumb.categories': 'Catégories',
      'breadcrumb.product': 'Produit',
      'breadcrumb.wishlist': 'Liste de souhaits',
      'breadcrumb.cart': 'Panier',
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
      'category.julepynt.desc': 'Figuras encantadoras, hermosas decoraciones y todo lo que difunde el espíritu navideño',
      'category.gaver.title': 'Regalos',
      'category.gaver.desc': 'Más de 10.000 ideas de regalos para todas las ocasiones',
      'category.all': 'Todos los productos',
      'category.products': 'productos',
      'category.loading': 'Cargando productos...',
      'category.none': 'No se encontraron productos en esta categoría.',
      'category.loadMore': 'Cargar más productos',
      'category.remaining': 'restantes',
      
      'product.inStock': 'En stock - Listo para enviar',
      'product.outOfStock': 'Temporalmente agotado',
      'product.quantity': 'Cantidad',
      'product.addToCart': 'Añadir al carrito',
      'product.back': 'Volver',
      'product.share': 'Compartir',
      'product.shipping': 'Envío',
      'product.shipping.info': 'Envío gratis 2-5 días laborables',
      'product.related': 'Productos relacionados',
      'product.recentlyViewed': 'Productos vistos recientemente',
      
      // Sort
      'sort.label': 'Ordenar por',
      'sort.default': 'Predeterminado',
      'sort.newest': 'Más reciente',
      'sort.priceAsc': 'Precio: Bajo a Alto',
      'sort.priceDesc': 'Precio: Alto a Bajo',
      'sort.nameAsc': 'Nombre: A-Z',
      'sort.nameDesc': 'Nombre: Z-A',
      
      // Quick View
      'quickview.title': 'Vista rápida',
      'quickview.fullDetails': 'Ver detalles completos',
      'quickview.quality': 'Producto de calidad de',
      
      // Toast
      'toast.addedToCart': 'añadido a tu carrito',
      'toast.addedToWishlist': 'Añadido a la lista de deseos',
      'toast.removedFromWishlist': 'Eliminado de la lista de deseos',
      
      'cart.title': 'Carrito de compras',
      'cart.empty': 'Tu carrito está vacío',
      'cart.empty.desc': '¡No tienes artículos en tu carrito. Comienza a comprar ahora!',
      'cart.continue': 'Continuar comprando',
      'cart.checkout': 'Proceder al pago',
      'cart.summary': 'Resumen del pedido',
      'cart.subtotal': 'Subtotal',
      'cart.shipping': 'Envío',
      'cart.shippingFree': 'Gratis',
      'cart.total': 'Total',
      'cart.christmasGift': 'Esto es un regalo de Navidad',
      'cart.christmasGift.info': 'Política de devolución extendida aplicable hasta enero 2026',
      
      'wishlist.title': 'Mi lista de deseos',
      'wishlist.empty': 'Tu lista de deseos está vacía',
      'wishlist.empty.desc': '¡No tienes productos en tu lista de deseos. Añade tus favoritos!',
      
      'common.new': 'Nuevo',
      'common.home': 'Inicio',
      'common.loading': 'Cargando...',
      'common.products': 'productos',
      'common.popularCategories': 'Categorías populares',
      
      'home.hero.jul': 'Entra en un universo navideño mágico',
      'home.hero.gaver': 'Más de 10.000 ideas de regalos',
      'home.hero.explore': 'Explorar la colección',
      'home.hero.find': 'Encuentra el regalo perfecto',
      'home.giftcard': 'Tarjeta regalo',
      
      'home.hero.jul': 'Entra en un universo navideño mágico',
      'home.hero.gaver': 'Más de 10.000 ideas de regalos',
      'home.hero.explore': 'Explorar la colección',
      'home.hero.find': 'Encuentra el regalo perfecto',
      'home.giftcard': 'Tarjeta regalo',
      
      'footer.shipping.fast': 'Envío gratis 2-5 días',
      'footer.shipping.desc': 'Entrega rápida y segura',
      'footer.payment': 'Pago seguro',
      'footer.payment.desc': 'Transacciones 100% protegidas',
      'footer.return.extended': 'Devolución ampliada',
      'footer.return.desc': 'Regalos navideños hasta enero 2026',
      'footer.about': 'Sobre Bahne',
      'footer.about.desc': 'No somos una cadena. Somos una familia de tiendas con espacio para experiencias de clientes, entusiasmo y una selección creada a partir de lo que nos gusta.',
      'footer.help': 'Ayuda',
      'footer.shop': 'Tienda',
      'footer.contact': 'Contacto',
      'footer.newsletter': 'Boletín',
      'footer.newsletter.desc': 'Reciba ofertas exclusivas y noticias directamente en su bandeja de entrada.',
      'footer.newsletter.placeholder': 'Tu email',
      'footer.newsletter.submit': 'Suscribirse',
      'footer.copyright': '© 2025 Bahne. Todos los derechos reservados.',
      
      // Breadcrumbs
      'breadcrumb.home': 'Inicio',
      'breadcrumb.categories': 'Categorías',
      'breadcrumb.product': 'Producto',
      'breadcrumb.wishlist': 'Lista de deseos',
      'breadcrumb.cart': 'Carrito',
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
