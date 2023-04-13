import { AddCommentForm } from "@/components/Detail/AddCommentForm"
import { Comments } from "@/components/Detail/Comments"
import { DetailActions } from "@/components/Detail/DetailActions"
import { FeedbackCard } from "@/components/Shared/FeedbackCard"

const feedback = {
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    commentsCount: 2,
    description: "Easier to search for solutions based on a specific stack.",
}

const Detail = async () => {
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
                <AddCommentForm />
            </div>
        </main>
    )
}

export default Detail
