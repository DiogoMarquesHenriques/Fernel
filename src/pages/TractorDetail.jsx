import { useParams, Link } from 'react-router-dom'
import { tractors } from '../data/tractors'

export default function TractorDetail() {
  const { id } = useParams()
  const tractor = tractors.find((t) => t.id === id)

  if (!tractor) {
    return (
      <section className="py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Modelo não encontrado</h1>
        <Link to="/tratores" className="mt-4 inline-block btn-primary">Voltar aos tratores</Link>
      </section>
    )
  }

  return (
    <>
      <section className="bg-agrix-green py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/tratores" className="text-agrix-yellow hover:underline text-sm font-medium">
            ← Voltar aos tratores
          </Link>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
            {tractor.name}
          </h1>
          <p className="mt-2 text-lg text-white/90">{tractor.series} • {tractor.horsepower} CV</p>
        </div>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="detail-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] max-h-[400px] lg:max-h-none">
              <img
                src={tractor.image}
                alt={tractor.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 id="detail-heading" className="text-2xl font-bold text-agrix-green">
                Características
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                {tractor.description}
              </p>
              <dl className="mt-8 space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Série</dt>
                  <dd className="text-lg font-semibold text-agrix-green">{tractor.series}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Potência</dt>
                  <dd className="text-lg font-semibold text-agrix-green">{tractor.horsepower} CV</dd>
                </div>
              </dl>
              <Link to="/contacto" className="mt-8 inline-block btn-primary">
                Pedir informação
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
