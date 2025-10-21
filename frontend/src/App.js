import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kategori/:category" element={<CategoryPage />} />
            <Route path="/produkt/:id" element={<ProductPage />} />
            <Route path="/kurv" element={<CartPage />} />
          </Routes>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
