"use client"

import { useSidebar } from "@/hooks/useSidebar"
import Image from "next/image"

export const NavButton = () => {
    const { open, handleOpen, handleClose } = useSidebar()

    return open ? (
        <button onClick={handleClose}>
            <Image
                src="/shared/mobile/icon-close.svg"
                alt="close-icon"
                width={16}
                height={16}
            />
        </button>
    ) : (
        <button onClick={handleOpen}>
            <Image
                src="/shared/mobile/icon-hamburger.svg"
                alt="menu-icon"
                width={20}
                height={17}
            />
        </button>
    )
}
