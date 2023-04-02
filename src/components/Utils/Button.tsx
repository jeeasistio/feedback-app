import { ReactNode } from "react"

interface Props {
    color?: string
    children: ReactNode
}

export const Button = ({ color = "primary", children }: Props) => {
    const bgColor = `bg-${color}`
    return (
        <button
            className={`${bgColor} rounded-lg px-12 py-2 font-sans text-[.813rem] font-bold leading-[1.25rem] tracking-[-.013rem] text-white hover:opacity-80 sm:text-[.875rem]`}
        >
            {children}
        </button>
    )
}
