import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Users, Globe, Target, Heart, Zap, Quote } from 'lucide-react'

export const metadata = {
  title: 'Hakkımızda | Modern Çizgi Mimarlık',
  description: '15+ yıldır fuar standı tasarımı ve inşaatında öncü. 500+ başarılı proje ile global fuarlarda markanızı öne çıkarıyoruz.',
}

const timeline = [
  {
    year: '2008',
    title: 'Kuruluş',
    description: 'Modern Çizgi Mimarlık, İstanbul\'da küçük bir ekiple fuar standı sektörüne adım attı.',
  },
  {
    year: '2012',
    title: 'Uluslararası Açılım',
    description: 'İlk Avrupa projelerimizi tamamladık ve Almanya ofisimizi açtık.',
  },
  {
    year: '2016',
    title: '250+ Proje Başarısı',
    description: 'Türkiye ve Avrupa\'da 250\'den fazla başarılı projeye imza attık.',
  },
  {
    year: '2020',
    title: 'Teknoloji Yatırımı',
    description: 'En son teknoloji 3D tasarım ve üretim ekipmanlarına yatırım yaptık.',
  },
  {
    year: '2024',
    title: '500+ Proje Miladı',
    description: '500\'ü aşkın başarılı projeyle sektörün lider firmaları arasına girdik.',
  },
]

const stats = [
  { icon: Award, number: '15+', label: 'Yıllık Deneyim' },
  { icon: Users, number: '500+', label: 'Tamamlanan Proje' },
  { icon: Globe, number: '25+', label: 'Hizmet Verilen Ülke' },
  { icon: Target, number: '%98', label: 'Müşteri Memnuniyeti' },
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

const testimonials = [
  {
    quote: 'Modern Çizgi Mimarlık ile çalışmak harika bir deneyimdi. Profesyonel yaklaşımları ve detaylara gösterdikleri özen sayesinde fuarda gerçekten öne çıktık.',
    author: 'Ahmet Yılmaz',
    position: 'Genel Müdür',
    company: 'TechVision Turkey',
  },
  {
    quote: 'Üç farklı ülkede düzenlenen fuarlarda Modern Çizgi ile çalıştık. Her seferinde kusursuz bir organizasyon ve etkileyici standlar. Kesinlikle tavsiye ediyorum.',
    author: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'Global Innovations GmbH',
  },
  {
    quote: 'İlk fuar deneyimimizdi ve çok endişeliydik. Ancak Modern Çizgi ekibi her aşamada yanımızda oldu. Sonuç harika oldu, yeni müşteriler kazandık!',
    author: 'Mehmet Demir',
    position: 'Satış Müdürü',
    company: 'İnovatif Çözümler A.Ş.',
  },
  {
    quote: 'Modüler stand sistemleri ile birçok farklı fuarda aynı standı farklı konfigürasyonlarda kullandık. Hem maliyet tasarrufu hem de harika sonuçlar.',
    author: 'Elena Rossi',
    position: 'Exhibition Manager',
    company: 'Design Milano',
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
          <h1 className="section-heading text-light mb-6">Hakkımızda</h1>
          <p className="section-subheading text-light/90 max-w-3xl mx-auto">
            15 yılı aşkın deneyimimiz ile fuar standı sektörünün öncü markası
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
                Modern Çizgi Mimarlık, 2008 yılında İstanbul'da kurulan, fuar standı tasarımı ve inşaatı konusunda uzmanlaşmış bir şirkettir. Kurulduğumuz günden bu yana, markalarını fuarlarda en iyi şekilde temsil etmek isteyen firmalar için yaratıcı, fonksiyonel ve etkileyici stand çözümleri üretiyoruz.
              </p>
              <p>
                15 yılı aşkın deneyimimiz boyunca, Türkiye'nin yanı sıra Almanya, İtalya, Fransa, İspanya gibi birçok Avrupa ülkesinde 500'den fazla başarılı projeye imza attık. Teknoloji, mobilya, otomotiv, gıda, tekstil ve enerji gibi farklı sektörlerden müşterilerimize hizmet vermenin gururunu yaşıyoruz.
              </p>
              <p>
                Misyonumuz, müşterilerimizin fuar katılımlarını başarı hikayelerine dönüştürmek. Her proje için özel olarak tasarlanan standlarımız, markaların hedef kitlelerine ulaşmasına ve unutulmaz deneyimler yaratmasına yardımcı oluyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-light-grey">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Yolculuğumuz</h2>
            <p className="section-subheading">Büyüme ve başarı ile dolu yıllar</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold text-primary">{item.year}</div>
                </div>
                <div className="relative flex-shrink-0 w-4 pt-2">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-light-grey"></div>
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-0.5 h-full bg-primary/30 -translate-x-1/2"></div>
                  )}
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-grey">{item.description}</p>
                </div>
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
                <div className="text-5xl font-bold mb-2 text-primary">{stat.number}</div>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Müşteri Yorumları</h2>
            <p className="section-subheading">Bizimle çalışan müşterilerimizin deneyimleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <Quote className="w-12 h-12 text-primary mb-4" />
                <p className="text-lg text-grey italic mb-6">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-grey">{testimonial.position}</p>
                  <p className="text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
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
            15 yıllık deneyimimiz ve uzman ekibimizle bir sonraki projenizde yanınızdayız
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
