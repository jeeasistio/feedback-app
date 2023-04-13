import { Typography } from "@/components/Utils/Typography"
import { ReactNode } from "react"

interface Props {
    title: string
    description: string
    input: ReactNode
}

export const FeedbackField = ({ title, description, input }: Props) => {
    return (
        <div>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h4" className="mb-4 font-normal" color="gray">
                {description}
            </Typography>

            {input}
        </div>
    )
}
