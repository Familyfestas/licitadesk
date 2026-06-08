import {
  Users, FileSearch, GitBranch, Scale, FileText,
  Bell, BarChart3, Clock, Shield, BookOpen, Briefcase, Zap
} from 'lucide-react'

const features = [
  {
    icon: FileSearch,
    title: 'Matchmaking Diário',
    desc: 'Cada edital novo é cruzado com o perfil dos seus clientes. Resultado classificado: Elegível hoje, Elegível com providências, Não elegível.',
  },
  {
    icon: Scale,
    title: 'Análise Profunda em 3 Eixos',
    desc: 'Risco jurídico, viabilidade financeira e complexidade operacional — com citação direta da cláusula que sustenta cada ponto.',
  },
  {
    icon: FileText,
    title: 'Gerador de Peças Jurídicas',
    desc: 'Impugnação, recurso, contrarrazões, reequilíbrio e defesa em PAS. Cobre as 4 fases do processo licitatório com jurisprudência TCU/TCEs.',
  },
  {
    icon: GitBranch,
    title: 'Plano de Ação Automático',
    desc: 'Prazos da Lei 14.133 calculados: impugnação, esclarecimento, proposta, recurso. Integração com Google Calendar do escritório.',
  },
  {
    icon: Users,
    title: 'Multi-Cliente Nativo',
    desc: 'Workspaces por CNPJ com billing isolado. Opere 50 clientes em uma única conta — sem planilhas paralelas ou contas duplicadas.',
  },
  {
    icon: BookOpen,
    title: 'Jurisprudência Viva TCU/TCEs',
    desc: 'Siga temas (cláusulas restritivas, qualificação técnica, BDI excessivo) e receba alerta quando novo acórdão for publicado.',
  },
  {
    icon: Bell,
    title: 'Alertas de Certidões',
    desc: 'Controle vencimentos de certidões do acervo de cada cliente com alertas automáticos de renovação antes do prazo.',
  },
  {
    icon: Clock,
    title: 'Timeline de Sessão Pública',
    desc: 'Captura automática do chat de pregão com timestamps. Base auditável para fundamentar recurso depois da sessão.',
  },
  {
    icon: Briefcase,
    title: 'CRM + Timesheet Jurídico',
    desc: 'Pipeline de oportunidades por cliente, registro de atos faturáveis. Suporte ao modelo misto: mensalidade fixa + por ato + êxito.',
  },
  {
    icon: BarChart3,
    title: 'Parecer White-Label',
    desc: 'Parecer técnico-jurídico exportável em PDF com a marca do escritório. Entregável de alto ticket — mercado cobra R$ 5k–30k por parecer.',
  },
  {
    icon: Shield,
    title: 'Score CAPAG de Órgãos',
    desc: 'Consulte a nota de capacidade de pagamento (A a D) de qualquer órgão público antes de aceitar o caso. Gratuito e sem cadastro.',
  },
  {
    icon: Zap,
    title: 'Cobertura 200+ Portais',
    desc: 'PNCP, ComprasNet, Licitações-e (BB), BEC SP, BLL e diários oficiais municipais monitorados em tempo real.',
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            O sistema operacional do advogado de licitações
          </h2>
          <p className="text-[#334155] text-lg max-w-2xl mx-auto">
            A IA extrai, organiza, compara e gera rascunhos. O especialista revisa, valida e assina.
            A decisão final sempre é humana.
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
