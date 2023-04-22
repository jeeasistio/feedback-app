"use client"

import { Button } from "../Utils/Button"
import { TextField } from "../Form/TextField"

export const ReplyForm = () => {
    return (
        <form className="gap-4 sm:flex">
            <div className="mb-2 flex-grow sm:mb-0">
                <TextField
                    fullWidth
                    multiline
                    placeholder="Type your comment here"
                    value=""
                    onChange={() => {}}
                    maxLength={250}
                />
            </div>
            <div>
                <Button fullWidth>Post Reply</Button>
            </div>
        </form>
    )
}
