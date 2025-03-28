import { getSessionCookie } from "better-auth/cookies";
import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];
const authRoutes = ["/login", "/signup"];

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(pathName);
  const isAuthRoute = authRoutes.includes(pathName);
  const isMainPage = pathName === "/";

  const sessionCookie = getSessionCookie(request);

  // Handle unauthenticated users
  if (!sessionCookie) {
    if (isProtectedRoute || isMainPage) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Handle authenticated users
  if (sessionCookie && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
