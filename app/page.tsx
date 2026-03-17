'use client';

import React from 'react';
import { Send } from 'lucide-react';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'VERELUNE',
      category: 'Night Perfume | Pria',
      icon: '🌙',
      description: 'Parfum pria malam dengan aroma sensual & maskulin.',
      notes: 'Lavender • Mint → Vanilla • Benzoin → Honey',
      price: 90000,
    },
    {
      id: 2,
      name: 'ROSÉLAT',
      category: 'Daily Perfume | Unisex',
      icon: '🌹',
      description: 'Parfum unisex manis dengan karakter soft.',
      notes: 'Candy Apple → Rose Floral → Vanilla Cream',
      price: 90000,
    },
    {
      id: 3,
      name: 'PEACHAVE',
      category: 'Cheerful Scent | Unisex',
      icon: '🍑',
      description: 'Parfum unisex fruity dengan karakter manis.',
      notes: 'Berry Pear • Peach → Bubblegum → Vanilla',
      price: 90000,
    },
  ];

  const handleWhatsApp = (name) => {
    const msg = `Halo! Saya tertarik membeli ${name} dari Cavindhi Essence. Harga Rp90.000. Berapa cara pembayarannya?`;
    window.open(`https://wa.me/6281917977687?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-stone-50 to-stone-100">
      <header className="fixed top-0 w-full bg-white bg-opacity-95 z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-2xl font-light tracking-widest text-stone-800">
            CAVINDHI<span className="text-stone-400"> essence</span>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-5xl font-light text-stone-900 mb-6">Aroma yang Meninggalkan Kesan</h1>
        <p className="text-lg text-stone-600 font-light mb-8">Koleksi parfum premium Extrait de Parfum</p>
        <p className="text-stone-500 italic">"Be Gentle, Be Unforgettable"</p>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center text-stone-900 mb-16">Koleksi Parfum</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden">
                <div className="h-80 bg-gradient-to-b from-stone-50 to-stone-100 flex items-center justify-center text-6xl">
                  {p.icon}
                </div>
                <div className="p-8">
                  <p className="text-xs text-stone-500 uppercase mb-3">{p.category}</p>
                  <h3 className="text-2xl font-light text-stone-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-stone-600 mb-4">{p.description}</p>
                  <div className="border-t border-stone-100 pt-4 mb-4">
                    <p className="text-xs text-stone-500 uppercase mb-1">Aroma Notes</p>
                    <p className="text-sm text-stone-700">{p.notes}</p>
                  </div>
                  <div className="text-3xl font-light text-stone-900 mb-3">Rp {p.price.toLocaleString('id-ID')}</div>
                  <button onClick={() => handleWhatsApp(p.name)} className="w-full bg-stone-900 text-white py-3 rounded-lg font-light hover:bg-stone-800 flex items-center justify-center gap-2">
                    <Send size={18} />
                    Pesan via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-stone-900 mb-12">Mengapa Cavindhi Essence?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-light mb-3">Extrait de Parfum</h3>
              <p className="text-sm text-stone-600">Konsentrasi tertinggi, ketahanan hingga 12 jam</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎀</div>
              <h3 className="text-lg font-light mb-3">Premium Quality</h3>
              <p className="text-sm text-stone-600">Formula berkualitas dengan bahan terbaik</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-lg font-light mb-3">Unik & Elegan</h3>
              <p className="text-sm text-stone-600">Aroma signature yang berkesan</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-white py-12 px-4 text-center">
        <h3 className="text-2xl font-light tracking-widest mb-4">CAVINDHI<span className="text-stone-400"> essence</span></h3>
        <p className="text-stone-400 mb-6">"Be Gentle, Be Unforgettable"</p>
        <a href="https://wa.me/6281917977687" target="_blank" rel="noopener noreferrer" className="text-white hover:text-stone-300">
          WhatsApp: 0819-1797-7687
        </a>
        <div className="border-t border-stone-700 mt-6 pt-6">
          <p className="text-stone-500 text-sm">© 2024 Cavindhi Essence. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
      }
