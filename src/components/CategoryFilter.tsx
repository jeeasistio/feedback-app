import { useCategory } from "@/hooks/useCategory"
import { Category } from "./Utils/Category"

interface Props {
    categories: string[]
}

export const CategoryFilter = ({ categories }: Props) => {
    const { category: activeTag, handleChange } = useCategory()

    return (
        <div className="rounded-lg bg-white p-4 sm:h-full">
            <div className="flex flex-wrap items-start gap-4">
                {categories.map((cat) => (
                    <Category
                        key={cat}
                        textColor="secondary"
                        onClick={() => handleChange(cat)}
                        active={activeTag === cat}
                    >
                        {cat}
                    </Category>
                ))}
            </div>
        </div>
    )
}
