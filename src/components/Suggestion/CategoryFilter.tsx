"use client"

import { useCategory } from "@/hooks/useCategory"
import { Category } from "../Shared/Category"
import { useGetCategory } from "@/hooks/useGetCategories"

const LoadingFallback = () => {
    return (
        <div className="flex flex-wrap gap-4">
            {Array(6)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="h-6 w-20 rounded bg-gray-100"></div>
                    </div>
                ))}
        </div>
    )
}

export const CategoryFilter = () => {
    const { data: allCategories, isLoading } = useGetCategory(true)
    const { activeCat, handleChange } = useCategory()

    return (
        <div className="rounded-xl bg-white p-4 sm:max-lg:h-full">
            <div className="flex flex-wrap items-start gap-4">
                {isLoading && <LoadingFallback />}
                {allCategories?.map((cat) => (
                    <Category
                        key={cat.id}
                        textColor="secondary"
                        onClick={() => handleChange(cat)}
                        active={activeCat.id === cat.id}
                    >
                        {cat.label}
                    </Category>
                ))}
            </div>
        </div>
    )
}
