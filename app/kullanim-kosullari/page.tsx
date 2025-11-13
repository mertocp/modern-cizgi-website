import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function KullanimKosullari() {
  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <section className="bg-dark text-light py-16">
        <div className="container">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kullanım Koşulları</h1>
          <p className="text-light/80">Son Güncelleme: Ocak 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">1. Genel Koşullar</h2>
              <p className="text-grey leading-relaxed">
                Bu web sitesine erişerek, bu kullanım koşullarını kabul etmiş sayılırsınız. 
                Modern Çizgi Mimarlık, bu koşulları herhangi bir zamanda değiştirme hakkını saklı tutar. 
                Web sitesini kullanmaya devam ederek, bu koşullarda yapılan değişiklikleri kabul etmiş olursunuz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">2. Hizmet Kapsamı</h2>
              <p className="text-grey leading-relaxed mb-4">
                Modern Çizgi Mimarlık aşağıdaki hizmetleri sunar:
              </p>
              <ul className="list-disc list-inside space-y-2 text-grey ml-4">
                <li>Özel fuar standı tasarımı ve uygulama</li>
                <li>Modüler stand sistemleri</li>
                <li>3D görselleştirme ve proje yönetimi</li>
                <li>Uluslararası fuar organizasyonu desteği</li>
                <li>Kurulum ve lojistik hizmetler</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">3. Fikri Mülkiyet Hakları</h2>
              <p className="text-grey leading-relaxed">
                Bu web sitesindeki tüm içerik, tasarımlar, logolar, görseller ve metinler Modern Çizgi Mimarlık'ın 
                veya lisans verenlerin mülkiyetindedir. İçeriğin izinsiz kopyalanması, çoğaltılması veya 
                dağıtılması yasaktır ve yasal işlem başlatılmasına neden olabilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">4. Kullanıcı Sorumlulukları</h2>
              <p className="text-grey leading-relaxed mb-4">
                Web sitemizi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-grey ml-4">
                <li>Yasal olmayan veya zararlı içerik yüklememek</li>
                <li>Diğer kullanıcıların veya sistemin güvenliğini tehlikeye atmamak</li>
                <li>Spam veya kötü amaçlı yazılım yaymamak</li>
                <li>Başkalarının fikri mülkiyet haklarını ihlal etmemek</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">5. Fiyatlandırma ve Ödeme</h2>
              <p className="text-grey leading-relaxed">
                Hizmetlerimizin fiyatları proje bazında belirlenir ve müşteriye özel teklif sunulur. 
                Tüm fiyatlar KDV dahildir. Ödeme koşulları sözleşmede belirtilir ve taraflar arasında 
                mutabık kalınan şartlara göre uygulanır. Proje değişiklikleri ek maliyetlere yol açabilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">6. Proje İptali ve İade Politikası</h2>
              <p className="text-grey leading-relaxed">
                Proje iptal talepleri yazılı olarak bildirilmelidir. İptal koşulları ve iade politikası, 
                imzalanan sözleşmede detaylı olarak belirtilir. Üretim aşamasına geçmiş projeler için 
                tam iade yapılamayabilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">7. Sorumluluk Sınırlamaları</h2>
              <p className="text-grey leading-relaxed">
                Modern Çizgi Mimarlık, web sitesi üzerinden sağlanan bilgilerin doğruluğu ve güncelliği 
                için çaba gösterir ancak garanti vermez. Üçüncü taraf bağlantılardan veya web sitesi 
                kullanımından kaynaklanan herhangi bir kayıptan sorumlu değiliz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">8. Gizlilik</h2>
              <p className="text-grey leading-relaxed">
                Kişisel verilerinizin işlenmesi ve korunması hakkında detaylı bilgi için lütfen{' '}
                <Link href="/gizlilik-politikasi" className="text-primary hover:underline">
                  Gizlilik Politikası
                </Link>
                'mızı inceleyin.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">9. Uygulanacak Hukuk</h2>
              <p className="text-grey leading-relaxed">
                Bu kullanım koşulları Türkiye Cumhuriyeti yasalarına tabidir. Herhangi bir uyuşmazlık 
                durumunda İstanbul mahkemeleri ve icra daireleri yetkilidir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">10. İletişim</h2>
              <p className="text-grey leading-relaxed">
                Kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="mt-4 space-y-2 text-grey">
                <p><strong>E-posta:</strong> info@moderncizgimimarlik.com</p>
                <p><strong>Telefon:</strong> +90 538 405 3370</p>
                <p><strong>Adres:</strong> Cihangir, Şht. P.Er Yavuz Bahar Sk. No:27, 34310 Avcılar/İstanbul, Türkiye</p>
              </div>
            </div>

            <div className="pt-8 border-t border-light-grey">
              <p className="text-grey text-sm">
                Bu Kullanım Koşulları son olarak Ocak 2025'te güncellenmiştir. Modern Çizgi Mimarlık, 
                bu koşulları önceden haber vermeksizin değiştirme hakkını saklı tutar. Güncel koşulları 
                düzenli olarak kontrol etmeniz önerilir.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
