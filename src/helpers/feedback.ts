import { AppUser, Category, Feedback, Upvote } from "@prisma/client"
import { prisma } from "../../prisma/client"

export const getFeedbacks = async (category: Category) => {
    const feedbacks = await prisma.feedback.findMany({
        where: { categoryId: category.id },
        select: {
            Category: true,
            Status: true,
            id: true,
            title: true,
            description: true,
        },
    })
    return feedbacks
}

export const getUpvoteCount = async (feedbackId: Feedback["id"]) => {
    const upvoteCount = await prisma.upvote.count({
        where: { feedbackId },
    })
    return upvoteCount
}

export const getCommentCount = async (feedbackId: Feedback["id"]) => {
    const commentCount = await prisma.comment.count({
        where: { feedbackId },
    })
    return commentCount
}

export const createFeedback = async (feedback: Omit<Feedback, "id">) => {
    const plannedStatus = await prisma.status.findFirstOrThrow({
        where: { name: "PLANNED" },
    })
    await prisma.feedback.create({
        data: { ...feedback, statusId: plannedStatus.id },
    })
}

export const updateFeedback = async (feedback: Feedback) => {
    await prisma.feedback.update({
        where: { id: feedback.id },
        data: feedback,
    })
}

export const deleteFeedback = async (feedbackId: Feedback["id"]) => {
    await prisma.feedback.delete({ where: { id: feedbackId } })
}

export const upvoteFeedback = async (
    feedbackId: Feedback["id"],
    appUserId: AppUser["id"]
) => {
    await prisma.upvote.create({
        data: { feedbackId, appUserId },
    })
}

export const unupvoteFeedback = async (upvoteId: Upvote["id"]) => {
    await prisma.upvote.delete({ where: { id: upvoteId } })
}
