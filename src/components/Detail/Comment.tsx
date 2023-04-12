import { CommentContent } from "./CommentContent"

interface Props {
    content: string
    user: {
        image: string
        name: string
        username: string
    }
    replies?: {
        content: string
        replyingTo: string
        user: {
            image: string
            name: string
            username: string
        }
    }[]
}

export const Comment = ({ user, content, replies }: Props) => {
    return (
        <div>
            <div className="mb-4">
                <CommentContent user={user} content={content} />
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-1 mx-auto h-3/5 w-[1px] bg-gray opacity-10" />
                <div className="col-span-11">
                    {replies?.map((reply, i) => (
                        <div className="mb-6" key={i}>
                            <CommentContent
                                {...reply}
                                replyingTo={reply.replyingTo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
