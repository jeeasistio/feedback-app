import { ALLCATEGORY, CategoryAll } from "@/helpers/category"
import { Category } from "@prisma/client"
import { ReactNode, createContext, useState } from "react"

interface CategoryContext {
    activeCat: Category | CategoryAll
    handleChange: (cat: Category | CategoryAll) => void
}

export const CategoryContext = createContext<CategoryContext>({
    activeCat: ALLCATEGORY,
    handleChange: () => {},
})

interface Props {
    children: ReactNode
}

export const CategoryProvider = ({ children }: Props) => {
    const [activeCat, setActiveCat] = useState<Category | CategoryAll>(
        ALLCATEGORY
    )
    const handleChange = (cat: Category | CategoryAll) => {
        setActiveCat(cat)
    }

    return (
        <CategoryContext.Provider value={{ activeCat, handleChange }}>
            {children}
        </CategoryContext.Provider>
    )
}
