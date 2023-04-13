import { Button } from "../Utils/Button"

export const EditFeedbackActions = () => {
    return (
        <div className="flex flex-col justify-end gap-4 sm:flex-row">
            <Button color="indigo">Cancel</Button>
            <Button>Add Feedback</Button>
        </div>
    )
}
