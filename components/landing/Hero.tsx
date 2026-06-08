import { FileText, Download } from 'lucide-react'

const proposalSections = [
  'Apresentação da Empresa',
  'Entendimento do Objeto',
  'Metodologia e Solução Proposta',
  'Equipe Técnica',
  'Cronograma e Prazo',
  'Proposta Comercial',
  'Validade da Proposta',
]

export function Hero() {
  return (
    <section className="relative bg-[#0F172A] text-white min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Plataforma IA para Licitações Públicas
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Da licitação à proposta{' '}
            <span className="text-emerald-400">em 30 segundos</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
            A IA analisa editais, organiza documentos e gera propostas
            profissionais para sua empresa ou escritório.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/sign-up"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 hover:-translate-y-0.5"
            >
              Testar grátis →
            </a>
            <a
              href="#funcionalidades"
              className="border border-white/20 text-slate-300 hover:border-white/40 hover:text-white px-8 py-3.5 rounded-xl transition-all"
            >
              Ver funcionalidades
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-5">Sem cartão de crédito · Cancele quando quiser</p>
        </div>

        {/* Right: Proposal Panel */}
        <div className="relative">
          <div className="bg-[#1F2937] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Panel header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-[#111827]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <FileText size={14} className="text-emerald-400" />
                <span>Proposta Técnica e Comercial</span>
              </div>
              <span className="ml-auto text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Gerada com IA</span>
            </div>

            {/* Checklist */}
            <div className="p-5 space-y-1">
              {proposalSections.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm">{i + 1}. {item}</span>
                </div>
              ))}
            </div>

            {/* Footer action */}
            <div className="flex items-center gap-3 px-5 py-4 border-t border-white/10 bg-[#111827]">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <FileText size={14} />
                <span>Proposta_PrefSP_EditalPro.docx</span>
              </div>
              <button className="ml-auto flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                <Download size={12} />
                Baixar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
