import { AddCommentForm } from "@/components/AddCommentForm"
import { Comments } from "@/components/Comments"
import { DetailActions } from "@/components/DetailActions"
import { SuggestionCard } from "@/components/SuggestionCard"

const suggestion = {
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    numComments: 2,
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
