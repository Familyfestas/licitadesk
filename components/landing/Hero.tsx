export function Hero() {
  return (
    <section className="bg-gray-950 text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Da licitação à proposta<br />
            <span className="text-emerald-400">em 30 segundos</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Monitore editais, gerencie oportunidades e gere propostas
            profissionais com IA. Tudo em um só lugar.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/cadastro"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              Começar grátis →
            </a>
            <a
              href="#funcionalidades"
              className="border border-gray-600 text-gray-300 hover:border-gray-400 px-8 py-3 rounded-lg transition"
            >
              Ver funcionalidades
            </a>
          </div>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
          <p className="text-gray-400 text-sm mb-4">Proposta gerada com IA</p>
          {[
            '1. Apresentação da Empresa',
            '2. Entendimento do Objeto',
            '3. Metodologia e Solução',
            '4. Equipe Técnica',
            '5. Cronograma',
            '6. Proposta Comercial',
            '7. Validade',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 py-2 border-b border-gray-700 last:border-0"
            >
              <span className="text-emerald-400">✓</span>
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
