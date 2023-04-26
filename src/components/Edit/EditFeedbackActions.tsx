"use client"

import { useRouter } from "next/navigation"
import { Button } from "../Utils/Button"

interface Props {
    feedbackId: string
}

export const EditFeedbackActions = ({ feedbackId }: Props) => {
    const router = useRouter()

    const handleDelete = async () => {
        const res = await fetch(`/api/feedback?feedback_id=${feedbackId}`, {
            method: "DELETE",
        })

        if (res.ok) router.push("/")
    }

    return (
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <Button color="red" type="button" onClick={handleDelete}>
                Delete
            </Button>

            <div className="flex flex-col justify-end gap-4 sm:flex-row">
                <Button color="indigo" type="button" onClick={router.back}>
                    Cancel
                </Button>
                <Button type="submit">Save Feedback</Button>
            </div>
        </div>
    )
}
