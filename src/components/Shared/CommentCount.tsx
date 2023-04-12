import Image from "next/image"
import { Typography } from "../Utils/Typography"

interface Props {
    count: number
}

export const CommentCount = ({ count }: Props) => {
    return (
        <div className="flex items-center justify-end gap-2">
            <Image
                src="/shared/icon-comments.svg"
                alt="comments-icon"
                width={18}
                height={16}
            />
            <Typography className="font-bold">{count}</Typography>
        </div>
    )
}
