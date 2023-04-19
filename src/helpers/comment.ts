import { Feedback } from "@prisma/client"
import { prisma } from "../../prisma/client"

export const getComments = async (feedbackId: Feedback["id"]) => {
    const comments = await prisma.comment.findMany({
        where: { feedbackId },
        select: {
            id: true,
            content: true,
            Replies: {
                select: {
                    id: true,
                },
            },
            From: {
                select: {
                    image: true,
                    name: true,
                    username: true,
                },
            },
        },
    })
    return comments
}
