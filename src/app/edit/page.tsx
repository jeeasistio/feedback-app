import { EditFeedbackForm } from "@/components/Edit/EditFeedbackForm"
import { GoBackButton } from "@/components/Shared/GoBackButton"

const Edit = () => {
    return (
        <main className="container my-8 max-w-screen-md space-y-6 px-4">
            <div>
                <GoBackButton />
            </div>
            <div>
                <EditFeedbackForm />
            </div>
        </main>
    )
}

export default Edit
