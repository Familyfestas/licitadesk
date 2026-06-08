'use client'
import Image from 'next/image'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0F172A]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="LicitaDesk" width={36} height={36} className="object-contain" />
          <span className="text-white font-bold text-lg tracking-tight">LicitaDesk</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
          <a href="#juridico" className="hover:text-white transition-colors">Jurídico</a>
          <a href="#precos" className="hover:text-white transition-colors">Preços</a>
        </nav>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="text-sm text-slate-300 hover:text-white px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition-all cursor-pointer">
                Entrar
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="text-sm bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 py-2 rounded-lg transition-all cursor-pointer shadow-lg shadow-emerald-500/25">
                Começar grátis
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <a href="/dashboard" className="text-sm text-slate-300 hover:text-white px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition-all">
              Dashboard
            </a>
            <UserButton afterSignOutUrl="/" />
          </Show>
        </div>
      </div>
    </header>
  )
}
