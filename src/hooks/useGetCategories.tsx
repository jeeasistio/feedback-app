"use client"

import { ALLCATEGORY, CategoryAll } from "@/helpers/category"
import { Category } from "@prisma/client"
import { useEffect, useState } from "react"

export const useGetCategory = (withAll: boolean = false) => {
    const [allCategories, setAllCategories] = useState<
        (Category | CategoryAll)[]
    >([])

    useEffect(() => {
        const getCategories = async () => {
            const res = await fetch("/api/category")
            const data = await res.json()
            setAllCategories(withAll ? [ALLCATEGORY].concat(data) : data)
        }
        getCategories()
    }, [withAll])

    return { allCategories }
}
