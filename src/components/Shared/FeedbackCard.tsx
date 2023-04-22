"use client"

import { UpvoteButton } from "./UpvoteButton"
import { Typography } from "../Utils/Typography"
import { Category } from "./Category"
import { CommentCount } from "./CommentCount"
import { FeedbackQueryResult } from "@/helpers/feedback"
import { useSession } from "next-auth/react"

interface Props extends FeedbackQueryResult {}

export const FeedbackCard = ({
    title,
    description,
    category,
    upvotes,
    upvotesCount,
    commentsCount,
}: Props) => {
    const session = useSession()
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
                    {category}
                </Category>
            </div>
            <div className="col-span-3 sm:order-first sm:col-span-1">
                <UpvoteButton
                    feedbackId="123"
                    active={
                        upvotes.findIndex(
                            (upvote) => upvote === session.data?.user.id
                        ) > -1
                    }
                    count={upvotesCount}
                />
            </div>
            <div className="col-span-9 flex items-center justify-end gap-2 sm:col-span-1">
                <CommentCount count={commentsCount} />
            </div>
        </div>
    )
}
