
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../CartContext';

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleItems, setVisibleItems] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateVisibleItems = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setVisibleItems(1);
    else if (width < 768) setVisibleItems(2);
    else if (width < 1024) setVisibleItems(3);
    else setVisibleItems(4);
  }, []);

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, [updateVisibleItems]);

  const extendedProducts = useMemo(() => [
    ...products,
    ...products,
    ...products
  ], [products]);

  const [realIndex, setRealIndex] = useState(products.length);

  const handleNext = () => {
    if (!isTransitioning) return;
    setRealIndex((prev) => prev + 1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setRealIndex((prev) => prev - 1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const total = products.length;
    if (realIndex >= total * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setRealIndex(total);
      }, 500);
    }
    if (realIndex < total) {
      setTimeout(() => {
        setIsTransitioning(false);
        setRealIndex(total * 2 - 1);
      }, 500);
    }
  }, [realIndex, products.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <section className="py-16 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-12 uppercase tracking-tight">
          {title}
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={containerRef}
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ 
                transform: `translateX(-${realIndex * (100 / visibleItems)}%)`,
                width: '100%'
              }}
            >
              {extendedProducts.map((product, idx) => (
                <div 
                  key={`${product.id}-${idx}`} 
                  className="flex-shrink-0 px-4" 
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <div className="flex flex-col items-center text-center group h-full">
                    <div className="relative w-full aspect-[3/4] mb-4 flex items-center justify-center">
                      {product.tag && (
                        <span className="absolute top-0 left-0 bg-black text-white text-[11px] font-bold px-3 py-1.5 z-10">
                          {product.tag}
                        </span>
                      )}
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <h3 className="text-[15px] font-medium text-zinc-800 mb-2 leading-tight max-w-[200px] h-10 flex items-center justify-center">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-bold">R${product.price.toFixed(2).replace('.', ',')}</span>
                      {product.oldPrice && (
                        <span className="text-sm text-zinc-400 line-through">
                          R${product.oldPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>

                    <button 
                      onClick={(e) => handleAddToCart(e, product)}
                      className="flex items-center gap-2 text-black border-b border-black pb-0.5 text-[15px] font-medium hover:opacity-70 transition-opacity"
                    >
                      {addedId === product.id ? (
                        <>Adicionado <Check size={18} className="text-green-600" /></>
                      ) : (
                        <>Comprar <ShoppingBag size={18} strokeWidth={1.5} /></>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-12 gap-6">
          <button 
            onClick={handlePrev}
            className="text-black hover:opacity-50 transition-opacity p-2"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          
          <div className="text-lg font-medium tracking-widest min-w-[60px] text-center select-none">
            {currentIndex + 1} / {products.length}
          </div>

          <button 
            onClick={handleNext}
            className="text-black hover:opacity-50 transition-opacity p-2"
            aria-label="Próximo"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
