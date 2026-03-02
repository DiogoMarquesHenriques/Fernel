import { useState } from 'react'

export default function Contacto() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section className="bg-agrix-green py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            Tem dúvidas ou quer saber mais sobre os tratores AGRIX? Estamos ao seu dispor.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 id="contact-heading" className="section-heading">
                Envie-nos uma mensagem
              </h2>
              {submitted ? (
                <div className="mt-8 p-6 rounded-xl bg-green-50 border border-green-200 text-green-800" role="status">
                  <p className="font-semibold">Mensagem enviada.</p>
                  <p className="mt-1 text-sm">Obrigado pelo contacto. Responderemos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                      Nome
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-agrix-green focus:ring-agrix-green"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-agrix-green focus:ring-agrix-green"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
                      Mensagem
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-agrix-green focus:ring-agrix-green"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-agrix-green">Informação da empresa</h3>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-agrix-green shrink-0" aria-hidden="true">📍</span>
                  <span>Rua da Indústria, 123 — 2000-000 Santarém</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-agrix-green shrink-0" aria-hidden="true">📞</span>
                  <a href="tel:+351123456789" className="hover:text-agrix-green transition-colors">+351 123 456 789</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-agrix-green shrink-0" aria-hidden="true">✉️</span>
                  <a href="mailto:geral@agrix.pt" className="hover:text-agrix-green transition-colors">geral@agrix.pt</a>
                </li>
              </ul>

              <h3 className="mt-10 text-xl font-bold text-agrix-green">Localização</h3>
              <div className="mt-4 aspect-video w-full rounded-xl bg-gray-200 overflow-hidden border border-gray-200" aria-hidden="true">
                <div className="h-full w-full flex items-center justify-center text-gray-500 bg-gray-100">
                  <span className="text-sm">Mapa (placeholder)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
