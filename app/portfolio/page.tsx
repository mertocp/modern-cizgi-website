'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Teknoloji Fuarı',
    standType: 'Yıldız',
    country: 'Türkiye',
    city: 'İstanbul',
    image: '/images/portfolio1.jpg',
    size: '48 m²',
    description: 'Modern ve minimalist tasarım ile teknoloji şirketinin inovatif kimliğini yansıtan stand.',
  },
  {
    id: 2,
    title: 'Mobilya Fuarı',
    standType: 'Ahşap',
    country: 'İtalya',
    city: 'Milano',
    image: '/images/portfolio2.jpg',
    size: '72 m²',
    description: 'Lüks mobilya markası için şık ve etkileyici stand tasarımı.',
  },
  {
    id: 3,
    title: 'Otomotiv Fuarı',
    standType: 'Maxima',
    country: 'Almanya',
    city: 'Frankfurt',
    image: '/images/portfolio3.jpg',
    size: '96 m²',
    description: 'Otomotiv endüstrisi için dinamik ve profesyonel stand çözümü.',
  },
  {
    id: 4,
    title: 'Gıda Fuarı',
    standType: 'Ahşap',
    country: 'Türkiye',
    city: 'İzmir',
    image: '/images/portfolio4.jpg',
    size: '36 m²',
    description: 'Organik ürünler için doğal ve sıcak bir atmosfer yaratan tasarım.',
  },
  {
    id: 5,
    title: 'Tekstil Fuarı',
    standType: 'Yıldız',
    country: 'Fransa',
    city: 'Paris',
    image: '/images/portfolio5.jpg',
    size: '64 m²',
    description: 'Moda ve tasarım odaklı, estetik tekstil standı.',
  },
  {
    id: 6,
    title: 'Enerji Fuarı',
    standType: 'Maxima',
    country: 'Almanya',
    city: 'Berlin',
    image: '/images/portfolio6.jpg',
    size: '120 m²',
    description: 'Yenilenebilir enerji şirketi için sürdürülebilir malzemelerle tasarlanan stand.',
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
      <section className="py-24 bg-gradient-to-br from-dark via-dark-grey to-dark text-light">
        <div className="container text-center">
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
                  <div className="space-y-2 text-light">
                    <div className="inline-block px-2.5 py-0.5 bg-primary rounded-full text-xs font-normal mb-2 text-light">
                      {project.standType}
                    </div>
                    <h3 className="text-lg font-normal text-primary backdrop-blur-sm bg-dark/20 inline-block px-3 py-1 rounded">{project.title} - {project.country}</h3>
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
