import { CustomCheckbox } from "./Utils/CustomCheckbox"

interface Props {
    categories: string[]
}

export const CategoryFilter = ({ categories }: Props) => {
    return (
        <div className="flex flex-wrap items-center gap-2 rounded-lg bg-white p-4">
            {categories.map((category) => (
                <CustomCheckbox key={category} textColor="secondary">
                    {category}
                </CustomCheckbox>
            ))}
        </div>
    )
}
