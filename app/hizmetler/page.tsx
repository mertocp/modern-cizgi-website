import Link from 'next/link'
import { ArrowRight, Lightbulb, Hammer, LayoutGrid, Box, Wrench, Globe, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Hizmetlerimiz | Modern Çizgi Mimarlık',
  description: 'Özel stand tasarımı, modüler sistemler, 3D görselleştirme ve uluslararası fuar standı hizmetleri.',
}

const services = [
  {
    icon: Lightbulb,
    title: 'Özel Stand Tasarımı',
    description: 'Markanızın kimliğini yansıtan, benzersiz ve etkileyici özel stand tasarımları.',
    features: [
      'Marka odaklı konsept geliştirme',
      'Yaratıcı ve özgün tasarım çözümleri',
      'Fonksiyonel alan planlaması',
      'Premium malzeme kullanımı',
      'Detaylı teknik çizimler',
    ],
  },
  {
    icon: Hammer,
    title: 'Hazır Stand Kurulumu',
    description: 'Teslim anahtarlı fuar standı kurulum hizmetleri ile zahmetsiz bir deneyim.',
    features: [
      'Hızlı ve profesyonel kurulum',
      'Deneyimli montaj ekibi',
      'Elektrik ve aydınlatma entegrasyonu',
      'Mobilya ve dekorasyon yerleştirme',
      'Fuar sonrası söküm hizmeti',
    ],
  },
  {
    icon: LayoutGrid,
    title: 'Modüler Sistemler',
    description: 'Esnek, yeniden kullanılabilir ve maliyet etkin modüler stand sistemleri.',
    features: [
      'Farklı fuarlara uyarlanabilir',
      'Kolay taşıma ve depolama',
      'Hızlı kurulum süresi',
      'Ekonomik ve sürdürülebilir',
      'Geniş konfigürasyon seçenekleri',
    ],
  },
  {
    icon: Box,
    title: '3D Görselleştirme & Planlama',
    description: 'Gerçekçi 3D render görselleri ile standınızı inşaattan önce görün.',
    features: [
      'Fotorealistik 3D modelleme',
      'Sanal tur imkanı',
      'Revizyon ve düzenleme kolaylığı',
      'Malzeme ve renk alternatifleri',
      'Tüm açılardan görüntü',
    ],
  },
  {
    icon: Wrench,
    title: 'Kurulum ve Teknik Destek',
    description: 'Fuar süresince kesintisiz profesyonel destek ve teknik hizmet.',
    features: [
      'Fuar alanında kurulum ekibi',
      'Elektrik ve teknik altyapı',
      '7/24 teknik destek',
      'Onarım ve bakım hizmeti',
      'Son dakika değişiklikleri',
    ],
  },
  {
    icon: Globe,
    title: 'Uluslararası Hizmetler',
    description: 'Avrupa ve dünya genelinde fuar stand tasarım ve üretim hizmetleri.',
    features: [
      'Almanya, İtalya, Fransa, İspanya',
      'Yerel mevzuata uyum',
      'Lojistik ve nakliye yönetimi',
      'Çok dilli proje yönetimi',
      'Global fuar tecrübesi',
    ],
  },
]

export default function HizmetlerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-dark via-dark-grey to-dark text-light">
        <div className="container text-center">
          <h1 className="section-heading text-light mb-6">Hizmetlerimiz</h1>
          <p className="section-subheading text-light/90 max-w-3xl mx-auto">
            İhtiyacınıza özel, kapsamlı fuar standı çözümleri ile başarıya ulaşın
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-grey text-lg">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-grey">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-light-grey">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Çalışma Sürecimiz</h2>
            <p className="section-subheading">
              Başarılı projelerin arkasındaki sistematik yaklaşım
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-light font-bold text-2xl shadow-lg">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-grey text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-light">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projeniz İçin Özel Çözüm Mü Arıyorsunuz?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-light/90">
            Size en uygun hizmeti belirlemek ve ücretsiz teklif almak için bizimle iletişime geçin
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 bg-light text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-light/90 transition-all duration-300 hover:scale-105">
            İletişime Geçin
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </>
  )
}

const processSteps = [
  { title: 'İhtiyaç Analizi', description: 'Markanızı ve hedeflerinizi anlıyoruz' },
  { title: 'Konsept & Tasarım', description: '3D görsellerle tasarımı onaylıyoruz' },
  { title: 'Üretim', description: 'Kalite kontrolü ile üretim yapıyoruz' },
  { title: 'Kurulum', description: 'Fuar alanında profesyonel montaj' },
  { title: 'Destek', description: 'Fuar süresince yanınızdayız' },
]
