import Image from "next/image"
import { UpvoteButton } from "./UpvoteButton"
import { Typography } from "./Utils/Typography"
import { Category } from "./Utils/Category"
import { CATEGORYMAPPING } from "@/lib/category"

interface Props {
    title: string
    description: string
    category: string
    upvotes: number
    numComments: number
}

export const SuggestionCard = ({
    title,
    description,
    category,
    numComments,
    upvotes,
}: Props) => {
    return (
        <div className="grid grid-cols-12 gap-3 rounded-xl bg-white p-8">
            <div className="col-span-12 sm:col-span-10 sm:ml-8">
                <Typography variant="h3">{title}</Typography>
                <Typography className="mb-1 sm:mb-4">{description}</Typography>
                <Category interactive={false} textColor="secondary">
                    {CATEGORYMAPPING[category].title}
                </Category>
            </div>
            <div className="col-span-1 sm:order-first">
                <UpvoteButton
                    active={true}
                    count={upvotes}
                    onClick={() => {}}
                />
            </div>
            <div className="col-span-9 flex items-center justify-end gap-2 sm:col-span-1">
                <Image
                    src="/shared/icon-comments.svg"
                    alt="comments-icon"
                    width={18}
                    height={16}
                />
                <Typography className="font-bold">{numComments}</Typography>
            </div>
        </div>
    )
}
