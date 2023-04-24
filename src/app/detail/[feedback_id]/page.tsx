import { AddCommentForm } from "@/components/Detail/AddCommentForm"
import { Comments } from "@/components/Detail/Comments"
import { DetailActions } from "@/components/Detail/DetailActions"
import { FeedbackCard } from "@/components/Shared/FeedbackCard"
import { getComments } from "@/helpers/comment"
import { getFeedbacks } from "@/helpers/feedback"
import { Feedback } from "@prisma/client"

const fetchFeedback = async (feedbackId: Feedback["id"]) => {
    const feedbacks = await getFeedbacks(undefined, undefined, feedbackId)
    return feedbacks[0]
}

const fetchComments = async (feedbackId: Feedback["id"]) => {
    const comments = await getComments(feedbackId)
    return comments
}

interface Props {
    params: {
        feedback_id: string
    }
}

const Detail = async ({ params }: Props) => {
    const feedback = await fetchFeedback(params.feedback_id)
    const comments = await fetchComments(params.feedback_id)

    return (
        <main className="container my-8 max-w-screen-lg space-y-6 px-4">
            <div>
                <DetailActions />
            </div>
            <div>
                <FeedbackCard {...feedback} />
            </div>
            <div>
                <Comments />
            </div>
            <div>
                <AddCommentForm feedbackId={feedback.id} />
            </div>
        </main>
    )
}

export default Detail
