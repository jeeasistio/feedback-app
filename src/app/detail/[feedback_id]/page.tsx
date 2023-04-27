import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { AddCommentForm } from "@/components/Detail/AddCommentForm"
import { Comments } from "@/components/Detail/Comments"
import { DetailActions } from "@/components/Detail/DetailActions"
import { FeedbackCard } from "@/components/Shared/FeedbackCard"
import { getFeedbacks } from "@/helpers/feedback"
import { Feedback } from "@prisma/client"
import { getServerSession } from "next-auth"

const fetchFeedback = async (feedbackId: Feedback["id"]) => {
    const feedbacks = await getFeedbacks(undefined, undefined, feedbackId)
    return feedbacks[0]
}

interface Props {
    params: {
        feedback_id: string
    }
}

const Detail = async ({ params }: Props) => {
    const feedback = await fetchFeedback(params.feedback_id)
    const session = await getServerSession(authOptions)

    return (
        <main className="container my-8 max-w-screen-lg space-y-6 px-4">
            <div>
                <DetailActions feedbackId={feedback.id} />
            </div>
            <div>
                <FeedbackCard {...feedback} />
            </div>
            <div>
                <Comments />
            </div>
            {session?.user && (
                <div>
                    <AddCommentForm feedbackId={feedback.id} />
                </div>
            )}
        </main>
    )
}

export default Detail
