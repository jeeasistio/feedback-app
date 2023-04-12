import { GoBackButton } from "@/components/Shared/GoBackButton"

const New = () => {
    return (
        <main className="my-8 space-y-6 px-4">
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
