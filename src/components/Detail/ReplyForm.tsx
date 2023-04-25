"use client"

import { Button } from "../Utils/Button"
import { TextField } from "../Form/TextField"
import { Comment, Reply } from "@prisma/client"
import { useForm } from "react-hook-form"
import { mutate } from "swr"

interface NewReplyInput {
    content: Reply["content"]
}

interface Props {
    commentId: Comment["id"]
    replyToId: Reply["replyToId"]
}

export const ReplyForm = ({ commentId, replyToId }: Props) => {
    const { register, handleSubmit, reset } = useForm<NewReplyInput>({
        defaultValues: { content: "" },
    })

    const onSubmit = async (data: NewReplyInput) => {
        await fetch("/api/reply", {
            method: "POST",
            body: JSON.stringify({ ...data, commentId, replyToId }),
        })
        reset()
        mutate(`/api/reply?comment_id=${commentId}`)
    }
    return (
        <form className="gap-4 sm:flex" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 flex-grow sm:mb-0">
                <TextField
                    fullWidth
                    multiline
                    placeholder="Type your comment here"
                    maxLength={250}
                    register={register("content")}
                />
            </div>
            <div>
                <Button fullWidth>Post Reply</Button>
            </div>
        </form>
    )
}
