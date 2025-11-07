# 🚀 Quick Start Guide - Modern Çizgi Mimarlık

Projeyi **5 dakika** içinde çalıştırın!

## ⚡ Hızlı Kurulum

### 1. Proje Dosyalarını İndirin
```bash
# Dosyaları masaüstüne veya istediğiniz klasöre çıkarın
cd /path/to/modern-cizgi-website
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

Alternatif olarak yarn kullanabilirsiniz:
```bash
yarn install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

### 4. Tarayıcıda Açın
```
http://localhost:3000
```

🎉 **Tebrikler!** Site artık çalışıyor.

## 📋 Önemli Bilgiler

### Proje Yapısı
```
modern-cizgi-website/
├── app/                 # Sayfalar
│   ├── page.tsx        # Ana Sayfa
│   ├── hizmetler/      # Hizmetler sayfası
│   ├── portfolio/      # Projeler sayfası
│   ├── hakkimizda/     # Hakkımızda sayfası
│   └── iletisim/       # İletişim sayfası
├── components/          # Bileşenler
├── public/images/       # Görseller
└── README.md           # Detaylı dokümantasyon
```

### Sayfalar
- **Ana Sayfa**: `/` - Genel bakış ve bölüm önizlemeleri
- **Hizmetler**: `/hizmetler` - 6 hizmet detayı
- **Projeler**: `/portfolio` - Proje galerisi
- **Hakkımızda**: `/hakkimizda` - Şirket hikayesi
- **İletişim**: `/iletisim` - Form ve iletişim bilgileri

## ✏️ İçerik Düzenleme

### Metin Değiştirme
Her sayfa `app/[sayfa-adi]/page.tsx` dosyasında. Örnek:

```typescript
// app/page.tsx - Ana sayfa başlığını değiştir
<h1>Fuar Katılımınızı Dönüştürün</h1>
// Bunu değiştirin ↑
```

### Renk Değiştirme
`tailwind.config.ts` dosyasında:

```typescript
colors: {
  primary: {
    DEFAULT: '#FF6B35', // Ana renk (turuncu)
  }
}
```

### Görsel Değiştirme
1. Görseli `/public/images/` klasörüne koyun
2. Kod içinde referans verin:
```tsx
<Image src="/images/yeni-gorsel.jpg" alt="Açıklama" />
```

## 🚀 Production Build

### Local'de Test
```bash
npm run build
npm start
```

### Vercel'e Deploy
En kolay yol (ücretsiz):

1. GitHub'a push edin
2. https://vercel.com adresine gidin
3. "Import Project" tıklayın
4. Repository seçin
5. Deploy!

Detaylı talimat: `VERCEL_DEPLOYMENT.md` dosyasına bakın.

## 📱 Test Etme

### Responsive Test
- Chrome DevTools (F12)
- Mobile, Tablet, Desktop görünümlerini test edin

### Sayfa Testleri
- [ ] Ana sayfa yükleniyor
- [ ] Tüm linkler çalışıyor
- [ ] Form gönderilebiliyor
- [ ] Görseller yükleniyor
- [ ] Mobile'da düzgün görünüyor

## 🔧 Sorun Giderme

### Port zaten kullanımda
```bash
# Farklı port kullan
npm run dev -- -p 3001
```

### Build hatası
```bash
# node_modules'ü sil ve tekrar yükle
rm -rf node_modules
npm install
```

### Görseller görünmüyor
- `/public/images/` klasöründe olduğundan emin olun
- Path'in doğru olduğunu kontrol edin (`/images/...`)

## 📞 Yardım

Sorunuz mu var? README.md dosyasında detaylı dokümantasyon var.

## ✅ Sonraki Adımlar

1. ✅ İçerikleri gözden geçirin ve güncelleyin
2. ✅ Gerçek proje fotoğraflarını ekleyin
3. ⏳ İletişim formunu backend'e bağlayın
4. ⏳ Domain alın ve Vercel'e deploy edin
5. ⏳ Google Analytics ekleyin
6. ⏳ SEO optimizasyonunu tamamlayın

---

**İyi çalışmalar! 💪**

Başarılar dilerim!
