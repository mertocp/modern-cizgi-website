'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Strada Fuar Standı',
    standType: 'Yıldız',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-01-strada.jpg',
    size: '48 m²',
    description: 'Modern ve şık tasarım ile Strada markasının dinamik kimliğini yansıtan fuar standı.',
  },
  {
    id: 2,
    title: 'Pierre Cardin Stand',
    standType: 'Yıldız',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-02-pierre-cardin.jpg',
    size: '72 m²',
    description: 'Premium marka Pierre Cardin için lüks ve etkileyici stand tasarımı.',
  },
  {
    id: 3,
    title: 'Kareban Fuar Standı',
    standType: 'Ahşap',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-03-kareban.jpg',
    size: '56 m²',
    description: 'Kareban markası için özel tasarım ahşap fuar standı.',
  },
  {
    id: 4,
    title: 'Arco Alternatif Görünüm',
    standType: 'Maxima',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-04-arco-alt.jpg',
    size: '64 m²',
    description: 'Arco Irisa için modern fuar standı konsepti ve alternatif görünüm.',
  },
  {
    id: 5,
    title: 'Eraco Fuar Standı',
    standType: 'Yıldız',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-05-eraco.jpg',
    size: '80 m²',
    description: 'Eraco için endüstriyel fuar standı çözümü ve profesyonel tasarım.',
  },
  {
    id: 6,
    title: 'Möbelkant Stand',
    standType: 'Ahşap',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-06-mobelkant.jpg',
    size: '90 m²',
    description: 'Möbelkant mobilya markası için ahşap detaylı fuar standı tasarımı.',
  },
  {
    id: 7,
    title: 'Kilim Mobilya',
    standType: 'Yıldız',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-07-kilim.jpg',
    size: '120 m²',
    description: 'Kilim Mobilya için geniş ve etkileyici fuar standı tasarımı.',
  },
  {
    id: 8,
    title: 'Glore Fuar Standı',
    standType: 'Maxima',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-08-glore.jpg',
    size: '45 m²',
    description: 'Glore markası için modern ve işlevsel fuar standı çözümü.',
  },
  {
    id: 9,
    title: 'Özaktaç Stand',
    standType: 'Yıldız',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-09-ozaktac.jpg',
    size: '72 m²',
    description: 'Özaktaç için kurumsal kimliğe uygun profesyonel stand tasarımı.',
  },
  {
    id: 10,
    title: 'Onaylift Fuar Standı',
    standType: 'Maxima',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-10-onaylift.jpg',
    size: '54 m²',
    description: 'Onaylift için endüstriyel fuar standı tasarımı ve uygulama.',
  },
  {
    id: 11,
    title: 'Romans Stand',
    standType: 'Ahşap',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-11-romans.jpg',
    size: '68 m²',
    description: 'Romans markası için ahşap detaylı fuar standı tasarımı.',
  },
  {
    id: 12,
    title: 'Tableware Fuar Standı',
    standType: 'Yıldız',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-12-tableware.jpg',
    size: '42 m²',
    description: 'Sofra ürünleri için şık ve fonksiyonel stand tasarımı.',
  },
  {
    id: 13,
    title: 'Arco Irisa Tam Görünüm',
    standType: 'Maxima',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-13-arco-full.jpg',
    size: '85 m²',
    description: 'Arco Irisa fuar standının genel görünümü ve detaylı tasarım.',
  },
  {
    id: 14,
    title: 'Möbelkant Alternatif',
    standType: 'Ahşap',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-14-mobelkant-alt.jpg',
    size: '90 m²',
    description: 'Möbelkant için alternatif görünüm ve detaylı stand tasarımı.',
  },
  {
    id: 15,
    title: 'Star Alüminyum',
    standType: 'Yıldız',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-15-star.jpg',
    size: '96 m²',
    description: 'Star Alüminyum için endüstriyel ve modern fuar standı tasarımı.',
  },
  {
    id: 16,
    title: 'Trade Fuar Standı',
    standType: 'Maxima',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-16-trade.jpg',
    size: '52 m²',
    description: 'Ticaret fuarı için profesyonel ve işlevsel stand çözümü.',
  },
  {
    id: 17,
    title: 'DK Panel Stand',
    standType: 'Yıldız',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-17-dk-panel.jpg',
    size: '58 m²',
    description: 'DK Panel için modern ve etkileyici fuar standı tasarımı.',
  },
  {
    id: 18,
    title: 'Sergi Standı',
    standType: 'Ahşap',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-18-exhibition.jpg',
    size: '75 m²',
    description: 'Özel sergi alanı için tasarlanmış ahşap detaylı stand.',
  },
  {
    id: 19,
    title: 'Kron Fuar Standı',
    standType: 'Maxima',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-19-kron.jpg',
    size: '62 m²',
    description: 'Kron markası için modern ve işlevsel fuar standı tasarımı.',
  },
  {
    id: 20,
    title: 'Arco Köşe Görünüm',
    standType: 'Maxima',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio/portfolio-20-arco-corner.jpg',
    size: '85 m²',
    description: 'Arco Irisa standının köşe perspektifinden detaylı görünümü.',
  },
]

const standTypes = ['Tümü', 'Yıldız', 'Ahşap', 'Maxima']

export default function PortfolioPage() {
  const [selectedStandType, setSelectedStandType] = useState('Tümü')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = selectedStandType === 'Tümü' 
    ? projects 
    : projects.filter(p => p.standType === selectedStandType)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 text-light">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/bg-projects.jpg"
            alt="Fuar standı projeleri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container text-center">
          <h1 className="section-heading text-light mb-6">Projelerimiz</h1>
          <p className="section-subheading text-light/90 max-w-3xl mx-auto">
            Gerçekleştirdiğimiz başarılı fuar standı projelerinden ilham alın
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-light-grey sticky top-20 z-40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {standTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedStandType(type)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedStandType === type
                    ? 'bg-primary text-light shadow-lg scale-105'
                    : 'bg-white text-dark hover:bg-primary hover:text-light'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex flex-col gap-2 items-start">
                    <span className="px-2.5 py-0.5 bg-primary rounded-full text-xs font-normal text-light">
                      {project.standType}
                    </span>
                    <span className="text-base font-normal text-light backdrop-blur-sm bg-dark/20 px-3 py-1 rounded-full">
                      {project.title} - {project.country}
                    </span>
                    <p className="text-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.city} • {project.size}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-dark/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-light/10 hover:bg-light/20 rounded-full flex items-center justify-center text-light transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-white rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary rounded-full text-xs font-normal text-light">
                  {selectedProject.standType}
                </span>
                <span className="text-grey">{selectedProject.city}, {selectedProject.country}</span>
                <span className="text-grey">•</span>
                <span className="text-grey">{selectedProject.size}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary">{selectedProject.title}</h2>
              <p className="text-grey text-lg">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-primary text-light">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bir Sonraki Proje Sizin Olabilir
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-light/90">
            Markanızı öne çıkaracak etkileyici bir stand tasarımı için hemen başvurun
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 bg-light text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-light/90 transition-all duration-300 hover:scale-105">
            Projenize Başlayın
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </>
  )
}
