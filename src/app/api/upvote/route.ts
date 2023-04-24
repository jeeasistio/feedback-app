import { unupvoteFeedback, upvoteFeedback } from "@/helpers/feedback"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    const session = await getServerSession(authOptions)

    const { feedbackId, unupvote } = await req.json()
    const userId = session?.user.id

    if (!userId) throw new Error("User not found")
    if (unupvote) {
        await unupvoteFeedback(feedbackId, userId)
        return NextResponse.json({ message: "Feedback unupvoted" })
    }

    await upvoteFeedback(feedbackId, userId)
    return NextResponse.json({ message: "Feedback upvoted" })
}
