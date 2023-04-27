import { NextResponse } from "next/server"
import { prisma } from "../../../../prisma/client"
import {
    createFeedback,
    getFeedbacks,
    updateFeedback,
} from "@/helpers/feedback"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { CategoryName, StatusName } from "@prisma/client"
import { checkIfAuthenticated } from "@/helpers/checkIfAuthenticated"

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get("category") as CategoryName | "All"
    const foundCategory =
        category !== "All"
            ? await prisma.category.findFirstOrThrow({
                  where: { name: category },
                  select: { id: true },
              })
            : undefined
    const status = searchParams.get("status") as StatusName | "All"
    const foundStatus =
        status !== "All"
            ? await prisma.status.findFirstOrThrow({
                  where: { name: status },
                  select: { id: true },
              })
            : undefined
    const feedbacks = await getFeedbacks(foundCategory?.id, foundStatus?.id)
    return NextResponse.json(feedbacks)
}

export const POST = async (req: Request) => {
    const { title, description, category } = await req.json()
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId) throw new Error("User not found")
    const foundCategory = await prisma.category.findFirstOrThrow({
        where: { name: category },
        select: { id: true },
    })
    const foundStatus = await prisma.status.findFirstOrThrow({
        where: { name: "PLANNED" },
        select: { id: true },
    })

    if (!title && !description) throw new Error("Missing title or description")
    await createFeedback({
        title,
        description,
        categoryId: foundCategory.id,
        feedbackFromId: userId,
        statusId: foundStatus.id,
    })
    return NextResponse.json({ message: "Thanks for your feedback" })
}

export const PUT = async (req: Request) => {
    checkIfAuthenticated()
    const { id, title, description, category, status } = await req.json()

    const foundCategory = await prisma.category.findFirstOrThrow({
        where: { name: category },
        select: { id: true },
    })
    const foundStatus = await prisma.status.findFirstOrThrow({
        where: { name: status },
        select: { id: true },
    })

    await updateFeedback({
        id,
        title,
        description,
        categoryId: foundCategory.id,
        statusId: foundStatus.id,
    })

    return NextResponse.json({ message: "Feedback updated" })
}

export const DELETE = async (req: Request) => {
    checkIfAuthenticated()
    const { searchParams } = new URL(req.url)
    const feedbackId = searchParams.get("feedback_id") as string
    await prisma.feedback.delete({ where: { id: feedbackId } })
    return NextResponse.json({ message: "Feedback deleted" })
}
