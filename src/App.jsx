import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-orange selection:text-white">
      <Navbar />
      <Hero />
      <FeaturedSection />
    </div>
  );
}

export default App;
