import { Button } from "../Utils/Button"

interface Props {
    feedbackId?: string
}

export const EditFeedbackActions = ({ feedbackId }: Props) => {
    return (
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <Button color="red" type="button">
                Delete
            </Button>

            <div className="flex flex-col justify-end gap-4 sm:flex-row">
                <Button color="indigo" type="button">
                    Cancel
                </Button>
                <Button type="submit">Add Feedback</Button>
            </div>
        </div>
    )
}
