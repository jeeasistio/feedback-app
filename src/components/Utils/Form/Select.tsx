import { useRef, useState } from "react"
import { Typography } from "../Typography"
import { useClickOutside } from "@/hooks/useClickOutside"

interface Props {
    options: string[]
}

export const Select = ({ options }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [selected, setSelected] = useState(options[0])
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)
    const handleSelect = (option: string) => {
        setSelected(option)
        setOpen(false)
    }

    useClickOutside(ref, () => setOpen(false))

    return (
        <div className="relative w-max min-w-[12.5rem]" ref={ref}>
            <button
                onClick={handleOpen}
                className="w-full rounded-lg border border-transparent bg-white-200 px-4 py-2 hover:border-secondary"
            >
                <div className="flex">
                    <Typography
                        variant="body1"
                        color="indigo"
                        className="font-normal"
                    >
                        {selected}
                    </Typography>
                </div>
            </button>

            {open && (
                <ul className=" absolute top-[100%] flex w-full cursor-pointer flex-col divide-y rounded-xl bg-white drop-shadow-xl">
                    {options.map((option) => (
                        <li
                            className="px-4 py-2 text-left text-indigo hover:text-primary"
                            key={option}
                            onClick={() => handleSelect(option)}
                        >
                            <Typography color="inherit" variant="body1">
                                {option}
                            </Typography>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
