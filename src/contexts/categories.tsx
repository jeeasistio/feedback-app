"use client"

import { ReactNode, createContext, useState } from "react"

interface CategoryContext {
    category: string
    handleChange: (cat: string) => void
}

export const CategoryContext = createContext<CategoryContext>({
    category: "All",
    handleChange: () => {},
})

interface Props {
    children: ReactNode
}

export const CategoryProvider = ({ children }: Props) => {
    const [category, setActiveCat] = useState("All")
    const handleChange = (cat: string) => setActiveCat(cat)

    return (
        <CategoryContext.Provider value={{ category, handleChange }}>
            {children}
        </CategoryContext.Provider>
    )
}
