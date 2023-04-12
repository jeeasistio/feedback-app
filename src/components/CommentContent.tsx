import Image from "next/image"
import { Typography } from "./Utils/Typography"
import { ReplyButton } from "./ReplyButton"
import { ReplyForm } from "./ReplyForm"

interface Props {
    content: string
    user: {
        image: string
        name: string
        username: string
    }
    replyingTo?: string
}

export const CommentContent = ({ content, user, replyingTo }: Props) => {
    return (
        <div className="grid grid-cols-12 items-center space-y-1 sm:space-y-2">
            <Image
                className="col-span-2 rounded-full sm:col-span-1"
                src={user.image}
                alt="profile-image"
                width={40}
                height={40}
            />
            <div className="col-span-8 ml-4 sm:col-span-10 lg:ml-0">
                <Typography variant="h4">{user.name}</Typography>
                <Typography variant="h4" color="gray" className="font-normal">
                    @{user.username}
                </Typography>
            </div>
            <div className="col-span-2 ml-auto sm:col-span-1">
                <ReplyButton />
            </div>
            <div className="sm:col-span-1" />
            <div className="col-span-12 sm:col-span-11 sm:ml-4 lg:ml-0">
                <Typography variant="body2" color="gray">
                    {replyingTo && (
                        <span className="font-bold text-primary">
                            @{user.username}&nbsp;
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
