'use client';
import React from 'react';
import { Send } from 'lucide-react';

export default function Home() {
  const products = [
    {id: 1, name: 'VERELUNE', category: 'Night Perfume | Pria', icon: '🌙', description: 'Parfum pria malam sensual & maskulin.', notes: 'Lavender • Mint → Vanilla • Benzoin', price: 90000},
    {id: 2, name: 'ROSÉLAT', category: 'Daily Perfume | Unisex', icon: '🌹', description: 'Parfum unisex manis soft.', notes: 'Candy Apple → Rose → Vanilla', price: 90000},
    {id: 3, name: 'PEACHAVE', category: 'Cheerful Scent | Unisex', icon: '🍑', description: 'Parfum fruity manis ceria.', notes: 'Berry Pear → Bubblegum → Vanilla', price: 90000},
  ];

  const handleWhatsApp = (name) => {
    const msg = `Halo! Saya tertarik ${name} dari Cavindhi. Harga Rp90.000?`;
    window.open(`https://wa.me/6281917977687?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-stone-50 to-stone-100">
      <header className="fixed top-0 w-full bg-white z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-4 text-2xl font-light text-stone-800">
          CAVINDHI<span className="text-stone-400"> essence</span>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-5xl font-light text-stone-900 mb-6">Aroma Meninggalkan Kesan</h1>
        <p className="text-stone-600 mb-8">Koleksi parfum premium Extrait de Parfum</p>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center text-stone-900 mb-16">Koleksi Parfum</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-lg shadow-sm border border-stone-100">
                <div className="h-80 bg-stone-50 flex items-center justify-center text-6xl">{p.icon}</div>
                <div className="p-8">
                  <p className="text-xs text-stone-500 mb-3">{p.category}</p>
                  <h3 className="text-2xl font-light text-stone-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-stone-600 mb-4">{p.description}</p>
                  <div className="border-t border-stone-100 pt-4 mb-4">
                    <p className="text-xs text-stone-500 mb-1">Aroma Notes</p>
                    <p className="text-sm text-stone-700">{p.notes}</p>
                  </div>
                  <div className="text-3xl font-light text-stone-900 mb-3">Rp {p.price.toLocaleString('id-ID')}</div>
                  <button onClick={() => handleWhatsApp(p.name)} className="w-full bg-stone-900 text-white py-3 rounded-lg hover:bg-stone-800">
                    <Send size={18} className="inline mr-2" />Pesan WA
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-white py-12 px-4 text-center">
        <h3 className="text-2xl font-light mb-4">CAVINDHI<span className="text-stone-400"> essence</span></h3>
        <a href="https://wa.me/6281917977687" target="_blank" className="text-white">WhatsApp: 0819-1797-7687</a>
        <p className="text-stone-500 text-sm mt-6">© 2024 Cavindhi Essence</p>
      </footer>
    </div>
  );
}
