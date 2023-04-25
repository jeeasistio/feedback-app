import { Button } from "../Utils/Button"
import { GoBackButton } from "../Shared/GoBackButton"
import { Feedback } from "@prisma/client"

interface Props {
    feedbackId: Feedback["id"]
}

export const DetailActions = ({ feedbackId }: Props) => {
    return (
        <div className="flex items-center justify-between px-4">
            <GoBackButton />
            <Button color="secondary" href={`/edit/${feedbackId}`}>
                Edit Feedback
            </Button>
        </div>
    )
}
