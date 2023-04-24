"use client"

import { Comment } from "./Comment"
import { Typography } from "../Utils/Typography"
import useSWR from "swr"
import { GetCommentsQueryResult } from "@/helpers/comment"
import { useParams } from "next/navigation"

export const Comments = () => {
    const params = useParams()
    const { data: comments, isLoading } = useSWR<GetCommentsQueryResult>(
        `/api/comment?feedback_id=${params.feedback_id}`
    )

    if (isLoading) return <div>Loading...</div>
    if (comments && comments.length === 0) return <div>No Comments</div>
    if (!comments) return <div>Something went wrong</div>

    return (
        <div className="sm: rounded-xl bg-white px-6 py-4 sm:p-8">
            <Typography variant="h3">
                {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
            </Typography>

            <div className="divide-y-2 divide-gray divide-opacity-10">
                {comments.map((comment, i) => (
                    <div className="py-4" key={i}>
                        <Comment key={comment.id} {...comment} />
                    </div>
                ))}
            </div>
        </div>
    )
}
