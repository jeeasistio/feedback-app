"use client"

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react"

export interface AuthContextProps {
    children: React.ReactNode
}

export default function AuthProvider({ children }: AuthContextProps) {
    return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}
