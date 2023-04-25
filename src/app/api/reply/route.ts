import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { createReply, getReplies } from "@/helpers/comment"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url)
    const commentId = searchParams.get("comment_id") as string

    const comments = await getReplies(commentId)
    return NextResponse.json(comments)
}

export const POST = async (req: Request) => {
    const { content, commentId, replyToId } = await req.json()

    const session = await getServerSession(authOptions)
    const appUserId = session?.user?.id
    if (!appUserId) throw new Error("User not found")

    await createReply({
        content,
        commentId,
        replyFromId: appUserId,
        replyToId,
    })
    return NextResponse.json({ message: "Reply added" })
}
