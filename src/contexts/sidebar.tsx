"use client"

import { ReactNode, createContext, useState } from "react"

interface SidebarContext {
    open: boolean
    handleOpen: () => void
    handleClose: () => void
}

export const SidebarContext = createContext<SidebarContext>({
    open: false,
    handleOpen: () => {},
    handleClose: () => {},
})

interface Props {
    children: ReactNode
}

export const SidebarProvider = ({ children }: Props) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setTimeout(() => setOpen(true), 100)
    }
    const handleClose = () => {
        setTimeout(() => setOpen(false), 100)
    }

    return (
        <SidebarContext.Provider value={{ open, handleOpen, handleClose }}>
            {children}
        </SidebarContext.Provider>
    )
}
