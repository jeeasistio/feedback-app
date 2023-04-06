"use client"

import { useRef, useState } from "react"
import { Typography } from "./Typography"
import { useClickOutside } from "@/hooks/useClickOutside"

interface Props {
    options: string[]
}

export const CustomDropdown = ({ options }: Props) => {
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
                className="w-full rounded-lg bg-indigo px-4 py-6"
            >
                <div className="flex">
                    <Typography
                        variant="h4"
                        color="white"
                        className="font-normal"
                    >
                        Sort by :&nbsp;
                    </Typography>
                    <Typography variant="h4" color="white">
                        {selected}
                    </Typography>
                </div>
            </button>

            {open && (
                <ul className=" absolute top-[calc(100%+0.8rem)] flex w-[110%] cursor-pointer flex-col divide-y rounded-lg bg-white drop-shadow-xl">
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
