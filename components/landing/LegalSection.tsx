import {
  BookOpen, AlertCircle, HelpCircle, FolderOpen,
  Users, FileCheck, Scale, ShieldAlert
} from 'lucide-react'

const services = [
  { icon: BookOpen, title: 'Entender o edital', desc: 'Análise completa das exigências, prazos e critérios de julgamento.' },
  { icon: AlertCircle, title: 'Impugnar o instrumento convocatório', desc: 'Identificação de cláusulas ilegais e elaboração fundamentada de impugnações.' },
  { icon: HelpCircle, title: 'Elaborar pedido de esclarecimentos', desc: 'Questionamentos técnicos e jurídicos ao órgão licitante dentro do prazo.' },
  { icon: FolderOpen, title: 'Selecionar documentos para participar', desc: 'Checklist completo de habilitação jurídica, fiscal, técnica e econômica.' },
  { icon: Users, title: 'Assessoramento na sessão de licitação', desc: 'Acompanhamento da disputa, análise de lances e decisões em tempo real.' },
  { icon: FileCheck, title: 'Recurso administrativo', desc: 'Elaboração e protocolização de recursos contra decisões do pregoeiro ou comissão.' },
  { icon: Scale, title: 'Ajuizar ação judicial', desc: 'Mandados de segurança, ações ordinárias e medidas cautelares em licitações.' },
  { icon: ShieldAlert, title: 'Defesa em procedimento sancionatório', desc: 'Defesa em processos administrativos de inabilitação, desclassificação e sanções.' },
]

export function LegalSection() {
  return (
    <section id="juridico" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            <Scale size={12} />
            Módulo Jurídico
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Suporte jurídico completo em licitações
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Do edital ao contrato, com assessoria especializada em cada etapa do processo licitatório.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group bg-[#1F2937] border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-[#1a2535] transition-all duration-200 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-200">
                  <Icon size={18} className="text-slate-400 group-hover:text-emerald-400 transition-colors duration-200" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
