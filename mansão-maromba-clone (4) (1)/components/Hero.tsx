import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BANNER_IMAGES = [
  "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527432-6183017191-3cd68bf1750f692bce2c2e4d6f72c16c1769624532-1920-1920.webp?9052592071996250011",
  "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527433-8494406820-72d899ec573a1fa9b396b88bd35d2e801769624533-1920-1920.webp?9052592071996250011",
  "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527433-5914827225-e4c1d4329210ad45c377951060e67d151769624533-1920-1920.webp?9052592071996250011",
  "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527429-4951018497-21c7219a6321af1574f2601fd5d5272b1769624531-1920-1920.webp?9052592071996250011",
  "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527431-8404873176-b96bb7237340d5f37a37e3fe7e54e30d1769624531-1920-1920.webp?9052592071996250011",
  "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527432-6183017191-3cd68bf1750f692bce2c2e4d6f72c16c1769624532-1920-1920.webp?9052592071996250011",
  "https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/2-slide-1769624527433-3645247440-726353e100cb08e5a5256a90f4c579fe1769624532-1920-1920.webp?9052592071996250011"
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % BANNER_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + BANNER_IMAGES.length) % BANNER_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-black group">
      {/* Container dos Slides */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {BANNER_IMAGES.map((url, index) => (
          <div key={index} className="w-full flex-shrink-0 relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/6]">
            <img 
              src={url} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Botões de Navegação */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
        aria-label="Próximo"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {BANNER_IMAGES.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all duration-300 rounded-full h-1 ${
              i === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;