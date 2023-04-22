import { ReactNode } from "react"
import { Typography } from "./Typography"
import Link from "next/link"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string
    children: ReactNode
    underlined?: boolean
    startIcon?: ReactNode
    fullWidth?: boolean
    href?: string
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
    tertiary: {
        background: "bg-tertiary",
        contrastText: "white",
        underlineColor: "hover:decoration-white",
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
    red: {
        background: "bg-red",
        contrastText: "white",
        underlineColor: "hover:decoration-white",
    },
}

export const Button = ({
    color = "primary",
    children,
    underlined = false,
    startIcon,
    fullWidth = false,
    href,
    ...props
}: Props) => {
    const jsx = (
        <button
            className={`flex items-center justify-center gap-4 rounded-xl px-6 py-3 hover:opacity-80
            ${buttonMapping[color].background}
            ${
                underlined &&
                `hover:underline ${buttonMapping[color].underlineColor}`
            } 
            ${fullWidth && "w-full"}`}
            {...props}
        >
            {startIcon}
            <Typography variant="h4" color={buttonMapping[color].contrastText}>
                {children}
            </Typography>
        </button>
    )

    if (href) return <Link href={href}>{jsx}</Link>

    return jsx
}
