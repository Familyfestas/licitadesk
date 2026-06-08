'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const dores = [
  'falta de documento',
  'prazo perdido',
  'proposta mal feita',
  'edital mal analisado',
]

export function Hero() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx((i) => (i + 1) % dores.length)
        setVisible(true)
      }, 300)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-[#0F172A] text-white overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Copy centrado */}
      <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-14 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Plataforma IA para Licitações Públicas
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6">
          Nunca mais perca uma licitação{' '}
          <br className="hidden sm:block" />
          <span className="text-slate-400 font-normal text-4xl lg:text-5xl">por </span>
          <span
            className="text-emerald-400 transition-all duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              display: 'inline-block',
            }}
          >
            {dores[idx]}
          </span>
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          A IA lê o edital, verifica sua habilitação, organiza os documentos
          e gera a proposta técnica — você foca em vencer.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
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

      {/* Product screenshot */}
      <div className="relative max-w-6xl mx-auto px-6 pb-0">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
          <div className="absolute -inset-px bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none z-10 rounded-2xl" />
          <Image
            src="/hero-dashboard.jpeg"
            alt="Dashboard LicitaDesk — Painel de Licitações Públicas"
            width={1400}
            height={788}
            className="w-full h-auto block"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </div>
    </section>
  )
}
