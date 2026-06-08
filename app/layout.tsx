import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider, Show, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LicitaDesk — Da licitação à proposta em 30 segundos",
  description: "Monitore editais, gerencie oportunidades e gere propostas profissionais com IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <Show when="signed-out">
            <div className="fixed top-4 right-4 flex gap-2 z-50">
              <SignInButton mode="modal">
                <button className="text-sm text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition">
                  Entrar
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-sm bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg transition">
                  Criar conta
                </button>
              </SignUpButton>
            </div>
          </Show>
          <Show when="signed-in">
            <div className="fixed top-4 right-4 z-50">
              <UserButton afterSignOutUrl="/" />
            </div>
          </Show>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
