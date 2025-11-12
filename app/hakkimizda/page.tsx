import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Users, Globe, Target, Heart, Zap } from 'lucide-react'

export const metadata = {
  title: 'Hakkımızda | Modern Çizgi Mimarlık',
  description: '22 yıldır fuar standı tasarımı ve inşaatında öncü. 2500+ başarılı proje ile global fuarlarda markanızı öne çıkarıyoruz.',
}

const timeline = [
  {
    year: '2004',
    title: 'Kuruluş',
    description: 'Modern Çizgi Mimarlık, fuar standı sektöründe yolculuğuna başladı.',
  },
  {
    year: '2007',
    title: 'İlk Büyük Proje',
    description: 'İstanbul\'da düzenlenen uluslararası fuarda ilk büyük projemizi tamamladık.',
  },
  {
    year: '2010',
    title: 'Avrupa Açılımı',
    description: 'Almanya\'da ilk projelerimizi gerçekleştirerek uluslararası arenaya adım attık.',
  },
  {
    year: '2013',
    title: 'Üretim Tesisi',
    description: 'Modern üretim tesisimizi İstanbul\'da faaliyete geçirdik.',
  },
  {
    year: '2016',
    title: '1000+ Stand Başarısı',
    description: 'Bin projeyi aşan deneyimimizle sektörde önemli bir kilometre taşına ulaştık.',
  },
  {
    year: '2018',
    title: 'Almanya Ofisi',
    description: 'Lünen\'de Avrupa operasyonlarımız için ofis açtık.',
  },
  {
    year: '2020',
    title: 'Dijital Dönüşüm',
    description: '3D sanal tur ve dijital tasarım hizmetlerini portföyümüze ekledik.',
  },
  {
    year: '2022',
    title: 'Sürdürülebilirlik',
    description: 'Çevre dostu malzemeler ve sürdürülebilir üretim süreçlerine geçiş yaptık.',
  },
  {
    year: '2023',
    title: '2000+ Proje',
    description: 'İki bin projeyi tamamlayarak sektörün lider firması olduk.',
  },
  {
    year: '2024',
    title: 'Yeni Teknolojiler',
    description: 'Yapay zeka destekli tasarım ve modüler akıllı stand sistemlerini başlattık.',
  },
  {
    year: '2025',
    title: 'Küresel Genişleme',
    description: 'Yedi ülkede aktif operasyonlarla global büyüme hedeflerimize ulaştık.',
  },
  {
    year: '2026',
    title: 'Geleceğe Bakış',
    description: 'Sürdürülebilir inovasyon ve dijital dönüşümle sektörün geleceğini şekillendiriyoruz.',
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
    icon: Heart,
    title: 'Müşteri Odaklılık',
    description: 'Her projede müşterilerimizin ihtiyaçlarını önceliğimiz olarak görüyor, beklentilerini aşmayı hedefliyoruz.',
  },
  {
    icon: Zap,
    title: 'İnovasyon',
    description: 'Sektördeki en yeni teknolojileri ve tasarım trendlerini takip ederek, yaratıcı çözümler sunuyoruz.',
  },
  {
    icon: Award,
    title: 'Kalite',
    description: 'Tasarımdan üretime, kurulumdan desteğe kadar her aşamada en yüksek kalite standartlarını uyguluyoruz.',
  },
]

const clientLogos = [
  { name: 'Eraco', logo: '/images/logos/eraco-logo.png' },
  { name: 'FSN', logo: '/images/logos/fsn-logo.png' },
  { name: 'Glore', logo: '/images/logos/glore-logo.png' },
  { name: 'Kilim Mobilya', logo: '/images/logos/kilim-logo.jpg' },
  { name: 'Benetton', logo: '/images/logos/benetton-logo.png' },
  { name: 'Giza Carpet', logo: '/images/logos/giza-logo.png' },
  { name: 'Star Alüminyum', logo: '/images/logos/star-logo.jpg' },
  { name: 'Özaktaç', logo: '/images/logos/ozaktac-logo.jpeg' },
]

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-dark via-dark-grey to-dark text-light">
        <div className="container text-center">
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
            <div className="space-y-6 text-lg text-grey">
              <p>
                2004 yılında kurulan Modern Çizgi Mimarlık, geleneksel stand üretimini sanat ve teknoloji ile harmanlayarak sektörde yeni bir dönem başlattı. İnovasyon DNA'mızda var; 3D görselleştirmeden modüler sistemlere, ahşap tasarımlardan Maxima premium standlara kadar geniş ürün yelpazemizle her marka için özel çözümler üretiyoruz. Avrupa'dan Türkiye'ye uzanan geniş hizmet ağımızla, markanızın global fuarlardaki en güçlü destekçisiyiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Grid Layout */}
      <section className="py-24 bg-light-grey">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Yolculuğumuz</h2>
            <p className="section-subheading">Büyüme ve başarı ile dolu yıllar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-light font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">{item.year}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-grey text-sm">{item.description}</p>
              </div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Client Logos */}
      <section id="referanslar" className="py-24 bg-light-grey">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Referanslarımız</h2>
            <p className="section-subheading">Güvenilir markalarla gurur verici işbirlikleri</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-4 gap-8">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                  />
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
