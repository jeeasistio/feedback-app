"use client"

import { useClickOutside } from "@/hooks/useClickOutside"
import { useSidebar } from "@/hooks/useSidebar"
import { ReactNode, useEffect, useRef } from "react"

interface Props {
    children: ReactNode
}

export const Drawer = ({ children }: Props) => {
    const { open, handleClose } = useSidebar()
    const ref = useRef<HTMLDivElement>(null)
    useClickOutside(ref, () => handleClose())
    useEffect(() => {
        if (typeof window != "undefined" && window.document && open === true) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [open])

    if (!open) return null

    return (
        <div className="absolute top-0 z-10 h-screen w-screen bg-[rgba(0,0,0,0.5)]">
            <div className="ml-auto h-full w-64 bg-white-200 p-4" ref={ref}>
                {children}
            </div>
        </div>
    )
}
