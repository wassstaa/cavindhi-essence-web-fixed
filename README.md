# 🌸 Cavindhi Essence - Premium Perfume Website

Website e-commerce parfum Cavindhi Essence dengan 3 varian signature: VERELUNE, ROSÉLAT, dan PEACHAVE.

## ✨ Fitur

- ✅ Design minimalist beige-putih yang elegant
- ✅ 3 produk parfum dengan deskripsi lengkap
- ✅ WhatsApp integration untuk order
- ✅ Responsive di semua device
- ✅ Fast loading dan SEO-friendly
- ✅ Modern tech stack (Next.js + Tailwind CSS)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm atau yarn

### Development

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

### Build untuk Production

```bash
npm run build
npm start
```

## 🌐 Deploy ke Vercel

### Cara Termudah (Recommended):

1. **Push ke GitHub dulu:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/cavindhi-essence.git
   git push -u origin main
   ```

2. **Deploy ke Vercel:**
   - Buka [vercel.com](https://vercel.com)
   - Klik "New Project"
   - Import repository GitHub `cavindhi-essence`
   - Klik "Deploy"
   - **DONE!** 🎉

### Atau Direct Deploy:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow instruksi di terminal

## 📱 WhatsApp Integration

Website otomatis kirim pesan ke WhatsApp Anda:
- **Nomor:** 081917977687
- **Pesan:** Pre-filled dengan nama produk dan harga

Edit di `app/page.tsx` baris `handleWhatsApp` untuk ubah nomor.

## 🎨 Customization

### Ubah Warna/Theme
Edit `tailwind.config.js` - ganti color palette

### Ubah Produk
Edit `products` array di `app/page.tsx` - tambah/hapus/edit varian

### Ubah Nomor WhatsApp
Edit `handleWhatsApp` function di `app/page.tsx`:
```javascript
const whatsappURL = `https://wa.me/YOUR_NUMBER?text=${encodedMessage}`;
```

## 📁 Struktur Project

```
cavindhi-web/
├── app/
│   ├── page.tsx          (Halaman utama)
│   ├── layout.tsx        (Layout global)
│   └── globals.css       (Global styling)
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🔗 Links

- **Vercel Documentation:** https://vercel.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com

## 📞 Support

Jika ada error atau pertanyaan, check:
1. `npm install` - pastikan dependencies terinstall
2. `npm run dev` - check console untuk error
3. GitHub issues atau stack overflow

## 📄 License

Private Project - Cavindhi Essence

---

**Happy selling! 🌸** ✨
