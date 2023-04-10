import Image from "next/image"
import { Typography } from "./Utils/Typography"

interface Props {
    count: number
    active: boolean
    onClick: () => void
}

export const UpvoteButton = ({ count, active, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`flex w-max cursor-pointer flex-row items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-200 sm:flex-col sm:py-2 
            ${active ? "bg-secondary" : "bg-white-100"}`}
        >
            {active ? (
                <Image
                    src="/shared/icon-arrow-up-white.svg"
                    alt="arrow-up-icon"
                    width={10}
                    height={6}
                />
            ) : (
                <Image
                    src="/shared/icon-arrow-up-tertiary.svg"
                    alt="arrow-up-icon"
                    width={10}
                    height={6}
                />
            )}
            <Typography variant="body3" color={active ? "white" : "indigo"}>
                {count}
            </Typography>
        </button>
    )
}
