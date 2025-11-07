'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    firmaAdi: '',
    ilgiliKisi: '',
    email: '',
    telefon: '',
    fuarAdi: '',
    standOlcusu: '',
    mesaj: '',
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
        email: '',
        telefon: '',
        fuarAdi: '',
        standOlcusu: '',
        mesaj: '',
      })
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-dark via-dark-grey to-dark text-light">
        <div className="container text-center">
          <h1 className="section-heading text-light mb-6">İletişim</h1>
          <p className="section-subheading text-light/90 max-w-3xl mx-auto">
            Fuar standı projeniz için ücretsiz danışmanlık ve teklif almak üzere bizimle iletişime geçin
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
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-semibold mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="+90 555 123 4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fuarAdi" className="block text-sm font-semibold mb-2">
                      Fuar Adı
                    </label>
                    <input
                      type="text"
                      id="fuarAdi"
                      name="fuarAdi"
                      value={formData.fuarAdi}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Katılacağınız fuar"
                    />
                  </div>
                  <div>
                    <label htmlFor="standOlcusu" className="block text-sm font-semibold mb-2">
                      Stand Ölçüsü (opsiyonel)
                    </label>
                    <input
                      type="text"
                      id="standOlcusu"
                      name="standOlcusu"
                      value={formData.standOlcusu}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-light-grey-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="örn: 3m x 4m"
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
                    Türkiye Ofisi
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="text-grey">
                        <p className="font-semibold">Adres:</p>
                        <p>Atatürk Mahallesi, Modern Plaza</p>
                        <p>Kat: 5, No: 45</p>
                        <p>34758 Ataşehir, İstanbul, Türkiye</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="text-grey">
                        <p className="font-semibold">Telefon:</p>
                        <p>+90 212 555 0123</p>
                        <p>+90 532 555 0123</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="text-grey">
                        <p className="font-semibold">E-posta:</p>
                        <p>info@moderncizgi.com</p>
                        <p>sales@moderncizgi.com</p>
                      </div>
                    </div>
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
                        <p>Messestraße 12</p>
                        <p>60327 Frankfurt am Main</p>
                        <p>Deutschland</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="text-grey">
                        <p className="font-semibold">Telefon:</p>
                        <p>+49 69 242 4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div className="text-grey">
                        <p className="font-semibold">E-posta:</p>
                        <p>germany@moderncizgi.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-primary text-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Çalışma Saatleri
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Pazartesi - Cuma:</span>
                    <span className="font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumartesi:</span>
                    <span className="font-semibold">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pazar:</span>
                    <span className="font-semibold">Kapalı</span>
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
            {/* Turkey Map */}
            <div>
              <h3 className="text-2xl font-bold mb-4">İstanbul, Türkiye</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7461406424587!2d29.126754!3d40.9929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzM0LjQiTiAyOcKwMDcnMzYuMyJF!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Istanbul Office Location"
                />
              </div>
            </div>

            {/* Germany Map */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Frankfurt, Almanya</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.8!2d8.6463!3d50.1072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA2JzI2LjAiTiA4wrAzOCc0Ni43IkU!5e0!3m2!1sen!2sde!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Frankfurt Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
