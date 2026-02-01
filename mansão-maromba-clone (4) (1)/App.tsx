
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import PremiumLine from './components/PremiumLine';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './CartContext';
import { BEST_SELLERS, NEW_ARRIVALS } from './constants';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          <ProductCarousel 
            title="Os Mais Vendidos" 
            products={BEST_SELLERS} 
          />
          
          <PremiumLine />
          
          <ProductCarousel 
            title="Nossos Lançamentos" 
            products={NEW_ARRIVALS} 
          />
        </main>
        
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default App;
