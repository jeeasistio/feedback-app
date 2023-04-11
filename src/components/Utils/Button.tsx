import { ReactNode } from "react"
import { Typography } from "./Typography"

interface Props {
    color?: string
    children: ReactNode
    link?: boolean
    startIcon?: ReactNode
}

const buttonMapping: Record<
    string,
    { background: string; contrastText: string }
> = {
    primary: {
        background: "bg-primary",
        contrastText: "white",
    },
    secondary: {
        background: "bg-secondary",
        contrastText: "white",
    },
    "white-200": {
        background: "bg-white-200",
        contrastText: "gray",
    },
}

export const Button = ({
    color = "primary",
    children,
    link = false,
    startIcon,
}: Props) => {
    return (
        <button
            className={`${
                buttonMapping[color].background
            } flex items-center gap-4 rounded-lg px-6 py-3 hover:opacity-80
            ${link && "hover:underline hover:decoration-white"}`}
        >
            {startIcon}
            <Typography variant="h4" color={buttonMapping[color].contrastText}>
                {children}
            </Typography>
        </button>
    )
}
