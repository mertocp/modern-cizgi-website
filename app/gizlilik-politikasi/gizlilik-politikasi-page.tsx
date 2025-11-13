import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function GizlilikPolitikasi() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gizlilik Politikası</h1>
          <p className="text-light/80">Son Güncelleme: Ocak 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">1. Giriş</h2>
              <p className="text-grey leading-relaxed">
                Modern Çizgi Mimarlık olarak, kişisel verilerinizin gizliliğini korumayı taahhüt ediyoruz. 
                Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda 
                kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">2. Topladığımız Bilgiler</h2>
              <p className="text-grey leading-relaxed mb-4">
                Hizmetlerimizi sunabilmek için aşağıdaki bilgileri toplayabiliriz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-grey ml-4">
                <li>Ad, soyad ve iletişim bilgileri (e-posta, telefon)</li>
                <li>Şirket adı ve iş bilgileri</li>
                <li>Proje detayları ve talepleriniz</li>
                <li>Web sitesi kullanım verileri (IP adresi, tarayıcı türü, ziyaret saatleri)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">3. Bilgilerin Kullanımı</h2>
              <p className="text-grey leading-relaxed mb-4">
                Topladığımız bilgileri şu amaçlarla kullanırız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-grey ml-4">
                <li>Hizmet taleplerini yanıtlamak ve destek sağlamak</li>
                <li>Projelerinizi yönetmek ve teklif hazırlamak</li>
                <li>Web sitemizi geliştirmek ve optimize etmek</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">4. Bilgi Güvenliği</h2>
              <p className="text-grey leading-relaxed">
                Kişisel verilerinizi yetkisiz erişim, değişiklik, ifşa veya imha edilmeye karşı korumak için 
                uygun teknik ve organizasyonel önlemler alıyoruz. Verileriniz güvenli sunucularda saklanır ve 
                yalnızca yetkili personel tarafından erişilebilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">5. Üçüncü Taraflarla Paylaşım</h2>
              <p className="text-grey leading-relaxed">
                Kişisel bilgilerinizi, yasal zorunluluklar dışında üçüncü taraflarla paylaşmayız. 
                Hizmet sağlayıcılarımız (hosting, analitik) ile yalnızca gerekli olan minimum bilgileri 
                paylaşır ve bu tarafların gizlilik standartlarına uymasını sağlarız.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">6. Çerezler (Cookies)</h2>
              <p className="text-grey leading-relaxed">
                Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. 
                Çerezleri tarayıcı ayarlarınızdan kontrol edebilir veya engelleyebilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">7. Haklarınız</h2>
              <p className="text-grey leading-relaxed mb-4">
                KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-grey ml-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerinizin düzeltilmesini veya silinmesini talep etme</li>
                <li>Kişisel verilerinizin aktarıldığı üçüncü kişileri öğrenme</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-dark">8. İletişim</h2>
              <p className="text-grey leading-relaxed">
                Gizlilik politikamız hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="mt-4 space-y-2 text-grey">
                <p><strong>E-posta:</strong> info@moderncizgimimarlik.com</p>
                <p><strong>Telefon:</strong> +90 538 405 3370</p>
                <p><strong>Adres:</strong> Cihangir, Şht. P.Er Yavuz Bahar Sk. No:27, 34310 Avcılar/İstanbul, Türkiye</p>
              </div>
            </div>

            <div className="pt-8 border-t border-light-grey">
              <p className="text-grey text-sm">
                Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada 
                yayınlandığı anda yürürlüğe girer. Web sitemizi düzenli olarak ziyaret ederek 
                güncellemeleri kontrol etmenizi öneririz.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
