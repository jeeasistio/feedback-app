"use client"

import Image from "next/image"
import { Typography } from "../Utils/Typography"
import { useGetFeedbacks } from "@/hooks/useGetFeedbacks"
import { useCategory } from "@/hooks/useCategory"

export const SuggestionCount = () => {
    const { activeCat } = useCategory()
    const { data: feedbacks } = useGetFeedbacks(activeCat.name)

    return (
        <div className="hidden items-center gap-4 sm:flex">
            <Image
                src="/suggestions/icon-suggestions.svg"
                alt="bulb-icon"
                width={23}
                height={24}
            />
            <Typography variant="h3" color="white">
                {feedbacks ? feedbacks.length : 0} Suggestions
            </Typography>
        </div>
    )
}
