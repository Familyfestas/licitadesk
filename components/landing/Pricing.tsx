import { Check, Zap, Building2 } from 'lucide-react'

const planos = [
  {
    nome: 'Advogado Solo',
    preco: '990',
    periodo: '/mês',
    descricao: 'Para o advogado individual que atende até 10 clientes em licitações.',
    destaque: false,
    recursos: [
      'Até 10 clientes (CNPJs)',
      '1 usuário',
      'Análise ilimitada de editais',
      'Gerador de peças jurídicas',
      'Cobertura PNCP / ComprasNet',
      'Matchmaking diário 🟢🟡🔴',
      'Plano de ação com prazos Lei 14.133',
    ],
    cta: 'Começar 14 dias grátis',
    href: '/sign-up',
  },
  {
    nome: 'Profissional',
    preco: '1.990',
    periodo: '/mês',
    descricao: 'Para advogados e consultores com carteira ativa de clientes licitantes.',
    destaque: true,
    recursos: [
      'Até 25 clientes (CNPJs)',
      '1 usuário',
      'Análise ilimitada de editais',
      'Gerador de peças — 4 fases completas',
      'Cobertura completa (200+ portais)',
      'Parecer técnico-jurídico 3 eixos',
      'Jurisprudência viva TCU/TCEs',
      'CRM + timesheet jurídico',
    ],
    cta: 'Começar 14 dias grátis',
    href: '/sign-up',
  },
  {
    nome: 'Escritório',
    preco: '4.990',
    periodo: '/mês',
    descricao: 'Para escritórios com equipe dedicada e clientes de alto ticket.',
    destaque: false,
    recursos: [
      'Até 100 clientes (CNPJs)',
      'Até 5 usuários',
      'White-label completo',
      'Relatórios por cliente',
      'Suporte prioritário',
      'Timeline de sessão pública',
      'Biblioteca de jurisprudência com alertas',
    ],
    cta: 'Começar 14 dias grátis',
    href: '/sign-up',
  },
  {
    nome: 'Enterprise',
    preco: null,
    periodo: '',
    descricao: 'Para bancas premium e departamentos jurídicos corporativos sem limite.',
    destaque: false,
    recursos: [
      'Clientes ilimitados',
      'Usuários ilimitados',
      'API pública + SSO',
      'SLA 99,9%',
      'ISO 27001 + DPA LGPD',
      'Onboarding dedicado',
      'Gerente de conta exclusivo',
    ],
    cta: 'Falar com a equipe',
    href: 'mailto:contato@licitadesk.com.br',
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            <Zap size={12} />
            Planos e Preços
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Uma licitação ganha vale R$ 100 mil a milhões
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A ferramenta precisa custar uma fração disso — e ainda ser séria o suficiente pra construir um produto real.
            Quatro tiers calibrados pro advogado solo até a banca enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
          {planos.map((p) => (
            <div
              key={p.nome}
              className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-200 ${
                p.destaque
                  ? 'bg-emerald-500 border-emerald-400 shadow-[0_32px_64px_rgba(16,185,129,0.3)]'
                  : 'bg-[#1F2937] border-white/10 hover:border-white/25'
              }`}
            >
              {p.destaque && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-emerald-600 text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-7">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${p.destaque ? 'text-emerald-100' : 'text-slate-500'}`}>
                  {p.nome}
                </p>
                {p.preco ? (
                  <div className="flex items-end gap-0.5 mb-3">
                    <span className={`text-sm font-medium mb-1.5 ${p.destaque ? 'text-emerald-100' : 'text-slate-500'}`}>R$</span>
                    <span className={`text-4xl font-bold tracking-tight leading-none ${p.destaque ? 'text-white' : 'text-white'}`}>
                      {p.preco}
                    </span>
                    <span className={`text-sm mb-0.5 ${p.destaque ? 'text-emerald-100' : 'text-slate-500'}`}>{p.periodo}</span>
                  </div>
                ) : (
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-white">Sob consulta</span>
                  </div>
                )}
                <p className={`text-sm leading-relaxed ${p.destaque ? 'text-emerald-100' : 'text-slate-400'}`}>
                  {p.descricao}
                </p>
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {p.recursos.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                      p.destaque ? 'bg-white/20' : 'bg-emerald-500/15'
                    }`}>
                      <Check size={9} className={p.destaque ? 'text-white' : 'text-emerald-400'} strokeWidth={3} />
                    </div>
                    <span className={`text-sm leading-snug ${p.destaque ? 'text-white' : 'text-slate-300'}`}>{r}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                className={`block text-center font-semibold py-3 rounded-xl transition-all text-sm ${
                  p.destaque
                    ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                    : p.preco
                    ? 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20'
                    : 'bg-white/5 border border-white/15 text-slate-300 hover:bg-white/10'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Funil grátis */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
          <Building2 size={18} className="text-emerald-400 shrink-0" />
          <p className="text-slate-400 text-sm text-center sm:text-left">
            <span className="text-white font-medium">Score CAPAG público e gratuito</span>
            {' '}— Consulte a nota de capacidade de pagamento de qualquer órgão público, sem cadastro.
          </p>
          <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium whitespace-nowrap transition-colors">
            Consultar agora →
          </a>
        </div>

        <p className="text-center text-slate-600 text-sm mt-6">
          14 dias grátis em todos os planos · Sem cartão de crédito · Cancele quando quiser
        </p>
      </div>
    </section>
  )
}
