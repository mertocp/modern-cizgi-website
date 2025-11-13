import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Users, Globe, TrendingUp, CheckCircle, Calendar, Maximize2 } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section - UPDATED TEXT */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-exhibition-stand.jpg"
            alt="Modern exhibition stand"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-dark/70" />
        </div>

        <div className="relative z-10 container text-center text-light py-32">
          <h1 className="section-heading text-light mb-6 animate-fade-in">
            Fuarı Markanız İçin Sahneye Çevirin
          </h1>
          <p className="section-subheading text-light/90 mb-12 animate-fade-in">
            Ziyaretçilerinize hatırlayacakları bir deneyim sunun.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Link href="/iletisim" className="btn-primary inline-flex items-center justify-center gap-2">
              Ücretsiz Teklif Alın
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/portfolio" className="btn-secondary inline-flex items-center justify-center gap-2">
              Projelerimizi Görün
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats - UPDATED WITH ICONS */}
      <section className="py-20 bg-light-grey">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-5xl font-bold text-primary">2500+</div>
              <p className="text-grey">Tamamlanan Stand</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-5xl font-bold text-primary">22+ Yıl</div>
              <p className="text-grey">Sektör Deneyimi</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-5xl font-bold text-primary">7 Ülke</div>
              <p className="text-grey">Uluslararası Hizmet</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                  <Maximize2 className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-5xl font-bold text-primary whitespace-nowrap">
                250.000 m²
              </div>
              <p className="text-grey">Toplam Proje Hacmi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - UPDATED MAXIMA SISTEMLER */}
      <section className="py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Hizmetlerimiz</h2>
            <p className="section-subheading">
              İhtiyacınıza özel, kapsamlı fuar standı çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {servicesPreview.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md card-hover">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-grey mb-4">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/hizmetler" className="btn-primary inline-flex items-center gap-2">
              Tüm Hizmetleri Görüntüle
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-dark text-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading text-light">Projelerimiz</h2>
            <p className="section-subheading text-light/80">
              Gerçekleştirdiğimiz başarılı projelerden örnekler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={`/images/portfolio${num}.jpg`}
                  alt={`Project ${num}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold mb-2 text-primary">Proje {num}</h3>
                    <p className="text-light/80 text-sm">Fuar Standı Tasarımı</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio" className="btn-secondary inline-flex items-center gap-2">
              Tüm Projeleri İncele
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Preview - UPDATED WITH ÖZAKTAÇ, KILIM, ONE CLICK PROFIT ENLARGED */}
      <section className="py-24 bg-light-grey">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-heading">Referanslarımız</h2>
            <p className="section-subheading">
              Dünya çapında lider markalarla çalışmanın gururunu yaşıyoruz
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-12">
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

          <div className="text-center">
            <Link href="/hakkimizda" className="btn-primary inline-flex items-center gap-2">
              Daha Fazla Referans
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-light">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bir Sonraki Fuarınız İçin Hazır mısınız?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-light/90">
            Markanızı öne çıkaracak, etkileyici bir fuar standı için bugün iletişime geçin
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 bg-light text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-light/90 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            İletişim
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </>
  )
}

// UPDATED: Maxima Sistemler instead of Modüler Sistemler
const servicesPreview = [
  {
    icon: Award,
    title: 'Özel Stand Tasarımı',
    description: 'Markanıza özel, benzersiz tasarımlar ile farkınızı ortaya koyun.',
  },
  {
    icon: Users,
    title: 'Maxima Sistemler',
    description: 'Maxima modüler sistem çözümleri ile profesyonel ve ekonomik stand alternatifi.',
  },
  {
    icon: Globe,
    title: 'Uluslararası Hizmet',
    description: 'Avrupa ve dünya çapında profesyonel fuar standı hizmetleri.',
  },
]

// UPDATED: Özaktaç, Kilim, and One Click Profit enlarged even more
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
