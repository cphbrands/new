import axios from 'axios';

const SHOPIFY_STORE_DOMAIN = 'hztmcs-09.myshopify.com';
const ADMIN_ACCESS_TOKEN = 'f736803a6786e7c47579c2cc527669ca';
const API_VERSION = '2024-01';

const shopifyClient = axios.create({
  baseURL: `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}`,
  headers: {
    'X-Shopify-Access-Token': ADMIN_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
});

// GraphQL query for products
const PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          vendor
          availableForSale
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                availableForSale
                quantityAvailable
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

// GraphQL query for collections
const COLLECTIONS_QUERY = `
  query GetCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
        }
      }
    }
  }
`;

// GraphQL query for products by collection
const PRODUCTS_BY_COLLECTION_QUERY = `
  query GetProductsByCollection($handle: String!, $first: Int!) {
    collectionByHandle(handle: $handle) {
      id
      title
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            vendor
            availableForSale
            tags
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  quantityAvailable
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Transform Shopify product to our format
const transformProduct = (shopifyProduct) => {
  const product = shopifyProduct.node;
  const images = product.images.edges.map(img => img.node);
  const variants = product.variants.edges.map(v => v.node);
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  
  // Extract product ID (remove gid://shopify/Product/ prefix)
  const id = product.id.split('/').pop();
  
  // Check if any variant has inventory
  const inStock = variants.some(v => v.availableForSale && v.quantityAvailable > 0);
  
  // Determine if new based on tags
  const isNew = product.tags.some(tag => tag.toLowerCase().includes('new') || tag.toLowerCase().includes('nyhed'));
  
  return {
    id: id,
    name: product.title,
    brand: product.vendor || 'Bahne',
    price: price,
    image: images[0]?.url || 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500',
    images: images.map(img => img.url),
    description: product.description,
    handle: product.handle,
    category: determineCategory(product.tags),
    inStock: inStock,
    isNew: isNew,
    tags: product.tags,
    variants: variants,
    availableForSale: product.availableForSale
  };
};

// Determine category from tags
const determineCategory = (tags) => {
  const lowerTags = tags.map(t => t.toLowerCase());
  
  if (lowerTags.some(t => t.includes('jul') || t.includes('christmas') || t.includes('xmas'))) {
    return 'julepynt';
  }
  if (lowerTags.some(t => t.includes('gave') || t.includes('gift'))) {
    return 'gaver';
  }
  
  return 'gaver'; // Default category
};

export const shopifyService = {
  // Fetch all products
  async getAllProducts(limit = 50) {
    try {
      const response = await shopifyClient.post('/graphql.json', {
        query: PRODUCTS_QUERY,
        variables: { first: limit }
      });
      
      if (response.data.errors) {
        console.error('Shopify GraphQL errors:', response.data.errors);
        throw new Error('Failed to fetch products from Shopify');
      }
      
      const products = response.data.data.products.edges.map(transformProduct);
      return products;
    } catch (error) {
      console.error('Error fetching Shopify products:', error);
      throw error;
    }
  },

  // Fetch products by category
  async getProductsByCategory(category, limit = 50) {
    try {
      const allProducts = await this.getAllProducts(limit);
      return allProducts.filter(p => p.category === category);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  },

  // Fetch single product
  async getProductById(id) {
    try {
      const allProducts = await this.getAllProducts();
      return allProducts.find(p => p.id === id);
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  // Fetch collections
  async getCollections(limit = 20) {
    try {
      const response = await shopifyClient.post('/graphql.json', {
        query: COLLECTIONS_QUERY,
        variables: { first: limit }
      });
      
      if (response.data.errors) {
        console.error('Shopify GraphQL errors:', response.data.errors);
        throw new Error('Failed to fetch collections from Shopify');
      }
      
      return response.data.data.collections.edges.map(c => c.node);
    } catch (error) {
      console.error('Error fetching collections:', error);
      throw error;
    }
  },

  // Fetch products by collection handle
  async getProductsByCollection(handle, limit = 50) {
    try {
      const response = await shopifyClient.post('/graphql.json', {
        query: PRODUCTS_BY_COLLECTION_QUERY,
        variables: { handle, first: limit }
      });
      
      if (response.data.errors) {
        console.error('Shopify GraphQL errors:', response.data.errors);
        throw new Error('Failed to fetch products by collection');
      }
      
      const collection = response.data.data.collectionByHandle;
      if (!collection) return [];
      
      return collection.products.edges.map(transformProduct);
    } catch (error) {
      console.error('Error fetching products by collection:', error);
      throw error;
    }
  }
};
