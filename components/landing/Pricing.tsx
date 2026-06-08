import { Check, Zap } from 'lucide-react'

const planos = [
  {
    nome: 'Starter',
    preco: '297',
    descricao: 'Para empresas que estão começando a participar de licitações.',
    destaque: false,
    recursos: [
      'Monitoramento de até 3 órgãos',
      'Análise de editais com IA',
      'Checklist de habilitação automático',
      'Kanban de propostas',
      'Gerador de proposta DOCX',
      '1 usuário',
      'Suporte por e-mail',
    ],
    cta: 'Começar grátis',
    href: '/sign-up',
  },
  {
    nome: 'Profissional',
    preco: '697',
    descricao: 'Para empresas e advogados que disputam licitações com frequência.',
    destaque: true,
    recursos: [
      'Monitoramento ilimitado de órgãos',
      'Chat IA com editais (perguntas ilimitadas)',
      'Análise de documentos PDF/DOCX',
      'Score CAPAG de órgãos',
      'Precificador com BDI',
      'Gestão de certidões e alertas',
      'Até 5 usuários',
      'Relatórios e insights semanais por IA',
      'Suporte prioritário',
    ],
    cta: 'Começar grátis',
    href: '/sign-up',
  },
  {
    nome: 'Escritório',
    preco: '1.497',
    descricao: 'Para escritórios jurídicos e empresas com equipe dedicada a licitações.',
    destaque: false,
    recursos: [
      'Tudo do Profissional',
      'Até 10 usuários com permissões',
      'Assessoramento jurídico integrado',
      'Recurso administrativo assistido por IA',
      'Modelo de contrato e ata de registro',
      'Integrações via API',
      'Gerente de conta dedicado',
      'SLA de suporte 4h',
    ],
    cta: 'Falar com vendas',
    href: 'mailto:contato@licitadesk.com.br',
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            <Zap size={12} />
            Planos e Preços
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Invista menos do que um processo perdido
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cancele quando quiser. Sem taxa de setup. Todos os planos incluem 14 dias grátis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {planos.map((p) => (
            <div
              key={p.nome}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-200 ${
                p.destaque
                  ? 'bg-emerald-500 border-emerald-400 shadow-[0_32px_64px_rgba(16,185,129,0.25)]'
                  : 'bg-[#1F2937] border-white/10 hover:border-white/20'
              }`}
            >
              {p.destaque && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-emerald-600 text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-8">
                <p className={`text-sm font-semibold mb-2 ${p.destaque ? 'text-emerald-100' : 'text-slate-400'}`}>
                  {p.nome}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-sm font-medium ${p.destaque ? 'text-emerald-100' : 'text-slate-500'}`}>R$</span>
                  <span className={`text-5xl font-bold tracking-tight ${p.destaque ? 'text-white' : 'text-white'}`}>
                    {p.preco}
                  </span>
                  <span className={`text-sm mb-2 ${p.destaque ? 'text-emerald-100' : 'text-slate-500'}`}>/mês</span>
                </div>
                <p className={`text-sm leading-relaxed ${p.destaque ? 'text-emerald-100' : 'text-slate-400'}`}>
                  {p.descricao}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.recursos.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                      p.destaque ? 'bg-white/20' : 'bg-emerald-500/20'
                    }`}>
                      <Check size={10} className={p.destaque ? 'text-white' : 'text-emerald-400'} strokeWidth={2.5} />
                    </div>
                    <span className={`text-sm ${p.destaque ? 'text-white' : 'text-slate-300'}`}>{r}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                className={`block text-center font-semibold py-3.5 rounded-xl transition-all ${
                  p.destaque
                    ? 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-md'
                    : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-10">
          Precisa de mais usuários ou integrações específicas?{' '}
          <a href="mailto:contato@licitadesk.com.br" className="text-emerald-500 hover:text-emerald-400 transition-colors">
            Entre em contato para um plano personalizado.
          </a>
        </p>
      </div>
    </section>
  )
}
