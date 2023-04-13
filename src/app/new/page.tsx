import { NewFeedbackForm } from "@/components/New/NewFeedbackForm"
import { GoBackButton } from "@/components/Shared/GoBackButton"

const New = () => {
    return (
        <main className="container my-8 max-w-screen-md space-y-6 px-4">
            <div>
                <GoBackButton />
            </div>
            <div>
                <NewFeedbackForm />
            </div>
        </main>
    )
}

export default New
