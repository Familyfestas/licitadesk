'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const dores = [
  'documentação incompleta',
  'prazo vencido',
  'peça jurídica fraca',
  'edital mal analisado',
]

function AnimatedBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.18 }}
    >
      <defs>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            .line-flow-1 { animation: flowLine 8s linear infinite; }
            .line-flow-2 { animation: flowLine 12s linear infinite 3s; }
            .line-flow-3 { animation: flowLine 10s linear infinite 6s; }
            .node-pulse-1 { animation: nodePulse 4s ease-in-out infinite; }
            .node-pulse-2 { animation: nodePulse 4s ease-in-out infinite 1.5s; }
            .node-pulse-3 { animation: nodePulse 4s ease-in-out infinite 3s; }
            .float-1 { animation: floatUp 14s ease-in-out infinite; }
            .float-2 { animation: floatUp 18s ease-in-out infinite 5s; }
            .float-3 { animation: floatUp 16s ease-in-out infinite 10s; }
          }
          @keyframes flowLine {
            0% { stroke-dashoffset: 300; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0; }
          }
          @keyframes nodePulse {
            0%, 100% { r: 3; opacity: 0.4; }
            50% { r: 6; opacity: 1; }
          }
          @keyframes floatUp {
            0% { transform: translateY(0px) scale(1); opacity: 0.3; }
            50% { transform: translateY(-30px) scale(1.05); opacity: 0.7; }
            100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          }
        `}</style>
      </defs>

      {/* Grid lines */}
      <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.15" />

      {/* Animated flowing lines */}
      <line
        x1="0" y1="30%" x2="100%" y2="70%"
        stroke="#10B981" strokeWidth="1"
        strokeDasharray="8 4" strokeDashoffset="300"
        className="line-flow-1"
      />
      <line
        x1="100%" y1="20%" x2="0" y2="80%"
        stroke="#10B981" strokeWidth="0.8"
        strokeDasharray="6 6" strokeDashoffset="300"
        className="line-flow-2"
      />
      <line
        x1="20%" y1="0" x2="80%" y2="100%"
        stroke="#10B981" strokeWidth="0.6"
        strokeDasharray="4 8" strokeDashoffset="300"
        className="line-flow-3"
      />

      {/* Network nodes */}
      <circle cx="20%" cy="25%" r="3" fill="#10B981" className="node-pulse-1" />
      <circle cx="60%" cy="50%" r="3" fill="#10B981" className="node-pulse-2" />
      <circle cx="80%" cy="75%" r="3" fill="#10B981" className="node-pulse-3" />

      {/* Connection lines between nodes */}
      <line x1="20%" y1="25%" x2="60%" y2="50%" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4 4" />
      <line x1="60%" y1="50%" x2="80%" y2="75%" stroke="#10B981" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4 4" />

      {/* Floating document shapes */}
      <g className="float-1" style={{ transformOrigin: '15% 60%' }}>
        <rect x="calc(15% - 10px)" y="55%" width="20" height="25" rx="3"
          fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="calc(15% - 6px)" y1="calc(55% + 8px)" x2="calc(15% + 6px)" y2="calc(55% + 8px)"
          stroke="#10B981" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="calc(15% - 6px)" y1="calc(55% + 13px)" x2="calc(15% + 6px)" y2="calc(55% + 13px)"
          stroke="#10B981" strokeWidth="1" strokeOpacity="0.5" />
      </g>

      <g className="float-2" style={{ transformOrigin: '75% 35%' }}>
        <rect x="calc(75% - 10px)" y="30%" width="20" height="25" rx="3"
          fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="calc(75% - 6px)" y1="calc(30% + 8px)" x2="calc(75% + 6px)" y2="calc(30% + 8px)"
          stroke="#10B981" strokeWidth="1" strokeOpacity="0.4" />
      </g>

      <g className="float-3" style={{ transformOrigin: '45% 80%' }}>
        <path d="M calc(45% - 8px) 77% L calc(45% + 8px) 77% L calc(45% + 8px) calc(77% + 18px) L calc(45% - 8px) calc(77% + 18px) Z"
          fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.35" />
      </g>
    </svg>
  )
}

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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Glow central */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      {/* Animated juridical background */}
      <AnimatedBackground />

      {/* Copy centrado */}
      <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-14 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Para advogados e consultores de licitações
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
          A IA lê o edital, cruza com o acervo documental do cliente, gera o parecer e
          as peças jurídicas. Você revisa, valida e assina.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="/sign-up"
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 hover:-translate-y-0.5"
          >
            Começar 14 dias grátis →
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
            alt="Dashboard LicitaDesk — Matchmaking diário de licitações"
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
