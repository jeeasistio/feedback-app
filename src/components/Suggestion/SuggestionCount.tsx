"use client"

import Image from "next/image"
import { Typography } from "../Utils/Typography"
import { useGetFeedbacks } from "@/hooks/useGetFeedbacks"
import { useCategory } from "@/hooks/useCategory"
import { useSort } from "@/hooks/useSort"

export const SuggestionCount = () => {
    const { activeCat } = useCategory()
    const { sortBy, orderBy } = useSort()
    const { data: feedbacks } = useGetFeedbacks({
        category: activeCat.name,
        status: "SUGGESTION",
        sortBy,
        orderBy,
    })

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
