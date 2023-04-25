import { AppUser, Comment, Feedback, Reply } from "@prisma/client"
import { prisma } from "../../prisma/client"

export interface CommentQueryResult extends Pick<Comment, "id" | "content"> {
    from: Pick<AppUser, "id" | "image" | "name" | "username">
}

export type GetCommentsQueryResult = CommentQueryResult[]

export const getComments = async (
    feedbackId: Feedback["id"]
): Promise<GetCommentsQueryResult> => {
    const comments = await prisma.comment.findMany({
        where: { feedbackId },
        select: {
            id: true,
            content: true,
            From: {
                select: {
                    id: true,
                    image: true,
                    name: true,
                    username: true,
                },
            },
        },
    })
    return comments.map((comment) => ({
        ...comment,
        from: comment.From,
    }))
}

export interface ReplyQueryResult extends Pick<Reply, "id" | "content"> {
    from: Pick<AppUser, "id" | "image" | "name" | "username">
    to: Pick<AppUser, "username">
}

export type GetRepliesQueryResult = ReplyQueryResult[]

export const getReplies = async (
    commentId: Comment["id"]
): Promise<GetRepliesQueryResult> => {
    const replies = await prisma.reply.findMany({
        where: { commentId },
        select: {
            id: true,
            content: true,
            From: {
                select: {
                    id: true,
                    image: true,
                    name: true,
                    username: true,
                },
            },
            To: {
                select: {
                    username: true,
                },
            },
        },
    })
    return replies.map((reply) => ({
        ...reply,
        from: reply.From,
        to: reply.To,
    }))
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
