import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";


export async function decodeUserToken(): Promise<string | null> {
    const cookie = await cookies();
    
    // In production (HTTPS), NextAuth uses __Secure- prefix
    const nextAuthToken = cookie.get('__Secure-next-auth.session-token')?.value || 
                         cookie.get('next-auth.session-token')?.value;

    if (!nextAuthToken) return null;

    const jwtRes = await decode({ secret: process.env.NEXTAUTH_SECRET!, token: nextAuthToken })
    
    if(jwtRes){
        return jwtRes.routeToken as string
    }
    else{
        return null
    }
}