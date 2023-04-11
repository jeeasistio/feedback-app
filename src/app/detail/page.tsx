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
        <main className="space-y-6">
            <div>
                <DetailActions />
            </div>
            <div className="px-4">
                <SuggestionCard {...suggestion} />
            </div>
            <div className="px-4">
                <Comments />
            </div>
            <div>Add Comment Form</div>
        </main>
    )
}

export default Detail
