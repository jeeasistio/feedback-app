"use client"

import { FeedbackCard } from "../Shared/FeedbackCard"
import { useCategory } from "@/hooks/useCategory"
import { useGetFeedbacks } from "@/hooks/useGetFeedbacks"
import { NoFeedback } from "../Shared/NoFeedback"

const LoadingFallback = () => {
    return (
        <div className="space-y-6">
            {Array(5)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="h-32 w-full rounded bg-gray-100"></div>
                    </div>
                ))}
        </div>
    )
}

const SuggestionList = () => {
    const { activeCat } = useCategory()
    const { data: feedbacks, isLoading } = useGetFeedbacks(activeCat.name)

    console.log(isLoading)

    if (isLoading) return <LoadingFallback />
    if (feedbacks && feedbacks.length === 0) return <NoFeedback />
    if (!feedbacks) return <div>Something went wrong</div>

    return (
        <div className="space-y-6">
            {feedbacks.map((suggestion) => (
                <div key={suggestion.id}>
                    <FeedbackCard {...suggestion} />
                </div>
            ))}
        </div>
    )
}

export default SuggestionList
