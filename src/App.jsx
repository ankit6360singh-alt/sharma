import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import CartSidebar from './components/CartSidebar';
import { ShopProvider } from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <div className="min-h-screen bg-black text-white selection:bg-neon-orange selection:text-white font-sans">
        <Navbar />
        <CartSidebar />
        <Hero />
        <FeaturedSection />
      </div>
    </ShopProvider>
  );
}

export default App;
