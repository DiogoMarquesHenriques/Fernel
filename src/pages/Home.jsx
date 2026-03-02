import { Link } from 'react-router-dom'

const featuredSeries = [
  {
    name: 'Fernel Series',
    description: 'Versatilidade e economia para explorações médias. A escolha de confiança.',
    image: '/tractors/ironfield-180.png',
    to: '/tratores#fernel',
  },
  {
    name: 'FieldMaster Series',
    description: 'Potência e precisão para trabalhos exigentes. Tecnologia ao serviço do campo.',
    image: '/tractors/fieldmaster-165.png',
    to: '/tratores#fieldmaster',
  },
  {
    name: 'Ironfield Series',
    description: 'Máxima potência e robustez. Para os maiores desafios da agricultura.',
    image: '/tractors/fernel-115.png',
    to: '/tratores#ironfield',
  },
]

const strengths = [
  {
    title: 'Potência',
    description: 'Motores eficientes e fiáveis, concebidos para longas jornadas no campo.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Eficiência',
    description: 'Tecnologia que reduz consumos e custos operacionais sem comprometer o rendimento.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Durabilidade',
    description: 'Construção robusta e materiais de qualidade para anos de trabalho exigente.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=1920&q=90)`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl w-full text-center flex flex-col items-center">
          <h1 id="hero-heading" className="sr-only">
            FERNEL AGRIX — Potência Inteligente
          </h1>
          <div className="max-w-[min(90vw,560px)] w-full bg-white rounded-2xl shadow-2xl px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-center animate-fade-in">
            <img
              src="/fernel-agrix-logo.png"
              alt="FERNEL AGRIX — Potência Inteligente"
              className="w-full h-auto max-h-40 sm:max-h-48 object-contain"
            />
          </div>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-agrix-yellow animate-fade-in" style={{ animationDelay: '0.1s' }}>
            POTÊNCIA INTELIGENTE
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/95 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Inovação e fiabilidade ao serviço do agricultor. Tratores concebidos para o campo português.
          </p>
          <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/tratores" className="btn-primary text-lg px-8 py-4">
              Ver Tratores
            </Link>
          </div>
        </div>
      </section>

      {/* Featured series */}
      <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="series-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="series-heading" className="section-heading text-center">
            Séries em destaque
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Conheça as famílias de tratores AGRIX. Cada série pensada para as necessidades do agricultor.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSeries.map((series, i) => (
              <article
                key={series.name}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg card-hover border border-gray-100"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Link to={series.to} className="block focus:outline-none focus:ring-2 focus:ring-agrix-yellow focus:ring-offset-2 rounded-2xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={series.image}
                      alt={`Série ${series.name}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-agrix-green group-hover:text-agrix-green-dark">
                      {series.name}
                    </h3>
                    <p className="mt-2 text-gray-600">{series.description}</p>
                    <span className="mt-4 inline-flex items-center font-semibold text-agrix-green group-hover:text-agrix-yellow transition-colors">
                      Ver modelos
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="strengths-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="strengths-heading" className="section-heading text-center">
            Porquê AGRIX
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Potência, eficiência e durabilidade. Os pilares da nossa maquinaria.
          </p>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {strengths.map(({ title, description, icon }) => (
              <div
                key={title}
                className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 card-hover"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-agrix-green text-agrix-yellow">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-agrix-green">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-agrix-green" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-white">
            Pronto para conhecer os tratores AGRIX?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Fale connosco ou visite um concessionário. Estamos ao seu dispor.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/tratores" className="btn-primary">
              Ver Tratores
            </Link>
            <Link to="/contacto" className="btn-secondary">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
