import {
  BarChart3, Map, TrendingUp, Kanban, MessageSquare,
  FileText, ScanSearch, Shield, Users, Calculator,
  Award, Lightbulb
} from 'lucide-react'

const features = [
  { icon: BarChart3, title: 'Dashboard Analítico', desc: 'KPIs, funil de pipeline, volume por semana e ranking de órgãos e estados.' },
  { icon: Map, title: 'Mapa Interativo', desc: 'Mapa do Brasil com drill-down por estado e município. Visualize onde estão as oportunidades.' },
  { icon: TrendingUp, title: 'Tendências de Mercado', desc: 'Volume histórico em 7d, 30d, 90d ou 12 meses. Identifique sazonalidade e padrões.' },
  { icon: Kanban, title: 'Kanban de Propostas', desc: 'Gerencie oportunidades com drag-and-drop: do radar até o contrato assinado.' },
  { icon: MessageSquare, title: 'Chat IA com Editais', desc: 'Tire dúvidas sobre qualquer edital em linguagem natural. A IA responde com base no texto completo.' },
  { icon: FileText, title: 'Gerador de Proposta DOCX', desc: 'Proposta técnica e comercial com 7 seções, personalizada com o perfil da sua empresa, em segundos.' },
  { icon: ScanSearch, title: 'Análise de Documentos', desc: 'Upload PDF/DOCX dos anexos. A IA extrai requisitos, prazos e critérios de qualificação.' },
  { icon: Shield, title: 'Score Órgão (CAPAG)', desc: 'Consulte a nota de capacidade de pagamento (A a D) de qualquer órgão público. Grátis para todos.' },
  { icon: Users, title: 'Equipe e Colaboração', desc: 'Convide até 10 membros. Cada usuário configura alertas e preferências independentes.' },
  { icon: Calculator, title: 'Precificador com BDI', desc: 'Monte sua planilha de custos com BDI e margens automaticamente calculadas.' },
  { icon: Award, title: 'Gestão de Certidões', desc: 'Controle vencimentos de certidões e documentos com alertas automáticos de renovação.' },
  { icon: Lightbulb, title: 'Insights Semanais por IA', desc: 'Receba relatórios automáticos com oportunidades relevantes e análise do seu mercado.' },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Tudo que você precisa para vencer licitações
          </h2>
          <p className="text-[#334155] text-lg max-w-2xl mx-auto">
            Ferramentas inteligentes para cada etapa do processo licitatório, do monitoramento ao contrato.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-200 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-200">
                  <Icon size={18} className="text-emerald-600 group-hover:text-white transition-colors duration-200" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-2 text-sm">{f.title}</h3>
                <p className="text-[#334155] text-xs leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
