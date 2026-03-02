export default function SobreNos() {
  return (
    <>
      <section className="bg-agrix-green py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Sobre Nós
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            A AGRIX nasceu para colocar a melhor tecnologia ao serviço do agricultor português.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20" aria-labelledby="story-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="story-heading" className="section-heading">
            A nossa história
          </h2>
          <div className="mt-8 prose prose-lg text-gray-600 max-w-none">
            <p>
              A AGRIX é uma empresa moderna de maquinaria agrícola, dedicada a desenhar e disponibilizar tratores e equipamentos que respondem aos desafios reais do campo. Acreditamos que a agricultura merece ferramentas fiáveis, eficientes e pensadas para quem trabalha a terra todos os dias.
            </p>
            <p>
              Combinamos inovação técnica com um conhecimento profundo das necessidades dos agricultores. Cada série — Fernel, FieldMaster e Ironfield — foi desenvolvida para segmentos distintos do mercado, garantindo que há sempre uma solução AGRIX adequada ao tamanho da exploração e ao tipo de trabalho.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gray-50" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="mission-heading" className="section-heading text-center">
            Missão, Visão e Valores
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 card-hover">
              <h3 className="text-xl font-bold text-agrix-green">Missão</h3>
              <p className="mt-4 text-gray-600">
                Fornecer maquinaria agrícola de qualidade que aumente a produtividade e a sustentabilidade das explorações, com foco na inovação e no apoio ao agricultor.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 card-hover">
              <h3 className="text-xl font-bold text-agrix-green">Visão</h3>
              <p className="mt-4 text-gray-600">
                Ser a marca de referência em tratores e equipamentos agrícolas em Portugal, reconhecida pela fiabilidade, eficiência e pelo compromisso com o setor agrícola.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-md border border-gray-100 card-hover">
              <h3 className="text-xl font-bold text-agrix-green">Valores</h3>
              <ul className="mt-4 text-gray-600 space-y-2 list-disc list-inside">
                <li>Inovação e tecnologia</li>
                <li>Fiabilidade e durabilidade</li>
                <li>Proximidade ao agricultor</li>
                <li>Respeito pelo ambiente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20" aria-labelledby="hr-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="hr-heading" className="section-heading">
            Recursos Humanos
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                A AGRIX organiza-se em equipas especializadas: desenvolvimento de produto, engenharia de campo,
                assistência técnica, comercial e apoio ao cliente. Cada equipa é liderada por um responsável que
                coordena as operações no terreno e garante uma resposta rápida às necessidades dos agricultores.
              </p>
              <p>
                A nível de gestão, a empresa conta com uma direção geral, direção financeira e direção de recursos
                humanos, assegurando uma visão estratégica de longo prazo e uma cultura interna baseada em
                colaboração e melhoria contínua.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-agrix-green">Recrutamento e formação</h3>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>Programas de estágio para jovens técnicos e engenheiros agrícolas.</li>
                <li>Formação contínua em novas tecnologias e sistemas de agricultura de precisão.</li>
                <li>Planos de desenvolvimento individual para funções chave (chefe de oficina, gestor de zona, etc.).</li>
                <li>Parcerias com escolas profissionais e institutos politécnicos.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="section-heading">
            Serviços e Atividades Disponíveis
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            Para além da venda de tratores AGRIX, oferecemos um conjunto completo de serviços que asseguram o máximo
            rendimento e disponibilidade das máquinas ao longo de todo o seu ciclo de vida.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-agrix-green">Venda e aconselhamento técnico</h3>
              <p className="mt-3 text-gray-600">
                Apoio especializado na escolha do modelo ideal para cada tipo de exploração, com simulações de consumo
                e dimensionamento de potência.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-agrix-green">Assistência técnica e manutenção</h3>
              <p className="mt-3 text-gray-600">
                Oficinas certificadas, equipas móveis de intervenção rápida e contratos de manutenção preventiva.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-agrix-green">Peças e acessórios originais</h3>
              <p className="mt-3 text-gray-600">
                Stock permanente de peças AGRIX e implementos compatíveis, com entrega rápida em todo o território.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-agrix-green">Formação de operadores</h3>
              <p className="mt-3 text-gray-600">
                Sessões práticas em campo e formação em segurança, utilização eficiente e manutenção diária dos
                equipamentos.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-agrix-green">Agricultura de precisão</h3>
              <p className="mt-3 text-gray-600">
                Integração de sistemas de guiamento, monitorização de consumos e recolha de dados para apoio à
                decisão.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-agrix-green">Demonstrações e eventos</h3>
              <p className="mt-3 text-gray-600">
                Demonstrações em campo, dias abertos e participação em feiras agrícolas para apresentar as novidades
                AGRIX.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20" aria-labelledby="marketing-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="marketing-heading" className="section-heading">
            Estratégias de Marketing
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                A presença da AGRIX assenta numa estratégia omnicanal: site institucional, redes sociais, campanhas
                digitais e presença regular em feiras e eventos do setor agrícola.
              </p>
              <p>
                Comunicamos sempre com foco em casos reais de agricultores, demonstrando na prática como a tecnologia
                AGRIX contribui para aumentar a produtividade e reduzir custos de operação.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-agrix-green">Principais ações</h3>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>Gestão ativa de redes sociais com demonstrações, dicas e testemunhos de clientes.</li>
                <li>Campanhas de lançamento de novos modelos com test drives em explorações parceiras.</li>
                <li>Parcerias com concessionários locais para ações de porta-aberta e workshops técnicos.</li>
                <li>Newsletter sazonal com recomendações de manutenção e oportunidades de campanha.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gray-50" aria-labelledby="ethics-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="ethics-heading" className="section-heading">
            Ética e Responsabilidade Social
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                A AGRIX assume um compromisso claro com a sustentabilidade e com o desenvolvimento das comunidades
                rurais. Privilegiamos fornecedores responsáveis, procuramos reduzir o impacto ambiental das nossas
                operações e promovemos soluções que ajudem a diminuir consumos e emissões no campo.
              </p>
              <p>
                Valorizamos relações de longo prazo, baseadas em transparência, respeito e apoio contínuo aos nossos
                clientes e parceiros.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-agrix-green">Iniciativas em desenvolvimento</h3>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>Programas de renovação de frota com incentivo à substituição de equipamentos menos eficientes.</li>
                <li>Parcerias com associações locais para formação de jovens agricultores.</li>
                <li>Apoio a projetos de conservação de solos e utilização responsável de recursos hídricos.</li>
                <li>Política interna de segurança e bem‑estar dos colaboradores, com foco na prevenção de riscos.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-20" aria-labelledby="innovation-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="innovation-heading" className="section-heading">
            Inovação ao serviço do agricultor
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Desenvolvemos cada modelo com o objetivo de reduzir consumos, aumentar o conforto e prolongar a vida útil da máquina. O resultado é uma gama de tratores que une potência, eficiência e a confiança que o campo exige.
          </p>
        </div>
      </section>
    </>
  )
}
