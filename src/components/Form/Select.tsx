import { useRef, useState } from "react"
import { Typography } from "../Utils/Typography"
import { useClickOutside } from "@/hooks/useClickOutside"
import Image from "next/image"

interface Props {
    options: { value: string; label: string }[]
    fullWidth?: boolean
    value: string
    onChange: (value: any) => void
}

export const Select = ({
    options,
    value,
    onChange,
    fullWidth = false,
}: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)
    const handleSelect = (option: any) => {
        onChange(option)
        setOpen(false)
    }

    useClickOutside(ref, () => setOpen(false))

    return (
        <div
            className={`relative min-w-[12.5rem] ${
                fullWidth ? "w-full" : "max-content"
            }`}
            ref={ref}
        >
            <button
                type="button"
                onClick={handleOpen}
                className="w-full rounded-md border border-transparent bg-white-200 px-5 py-2 hover:border-secondary"
            >
                <div className="flex items-center justify-between">
                    <Typography variant="body1">
                        {
                            options.find((option) => option.value === value)
                                ?.label
                        }
                    </Typography>

                    {open ? (
                        <Image
                            src="/shared/icon-arrow-up-secondary.svg"
                            alt="arrow-up-icon"
                            width={10}
                            height={5}
                        />
                    ) : (
                        <Image
                            src="/shared/icon-arrow-down-secondary.svg"
                            alt="arrow-down-icon"
                            width={10}
                            height={5}
                        />
                    )}
                </div>
            </button>

            {open && (
                <ul className=" absolute top-[100%] z-10 flex w-full cursor-pointer flex-col divide-y divide-indigo divide-opacity-20 rounded-xl bg-white drop-shadow-xl">
                    {options.map((option) => (
                        <li
                            className="flex items-center justify-between px-4 py-2 text-left text-gray hover:text-primary"
                            key={option.value}
                            onClick={() => handleSelect(option)}
                        >
                            <Typography color="inherit" variant="body1">
                                {option.label}
                            </Typography>
                            {option.value === value && (
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
