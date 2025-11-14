# Vercel Deployment Guide - Modern Çizgi Mimarlık

Bu dokümanda web sitesini Vercel'e nasıl deploy edeceğiniz adım adım anlatılmaktadır.

## 🚀 Hızlı Başlangıç (3 Dakika)

### Ön Gereksinimler
- GitHub hesabı
- Vercel hesabı (ücretsiz: https://vercel.com/signup)

## 📝 Adım Adım Deployment

### 1. GitHub'a Yükleme

```bash
# Git repository oluştur
cd modern-cizgi-website
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: Modern Çizgi Mimarlık website"

# GitHub'a push et
git remote add origin https://github.com/KULLANICI-ADI/modern-cizgi-mimarlik.git
git branch -M main
git push -u origin main
```

### 2. Vercel'e Deploy

#### Yöntem A: Vercel Dashboard (Önerilen)

1. **Vercel'e Giriş Yapın**: https://vercel.com/login
2. **New Project**: "Add New" > "Project"
3. **Import Git Repository**: 
   - GitHub hesabınızı bağlayın
   - `modern-cizgi-mimarlik` repo'sunu seçin
4. **Configure Project**:
   - Framework Preset: `Next.js` (Otomatik algılanır)
   - Root Directory: `./` (Varsayılan)
   - Build Command: `npm run build` (Otomatik)
   - Output Directory: `.next` (Otomatik)
5. **Environment Variables** (Opsiyonel):
   ```
   NEXT_PUBLIC_SITE_URL=https://www.moderncizgi.com
   NEXT_PUBLIC_CONTACT_EMAIL=info@moderncizgi.com
   ```
6. **Deploy**: "Deploy" butonuna tıklayın

#### Yöntem B: Vercel CLI

```bash
# Vercel CLI yükle
npm i -g vercel

# Projeyi deploy et
cd modern-cizgi-website
vercel

# Soruları yanıtlayın:
# ? Set up and deploy? Yes
# ? Which scope? [Your Account]
# ? Link to existing project? No
# ? What's your project's name? modern-cizgi-mimarlik
# ? In which directory is your code located? ./

# Production deploy
vercel --prod
```

### 3. Custom Domain Bağlama

1. **Vercel Dashboard** > Projeniz > "Settings" > "Domains"
2. **Add Domain**: `moderncizgi.com` veya `www.moderncizgi.com`
3. **DNS Ayarları**: Vercel size DNS kayıtlarını gösterecek

#### DNS Kayıtları (Domain Sağlayıcınızda)

**A Record**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record** (www için):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. **Verify**: DNS propagation 24-48 saat sürebilir

### 4. SSL Certificate

Vercel otomatik olarak Let's Encrypt SSL certificate sağlar:
- ✅ HTTPS otomatik aktif
- ✅ HTTP → HTTPS yönlendirme otomatik
- ✅ Certificate otomatik yenileme

## 🔄 Sürekli Deployment (CI/CD)

Vercel, GitHub ile otomatik entegrasyon sağlar:

### Her Git Push'ta Otomatik Deploy
```bash
# Değişiklik yap
git add .
git commit -m "Update content"
git push

# Vercel otomatik olarak:
# 1. Build yapar
# 2. Preview URL oluşturur
# 3. Production'a deploy eder (main branch)
```

### Branch Preview'lar
- **main** branch → Production (`moderncizgi.com`)
- **develop** branch → Preview URL
- **Pull Request** → Otomatik preview URL

## 📊 Vercel Analytics (Opsiyonel)

### 1. Analytics Aktifleştirme
1. Vercel Dashboard > Project > "Analytics"
2. "Enable Analytics"
3. Ücretsiz 100K pageview/ay

### 2. Speed Insights
```bash
npm install @vercel/speed-insights

# app/layout.tsx'a ekle:
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

## 🔧 Environment Variables

### Production Variables Ekleme

**Vercel Dashboard**:
1. Project > Settings > Environment Variables
2. Key-Value çiftleri ekle:

```
NEXT_PUBLIC_SITE_URL=https://www.moderncizgi.com
NEXT_PUBLIC_CONTACT_EMAIL=info@moderncizgi.com
NEXT_PUBLIC_CONTACT_PHONE=+902125550123
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX
```

### Local Development

`.env.local` dosyası oluşturun:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=info@moderncizgi.com
```

## 🎯 Build Optimization

### Vercel Build Settings

**Vercel Dashboard** > Project > Settings > General

```
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

### Görselleri Optimize Etme

Vercel otomatik görsel optimizasyonu yapar:
- WebP/AVIF formatına çevirme
- Responsive resizing
- Lazy loading

## 🔐 Güvenlik

### CORS Headers

`next.config.js` dosyasına ekleyin:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://moderncizgi.com' },
        ],
      },
    ]
  },
}
```

### Security Headers

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## 📈 Monitoring & Logs

### Vercel Logs

1. **Real-time Logs**: Dashboard > Project > Deployments > [Deployment] > "Runtime Logs"
2. **Build Logs**: Dashboard > Project > Deployments > [Deployment] > "Build Logs"

### Error Tracking (Sentry)

```bash
npm install @sentry/nextjs

# Sentry wizard çalıştır
npx @sentry/wizard -i nextjs
```

## 🔄 Rollback

Bir deployment'ı geri almak için:

1. Dashboard > Project > Deployments
2. Önceki başarılı deployment'ı seç
3. "..." menü > "Promote to Production"

## 💡 Pro Tips

### 1. Preview Deployments
Her branch otomatik preview URL alır:
- Müşteriye göstermek için ideal
- URL: `project-name-branch.vercel.app`

### 2. Edge Functions
API route'larını Vercel Edge Network'te çalıştırın:
```typescript
export const config = {
  runtime: 'edge',
}
```

### 3. Image Optimization
Next.js Image component kullanın:
```tsx
import Image from 'next/image'
<Image src="/path" width={500} height={300} alt="..." />
```

### 4. Caching
Static sayfalar otomatik cache'lenir:
- Build time'da generate edilir
- CDN'den serve edilir
- Çok hızlı load time

## 🆘 Troubleshooting

### Build Hatası
```bash
# Local'de test et
npm run build

# Hata loglarını kontrol et
vercel logs [deployment-url]
```

### Domain Bağlanmıyor
- DNS propagation 24-48 saat sürer
- `nslookup moderncizgi.com` ile kontrol et
- Vercel Support'a ticket aç

### Environment Variables Çalışmıyor
- `NEXT_PUBLIC_` prefix'i ekleyin (client-side için)
- Vercel'de doğru environment seçilmiş mi? (Production/Preview)
- Değişiklikten sonra yeniden deploy edin

## 📞 Support

### Vercel Support
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support
- Discord: https://vercel.com/discord

### Community
- Next.js Discord: https://nextjs.org/discord
- GitHub Discussions: https://github.com/vercel/next.js/discussions

## ✅ Deployment Checklist

Deployment öncesi kontrol listesi:

- [ ] Tüm bağımlılıklar yüklenmiş (`package.json`)
- [ ] Local'de build başarılı (`npm run build`)
- [ ] Tüm görseller `/public` klasöründe
- [ ] Environment variables tanımlanmış
- [ ] Meta taglar ve SEO ayarları tamam
- [ ] İletişim formu test edilmiş
- [ ] Tüm linkler çalışıyor
- [ ] Mobile responsive test edilmiş
- [ ] SSL certificate aktif (Vercel otomatik)
- [ ] Custom domain bağlanmış
- [ ] Analytics kurulmuş (opsiyonel)

## 🎉 Başarılı Deployment Sonrası

1. **Site'yi Test Edin**: Tüm sayfaları ve formları kontrol edin
2. **Google Search Console**: Site'i ekleyin
3. **Google Analytics**: Tracking ID ekleyin
4. **Social Media**: Site linkini güncelleyin
5. **Monitor**: Vercel Analytics'i takip edin

---

**İyi Şanslar! 🚀**

Sorularınız için: support@moderncizgi.com
