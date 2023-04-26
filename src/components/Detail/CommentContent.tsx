"use state"

import Image from "next/image"
import { Typography } from "../Utils/Typography"
import { ReplyForm } from "./ReplyForm"
import { AppUser, Comment, Reply } from "@prisma/client"
import { useState } from "react"

interface Props {
    commentId: Comment["id"]
    content: Comment["content"]
    from: Pick<AppUser, "id" | "image" | "name" | "username">
    replyingTo?: Reply["replyToId"]
}

export const CommentContent = ({
    commentId,
    content,
    from,
    replyingTo,
}: Props) => {
    const [isReplying, setIsReplying] = useState(false)
    const handleReply = () => {
        setIsReplying((prev) => !prev)
    }

    return (
        <div className="grid grid-cols-12 items-center space-y-1 sm:space-y-2">
            <Image
                className="col-span-2 rounded-full sm:col-span-1"
                src={from.image ?? "/user-images/no-profile.jpg"}
                alt="profile-image"
                width={40}
                height={40}
            />
            <div className="col-span-8 ml-4 sm:col-span-10 lg:ml-0">
                <Typography variant="h4">{from.name}</Typography>
                <Typography variant="body2" color="gray">
                    @{from.username}
                </Typography>
            </div>
            <div className="col-span-2 ml-auto sm:col-span-1">
                <button
                    className="decoration-secondary hover:underline"
                    onClick={handleReply}
                >
                    <Typography variant="body3" color="secondary">
                        Reply
                    </Typography>
                </button>
            </div>
            <div className="sm:col-span-1" />
            <div className="col-span-12 sm:col-span-11 sm:ml-4 lg:ml-0">
                <Typography variant="body2" color="gray" className="mt-2">
                    {replyingTo && (
                        <span className="font-bold text-primary">
                            @{from.username}&nbsp;
                        </span>
                    )}
                    {content}
                </Typography>

                {isReplying && (
                    <div className="mt-8">
                        <ReplyForm commentId={commentId} replyToId={from.id} />
                    </div>
                )}
            </div>
        </div>
    )
}
