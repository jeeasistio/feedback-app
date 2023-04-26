"use client"

import { GetFeedbacksQueryResult } from "@/helpers/feedback"
import { CategoryName, StatusName } from "@prisma/client"
import useSWR, { SWRResponse } from "swr"

export const useGetFeedbacks = (
    category: CategoryName | "All" = "All",
    status: StatusName | "All" = "All"
) => {
    const res = useSWR(
        [`/api/feedback`, category, status],
        async ([url, category, status]) => {
            const res = await fetch(
                `${url}?category=${category}&status=${status}`
            )
            return await res.json()
        }
    )

    return res as SWRResponse<GetFeedbacksQueryResult, any, any>
}
