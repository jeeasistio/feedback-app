import { UpvoteButton } from "./UpvoteButton"
import { Typography } from "../Utils/Typography"
import { Category } from "./Category"
import { CommentCount } from "./CommentCount"
import { FeedbackQueryResult } from "@/helpers/feedback"
import Link from "next/link"

interface Props extends FeedbackQueryResult {}

export const FeedbackCard = ({
    id,
    title,
    description,
    category,
    upvotes,
    upvotesCount,
    commentsCount,
}: Props) => {
    return (
        <div className="grid grid-cols-12 gap-3 rounded-xl bg-white p-6 sm:p-8">
            <div className="col-span-12 sm:col-span-10 sm:max-lg:ml-4">
                <Link href={`/detail/${id}`}>
                    <Typography
                        variant="h3"
                        className="mb-2 hover:text-secondary"
                    >
                        {title}
                    </Typography>
                </Link>
                <Typography className="mb-2 sm:mb-4" color="gray">
                    {description}
                </Typography>
                <Category interactive={false} textColor="secondary">
                    {category}
                </Category>
            </div>
            <div className="col-span-3 sm:order-first sm:col-span-1">
                <UpvoteButton
                    feedbackId={id}
                    upvotes={upvotes}
                    count={upvotesCount}
                />
            </div>
            <div className="col-span-9 flex items-center justify-end gap-2 sm:col-span-1">
                <CommentCount count={commentsCount} />
            </div>
        </div>
    )
}
