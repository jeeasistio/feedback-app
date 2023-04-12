"use client"

import { UpvoteButton } from "./UpvoteButton"
import { Typography } from "../Utils/Typography"
import { Category } from "./Category"
import { CATEGORYMAPPING } from "@/lib/category"
import { CommentCount } from "./CommentCount"

interface Props {
    title: string
    description: string
    category: string
    upvotes: number
    commentsCount: number
}

export const SuggestionCard = ({
    title,
    description,
    category,
    commentsCount,
    upvotes,
}: Props) => {
    return (
        <div className="grid grid-cols-12 gap-3 rounded-xl bg-white p-6 sm:p-8">
            <div className="col-span-12 sm:col-span-10 sm:max-lg:ml-4">
                <Typography variant="h3" className="mb-2">
                    {title}
                </Typography>
                <Typography className="mb-2 sm:mb-4" color="gray">
                    {description}
                </Typography>
                <Category interactive={false} textColor="secondary">
                    {CATEGORYMAPPING[category].title}
                </Category>
            </div>
            <div className="col-span-3 sm:order-first sm:col-span-1">
                <UpvoteButton
                    active={true}
                    count={upvotes}
                    onClick={() => {}}
                />
            </div>
            <div className="col-span-9 flex items-center justify-end gap-2 sm:col-span-1">
                <CommentCount count={commentsCount} />
            </div>
        </div>
    )
}
