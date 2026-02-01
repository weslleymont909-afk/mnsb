import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <nav className="flex items-center gap-8">
           <a href="#" className="text-[11px] font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors">Início</a>
           <a href="#" className="text-[11px] font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors">Produtos</a>
           <a href="#" className="text-[11px] font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors">Contato</a>
        </nav>

        {/* Ícone do Pix solicitado */}
        <div className="flex justify-center">
          <div className="bg-white p-2 rounded-md flex items-center justify-center border border-zinc-800 h-10 w-16">
            <img 
              src="https://logospng.org/download/pix/logo-pix-icone-1024.png" 
              alt="Pix" 
              className="h-full w-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-zinc-900 w-full pt-8">
          <div className="flex items-center gap-2 text-[10px] font-medium opacity-60">
             <span>criado com</span>
             <div className="bg-zinc-800 px-2 py-0.5 rounded text-white font-bold">nuvemshop</div>
          </div>
          <p className="text-[10px] text-zinc-500 font-medium text-center leading-relaxed">
            Copyright Bebidas Mansão Maromba - 08391256000189 - 2026. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;