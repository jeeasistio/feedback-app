import { ReactNode } from "react"
import { Typography } from "./Typography"

interface Props {
    color?: string
    children: ReactNode
    link?: boolean
    startIcon?: ReactNode
}

const bgColor: Record<string, string> = {
    primary: "bg-primary",
}

export const Button = ({
    color = "primary",
    children,
    link = false,
    startIcon,
}: Props) => {
    return (
        <button
            className={`${bgColor[color]} rounded-lg px-6 py-3 hover:opacity-80
            ${link && "hover:underline hover:decoration-white"}`}
        >
            {startIcon}
            <Typography variant="h4" color="white">
                {children}
            </Typography>
        </button>
    )
}
