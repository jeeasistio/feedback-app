import { useTag } from "@/hooks/useTag"
import { CustomCheckbox } from "./Utils/CustomCheckbox"

interface Props {
    tags: string[]
}

export const TagFilter = ({ tags }: Props) => {
    const { activeTag, handleChange } = useTag()

    return (
        <div className="rounded-lg bg-white p-4 sm:h-full">
            <div className="flex flex-wrap items-start gap-4">
                {tags.map((tag) => (
                    <CustomCheckbox
                        key={tag}
                        textColor="secondary"
                        onClick={() => handleChange(tag)}
                        active={activeTag === tag}
                    >
                        {tag}
                    </CustomCheckbox>
                ))}
            </div>
        </div>
    )
}
