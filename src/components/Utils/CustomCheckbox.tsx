"use client"

import { ReactNode } from "react"
import { Typography } from "./Typography"

interface Props {
    active?: boolean
    onClick: () => void
    children?: ReactNode
    textColor?: string
}

export const CustomCheckbox = ({
    children,
    textColor = "indigo",
    active = false,
    onClick,
}: Props) => {
    return (
        <button
            onClick={onClick}
            className={`flex w-min cursor-pointer flex-col items-center gap-1 rounded-lg px-4 py-1 hover:bg-gray-200 
            ${active ? "bg-secondary" : "bg-white-100"}`}
        >
            <Typography variant="body3" color={active ? "white" : textColor}>
                {children}
            </Typography>
        </button>
    )
}
