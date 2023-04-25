"use client"

import { Button } from "../Utils/Button"
import { TextField } from "../Form/TextField"
import { Typography } from "../Utils/Typography"
import { useForm } from "react-hook-form"
import { Comment, Feedback } from "@prisma/client"
import { mutate } from "swr"

interface NewCommentInput {
    content: Comment["content"]
}

interface Props {
    feedbackId: Feedback["id"]
}

export const AddCommentForm = ({ feedbackId }: Props) => {
    const { register, handleSubmit, reset } = useForm<NewCommentInput>({
        defaultValues: { content: "" },
    })
    const onSubmit = async (data: NewCommentInput) => {
        await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ ...data, feedbackId }),
        })
        reset()
        mutate(`/api/comment?feedback_id=${feedbackId}`)
    }
    return (
        <div className="rounded-xl bg-white p-6">
            <Typography variant="h3" className="mb-6">
                Add Comment
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <TextField
                        fullWidth
                        multiline
                        placeholder="Type your comment here"
                        register={register("content")}
                        maxLength={250}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <Typography variant="body2" color="gray">
                        {250} Characters left
                    </Typography>
                    <Button type="submit">Post Comment</Button>
                </div>
            </form>
        </div>
    )
}
