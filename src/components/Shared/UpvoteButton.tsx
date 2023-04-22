import Image from "next/image"
import { Typography } from "../Utils/Typography"
import { Feedback } from "@prisma/client"

interface Props {
    feedbackId: Feedback["id"]
    count: number
    active: boolean
    orientation?: "horizontal" | "vertical"
}

export const UpvoteButton = ({
    feedbackId,
    count,
    active,
    orientation = "vertical",
}: Props) => {
    return (
        <button
            onClick={() => {}}
            className={`flex w-max min-w-[40px] cursor-pointer flex-row items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100 ${
                orientation === "horizontal"
                    ? "flex-row"
                    : "flex-row sm:flex-col sm:py-2"
            }
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
                    src="/shared/icon-arrow-up-secondary.svg"
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
