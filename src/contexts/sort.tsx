"use client"

import { ReactNode, createContext, useState } from "react"

export type SortOption = "upvotes" | "comments"
export type OrderOption = "asc" | "desc"

interface SortContext {
    sortBy: SortOption
    orderBy: OrderOption
    handleChange: (sort: keyof typeof sortMapping) => void
    label: keyof typeof sortMapping
}

export const sortMapping = {
    "Most Upvotes": {
        sortBy: "upvotes",
        orderBy: "desc",
    },
    "Least Upvotes": {
        sortBy: "upvotes",
        orderBy: "asc",
    },
    "Most Comments": {
        sortBy: "comments",
        orderBy: "desc",
    },
    "Least Comments": {
        sortBy: "comments",
        orderBy: "asc",
    },
} as const

export const SortContext = createContext<SortContext>({
    sortBy: "upvotes",
    orderBy: "desc",
    label: "Most Upvotes",
    handleChange: () => {},
})

interface Props {
    children: ReactNode
}

export const SortProvider = ({ children }: Props) => {
    const [label, setLabel] = useState(
        "Most Upvotes" as keyof typeof sortMapping
    )
    const [sort, setSort] = useState<{
        sortBy: SortOption
        orderBy: OrderOption
    }>(sortMapping["Most Upvotes"])
    const handleChange = (sort: keyof typeof sortMapping) => {
        setSort(sortMapping[sort])
        setLabel(sort)
    }

    return (
        <SortContext.Provider
            value={{
                sortBy: sort.sortBy,
                orderBy: sort.orderBy,
                handleChange,
                label,
            }}
        >
            {children}
        </SortContext.Provider>
    )
}
