import { Comment } from "@prisma/client"
import { CommentContent } from "./CommentContent"
import useSWR from "swr"
import { GetRepliesQueryResult } from "@/helpers/comment"

interface Props {
    commentId: Comment["id"]
}

export const Replies = ({ commentId }: Props) => {
    const { data: replies, isLoading } = useSWR<GetRepliesQueryResult>(
        `/api/reply?comment_id=${commentId}`
    )

    if (isLoading) return <div>Loading...</div>
    if (replies && replies.length === 0) return <div>No Replies</div>
    if (!replies) return <div>Something went wrong</div>

    return (
        <div className="space-y-6">
            {replies.map((reply, i) => (
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
