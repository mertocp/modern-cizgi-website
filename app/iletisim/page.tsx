'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    firmaAdi: '',
    ilgiliKisi: '',
    fuarAdi: '',
    email: '',
    standPlani: '',
    standOlcusu: '',
    mesaj: '',
    telefon: '',
    toplantiOdasi: '',
    tvEkran: '',
    depo: '',
    tahminiButce: '',
    sergilenecekUrunler: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
      setIsSubmitting(false)
      setFormData({
        firmaAdi: '',
        ilgiliKisi: '',
        fuarAdi: '',
        email: '',
        standPlani: '',
        standOlcusu: '',
        mesaj: '',
        telefon: '',
        toplantiOdasi: '',
        tvEkran: '',
        depo: '',
        tahminiButce: '',
        sergilenecekUrunler: '',
      })
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 text-light">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/bg-contact.jpg"
            alt="İletişim"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container text-center">
          <h1 className="section-heading text-light mb-6">İletişim</h1>
          <p className="section-subheading text-light/90 max-w-3xl mx-auto">
            Fuar standı projeniz için teklif almak ve bizimle iletişime geçmek için formu doldurun
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Teklif Formu</h2>
              <p className="text-grey mb-8">
                Formu doldurun, size özel çözümümüzü ve fiyat teklifimizi 24 saat içinde gönderelim.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Required Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firmaAdi" className="block text-sm font-semibold mb-2">
                      Firma Adı *
                    </label>
                    <input
                      type="text"
                      id="firmaAdi"
                      name="firmaAdi"
                      value={formData.firmaAdi}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Firma adınızı girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="ilgiliKisi" className="block text-sm font-semibold mb-2">
                      İlgili Kişi *
                    </label>
                    <input
                      type="text"
                      id="ilgiliKisi"
                      name="ilgiliKisi"
                      value={formData.ilgiliKisi}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fuarAdi" className="block text-sm font-semibold mb-2">
                      Fuar Adı *
                    </label>
                    <input
                      type="text"
                      id="fuarAdi"
                      name="fuarAdi"
                      value={formData.fuarAdi}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Katılacağınız fuar"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="ornek@firma.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="standPlani" className="block text-sm font-semibold mb-2">
                      Stand Planı *
                    </label>
                    <input
                      type="text"
                      id="standPlani"
                      name="standPlani"
                      value={formData.standPlani}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Stand planı linki veya açıklama"
                    />
                  </div>
                  <div>
                    <label htmlFor="standOlcusu" className="block text-sm font-semibold mb-2">
                      Stand Ölçüsü *
                    </label>
                    <input
                      type="text"
                      id="standOlcusu"
                      name="standOlcusu"
                      value={formData.standOlcusu}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="örn: 3m x 4m x 3m (tahmini)"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mesaj" className="block text-sm font-semibold mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    value={formData.mesaj}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Projeniz hakkında detaylı bilgi verin..."
                  />
                </div>

                {/* Optional Fields */}
                <div className="pt-4 border-t-2 border-light-grey-2">
                  <h3 className="text-lg font-semibold mb-4 text-grey">Opsiyonel Bilgiler</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-semibold mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="+90 555 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="tahminiButce" className="block text-sm font-semibold mb-2">
                        Tahmini Bütçe
                      </label>
                      <input
                        type="text"
                        id="tahminiButce"
                        name="tahminiButce"
                        value={formData.tahminiButce}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="Opsiyonel"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <label htmlFor="toplantiOdasi" className="block text-sm font-semibold mb-2">
                        Toplantı Odası İhtiyacı?
                      </label>
                      <select
                        id="toplantiOdasi"
                        name="toplantiOdasi"
                        value={formData.toplantiOdasi}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Seçiniz</option>
                        <option value="Evet">Evet</option>
                        <option value="Hayır">Hayır</option>
                        <option value="Emin Değilim">Emin Değilim</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="tvEkran" className="block text-sm font-semibold mb-2">
                        TV / Ekran İhtiyacı?
                      </label>
                      <select
                        id="tvEkran"
                        name="tvEkran"
                        value={formData.tvEkran}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Seçiniz</option>
                        <option value="Evet">Evet</option>
                        <option value="Hayır">Hayır</option>
                        <option value="Emin Değilim">Emin Değilim</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="depo" className="block text-sm font-semibold mb-2">
                        Depo İhtiyacı?
                      </label>
                      <select
                        id="depo"
                        name="depo"
                        value={formData.depo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors bg-white"
                      >
                        <option value="">Seçiniz</option>
                        <option value="Evet">Evet</option>
                        <option value="Hayır">Hayır</option>
                        <option value="Emin Değilim">Emin Değilim</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="sergilenecekUrunler" className="block text-sm font-semibold mb-2">
                      Sergilenecek Ürünler
                    </label>
                    <textarea
                      id="sergilenecekUrunler"
                      name="sergilenecekUrunler"
                      value={formData.sergilenecekUrunler}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Sergileyeceğiniz ürünler hakkında bilgi (opsiyonel)"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Teklif İste'}
                  <Send className="w-5 h-5" />
                </button>

                {submitMessage && (
                  <div className="p-4 bg-green-50 border-2 border-green-500 text-green-700 rounded-lg">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">İletişim Bilgileri</h2>
                
                {/* Turkey Office */}
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Türkiye Merkez Ofisi
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="text-grey">
                        <p className="font-semibold">Adres:</p>
                        <p>Cihangir, Şht. P.Er Yavuz Bahar Sk. No:27</p>
                        <p>34310 Avcılar, İstanbul, Türkiye</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="text-grey">
                        <p className="font-semibold">Telefon:</p>
                        <p>+90 538 405 33 70</p>
                        <p>+90 212 452 93 59</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="text-grey">
                        <p className="font-semibold">E-posta:</p>
                        <p>info@moderncizgimimarlik.com</p>
                      </div>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/Ejwds5FQETZMyUJQ8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold mt-2"
                    >
                      <MapPin className="w-4 h-4" />
                      Haritada Görüntüle
                    </a>
                  </div>
                </div>

                {/* Germany Office */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Almanya Ofisi
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="text-grey">
                        <p className="font-semibold">Adres:</p>
                        <p>Am Kühlturm 17</p>
                        <p>44536 Lünen, Deutschland</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="text-grey">
                        <p className="font-semibold">E-posta:</p>
                        <p>germany@moderncizgi.com</p>
                      </div>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/W43ZAXxsmNeAFkto8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold mt-2"
                    >
                      <MapPin className="w-4 h-4" />
                      Haritada Görüntüle
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-10 rounded-lg shadow-lg border-2 border-primary/20 mt-8">
                  <h3 className="text-2xl font-bold mb-8 text-center text-dark">Bizi Takip Edin</h3>
                  <div className="flex justify-center items-center gap-8">
                    <a
                      href="https://www.facebook.com/moderncizgi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:scale-110 shadow-md hover:shadow-xl transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-10 h-10" />
                    </a>
                    <a
                      href="https://www.instagram.com/moderncizgimimarlik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:scale-110 shadow-md hover:shadow-xl transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-10 h-10" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/moderncizgi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:scale-110 shadow-md hover:shadow-xl transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-10 h-10" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="py-24 bg-light-grey">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">Ofislerimiz</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Turkey Map - Avcılar, Istanbul */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Avcılar, İstanbul</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.239!2d28.7219408!3d41.0269167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3f0e1d6c9a5%3A0x7a8f9e8b6c5d4e3f!2sCihangir%2C%20%C5%9Eht.%20P.Er%20Yavuz%20Bahar%20Sk.%20No%3A27%2C%2034310%20Avc%C4%B1lar%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Istanbul Office Location"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.app.goo.gl/Ejwds5FQETZMyUJQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  <MapPin className="w-4 h-4" />
                  Google Maps'te Aç
                </a>
              </div>
            </div>

            {/* Germany Map - Lünen */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Lünen, Almanya</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Am+Kühlturm+17,+44536+Lünen,+Germany&zoom=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lünen Office Location"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.app.goo.gl/W43ZAXxsmNeAFkto8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  <MapPin className="w-4 h-4" />
                  Google Maps'te Aç
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
