import { EditFeedbackForm } from "@/components/Edit/EditFeedbackForm"
import { GoBackButton } from "@/components/Shared/GoBackButton"
import { getEditFeedback } from "@/helpers/feedback"
import { Feedback } from "@prisma/client"

const fetch = async (feedbackId: Feedback["id"]) =>
    await getEditFeedback(feedbackId)

interface Props {
    params: { feedback_id: string }
}

const Edit = async ({ params }: Props) => {
    const feedback = await fetch(params.feedback_id)

    return (
        <main className="container my-8 max-w-screen-md space-y-6 px-4">
            <div>
                <GoBackButton />
            </div>
            <div>
                <EditFeedbackForm {...feedback} />
            </div>
        </main>
    )
}

export default Edit
