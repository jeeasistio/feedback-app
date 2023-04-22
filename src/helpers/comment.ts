import { Comment, Feedback, Reply } from "@prisma/client"
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

export const getReplies = async (commentId: Comment["id"]) => {
    const replies = await prisma.reply.findMany({
        where: { commentId },
    })
    return replies
}

export const createComment = async (comment: Omit<Comment, "id">) => {
    const newComment = await prisma.comment.create({
        data: comment,
    })
    return newComment
}

export const createReply = async (reply: Omit<Reply, "id">) => {
    const newReply = await prisma.reply.create({
        data: reply,
    })
    return newReply
}
