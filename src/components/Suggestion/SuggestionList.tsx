"use client"

import { FeedbackCard } from "../Shared/FeedbackCard"
import { useCategory } from "@/hooks/useCategory"
import { useGetFeedbacks } from "@/hooks/useGetFeedbacks"
import Image from "next/image"
import { Typography } from "../Utils/Typography"
import { AddFeedbackButton } from "../Shared/AddFeedbackButton"

const NoDataFallback = () => {
    return (
        <div className="flex min-h-[460px] flex-col items-center justify-center gap-2 rounded-xl bg-white p-8 text-center sm:min-h-[600px]">
            <div className="relative h-[108px] w-[102px] sm:h-[137px] sm:w-[130px]">
                <Image
                    src="/suggestions/illustration-empty.svg"
                    alt="illustration"
                    fill
                    sizes="(min-width: 768px) 130px, 102px"
                />
            </div>
            <Typography variant="h3">There is no feedback yet</Typography>
            <Typography className="mb-4 max-w-[410px]" color="gray">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
            </Typography>
            <AddFeedbackButton />
        </div>
    )
}

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

    if (isLoading) return <LoadingFallback />
    if (feedbacks && feedbacks.length === 0) return <NoDataFallback />
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
