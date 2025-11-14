'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { brands } from '@/data/brands'
import BrandLightbox from '@/components/BrandLightbox'
import type { Brand } from '@/data/brands'

export default function PortfolioPage() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 text-light">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/bg-projects.jpg"
            alt="Fuar standı projeleri"
            fill
            className="object-cover object-[center_30%]"
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

      {/* Portfolio Grid */}
      <section className="py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.id}
                onClick={() => setSelectedBrand(brand)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={brand.photos[0]}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-light mb-2">
                    {brand.name}
                  </h3>
                  <span className="text-light/80 text-sm">
                    {brand.photos.length} Fotoğraf
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-dark/80 text-light px-3 py-1 rounded-full text-sm">
                  1/{brand.photos.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedBrand && (
        <BrandLightbox
          brand={selectedBrand}
          onClose={() => setSelectedBrand(null)}
        />
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
