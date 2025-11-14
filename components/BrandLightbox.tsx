'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Brand } from '@/data/brands'

interface BrandLightboxProps {
  brand: Brand
  onClose: () => void
}

export default function BrandLightbox({ brand, onClose }: BrandLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex])

  // Preload next and previous images for smoother transitions
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % brand.photos.length
    const prevIndex = currentIndex === 0 ? brand.photos.length - 1 : currentIndex - 1

    const preloadImage = (src: string) => {
      const img = new window.Image()
      img.src = src
    }

    // Only preload if there are multiple photos
    if (brand.photos.length > 1) {
      preloadImage(brand.photos[nextIndex])
      preloadImage(brand.photos[prevIndex])
    }
  }, [currentIndex, brand.photos])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : brand.photos.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < brand.photos.length - 1 ? prev + 1 : 0))
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-dark/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 bg-light/10 hover:bg-light/20 rounded-full flex items-center justify-center text-light transition-colors z-10"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
        <div
          className="relative aspect-video rounded-lg overflow-hidden mb-6"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Image
            src={brand.photos[currentIndex]}
            alt={`${brand.name} - ${currentIndex + 1}`}
            fill
            quality={95}
            className="object-contain transition-transform duration-200 ease-out will-change-transform"
            priority
          />

          {brand.photos.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark/80 hover:bg-dark rounded-full flex items-center justify-center text-light transition-all duration-150 ease-out hover:scale-110"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark/80 hover:bg-dark rounded-full flex items-center justify-center text-light transition-all duration-150 ease-out hover:scale-110"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 right-4 bg-dark/80 text-light px-4 py-2 rounded-full">
            {currentIndex + 1} / {brand.photos.length}
          </div>
        </div>

        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            {brand.name}
          </h2>
          <p className="text-grey text-lg">{brand.description}</p>
        </div>
      </div>
    </div>
  )
}
