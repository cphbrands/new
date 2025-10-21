import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CurrencyContext = createContext();

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
};

// Exchange rates (base: DKK)
const exchangeRates = {
  DKK: 1,
  USD: 0.145,    // 1 DKK = 0.145 USD
  EUR: 0.134,    // 1 DKK = 0.134 EUR
  SEK: 1.52,     // 1 DKK = 1.52 SEK
  NOK: 1.58,     // 1 DKK = 1.58 NOK
  GBP: 0.115,    // 1 DKK = 0.115 GBP
};

const currencySymbols = {
  DKK: 'kr.',
  USD: '$',
  EUR: '€',
  SEK: 'kr',
  NOK: 'kr',
  GBP: '£',
};

const languageToCurrency = {
  da: 'DKK',
  en: 'USD',
  sv: 'SEK',
  no: 'NOK',
  de: 'EUR',
  fr: 'EUR',
  es: 'EUR',
};

export const CurrencyProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currency, setCurrency] = useState('DKK');

  useEffect(() => {
    const newCurrency = languageToCurrency[i18n.language] || 'DKK';
    setCurrency(newCurrency);
  }, [i18n.language]);

  const convertPrice = (priceInDKK) => {
    const rate = exchangeRates[currency];
    return priceInDKK * rate;
  };

  const formatPrice = (priceInDKK) => {
    const convertedPrice = convertPrice(priceInDKK);
    const symbol = currencySymbols[currency];
    
    // Format based on currency
    if (currency === 'USD' || currency === 'GBP') {
      return `${symbol}${convertedPrice.toFixed(2)}`;
    }
    return `${convertedPrice.toFixed(2)} ${symbol}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, convertPrice, formatPrice, currencySymbol: currencySymbols[currency] }}>
      {children}
    </CurrencyContext.Provider>
  );
};
