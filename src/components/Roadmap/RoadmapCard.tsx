"use client"

import { Category } from "../Shared/Category"
import { CommentCount } from "../Shared/CommentCount"
import { UpvoteButton } from "../Shared/UpvoteButton"
import { Typography } from "../Utils/Typography"
import { roadmapMapping } from "./RoadmapList"

interface Props {
    type: keyof typeof roadmapMapping
    title: string
    description: string
    category: string
    upvotes: number
    commentsCount: number
}

const bgColor: Record<string, string> = {
    orange: "bg-orange",
    primary: "bg-primary",
    blue: "bg-blue",
}

export const RoadmapCard = ({
    category,
    commentsCount,
    description,
    title,
    type,
    upvotes,
}: Props) => {
    return (
        <div className="relative grid grid-cols-12 gap-3 overflow-hidden rounded-xl bg-white p-6">
            <div
                className={`${
                    bgColor[roadmapMapping[type].color]
                } absolute top-0 h-2 w-full`}
            />

            <div className="col-span-12 mb-2 flex items-center gap-3">
                <div
                    className={`bg h-2 w-2 rounded-full ${
                        bgColor[roadmapMapping[type].color]
                    }`}
                />
                <Typography color="gray">
                    {roadmapMapping[type].title}
                </Typography>
            </div>

            <div className="col-span-12">
                <Typography variant="h3" className="mb-2">
                    {title}
                </Typography>
                <Typography className="mb-2" color="gray">
                    {description}
                </Typography>
                <Category interactive={false} textColor="secondary">
                    {/* {CATEGORYMAPPING[category].title} */}
                </Category>
            </div>
            <div className="col-span-3">
                {/* <UpvoteButton
                    active={true}
                    count={upvotes}
                    orientation="horizontal"
                /> */}
            </div>
            <div className="col-span-9 flex items-center justify-end gap-2">
                <CommentCount count={commentsCount} />
            </div>
        </div>
    )
}
