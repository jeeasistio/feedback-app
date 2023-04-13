import { ReactNode } from "react"
import { Typography } from "./Typography"

interface Props {
    color?: string
    children: ReactNode
    link?: boolean
    startIcon?: ReactNode
    fullWidth?: boolean
}

const buttonMapping: Record<
    string,
    { background: string; contrastText: string; underlineColor: string }
> = {
    primary: {
        background: "bg-primary",
        contrastText: "white",
        underlineColor: "hover:decoration-white",
    },
    secondary: {
        background: "bg-secondary",
        contrastText: "white",
        underlineColor: "hover:decoration-secondary",
    },
    indigo: {
        background: "bg-indigo",
        contrastText: "white",
        underlineColor: "hover:decoration-white",
    },
    gray: {
        background: "bg-white-200",
        contrastText: "gray",
        underlineColor: "hover:decoration-gray",
    },
}

export const Button = ({
    color = "primary",
    children,
    link = false,
    startIcon,
    fullWidth = false,
}: Props) => {
    return (
        <button
            className={`flex items-center justify-center gap-4 rounded-xl px-6 py-3 hover:opacity-80
            ${buttonMapping[color].background}
            ${link && `hover:underline ${buttonMapping.underlineColor}`} 
            ${fullWidth && "w-full"}`}
        >
            {startIcon}
            <Typography variant="h4" color={buttonMapping[color].contrastText}>
                {children}
            </Typography>
        </button>
    )
}
