import axios from 'axios';

const SHOPIFY_STORE_DOMAIN = 'hztmcs-09.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = 'f736803a6786e7c47579c2cc527669ca';
const API_VERSION = '2024-01';

const shopifyClient = axios.create({
  baseURL: `https://${SHOPIFY_STORE_DOMAIN}/api/${API_VERSION}`,
  headers: {
    'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
});

// GraphQL mutation to create checkout
const CREATE_CHECKOUT_MUTATION = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
        lineItems(first: 250) {
          edges {
            node {
              title
              quantity
            }
          }
        }
      }
      checkoutUserErrors {
        message
        field
      }
    }
  }
`;

// Create Shopify checkout and redirect
export const createShopifyCheckout = async (cartItems) => {
  try {
    const lineItems = cartItems.map(item => ({
      variantId: item.variants?.[0]?.id || `gid://shopify/ProductVariant/${item.id}`,
      quantity: item.quantity
    }));

    const response = await shopifyClient.post('/graphql.json', {
      query: CREATE_CHECKOUT_MUTATION,
      variables: {
        input: {
          lineItems: lineItems
        }
      }
    });

    if (response.data.errors) {
      console.error('Shopify GraphQL errors:', response.data.errors);
      throw new Error('Failed to create checkout');
    }

    const checkout = response.data.data.checkoutCreate.checkout;
    const errors = response.data.data.checkoutCreate.checkoutUserErrors;

    if (errors && errors.length > 0) {
      console.error('Checkout errors:', errors);
      throw new Error(errors[0].message);
    }

    // Return the checkout URL to redirect to
    return checkout.webUrl;
  } catch (error) {
    console.error('Error creating Shopify checkout:', error);
    throw error;
  }
};

export const shopifyService = {
  // ... existing methods ...
  createCheckout: createShopifyCheckout,
};
