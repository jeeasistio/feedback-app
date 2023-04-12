"use client"

import { Button } from "./Utils/Button"
import { TextField } from "./Utils/Form/TextField"
import { Typography } from "./Utils/Typography"

export const AddCommentForm = () => {
    return (
        <div className="rounded-xl bg-white p-6">
            <Typography variant="h3" className="mb-6">
                Add Comment
            </Typography>

            <form className="mb-2">
                <TextField
                    fullWidth
                    multiline
                    placeholder="Type your comment here"
                    value=""
                    onChange={() => {}}
                />
            </form>

            <div className="flex items-center justify-between">
                <Typography variant="body2" color="gray">
                    {250} Characters left
                </Typography>
                <Button>Post Comment</Button>
            </div>
        </div>
    )
}
