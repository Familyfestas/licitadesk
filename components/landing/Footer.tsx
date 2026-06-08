import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="LicitaDesk" width={32} height={32} className="object-contain" />
              <span className="text-white font-bold text-lg">LicitaDesk</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              O sistema operacional do advogado de licitações. Monitore editais, analise documentos e gere propostas profissionais com IA.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Produto</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#funcionalidades" className="hover:text-slate-300 transition-colors">Funcionalidades</a></li>
              <li><a href="#juridico" className="hover:text-slate-300 transition-colors">Módulo Jurídico</a></li>
              <li><a href="#precos" className="hover:text-slate-300 transition-colors">Planos e Preços</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-slate-300 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Privacidade (LGPD)</a></li>
              <li><a href="#" className="hover:text-slate-300 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© 2025 LicitaDesk. Todos os direitos reservados.</p>
          <p className="text-slate-600 text-sm">Feito com IA · CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  )
}
