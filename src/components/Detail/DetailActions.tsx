import { Button } from "../Utils/Button"
import { GoBackButton } from "../Shared/GoBackButton"

export const DetailActions = () => {
    return (
        <div className="flex items-center justify-between px-4">
            <GoBackButton />
            <Button color="secondary">Edit Feedback</Button>
        </div>
    )
}
