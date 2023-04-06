"use client"

import { useState } from "react"
import { Typography } from "./Typography"

interface Props {
    children?: React.ReactNode
    textColor?: string
}

export const CustomCheckbox = ({ children, textColor = "indigo" }: Props) => {
    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)
    return (
        <button
            onClick={handleClick}
            className={`flex w-min cursor-pointer flex-col items-center rounded-lg  px-4 py-1 hover:bg-gray-200 
            ${active ? "bg-secondary" : "bg-white-100"}`}
        >
            <Typography variant="body3" color={active ? "white" : textColor}>
                {children}
            </Typography>
        </button>
    )
}
