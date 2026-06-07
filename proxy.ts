import { NextRequest, NextResponse } from 'next/server'

const protectedPaths = ['/dashboard', '/editais', '/kanban', '/analise', '/proposta', '/onboarding']

async function handler(req: NextRequest) {
  const hasClerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.startsWith('pk_')

  if (hasClerkKey) {
    const { clerkMiddleware, createRouteMatcher } = await import('@clerk/nextjs/server')
    const isProtected = createRouteMatcher(protectedPaths.map(p => `${p}(.*)`))
    return clerkMiddleware(async (auth, request) => {
      if (isProtected(request)) await auth.protect()
    })(req, NextResponse.next())
  }

  return NextResponse.next()
}

export default handler

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
