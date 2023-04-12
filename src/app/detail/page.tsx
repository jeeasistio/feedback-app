import { AddCommentForm } from "@/components/Detail/AddCommentForm"
import { Comments } from "@/components/Detail/Comments"
import { DetailActions } from "@/components/Detail/DetailActions"
import { SuggestionCard } from "@/components/Shared/SuggestionCard"

const suggestion = {
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    commentsCount: 2,
    description: "Easier to search for solutions based on a specific stack.",
}

const Detail = async () => {
    return (
        <main className="my-8 space-y-6 px-4">
            <div>
                <DetailActions />
            </div>
            <div>
                <SuggestionCard {...suggestion} />
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
