import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Users, Globe, Target, Heart, Zap, Leaf, Eye } from 'lucide-react'

export const metadata = {
  title: 'Hakkımızda | Modern Çizgi Mimarlık',
  description: '22 yıldır fuar standı tasarımı ve inşaatında öncü. 2500+ başarılı proje ile global fuarlarda markanızı öne çıkarıyoruz.',
}

const timeline = [
  {
    year: '1967',
    description: 'Sektöre "Elbir Mobilya" adıyla giriş yapıldı.',
  },
  {
    year: '1998',
    description: 'Atılım Ahşap kuruldu.',
  },
  {
    year: '2000',
    description: 'Stand imalatına başlandı.',
  },
  {
    year: '2004',
    description: 'Modern Çizgi Mimarlık dekorasyon ve fuarcılık firması kuruldu.',
  },
  {
    year: '2005',
    description: 'Elbir Kuyumculuk firması kuruldu.',
  },
  {
    year: '2011',
    description: 'Modüler sisteme geçiş yapıldı.',
  },
  {
    year: '2015',
    description: 'Maxima stand hizmeti verilmeye başlandı.',
  },
  {
    year: '2016',
    description: 'Siyah Maxima sistemini Türkiye\'de ilk kez kullanarak sektöre öncülük ettik.',
  },
  {
    year: '2017',
    description: 'Yıldız stand sistemi geliştirildi ve patentlendi.',
  },
  {
    year: '2018',
    description: 'Avrupa pazarına yönelik ilk şube açıldı.',
  },
  {
    year: '2023',
    description: 'Elbir İnşaat firması kuruluşu ve ilk şantiyesi.',
  },
]

const stats = [
  { icon: Award, number: '22+ Yıl', label: 'Sektör Deneyimi' },
  { icon: Users, number: '2500+', label: 'Tamamlanan Stand' },
  { icon: Globe, number: '7 Ülke', label: 'Uluslararası Hizmet' },
  { icon: Target, number: '250.000 m²', label: 'Toplam Proje Hacmi' },
]

const values = [
  {
    icon: Leaf,
    title: 'Sürdürülebilirlik',
    description: 'Çevre dostu malzemeler ve sürdürülebilir üretim yöntemleriyle geleceğe katkı sağlıyoruz.',
  },
  {
    icon: Target,
    title: 'Vizyon',
    description: 'Sektörde öncü ve yenilikçi çözümlerle global fuarcılıkta fark yaratmayı hedefliyoruz.',
  },
  {
    icon: Award,
    title: 'Kalite',
    description: 'Tasarımdan üretime, kurulumdan desteğe kadar her aşamada en yüksek kalite standartlarını uyguluyoruz.',
  },
  {
    icon: Heart,
    title: 'Müşteri Odaklılık',
    description: 'Her projede müşterilerimizin ihtiyaçlarını önceliğimiz olarak görüyor, beklentilerini aşmayı hedefliyoruz.',
  },
]

// UPDATED: Logo sizes enlarged to match homepage - Kilim, Özaktaç, One Click extra large
const clientLogos = [
  // Row 1
  { name: 'Eraco', logo: '/images/references/eraco.png', width: 180, height: 90 },
  { name: 'FSN Medical Technologies', logo: '/images/references/fsn.png', width: 180, height: 90 },
  { name: 'GLORE', logo: '/images/references/glore.png', width: 170, height: 90 },
  { name: 'Kilim Mobilya', logo: '/images/references/kilim.jpg', width: 320, height: 160 }, // MUCH LARGER - Compensates for internal whitespace
  { name: 'Benetton', logo: '/images/references/benetton.png', width: 180, height: 90 },
  
  // Row 2
  { name: 'Giza Carpet', logo: '/images/references/giza.png', width: 180, height: 90 },
  { name: 'Star Alüminyum', logo: '/images/references/star.png', width: 180, height: 90 },
  { name: 'Özaktaç', logo: '/images/references/ozaktac.png', width: 300, height: 150 }, // MUCH LARGER - Compensates for internal whitespace
  { name: 'Pierre Cardin', logo: '/images/references/pierrecardin.png', width: 180, height: 90 },
  { name: 'Kron', logo: '/images/references/kron.png', width: 200, height: 100 },
  
  // Row 3
  { name: 'Orma', logo: '/images/references/orma.png', width: 180, height: 90 },
  { name: 'Kareban', logo: '/images/references/kareban.png', width: 180, height: 90 },
  { name: 'Arco Irisa', logo: '/images/references/arcoirisa.jpg', width: 180, height: 90 },
  { name: 'DVT Devotrans', logo: '/images/references/dvt.jpg', width: 180, height: 90 },
  { name: 'One Click Profit', logo: '/images/references/oneclickprofit.png', width: 300, height: 150 }, // MUCH LARGER - Compensates for internal whitespace
]

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 text-light">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/bg-about.jpg"
            alt="Hakkımızda"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container text-center">
          <h1 className="section-heading text-light mb-6">Fuar Standı Sektörünün 22 Yıllık Öncüsü</h1>
          <p className="section-subheading text-light/90 max-w-3xl mx-auto">
            2004'ten bugüne 2500+ projeyle markaların fuarlardaki başarı ortağı
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Hikayemiz</h2>
            <div className="space-y-6 text-xl text-grey leading-relaxed">
              <p>
                2004 yılında kurulan Modern Çizgi Mimarlık, geleneksel stand üretimini sanat ve teknoloji ile harmanlayarak sektörde yeni bir dönem başlattı. İnovasyon DNA'mızda var; 3D görselleştirmeden modüler sistemlere, ahşap tasarımlardan Maxima premium standlara kadar geniş ürün yelpazemizle her marka için özel çözümler üretiyoruz. Avrupa'dan Türkiye'ye uzanan geniş hizmet ağımızla, markanızın global fuarlardaki en güçlü destekçisiyiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - 2 Column Layout */}
      <section className="py-16 bg-primary text-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading text-light">GEÇMİŞ TECRÜBELERİMİZLE, HEP EN İYİYE</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/95 p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 min-h-[120px] flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl font-bold text-primary">{item.year}</div>
                    </div>
                    <p className="text-dark text-sm leading-relaxed flex-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-dark text-light">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-10 h-10 text-light" />
                </div>
                <div className="text-4xl font-bold mb-2 text-primary">{stat.number}</div>
                <p className="text-light/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Değerlerimiz</h2>
            <p className="section-subheading">Bizi biz yapan prensipler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-grey">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos - UPDATED WITH ENLARGED SIZES */}
      <section id="referanslar" className="py-24 bg-light-grey">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Referanslarımız</h2>
            <p className="section-subheading">Güvenilir markalarla gurur verici işbirlikleri</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {clientLogos.map((client, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[140px]"
                >
                  <div className="relative w-full h-[90px] flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={client.width}
                      height={client.height}
                      className="object-contain max-h-[90px]"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-light">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siz de Başarı Hikayemizin Parçası Olun
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-light/90">
            22 yıllık deneyimimiz ve uzman ekibimizle bir sonraki projenizde yanınızdayız
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 bg-light text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-light/90 transition-all duration-300 hover:scale-105">
            Hemen İletişime Geçin
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </>
  )
}
