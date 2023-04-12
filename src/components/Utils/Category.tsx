import { ReactNode } from "react"
import { Typography } from "./Typography"

interface Props {
    interactive?: boolean
    active?: boolean
    onClick?: () => void
    children?: ReactNode
    textColor?: string
}

export const Category = ({
    interactive = true,
    children,
    textColor = "indigo",
    active = false,
    onClick,
}: Props) => {
    const Element = interactive ? "button" : "div"
    return (
        <Element
            onClick={onClick}
            className={`hover:bg-gray-200 flex w-min ${
                interactive ? "cursor-pointer" : "cursor-auto"
            } flex-col items-center gap-1 rounded-lg px-4 py-1 
            ${active ? "bg-secondary" : "bg-white-100"}`}
        >
            <Typography variant="body3" color={active ? "white" : textColor}>
                {children}
            </Typography>
        </Element>
    )
}
