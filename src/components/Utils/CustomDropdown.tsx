"use client"

import { useRef, useState } from "react"
import { Typography } from "./Typography"
import { useClickOutside } from "@/hooks/useClickOutside"
import Image from "next/image"

interface Props {
    options: string[]
    label: string
}

export const CustomDropdown = ({ options, label }: Props) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(options[0])
    const ref = useRef<HTMLDivElement>(null)
    const handleOpen = () => setOpen(!open)
    const handleSelect = (option: string) => {
        setSelected(option)
        setOpen(false)
    }

    useClickOutside(ref, () => setOpen(false))

    return (
        <div className="relative w-max min-w-[12rem]" ref={ref}>
            <button
                onClick={handleOpen}
                className="w-full rounded-xl bg-tertiary px-4 py-6"
            >
                <div className="flex items-center gap-2">
                    <Typography
                        variant="h4"
                        color="white"
                        className="font-normal"
                    >
                        {label} :
                    </Typography>
                    <Typography variant="h4" color="white">
                        {selected}
                    </Typography>
                    <Image
                        src="/shared/icon-arrow-down-white.svg"
                        alt="arrow-down-icon"
                        width={12}
                        height={6}
                    />
                </div>
            </button>

            {open && (
                <ul className=" absolute top-[calc(100%+0.8rem)] flex w-[110%] cursor-pointer flex-col divide-y divide-indigo divide-opacity-20 rounded-lg bg-white drop-shadow-xl">
                    {options.map((option) => (
                        <li
                            className="px-4 py-2 text-left text-indigo hover:text-primary"
                            onClick={() => handleSelect(option)}
                            key={option}
                        >
                            <Typography color="inherit">{option}</Typography>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
