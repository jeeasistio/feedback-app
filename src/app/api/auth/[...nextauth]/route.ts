import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { prisma } from "../../../../../prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
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
            const randomData = (
                (await res.json()) as {
                    full_name: string
                    username: string
                    image: string
                }[]
            )[Math.floor(Math.random() * 300)]
            const name = randomData.full_name
            const username = randomData.username
            const image = randomData.image
            const appUser = await prisma.appUser.findFirst({
                where: { userId: user.id },
            })
            if (!appUser) {
                await prisma.appUser.create({
                    data: {
                        userId: user.id,
                        name: name,
                        username: username,
                        image: image,
                    },
                })
            }
        },
    },
    session: { strategy: "jwt" },
    secret: process.env.JWT_SECRET,
})

export { handler as GET, handler as POST }
