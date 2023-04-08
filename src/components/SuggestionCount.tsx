import Image from "next/image"
import { Typography } from "./Utils/Typography"

export const SuggestionCount = () => {
    const count = 5

    return (
        <div className="hidden items-center gap-4 sm:flex">
            <Image
                src="/suggestions/icon-suggestions.svg"
                alt="bulb-icon"
                width={23}
                height={24}
            />
            <Typography variant="h3" color="white">
                {count} Suggestions
            </Typography>
        </div>
    )
}
