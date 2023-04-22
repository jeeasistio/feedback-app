import { useCategory } from "@/hooks/useCategory"
import { Category } from "../Shared/Category"
import { useGetCategory } from "@/hooks/useGetCategories"

export const CategoryFilter = () => {
    const { allCategories } = useGetCategory(true)
    const { activeCat, handleChange } = useCategory()

    return (
        <div className="rounded-xl bg-white p-4 sm:max-lg:h-full">
            <div className="flex flex-wrap items-start gap-4">
                {allCategories.map((cat) => (
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
