
import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useCart } from '../CartContext';

const Header: React.FC = () => {
  const { setIsCartOpen, totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Lado Esquerdo: Logo */}
        <div className="flex items-center gap-6 md:gap-12">
          <a href="/" className="block h-10 md:h-12 flex items-center">
            <img 
              src="https://i.postimg.cc/zf4X241N/OIP.jpg" 
              alt="Mansão Maromba" 
              className="h-full w-auto object-contain block"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-[13px] font-bold uppercase tracking-[0.2em] hover:text-zinc-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Lado Direito: Ícones */}
        <div className="flex items-center gap-5 md:gap-8">
          <button className="hover:text-zinc-400 transition-colors">
            <Search size={20} />
          </button>
          <button className="hover:text-zinc-400 transition-colors">
            <User size={20} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative group hover:text-zinc-400 transition-colors"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-1 text-[10px] font-bold bg-white text-black min-w-[16px] h-4 flex items-center justify-center rounded-full px-1">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
