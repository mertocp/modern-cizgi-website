import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Çizgi Mimarlık | Fuar Standı Tasarım ve İnşaat',
  description: 'Profesyonel fuar standı tasarımı ve inşaat hizmetleri. Özel tasarım, modüler sistemler ve teslim anahtarlı çözümler. 15+ yıllık deneyim ile fuar katılımınızı dönüştürüyoruz.',
  keywords: ['fuar standı', 'stand tasarımı', 'fuar tasarımı', 'modüler stand', 'özel stand', 'exhibition stand', 'booth design'],
  authors: [{ name: 'Modern Çizgi Mimarlık' }],
  openGraph: {
    title: 'Modern Çizgi Mimarlık | Fuar Standı Tasarım ve İnşaat',
    description: 'Profesyonel fuar standı tasarımı ve inşaat hizmetleri. 15+ yıllık deneyim.',
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
