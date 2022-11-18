import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request) {
  const hostname = request.headers.get('host')

  if (hostname === 'www.joobslot.com') {
    const url = request.nextUrl.clone()
    url.pathname = '/joobslot/7lJg2VkDEQ'
    return NextResponse.redirect(url)
  }

  if (request.nextUrl.pathname === '/about-me') {
    const url = request.nextUrl.clone()
    url.pathname = '/about'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}
