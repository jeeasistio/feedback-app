import { AppUser, Category, Feedback, Status, Upvote } from "@prisma/client"
import { prisma } from "../../prisma/client"

export interface FeedbackEditQueryResult
    extends Pick<Feedback, "id" | "title" | "description"> {
    category: Category["name"]
    status: Status["name"]
}

export const getEditFeedback = async (
    feedbackId: Feedback["id"]
): Promise<FeedbackEditQueryResult> => {
    const feedback = await prisma.feedback.findFirstOrThrow({
        where: { id: feedbackId },
        select: {
            id: true,
            title: true,
            description: true,
            Category: {
                select: {
                    name: true,
                },
            },
            Status: {
                select: {
                    name: true,
                },
            },
        },
    })

    return {
        id: feedback.id,
        title: feedback.title,
        description: feedback.description,
        category: feedback.Category.name,
        status: feedback.Status.name,
    }
}

export interface FeedbackQueryResult
    extends Pick<Feedback, "id" | "title" | "description"> {
    category: Category["label"]
    status: Status["label"]
    upvotes: Upvote["appUserId"][]
    upvotesCount: number
    commentsCount: number
}

export type GetFeedbacksQueryResult = FeedbackQueryResult[]

export const getFeedbacks = async (
    categoryId?: Category["id"],
    statusId?: Status["id"],
    feedbackId?: Feedback["id"]
): Promise<GetFeedbacksQueryResult> => {
    const feedbacks = await prisma.feedback.findMany({
        where: { id: feedbackId, categoryId, statusId },
        select: {
            id: true,
            title: true,
            description: true,
            Category: {
                select: {
                    label: true,
                },
            },
            Status: {
                select: {
                    label: true,
                },
            },
            Upvote: {
                select: {
                    appUserId: true,
                },
            },
            _count: {
                select: {
                    Comment: true,
                    Upvote: true,
                },
            },
        },
    })

    return feedbacks.map((feedback) => ({
        id: feedback.id,
        title: feedback.title,
        description: feedback.description,
        category: feedback.Category.label,
        status: feedback.Status.label,
        upvotes: feedback.Upvote.map((upvote) => upvote.appUserId),
        upvotesCount: feedback._count.Upvote,
        commentsCount: feedback._count.Comment,
    }))
}

export const createFeedback = async (feedback: Omit<Feedback, "id">) => {
    const plannedStatus = await prisma.status.findFirstOrThrow({
        where: { name: "PLANNED" },
    })
    await prisma.feedback.create({
        data: { ...feedback, statusId: plannedStatus.id },
    })
}

export const updateFeedback = async (
    feedback: Omit<Feedback, "feedbackFromId">
) => {
    await prisma.feedback.update({
        where: { id: feedback.id },
        data: {
            title: feedback.title,
            description: feedback.description,
            categoryId: feedback.categoryId,
            statusId: feedback.statusId,
        },
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

export const unupvoteFeedback = async (
    feedbackId: Feedback["id"],
    appUserId: AppUser["id"]
) => {
    await prisma.upvote.deleteMany({ where: { feedbackId, appUserId } })
}
