import NextAuth, { AuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "../../../../../prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            const appUser = await prisma.appUser.findFirstOrThrow({
                where: { userId: token.sub },
            })
            session.user.id = appUser.id
            session.user.name = appUser.name
            session.user.username = appUser.username
            session.user.image = appUser.image
            return session
        },
    },
    events: {
        async createUser({ user }) {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_LOCAL_URL}/mock_data.json`
            )
            const randomData = (await res.json()) as {
                full_name: string
                username: string
                image: string
            }[]
            const name =
                user.name ??
                randomData[Math.floor(Math.random() * randomData.length) + 1]
                    .full_name
            const username =
                user.email?.split("@")[0] ??
                randomData[Math.floor(Math.random() * randomData.length) + 1]
                    .username
            const image =
                user.image ??
                randomData[Math.floor(Math.random() * randomData.length) + 1]
                    .image

            await prisma.appUser.create({
                data: {
                    userId: user.id,
                    name: name,
                    username: username,
                    image: image,
                },
            })
        },
    },
    session: { strategy: "jwt" },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
