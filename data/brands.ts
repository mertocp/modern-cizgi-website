export interface Brand {
  id: number
  name: string
  slug: string
  photos: string[]
  description: string
  featured?: boolean
}

export const brands: Brand[] = [
  {
    id: 1,
    name: 'ABC',
    slug: 'abc',
    photos: ['/images/brands/abc/01.jpg', '/images/brands/abc/02.jpg', '/images/brands/abc/03.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 2,
    name: 'Arco Irisa',
    slug: 'arco-irisa',
    photos: ['/images/brands/arco-irisa/14.jpg', '/images/brands/arco-irisa/01.jpg', '/images/brands/arco-irisa/02.jpg', '/images/brands/arco-irisa/03.jpg', '/images/brands/arco-irisa/04.jpg', '/images/brands/arco-irisa/05.jpg', '/images/brands/arco-irisa/06.jpg', '/images/brands/arco-irisa/07.jpg', '/images/brands/arco-irisa/08.jpg', '/images/brands/arco-irisa/09.jpg', '/images/brands/arco-irisa/10.jpg', '/images/brands/arco-irisa/11.jpg', '/images/brands/arco-irisa/12.jpg', '/images/brands/arco-irisa/13.jpg', '/images/brands/arco-irisa/15.jpg', '/images/brands/arco-irisa/16.jpg', '/images/brands/arco-irisa/17.jpg', '/images/brands/arco-irisa/18.jpg', '/images/brands/arco-irisa/19.jpg'],
    description: 'Modern fuar standı tasarımı',
    featured: true
  },
  {
    id: 3,
    name: 'Aydınsan',
    slug: 'aydinsan',
    photos: ['/images/brands/aydinsan/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 4,
    name: 'Desan',
    slug: 'desan',
    photos: ['/images/brands/desan/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 5,
    name: 'Dikmen',
    slug: 'dikmen',
    photos: ['/images/brands/dikmen/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 6,
    name: 'DVT',
    slug: 'dvt',
    photos: ['/images/brands/dvt/01.jpg', '/images/brands/dvt/02.jpg', '/images/brands/dvt/03.jpg', '/images/brands/dvt/04.jpg', '/images/brands/dvt/05.jpg', '/images/brands/dvt/06.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 7,
    name: 'Eker',
    slug: 'eker',
    photos: ['/images/brands/eker/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 8,
    name: 'Eraco',
    slug: 'eraco',
    photos: ['/images/brands/eraco/01.jpg', '/images/brands/eraco/02.jpg', '/images/brands/eraco/03.jpg', '/images/brands/eraco/04.jpg', '/images/brands/eraco/05.jpg', '/images/brands/eraco/06.jpg'],
    description: 'Endüstriyel fuar standı tasarımı',
    featured: true
  },
  {
    id: 9,
    name: 'FKK',
    slug: 'fkk',
    photos: ['/images/brands/fkk/01.jpg', '/images/brands/fkk/02.jpg', '/images/brands/fkk/03.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 10,
    name: 'Foma',
    slug: 'foma',
    photos: ['/images/brands/foma/01.jpg', '/images/brands/foma/02.jpg', '/images/brands/foma/03.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 11,
    name: 'Giza',
    slug: 'giza',
    photos: ['/images/brands/giza/01.jpg', '/images/brands/giza/02.jpg', '/images/brands/giza/03.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 12,
    name: 'Glore',
    slug: 'glore',
    photos: ['/images/brands/glore/01.jpg', '/images/brands/glore/02.jpg', '/images/brands/glore/03.jpg', '/images/brands/glore/04.jpg', '/images/brands/glore/05.jpg', '/images/brands/glore/06.jpg', '/images/brands/glore/07.jpg', '/images/brands/glore/08.jpg', '/images/brands/glore/09.jpg'],
    description: 'Fuar standı tasarımı',
    featured: true
  },
  {
    id: 13,
    name: 'Guardi',
    slug: 'guardi',
    photos: ['/images/brands/guardi/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 14,
    name: 'Kareban',
    slug: 'kareban',
    photos: ['/images/brands/kareban/05.jpg', '/images/brands/kareban/01.jpg', '/images/brands/kareban/02.jpg', '/images/brands/kareban/03.jpg', '/images/brands/kareban/04.jpg', '/images/brands/kareban/06.jpg', '/images/brands/kareban/07.jpg', '/images/brands/kareban/08.jpg', '/images/brands/kareban/09.jpg', '/images/brands/kareban/10.jpg', '/images/brands/kareban/11.jpg', '/images/brands/kareban/12.jpg', '/images/brands/kareban/13.jpg'],
    description: 'Fuar standı tasarımı',
    featured: true
  },
  {
    id: 15,
    name: 'Kilim',
    slug: 'kilim',
    photos: ['/images/brands/kilim/01.jpg', '/images/brands/kilim/02.jpg', '/images/brands/kilim/03.jpg', '/images/brands/kilim/04.jpg', '/images/brands/kilim/05.jpg', '/images/brands/kilim/06.jpg', '/images/brands/kilim/07.jpg', '/images/brands/kilim/08.jpg', '/images/brands/kilim/09.jpg', '/images/brands/kilim/10.jpg', '/images/brands/kilim/11.jpg', '/images/brands/kilim/12.jpg', '/images/brands/kilim/13.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 16,
    name: 'K Panel',
    slug: 'kpanel',
    photos: ['/images/brands/kpanel/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 17,
    name: 'Kron',
    slug: 'kron',
    photos: ['/images/brands/kron/01.jpg', '/images/brands/kron/02.jpg', '/images/brands/kron/03.jpg', '/images/brands/kron/04.jpg', '/images/brands/kron/05.jpg', '/images/brands/kron/06.jpg', '/images/brands/kron/07.jpg', '/images/brands/kron/08.jpg', '/images/brands/kron/09.jpg', '/images/brands/kron/10.jpg', '/images/brands/kron/11.jpg', '/images/brands/kron/12.jpg', '/images/brands/kron/13.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 18,
    name: 'Love',
    slug: 'love',
    photos: ['/images/brands/love/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 19,
    name: 'Memak',
    slug: 'memak',
    photos: ['/images/brands/memak/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 20,
    name: 'Minteks',
    slug: 'minteks',
    photos: ['/images/brands/minteks/01.jpg', '/images/brands/minteks/02.jpg', '/images/brands/minteks/03.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 21,
    name: 'Möbelkant',
    slug: 'mobelkant',
    photos: ['/images/brands/mobelkant/01.jpg', '/images/brands/mobelkant/02.jpg', '/images/brands/mobelkant/03.jpg', '/images/brands/mobelkant/04.jpg', '/images/brands/mobelkant/05.jpg'],
    description: 'Mobilya fuarı standı tasarımı',
    featured: false
  },
  {
    id: 22,
    name: 'Moni Vay Yıldırım',
    slug: 'monivayildirim',
    photos: ['/images/brands/monivayildirim/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 23,
    name: 'NBT Yatak',
    slug: 'nbt-yatak',
    photos: ['/images/brands/nbt-yatak/01.jpg', '/images/brands/nbt-yatak/02.jpg', '/images/brands/nbt-yatak/03.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 24,
    name: 'Nihat Bursalı',
    slug: 'nihat-bursali',
    photos: ['/images/brands/nihat-bursali/01.jpg', '/images/brands/nihat-bursali/02.jpg', '/images/brands/nihat-bursali/03.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 25,
    name: 'Onaylift',
    slug: 'onaylift',
    photos: ['/images/brands/onaylift/01.jpg', '/images/brands/onaylift/02.jpg', '/images/brands/onaylift/03.jpg'],
    description: 'Endüstriyel fuar standı tasarımı',
    featured: false
  },
  {
    id: 26,
    name: 'Orma',
    slug: 'orma',
    photos: ['/images/brands/orma/01.jpg', '/images/brands/orma/02.jpg', '/images/brands/orma/03.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 27,
    name: 'Özaktaç',
    slug: 'ozaktac',
    photos: ['/images/brands/ozaktac/01.jpg', '/images/brands/ozaktac/02.jpg', '/images/brands/ozaktac/03.jpg', '/images/brands/ozaktac/04.jpg', '/images/brands/ozaktac/05.jpg', '/images/brands/ozaktac/06.jpg', '/images/brands/ozaktac/07.jpg', '/images/brands/ozaktac/08.jpg', '/images/brands/ozaktac/09.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 28,
    name: 'Özsahin',
    slug: 'ozsahin',
    photos: ['/images/brands/ozsahin/01.jpg', '/images/brands/ozsahin/02.jpg', '/images/brands/ozsahin/03.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 29,
    name: 'Pierre Cardin',
    slug: 'pierre-cardin',
    photos: ['/images/brands/pierre-cardin/01.jpg', '/images/brands/pierre-cardin/02.jpg', '/images/brands/pierre-cardin/03.jpg', '/images/brands/pierre-cardin/04.jpg'],
    description: 'Premium marka standı',
    featured: false
  },
  {
    id: 30,
    name: 'Pika',
    slug: 'pika',
    photos: ['/images/brands/pika/01.jpg', '/images/brands/pika/02.jpg', '/images/brands/pika/03.jpg', '/images/brands/pika/04.jpg', '/images/brands/pika/05.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 31,
    name: 'Pistonsan',
    slug: 'pistonsan',
    photos: ['/images/brands/pistonsan/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 32,
    name: 'Regal',
    slug: 'regal',
    photos: ['/images/brands/regal/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 33,
    name: 'Relax',
    slug: 'relax',
    photos: ['/images/brands/relax/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 34,
    name: 'Romans Halı',
    slug: 'romans-hali',
    photos: ['/images/brands/romans-hali/01.jpg', '/images/brands/romans-hali/02.jpg', '/images/brands/romans-hali/03.jpg', '/images/brands/romans-hali/04.jpg', '/images/brands/romans-hali/05.jpg', '/images/brands/romans-hali/06.jpg', '/images/brands/romans-hali/07.jpg', '/images/brands/romans-hali/08.jpg'],
    description: 'Halı fuarı standı tasarımı',
    featured: false
  },
  {
    id: 35,
    name: 'Strada',
    slug: 'strada',
    photos: ['/images/brands/strada/01.jpg', '/images/brands/strada/02.jpg', '/images/brands/strada/03.jpg', '/images/brands/strada/04.jpg'],
    description: 'Modern ve şık fuar standı tasarımı',
    featured: false
  },
  {
    id: 36,
    name: 'Tahta Kulübe',
    slug: 'tahta-kulube',
    photos: ['/images/brands/tahta-kulube/01.jpg', '/images/brands/tahta-kulube/02.jpg', '/images/brands/tahta-kulube/03.jpg', '/images/brands/tahta-kulube/04.jpg', '/images/brands/tahta-kulube/05.jpg'],
    description: 'Ahşap fuar standı tasarımı',
    featured: false
  },
  {
    id: 37,
    name: 'Ülger Seramik',
    slug: 'ulger-seramik',
    photos: ['/images/brands/ulger-seramik/01.jpg', '/images/brands/ulger-seramik/02.jpg'],
    description: 'Seramik fuarı standı tasarımı',
    featured: false
  },
  {
    id: 38,
    name: 'Valencia',
    slug: 'valencia',
    photos: ['/images/brands/valencia/01.jpg', '/images/brands/valencia/02.jpg', '/images/brands/valencia/03.jpg', '/images/brands/valencia/04.jpg', '/images/brands/valencia/05.jpg', '/images/brands/valencia/06.jpg', '/images/brands/valencia/07.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 39,
    name: 'VK',
    slug: 'vk',
    photos: ['/images/brands/vk/01.jpg', '/images/brands/vk/02.jpg', '/images/brands/vk/03.jpg', '/images/brands/vk/04.jpg', '/images/brands/vk/05.jpg', '/images/brands/vk/06.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  },
  {
    id: 40,
    name: 'Yavuzsan',
    slug: 'yavuzsan',
    photos: ['/images/brands/yavuzsan/01.jpg'],
    description: 'Fuar standı tasarımı',
    featured: false
  }
]

export const getFeaturedBrands = () => brands.filter(b => b.featured)
