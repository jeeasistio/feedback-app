import { useRouter } from "next/navigation"
import { Button } from "../Utils/Button"

export const NewFeedbackActions = () => {
    const router = useRouter()

    return (
        <div className="flex flex-col justify-end gap-4 sm:flex-row">
            <Button color="indigo" onClick={router.back}>
                Cancel
            </Button>
            <Button type="submit">Add Feedback</Button>
        </div>
    )
}
