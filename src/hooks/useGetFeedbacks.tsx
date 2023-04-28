"use client"

import { GetFeedbacksQueryResult } from "@/helpers/feedback"
import { CategoryName, StatusName } from "@prisma/client"
import useSWR, { SWRResponse } from "swr"

export const useGetFeedbacks = ({
    category = "All",
    status = "All",
    sortBy,
    orderBy,
}: {
    category?: CategoryName | "All"
    status?: StatusName | "All"
    sortBy?: "upvotes" | "comments"
    orderBy?: "asc" | "desc"
}) => {
    const res = useSWR(
        [`/api/feedback`, category, status, sortBy, orderBy],
        async ([url, category, status, sortBy, orderBy]) => {
            const res = await fetch(
                `${url}?category=${category}&status=${status}&sortBy=${sortBy}&orderBy=${orderBy}`
            )
            return await res.json()
        }
    )

    return res as SWRResponse<GetFeedbacksQueryResult, any, any>
}
