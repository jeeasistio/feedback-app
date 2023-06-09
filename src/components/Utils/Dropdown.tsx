"use client"

import { useRef, useState } from "react"
import { Typography } from "./Typography"
import { useClickOutside } from "@/hooks/useClickOutside"
import Image from "next/image"

interface Props {
    options: string[]
    value: string
    label: string
    handleChange: (value: any) => void
}

export const Dropdown = ({ options, label, value, handleChange }: Props) => {
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const handleOpen = () => setOpen(!open)
    const handleSelect = (option: string) => {
        handleChange(option)
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
                    <Typography variant="body2" color="white">
                        {label} :
                    </Typography>
                    <Typography variant="h4" color="white">
                        {value}
                    </Typography>
                    {open ? (
                        <Image
                            src="/shared/icon-arrow-up-white.svg"
                            alt="arrow-up-icon"
                            width={12}
                            height={6}
                        />
                    ) : (
                        <Image
                            src="/shared/icon-arrow-down-white.svg"
                            alt="arrow-down-icon"
                            width={12}
                            height={6}
                        />
                    )}
                </div>
            </button>

            {open && (
                <ul className=" absolute top-[calc(100%+0.8rem)] z-10 flex w-[110%] cursor-pointer flex-col divide-y divide-indigo divide-opacity-20 rounded-xl bg-white drop-shadow-xl">
                    {options.map((option) => (
                        <li
                            className="flex items-center justify-between px-4 py-2 text-left text-gray hover:text-primary"
                            onClick={() => handleSelect(option)}
                            key={option}
                        >
                            <Typography color="inherit">{option}</Typography>
                            {option === value && (
                                <Image
                                    src="/shared/icon-check.svg"
                                    alt="check-icon"
                                    width={11}
                                    height={7}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
