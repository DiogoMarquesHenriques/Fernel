import { Link } from 'react-router-dom'
import { tractors } from '../data/tractors'

const seriesId = (series) => series.toLowerCase().replace(/\s/g, '')

export default function Tratores() {
  const seenSeries = new Set()
  return (
    <>
      <section className="bg-agrix-green py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Tratores AGRIX
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            Conheça a gama completa. Da série Fernel ao Ironfield, há um AGRIX para cada necessidade.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="tractors-grid-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="tractors-grid-heading" className="sr-only">
            Lista de modelos de tratores
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tractors.map((tractor) => {
              const id = seenSeries.has(tractor.series) ? undefined : (seenSeries.add(tractor.series), seriesId(tractor.series))
              return (
              <article
                key={tractor.id}
                id={id}
                className={`group flex flex-col rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 card-hover ${id ? 'scroll-mt-24' : ''}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={tractor.image}
                    alt={tractor.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-sm font-medium text-agrix-green">{tractor.series}</span>
                  <h3 className="mt-1 text-xl font-bold text-gray-900">{tractor.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-agrix-yellow-dark">
                    {tractor.horsepower} CV
                  </p>
                  <p className="mt-2 text-gray-600 text-sm flex-1">
                    {tractor.description}
                  </p>
                  <Link
                    to={`/tratores/${tractor.id}`}
                    className="mt-6 btn-primary w-full text-center text-sm py-2.5"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </article>
            )})}
          </div>
        </div>
      </section>
    </>
  )
}
