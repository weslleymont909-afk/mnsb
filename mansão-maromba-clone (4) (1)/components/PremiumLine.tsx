import React from 'react';

const PremiumLine: React.FC = () => {
  const items = [
    { 
      title: 'WHISKY', 
      image: 'https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/slide-1765555694918-7310363490-0312d6e1a4166d29f55f072e8e19eedc1765555696.png?9052592071996250011' 
    },
    { 
      title: 'VODKA', 
      image: 'https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/slide-1765555694918-2651655458-a2a4f4b5ff91a1838fffdcbcef4946041765555697.png?9052592071996250011' 
    },
    { 
      title: 'GIN', 
      image: 'https://acdn-us.mitiendanube.com/stores/004/048/852/themes/morelia/slide-1765555694918-7099535074-962311875171836781a7f1bc60fc914b1765555698.png?9052592071996250011' 
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter italic text-white">
          LINHA PREMIUM MANSÃO MAROMBA
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="relative group overflow-hidden aspect-[4/5] rounded-sm bg-zinc-900">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="absolute inset-0 flex items-end justify-center p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <h3 className="text-white text-4xl font-black italic tracking-tighter uppercase">
                   {item.title}
                 </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumLine;