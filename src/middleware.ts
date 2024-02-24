import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: { nextUrl: any; url: string | URL | undefined }) {
    const url = request.nextUrl

    if (url.pathname === '/') {
        return NextResponse.redirect(new URL('/home', request.url))
    }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }