import { createComment, getComments } from "@/helpers/comment"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    const feedbackId = searchParams.get("feedback_id") as string

    const comments = await getComments(feedbackId)
    return NextResponse.json(comments)
}

export const POST = async (req: Request) => {
    const { content, feedbackId } = await req.json()

    const session = await getServerSession(authOptions)
    const appUserId = session?.user?.id
    if (!appUserId) throw new Error("User not found")

    await createComment({ content, feedbackId, appUserId })
    return NextResponse.json({ message: "Comment added" })
}
