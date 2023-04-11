import Image from "next/image"
import { Button } from "./Utils/Button"

export const DetailActions = () => {
    return (
        <div className="flex items-center justify-between px-4">
            <Button
                startIcon={
                    <Image
                        src="/shared/icon-arrow-left.svg"
                        alt="arrow-left-icon"
                        width={8}
                        height={4}
                    />
                }
                color="white-200"
            >
                Go Back
            </Button>
            <Button color="secondary">Edit Feedback</Button>
        </div>
    )
}
