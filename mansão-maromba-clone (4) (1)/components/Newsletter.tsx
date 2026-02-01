import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="flex flex-col">
          <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase mb-2 text-white leading-none">
            NEWSLETTER
          </h2>
          <p className="text-zinc-400 text-lg mb-10 font-medium">
            Receba promoções exclusivas e lançamentos em primeira mão.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1">
              <input 
                type="email" 
                placeholder="SEU MELHOR E-MAIL"
                className="w-full bg-[#111111] border border-zinc-800 px-6 py-4 text-xs font-bold text-zinc-500 outline-none focus:border-zinc-600 transition-colors uppercase tracking-[0.2em]"
              />
            </div>
            <button className="bg-white text-black px-12 py-4 font-black uppercase italic hover:bg-zinc-200 transition-colors tracking-tight">
              CADASTRAR
            </button>
          </form>
        </div>

        <div className="relative flex justify-end">
           <div className="relative z-10 w-full max-w-[500px] aspect-square lg:aspect-[4/5] overflow-hidden">
              <img 
                src="https://i.postimg.cc/vHNYgKHr/image.png" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                alt="Gym weights"
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;