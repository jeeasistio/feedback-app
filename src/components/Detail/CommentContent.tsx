import Image from "next/image"
import { Typography } from "../Utils/Typography"
import { ReplyForm } from "./ReplyForm"
import { AppUser, Comment } from "@prisma/client"

interface Props {
    content: Comment["content"]
    from: Pick<AppUser, "image" | "name" | "username">
    replyingTo?: string
}

export const CommentContent = ({ content, from, replyingTo }: Props) => {
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
                <button className="decoration-secondary hover:underline">
                    <Typography variant="body3" color="secondary">
                        Reply
                    </Typography>
                </button>
            </div>
            <div className="sm:col-span-1" />
            <div className="col-span-12 sm:col-span-11 sm:ml-4 lg:ml-0">
                <Typography variant="body2" color="gray">
                    {replyingTo && (
                        <span className="font-bold text-primary">
                            @{from.username}&nbsp;
                        </span>
                    )}

                    {content}
                </Typography>

                <div className="mt-4">
                    <ReplyForm />
                </div>
            </div>
        </div>
    )
}
