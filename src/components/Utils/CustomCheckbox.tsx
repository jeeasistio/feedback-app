"use client"

import { ReactNode } from "react"
import { Typography } from "./Typography"

interface Props {
    active?: boolean
    Icon?: React.ForwardRefExoticComponent<
        Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
            title?: string | undefined
            titleId?: string | undefined
        } & React.RefAttributes<SVGSVGElement>
    >
    onClick: () => void
    children?: ReactNode
    textColor?: string
}

export const CustomCheckbox = ({
    children,
    textColor = "indigo",
    active = false,
    Icon,
    onClick,
}: Props) => {
    return (
        <button
            onClick={onClick}
            className={`flex w-min cursor-pointer flex-col items-center gap-1 rounded-lg ${
                Icon ? "px-2 py-2" : "px-4 py-1"
            } hover:bg-gray-200 
            ${active ? "bg-secondary" : "bg-white-100"}`}
        >
            {Icon && (
                <Icon
                    className={`h-3 w-3 stroke-[4px] ${
                        active ? "text-white" : "text-secondary"
                    }`}
                />
            )}
            <Typography variant="body3" color={active ? "white" : textColor}>
                {children}
            </Typography>
        </button>
    )
}
