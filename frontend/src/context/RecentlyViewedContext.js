import React, { createContext, useContext, useState, useEffect } from 'react';

const RecentlyViewedContext = createContext();

export const useRecentlyViewed = () => {
  const context = useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error('useRecentlyViewed must be used within RecentlyViewedProvider');
  }
  return context;
};

export const RecentlyViewedProvider = ({ children }) => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const MAX_ITEMS = 8;

  useEffect(() => {
    const saved = localStorage.getItem('bahne_recently_viewed');
    if (saved) {
      setRecentlyViewed(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bahne_recently_viewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToRecentlyViewed = (product) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(item => item.id !== product.id);
      const updated = [product, ...filtered].slice(0, MAX_ITEMS);
      return updated;
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addToRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};
