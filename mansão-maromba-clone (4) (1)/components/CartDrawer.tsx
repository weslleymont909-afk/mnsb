
import React, { useState } from 'react';
// Added ShoppingBag to the imports from lucide-react
import { X, Minus, Plus, Trash2, QrCode, Copy, Check, ShoppingBag } from 'lucide-react';
import { useCart } from '../CartContext';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const [loading, setLoading] = useState(false);
  const [pixData, setPixData] = useState<{ qr_code: string, copy_paste: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Exemplo de payload enviado ao seu backend
      const payload = {
        amount: totalPrice,
        items: cart.map(item => ({
          id: item.id,
          title: item.name,
          unit_price: item.price,
          quantity: item.quantity
        }))
      };

      // Chamada real ao seu endpoint backend
      // const response = await fetch('/api/pix', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload)
      // });
      // const data = await response.json();

      // SIMULAÇÃO para o preview:
      await new Promise(r => setTimeout(r, 1500));
      setPixData({
        qr_code: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020126580014br.gov.bcb.pix0136fake-key-vega-checkout-mansao-maromba",
        copy_paste: "00020126580014br.gov.bcb.pix0136fake-key-vega-checkout-mansao-maromba-5204000053039865802BR5913MansaoMaromba6009SaoPaulo62070503***6304E2B1"
      });
    } catch (error) {
      alert("Erro ao processar Pix. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const copyPix = () => {
    if (pixData) {
      navigator.clipboard.writeText(pixData.copy_paste);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-zinc-800 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-xl font-black italic tracking-tighter uppercase">Seu Carrinho ({totalItems})</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-zinc-900 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
              <ShoppingBag size={64} strokeWidth={1} />
              <p className="font-medium">Seu carrinho está vazio</p>
            </div>
          ) : pixData ? (
            <div className="flex flex-col items-center text-center gap-6 py-4">
              <div className="bg-white p-4 rounded-xl">
                <img src={pixData.qr_code} alt="QR Code Pix" className="w-48 h-48" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Pagamento via Pix</h3>
                <p className="text-sm text-zinc-400">Escaneie o código acima ou copie o código abaixo para pagar.</p>
              </div>
              <button 
                onClick={copyPix}
                className="w-full flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 p-4 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                <span className="text-xs font-bold uppercase tracking-widest">
                  {copied ? "Copiado!" : "Copiar Código Pix"}
                </span>
              </button>
              <button onClick={() => setPixData(null)} className="text-zinc-500 text-xs uppercase font-bold hover:underline">
                Voltar ao carrinho
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-zinc-900 pb-6">
                <div className="w-20 h-20 bg-zinc-900 rounded-md overflow-hidden flex-shrink-0">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold leading-tight max-w-[180px]">{item.name}</h4>
                    <button onClick={() => removeFromCart(item.id)} className="text-zinc-600 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-3 border border-zinc-800 rounded-md px-2 py-1">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-zinc-400"><Minus size={14} /></button>
                      <span className="text-sm font-bold min-w-[20px] text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-zinc-400"><Plus size={14} /></button>
                    </div>
                    <span className="font-bold">R${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {!pixData && cart.length > 0 && (
          <div className="p-6 border-t border-zinc-800 bg-zinc-900/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-zinc-400 font-medium uppercase text-xs tracking-widest">Total</span>
              <span className="text-2xl font-black">R${totalPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-white text-black py-4 font-black uppercase italic tracking-tighter hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {loading ? "Processando..." : (
                <>
                  Finalizar Compra via Pix <QrCode size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
