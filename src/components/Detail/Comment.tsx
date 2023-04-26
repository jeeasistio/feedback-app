import { CommentQueryResult } from "@/helpers/comment"
import { CommentContent } from "./CommentContent"
import { Replies } from "./Replies"

interface Props extends CommentQueryResult {}

export const Comment = (props: Props) => {
    return (
        <div>
            <div className="mb-8">
                <CommentContent commentId={props.id} {...props} />
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-1 mx-auto h-3/5 w-[1px] bg-gray opacity-10" />
                <div className="col-span-11">
                    <Replies commentId={props.id} />
                </div>
            </div>
        </div>
    )
}
