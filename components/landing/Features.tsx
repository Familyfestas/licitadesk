const features = [
  { icon: '📊', title: 'Dashboard Analítico', desc: 'KPIs, funil de pipeline, volume por semana e ranking de órgãos.' },
  { icon: '🗺️', title: 'Mapa Interativo', desc: 'Mapa do Brasil com drill-down por estado e município.' },
  { icon: '📋', title: 'Kanban de Propostas', desc: 'Do radar ao contrato assinado com drag-and-drop.' },
  { icon: '💬', title: 'Chat IA com Editais', desc: 'Tire dúvidas sobre qualquer edital em linguagem natural.' },
  { icon: '📄', title: 'Gerador de Proposta', desc: 'Proposta técnica e comercial em DOCX em segundos.' },
  { icon: '🔍', title: 'Análise de Documentos', desc: 'Upload de PDF/DOCX — IA extrai requisitos e prazos.' },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Tudo que você precisa para vencer licitações
        </h2>
        <p className="text-gray-500 text-center mb-16">
          Ferramentas inteligentes para cada etapa do processo licitatório.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
