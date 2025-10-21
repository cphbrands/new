import React from "react";
import "@/App.css";
import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { RecentlyViewedProvider } from "./context/RecentlyViewedContext";
import { CurrencyProvider } from "./context/CurrencyContext";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <HelmetProvider>
      <CurrencyProvider>
        <CartProvider>
          <WishlistProvider>
            <RecentlyViewedProvider>
              <BrowserRouter>
                <ScrollToTop />
                <div className="App">
                  <Navbar />
                  <Breadcrumbs />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/kategori/:category" element={<CategoryPage />} />
                    <Route path="/produkt/:id" element={<ProductPage />} />
                    <Route path="/kurv" element={<CartPage />} />
                    <Route path="/onskeliste" element={<WishlistPage />} />
                  </Routes>
                  <Footer />
                  <BackToTop />
                  <Toaster />
                </div>
              </BrowserRouter>
            </RecentlyViewedProvider>
          </WishlistProvider>
        </CartProvider>
      </CurrencyProvider>
    </HelmetProvider>
  );
}

export default App;
