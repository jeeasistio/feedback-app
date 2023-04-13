import { Button } from "../Utils/Button"

export const NewFeedbackActions = () => {
    return (
        <div className="flex justify-between">
            <Button color="red">Delete</Button>

            <div className="flex flex-col justify-end gap-4 sm:flex-row">
                <Button color="indigo">Cancel</Button>
                <Button>Add Feedback</Button>
            </div>
        </div>
    )
}
