import { AddFeedbackButton } from "../Shared/AddFeedbackButton"
import { GoBackButton } from "../Shared/GoBackButton"
import { Typography } from "../Utils/Typography"

export const RoadmapActions = () => {
    return (
        <div className="flex items-center justify-between bg-tertiary p-2 py-6 sm:rounded-xl">
            <div>
                <GoBackButton color="dark" />
                <Typography variant="h1" color="white" className="ml-6">
                    Roadmap
                </Typography>
            </div>

            <div className="mr-4">
                <AddFeedbackButton />
            </div>
        </div>
    )
}
