import { ReactNode } from "react"
import { Typography } from "./Typography"

interface Props {
    color?: string
    children: ReactNode
    link?: boolean
}

const bgColor: Record<string, string> = {
    primary: "bg-primary",
}

export const Button = ({
    color = "primary",
    children,
    link = false,
}: Props) => {
    return (
        <button
            className={`${bgColor[color]} rounded-lg px-12 py-2 hover:opacity-80
            ${link && "hover:underline hover:decoration-white"}`}
        >
            <Typography variant="h4" color="white">
                {children}
            </Typography>
        </button>
    )
}
