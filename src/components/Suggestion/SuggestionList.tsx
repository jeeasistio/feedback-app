import { FeedbackCard } from "../Shared/FeedbackCard"
import { useCategory } from "@/hooks/useCategory"
import { useGetFeedbacks } from "@/hooks/useGetFeedbacks"
import { NoFeedback } from "../Shared/NoFeedback"

const SuggestionList = () => {
    const { activeCat } = useCategory()
    const { data: feedbacks, isLoading } = useGetFeedbacks(
        activeCat.name,
        "PLANNED"
    )

    if (isLoading) return <p>Loading...</p>
    if (feedbacks && feedbacks.length === 0) return <NoFeedback />

    return (
        <div className="space-y-6">
            {feedbacks?.map((suggestion) => (
                <div key={suggestion.id}>
                    <FeedbackCard {...suggestion} />
                </div>
            ))}
        </div>
    )
}

export default SuggestionList
