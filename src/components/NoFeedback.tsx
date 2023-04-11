import Image from "next/image"
import { Typography } from "./Utils/Typography"
import { AddFeedback } from "./AddFeedback"

export const NoFeedback = () => {
    return (
        <div className="flex min-h-[460px] flex-col items-center justify-center gap-2 rounded-xl bg-white p-8 text-center sm:min-h-[600px]">
            <div className="relative h-[108px] w-[102px] sm:h-[137px] sm:w-[130px]">
                <Image
                    src="/suggestions/illustration-empty.svg"
                    alt="illustration"
                    fill
                    sizes="(min-width: 768px) 130px, 102px"
                />
            </div>
            <Typography variant="h3">There is no feedback yet</Typography>
            <Typography className="mb-4 max-w-[410px]" color="gray">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
            </Typography>
            <AddFeedback />
        </div>
    )
}
