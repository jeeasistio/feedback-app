"use client"

import { ALLCATEGORY, CategoryAll } from "@/helpers/category"
import { Category } from "@prisma/client"
import useSWR from "swr"

export const useGetCategory = (withAll: boolean = false) => {
    const res = useSWR<(Category | CategoryAll)[]>("/api/category")

    return {
        ...res,
        data:
            withAll && res.data !== undefined
                ? ([ALLCATEGORY] as (Category | CategoryAll)[]).concat(res.data)
                : res.data,
    }
}
