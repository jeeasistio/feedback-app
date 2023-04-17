import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "../../../../../prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // }),
    ],
    callbacks: {
        async session({ session, user }) {
            const appUser = await prisma.appUser.findFirstOrThrow({
                where: { userId: user.id },
            })
            session.user.id = appUser.id
            session.user.name = appUser.name
            session.user.username = appUser.username
            return session
        },
    },
    events: {
        async createUser({ user }) {
            const appUser = await prisma.appUser.findFirst({
                where: { userId: user.id },
            })
            if (!user.email || !user.name)
                throw new Error("Missing email or name")
            if (!appUser) {
                await prisma.appUser.create({
                    data: {
                        userId: user.id,
                        name: user.name,
                        username: user.email,
                        image: user.image,
                    },
                })
            }
        },
    },
})

export { handler as GET, handler as POST }
