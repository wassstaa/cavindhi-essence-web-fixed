'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const CavindhiEssence = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'VERELUNE',
      category: 'Night Perfume | Pria',
      icon: '🌙',
      description: 'Parfum pria malam dengan aroma sensual & maskulin. Terinspirasi dari kata Lune (bulan), menciptakan ketenangan malam dengan daya tarik yang dalam.',
      notes: 'Lavender • Mint → Vanilla • Benzoin → Honey • Tonka • Tobacco',
      performance: 'Longevity: ±12 jam | Sillage: Moderate-Strong',
      tagline: '"Be Gentle, Be Unforgettable"',
      price: 90000,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
    },
    {
      id: 2,
      name: 'ROSÉLAT',
      category: 'Daily Perfume | Unisex',
      icon: '🌹',
      description: 'Parfum unisex manis dengan karakter soft dan menenangkan. Perpaduan floral dan fruity yang nyaman untuk penggunaan sehari-hari.',
      notes: 'Candy Apple → Rose Floral → Vanilla Cream',
      performance: 'Longevity: ±12 jam | Sillage: Soft-Moderate',
      tagline: '"Be Gentle, Be Unforgettable"',
      price: 90000,
      image: 'https://images.unsplash.com/photo-1585286307820-6d7b0b5e3451?w=400&h=500&fit=crop',
    },
    {
      id: 3,
      name: 'PEACHAVE',
      category: 'Cheerful Scent | Unisex',
      icon: '🍑',
      description: 'Parfum unisex fruity dengan karakter manis, ceria, dan playful. Untuk aktivitas santai dengan suasana hati penuh warna.',
      notes: 'Berry Pear • Peach → Bubblegum → Vanilla • Musk',
      performance: 'Longevity: ±12 jam | Sillage: Moderate',
      tagline: '"Be Gentle, Be Unforgettable"',
      price: 90000,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop',
    },
  ];

  const handleWhatsApp = (productName) => {
    const message = `Halo! Saya tertarik membeli ${productName} dari Cavindhi Essence. Harga Rp90.000. Berapa cara pembayarannya?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/6281917977687?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-stone-50 to-stone-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-widest text-stone-800">
            CAVINDHI<span className="font-extralight text-stone-400"> essence</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-600 font-light">
            <a href="#about" className="hover:text-stone-900 transition">About</a>
            <a href="#products" className="hover:text-stone-900 transition">Products</a>
            <a href="#contact" className="hover:text-stone-900 transition">Contact</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-stone-900 mb-6 tracking-tight">
            Aroma yang Meninggalkan Kesan
          </h1>
          <p className="text-lg text-stone-600 font-light mb-8">
            Koleksi parfum premium dengan formula Extrait de Parfum yang tahan lama dan mewah
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-stone-300 to-stone-100 mx-auto mb-8"></div>
          <p className="text-stone-500 font-light italic">
            "Be Gentle, Be Unforgettable"
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center text-stone-900 mb-4 tracking-wide">
            Koleksi Parfum
          </h2>
          <p className="text-center text-stone-600 font-light mb-16">
            Temukan aroma yang sempurna untuk setiap momen
          </p>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-b from-stone-50 to-stone-100 overflow-hidden flex items-center justify-center">
                  <div className="text-6xl">{product.icon}</div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="mb-3">
                    <p className="text-xs text-stone-500 uppercase tracking-widest font-light">
                      {product.category}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl font-light text-stone-900 mb-2 tracking-wide">
                    {product.name}
                  </h3>

                  <p className="text-stone-600 font-light text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-4 pb-4 border-t border-stone-100">
                    <p className="text-xs text-stone-500 uppercase tracking-widest font-light mt-4 mb-1">
                      Aroma Notes
                    </p>
                    <p className="text-sm text-stone-700 font-light">
                      {product.notes}
                    </p>
                  </div>

                  <p className="text-xs text-stone-500 font-light mb-4">
                    {product.performance}
                  </p>

                  <p className="text-stone-700 font-light italic text-sm mb-6">
                    {product.tagline}
                  </p>

                  {/* Price & CTA */}
                  <div className="space-y-3">
                    <div className="text-3xl font-light text-stone-900">
                      Rp {product.price.toLocaleString('id-ID')}
                    </div>
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="w-full bg-stone-900 text-white py-3 rounded-lg font-light tracking-wide hover:bg-stone-800 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Send size={18} className="group-hover:translate-x-1 transition" />
                      Pesan via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center text-stone-900 mb-12 tracking-wide">
            Mengapa Cavindhi Essence?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-light text-stone-900 mb-3">Extrait de Parfum</h3>
              <p className="text-stone-600 font-light text-sm">
                Konsentrasi wewangian tertinggi untuk ketahanan hingga 12 jam
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎀</div>
              <h3 className="text-lg font-light text-stone-900 mb-3">Premium Quality</h3>
              <p className="text-stone-600 font-light text-sm">
                Formula berkualitas tinggi dengan bahan pilihan terbaik
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-lg font-light text-stone-900 mb-3">Unik & Elegan</h3>
              <p className="text-stone-600 font-light text-sm">
                Aroma signature yang meninggalkan kesan mendalam
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-stone-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-light tracking-widest mb-4">
            CAVINDHI<span className="font-extralight text-stone-400"> essence</span>
          </h3>
          <p className="text-stone-400 font-light mb-6">
            "Be Gentle, Be Unforgettable"
          </p>
          <div className="flex justify-center gap-8 mb-8">
            
              href="https://wa.me/6281917977687"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-stone-300 transition font-light"
            >
              WhatsApp: 0819-1797-7687
            </a>
          </div>
          <div className="border-t border-stone-700 pt-6">
            <p className="text-stone-500 font-light text-sm">
              © 2024 Cavindhi Essence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CavindhiEssence;
