import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sitemap from './components/Sitemap';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Sitemap />
    </div>
  );
}

export default App;