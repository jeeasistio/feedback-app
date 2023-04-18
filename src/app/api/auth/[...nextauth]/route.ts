import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { prisma } from "../../../../../prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    return await NextAuth(req, res, {
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
            async session({ session, user }) {
                // const appUser = await prisma.appUser.findFirstOrThrow({
                //     where: { userId: user.id },
                // })
                // session.user.id = appUser.id
                // session.user.name = appUser.name
                // session.user.username = appUser.username
                return session
            },
        },
        events: {
            async createUser({ user }) {
                const name = req.body.name
                const username = req.body.username
                const image = ""
                const appUser = await prisma.appUser.findFirst({
                    where: { userId: user.id },
                })
                if (!user.email || !user.name)
                    throw new Error("Missing email or name")
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
}

export { handler as GET, handler as POST }
