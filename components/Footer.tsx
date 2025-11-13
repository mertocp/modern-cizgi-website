import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Modern Çizgi Mimarlık
            </h3>
            <p className="text-light/80 mb-6">
              Fuarlarda markanızı öne çıkaran, profesyonel ve etkileyici stand çözümleri sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-light/80 hover:text-primary transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-light/80 hover:text-primary transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-light/80 hover:text-primary transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-light/80 hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-light/80 hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-light/80">
              <li>Özel Stand Tasarımı</li>
              <li>Hazır Stand Kurulumu</li>
              <li>Modüler Sistemler</li>
              <li>3D Görselleştirme</li>
              <li>Kurulum ve Destek</li>
              <li>Uluslararası Hizmetler</li>
            </ul>
          </div>

          {/* Contact - UPDATED WITH NEW INFO AND DUAL ADDRESSES */}
          <div>
            <h4 className="text-lg font-bold mb-4">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-light/80">
                  <p>+90 538 405 3370</p>
                  <p>+90 212 452 9359</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-light/80">
                  <p>info@moderncizgimimarlik.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-light/80 space-y-3">
                  <div>
                    <p className="font-semibold text-primary mb-1">🇹🇷 Türkiye Ofisi</p>
                    <p className="text-sm">
                      Cihangir, Şht. P.Er Yavuz Bahar Sk. No:27,<br />
                      34310 Avcılar/İstanbul, Türkiye
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">🇩🇪 Almanya Ofisi</p>
                    <p className="text-sm">
                      Am Kühlturm 27,<br />
                      44536 Lünen, Germany
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-light/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-sm mb-4 md:mb-0">
            © 2025 Modern Çizgi Mimarlık. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm text-light/60">
            <Link href="/gizlilik-politikasi" className="hover:text-primary transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="hover:text-primary transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
