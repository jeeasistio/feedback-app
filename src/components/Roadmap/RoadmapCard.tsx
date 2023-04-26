import { FeedbackQueryResult } from "@/helpers/feedback"
import { Category } from "../Shared/Category"
import { CommentCount } from "../Shared/CommentCount"
import { UpvoteButton } from "../Shared/UpvoteButton"
import { Typography } from "../Utils/Typography"
import { roadmapMapping } from "./RoadmapList"
import Link from "next/link"

interface Props extends FeedbackQueryResult {}

const bgColor: Record<string, string> = {
    orange: "bg-orange",
    primary: "bg-primary",
    blue: "bg-blue",
}

export const RoadmapCard = ({
    id,
    title,
    description,
    category,
    status,
    upvotes,
    upvotesCount,
    commentsCount,
}: Props) => {
    return (
        <div className="relative grid grid-cols-12 gap-3 overflow-hidden rounded-xl bg-white p-6">
            <div
                className={`${
                    bgColor[roadmapMapping[status].color]
                } absolute top-0 h-2 w-full`}
            />

            <div className="col-span-12 mb-2 flex items-center gap-3">
                <div
                    className={`bg h-2 w-2 rounded-full ${
                        bgColor[roadmapMapping[status].color]
                    }`}
                />
                <Typography color="gray">{status}</Typography>
            </div>

            <div className="col-span-12">
                <Link href={`/detail/${id}`}>
                    <Typography
                        variant="h3"
                        className="mb-2 hover:text-secondary"
                    >
                        {title}
                    </Typography>
                </Link>
                <Typography className="mb-2" color="gray">
                    {description}
                </Typography>
                <Category interactive={false} textColor="secondary">
                    {category}
                </Category>
            </div>
            <div className="col-span-3">
                <UpvoteButton
                    feedbackId={id}
                    upvotes={upvotes}
                    count={upvotesCount}
                    orientation="horizontal"
                />
            </div>
            <div className="col-span-9 flex items-center justify-end gap-2">
                <CommentCount count={commentsCount} />
            </div>
        </div>
    )
}
