# 🎨 Customization Guide - Modern Çizgi Mimarlık

Bu dokümanda site içeriğini nasıl özelleştireceğinizi öğreneceksiniz.

## 📝 İçerik Güncelleme

### 1. Ana Sayfa İstatistikleri

**Dosya**: `app/page.tsx`

```typescript
// Satır ~50 civarı
<div className="text-5xl font-bold text-primary">15+</div>
<p className="text-grey">Yıllık Deneyim</p>

// Değiştirin:
<div className="text-5xl font-bold text-primary">20+</div>
<p className="text-grey">Yıllık Deneyim</p>
```

### 2. Hizmetler Listesi

**Dosya**: `app/hizmetler/page.tsx`

```typescript
const services = [
  {
    icon: Lightbulb,
    title: 'Özel Stand Tasarımı',  // Burası başlık
    description: '...',             // Burası açıklama
    features: [                     // Burası özellikler listesi
      'Marka odaklı konsept geliştirme',
      // Yeni özellik ekleyebilirsiniz
    ],
  },
  // Yeni hizmet eklemek için bu bloğu kopyalayın
]
```

### 3. Proje Ekleme

**Dosya**: `app/portfolio/page.tsx`

```typescript
const projects = [
  {
    id: 7,  // Yeni ID
    title: 'Yeni Proje Adı',
    category: 'Teknoloji',  // Kategori
    location: 'Ankara',
    image: '/images/portfolio7.jpg',  // Görsel yolu
    size: '50 m²',
    description: 'Proje açıklaması...',
  },
  // Mevcut projelerin altına ekleyin
]
```

**Görseli Ekleme**:
1. Görseli `/public/images/` klasörüne koyun
2. Adını `portfolio7.jpg` olarak verin
3. Yukarıdaki kodu güncelleyin

### 4. Müşteri Logoları

**Dosya**: `app/hakkimizda/page.tsx`

```typescript
const clientLogos = [
  { name: 'Yeni Müşteri', logo: '/images/logos/yeni-logo.png' },
  // Mevcut logoların altına ekleyin
]
```

**Logo Ekleme**:
1. Logoyu `/public/images/logos/` klasörüne koyun
2. PNG veya JPG formatında (tercihen PNG)
3. Boyut: 120x60px önerilir (otomatik resize edilir)
4. Yukarıdaki kodu güncelleyin

### 5. Müşteri Yorumları

**Dosya**: `app/hakkimizda/page.tsx`

```typescript
const testimonials = [
  {
    quote: 'Müşteri yorumu buraya gelecek...',
    author: 'İsim Soyisim',
    position: 'Ünvan',
    company: 'Şirket Adı',
  },
  // Yeni yorum eklemek için kopyalayın
]
```

### 6. İletişim Bilgileri

**Dosya**: `app/iletisim/page.tsx`

Telefon numaralarını değiştirme (satır ~150 civarı):
```typescript
<p>+90 212 555 0123</p>  // Ana hat
<p>+90 532 555 0123</p>  // Mobil
```

Email adresleri (satır ~160 civarı):
```typescript
<p>info@moderncizgi.com</p>
<p>sales@moderncizgi.com</p>
```

Adres bilgileri:
```typescript
<p>Atatürk Mahallesi, Modern Plaza</p>
<p>Kat: 5, No: 45</p>
<p>34758 Ataşehir, İstanbul, Türkiye</p>
```

### 7. Footer Bilgileri

**Dosya**: `components/Footer.tsx`

Sosyal medya linkleri (satır ~25 civarı):
```typescript
<a href="https://facebook.com/moderncizgi">  // Facebook URL
<a href="https://instagram.com/moderncizgi"> // Instagram URL
<a href="https://linkedin.com/company/moderncizgi"> // LinkedIn URL
```

Copyright yılı (en altta):
```typescript
<p>© 2024 Modern Çizgi Mimarlık.</p>
// 2025 veya 2026 yapabilirsiniz
```

## 🎨 Tasarım Özelleştirme

### Renk Değiştirme

**Dosya**: `tailwind.config.ts`

```typescript
colors: {
  primary: {
    DEFAULT: '#FF6B35',    // Ana turuncu renk
    light: '#FF8556',       // Açık turuncu
    dark: '#E65428',        // Koyu turuncu
  },
  // Yeni renk eklemek:
  secondary: {
    DEFAULT: '#007BFF',    // Mavi örneği
  }
}
```

Kullanım:
```tsx
<div className="bg-primary">      // Ana renk
<div className="bg-secondary">    // İkincil renk
<button className="text-primary"> // Metin rengi
```

### Font Değiştirme

**Dosya**: `app/layout.tsx`

```typescript
import { Inter } from 'next/font/google'

// Başka font kullanmak:
import { Roboto } from 'next/font/google'
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700']
})
```

Google Fonts: https://fonts.google.com

### Button Stilleri

**Dosya**: `app/globals.css`

```css
.btn-primary {
  /* Mevcut stiller */
  @apply bg-primary hover:bg-primary-dark text-light px-8 py-4 rounded-lg;
  
  /* Değiştirebilirsiniz: */
  /* rounded-lg -> rounded-full (yuvarlak) */
  /* px-8 py-4 -> px-12 py-6 (daha büyük) */
}
```

## 📱 Layout Düzenleme

### Hero Section Yüksekliği

**Dosya**: `app/page.tsx` (satır ~10 civarı)

```tsx
<section className="relative min-h-screen">
// Değiştirin:
<section className="relative min-h-[600px]">  // 600px sabit yükseklik
<section className="relative min-h-[80vh]">   // Ekranın %80'i
```

### Container Genişliği

**Dosya**: `tailwind.config.ts`

```typescript
theme: {
  extend: {
    maxWidth: {
      'container': '1280px',  // Varsayılan
      // Değiştirin:
      'container': '1440px',  // Daha geniş
    }
  }
}
```

### Grid Kolonları

Proje galerisi (3 kolon):
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// 4 kolon yapmak için:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

## 🖼️ Görsel Optimizasyonu

### Görsel Ekleme Checklist

1. **Format**: JPG veya PNG (WebP otomatik oluşturulur)
2. **Boyut**: Max 1920px genişlik
3. **Kalite**: 80-90% (Photoshop'ta "Save for Web")
4. **İsimlendirme**: Küçük harf, tire ile (örn: `yeni-proje.jpg`)

### Görsel Yükleme

```bash
# public/images/ klasörüne kopyalayın
cp ~/Downloads/yeni-proje.jpg public/images/
```

Kod içinde kullanım:
```tsx
import Image from 'next/image'

<Image
  src="/images/yeni-proje.jpg"
  alt="Proje açıklaması"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## 🔧 Advanced Customization

### Yeni Sayfa Ekleme

1. **Klasör oluştur**: `app/yeni-sayfa/`
2. **page.tsx oluştur**:
```typescript
export default function YeniSayfaPage() {
  return (
    <div>
      <h1>Yeni Sayfa</h1>
      <p>İçerik buraya gelecek</p>
    </div>
  )
}
```
3. **Navigation'a ekle** (`components/Navigation.tsx`):
```typescript
{ href: '/yeni-sayfa', label: 'Yeni Sayfa' }
```

### SEO Meta Tags

Her sayfa için metadata:
```typescript
// app/yeni-sayfa/page.tsx
export const metadata = {
  title: 'Yeni Sayfa | Modern Çizgi Mimarlık',
  description: 'Sayfa açıklaması buraya',
}
```

### Google Analytics Ekleme

1. `app/layout.tsx` dosyasına ekle:
```tsx
<head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXX');
      `,
    }}
  />
</head>
```

## 💡 Best Practices

### İçerik Güncellerken

1. **Backup alın**: `git commit -m "Before update"`
2. **Küçük değişiklikler**: Bir seferde bir bölüm değiştirin
3. **Test edin**: Her değişiklikten sonra `npm run dev` ile test edin
4. **Responsive kontrol**: Mobil görünümü kontrol edin

### Görsel Eklerken

- ✅ Optimize edilmiş görseller kullanın
- ✅ Alt text ekleyin (SEO için)
- ✅ Aspect ratio'yu koruyun
- ❌ Çok büyük dosyalar yüklemeyin (>2MB)

### Kod Değiştirirken

- ✅ Yedek alın (`git commit`)
- ✅ Syntax'ı kontrol edin
- ✅ TypeScript hatalarını düzeltin
- ❌ Bilinmeyen kodu değiştirmeyin

## 📚 Kaynak Dosyalar

### Önemli Dosyalar

| Dosya | Amaç |
|-------|------|
| `app/page.tsx` | Ana sayfa |
| `app/hizmetler/page.tsx` | Hizmetler |
| `app/portfolio/page.tsx` | Projeler |
| `app/hakkimizda/page.tsx` | Hakkımızda |
| `app/iletisim/page.tsx` | İletişim |
| `components/Navigation.tsx` | Menü |
| `components/Footer.tsx` | Alt bilgi |
| `tailwind.config.ts` | Renkler, stil |
| `app/globals.css` | Global stiller |

## 🆘 Sorun Giderme

### Değişiklik görünmüyor

1. Sunucuyu yeniden başlatın: `Ctrl+C` sonra `npm run dev`
2. Tarayıcı cache'ini temizleyin: `Ctrl+Shift+R`
3. `.next` klasörünü silin: `rm -rf .next`

### Build hatası

```bash
# TypeScript hatası alıyorsanız
npm run build

# Hata satırını bulun ve düzeltin
```

### Görsel yüklenmiyor

- Path'i kontrol edin: `/images/...` (başında `/` olmalı)
- Dosya adında Türkçe karakter yok mu?
- Dosya boyutu 10MB'dan küçük mü?

## 📞 Yardım

Takıldığınız yerler için:
- README.md - Detaylı dokümantasyon
- QUICKSTART.md - Hızlı başlangıç
- VERCEL_DEPLOYMENT.md - Deployment

---

**Başarılar! 🎨**

İyi özelleştirmeler dilerim!
