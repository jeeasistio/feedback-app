"use client"

import { Comment } from "./Comment"
import { Typography } from "../Utils/Typography"
import useSWR from "swr"
import { GetCommentsQueryResult } from "@/helpers/comment"
import { useParams } from "next/navigation"

const LoadingFallback = () => {
    return (
        <div className="mt-4 space-y-8">
            {Array(3)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="h-24 w-full rounded bg-gray-100"></div>
                    </div>
                ))}
        </div>
    )
}

export const Comments = () => {
    const params = useParams()
    const { data: comments, isLoading } = useSWR<GetCommentsQueryResult>(
        `/api/comment?feedback_id=${params.feedback_id}`
    )

    return (
        <div className="sm: rounded-xl bg-white px-6 py-4 sm:p-8">
            <Typography variant="h3">
                {comments && comments.length}{" "}
                {comments && comments.length > 1 ? "Comments" : "Comment"}
            </Typography>

            <div className="divide-y-2 divide-gray divide-opacity-10">
                {comments && comments.length === 0 && <div>No Comments</div>}
                {isLoading && <LoadingFallback />}
                {comments?.map((comment, i) => (
                    <div className="py-4" key={i}>
                        <Comment key={comment.id} {...comment} />
                    </div>
                ))}
            </div>
        </div>
    )
}
