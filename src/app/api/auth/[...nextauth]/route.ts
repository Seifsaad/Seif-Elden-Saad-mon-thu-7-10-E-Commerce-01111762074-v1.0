import { nextAuthConfig } from "_/next-auth/nextAuth.config";
import NextAuth from "next-auth/next"

const routeHandler = NextAuth(nextAuthConfig)

export { routeHandler as GET, routeHandler as POST }