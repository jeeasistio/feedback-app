"use client"

import { Comment } from "@prisma/client"
import { CommentContent } from "./CommentContent"
import useSWR from "swr"
import { GetRepliesQueryResult } from "@/helpers/comment"

const LoadingFallback = () => {
    return (
        <div className="mt-4 space-y-8">
            {Array(3)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="h-24 w-full rounded bg-gray-100" />
                    </div>
                ))}
        </div>
    )
}

interface Props {
    commentId: Comment["id"]
}

export const Replies = ({ commentId }: Props) => {
    const { data: replies, isLoading } = useSWR<GetRepliesQueryResult>(
        `/api/reply?comment_id=${commentId}`
    )

    return (
        <div className="space-y-8">
            {isLoading && <LoadingFallback />}
            {replies && replies.length === 0 && <div>No Replies</div>}
            {replies?.map((reply, i) => (
                <div key={i}>
                    <CommentContent
                        {...reply}
                        commentId={commentId}
                        replyingTo={reply.to.username}
                    />
                </div>
            ))}
        </div>
    )
}
