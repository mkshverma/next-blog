import { NextResponse } from "next/server"
import JWT from "./lib/jwt";

export default function middleware(req){
  let auth = req.cookies.get('jwt');
  if(!req.nextUrl.pathname.startsWith('/auth') && !auth){
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }
  
  let payload = JWT.verify(auth);
  if(!payload){
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }
  const response = NextResponse.next();
  return response;
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }