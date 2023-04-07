"use client"

import { Tag } from "@/lib/tag"
import { ReactNode, createContext, useState } from "react"

interface TagContext {
    activeTag: Tag
    handleChange: (tag: Tag) => void
}

export const TagContext = createContext<TagContext>({
    activeTag: "All",
    handleChange: () => {},
})

interface Props {
    children: ReactNode
}

export const TagProvider = ({ children }: Props) => {
    const [tag, setActiveTag] = useState("All")
    const handleChange = (tag: Tag) => setActiveTag(tag)

    return (
        <TagContext.Provider value={{ activeTag: tag, handleChange }}>
            {children}
        </TagContext.Provider>
    )
}
