import { shopifyService } from '../services/shopifyService';

let cachedProducts = null;
let cacheTimestamp = null;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes (øget fra 5)
let pendingRequest = null; // Prevent duplicate requests

export const getShopifyProducts = async () => {
  // Return cached data if still valid
  if (cachedProducts && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION)) {
    return cachedProducts;
  }

  // If there's already a pending request, return it
  if (pendingRequest) {
    return pendingRequest;
  }

  try {
    pendingRequest = shopifyService.getAllProducts(100);
    const products = await pendingRequest;
    cachedProducts = products;
    cacheTimestamp = Date.now();
    pendingRequest = null;
    return products;
  } catch (error) {
    console.error('Failed to load Shopify products, using fallback:', error);
    pendingRequest = null;
    // Return empty array as fallback
    return [];
  }
};

export const getShopifyProductsByCategory = async (category) => {
  try {
    const products = await getShopifyProducts();
    return products.filter(p => p.category === category);
  } catch (error) {
    console.error('Failed to load products by category:', error);
    return [];
  }
};

export const getShopifyProductById = async (id) => {
  try {
    const products = await getShopifyProducts();
    return products.find(p => p.id === id);
  } catch (error) {
    console.error('Failed to load product:', error);
    return null;
  }
};

// Clear cache function
export const clearProductCache = () => {
  cachedProducts = null;
  cacheTimestamp = null;
};
