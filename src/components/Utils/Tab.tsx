import { Status } from "@prisma/client"
import { Typography } from "./Typography"

const colorMapping: Record<string, { borderColor: string }> = {
    orange: {
        borderColor: "border-orange",
    },
    primary: {
        borderColor: "border-primary",
    },
    blue: {
        borderColor: "border-blue",
    },
}

interface Props {
    options: {
        title: string
        color: string
    }[]
    active: string
    handleChange: (status: Status["label"]) => void
}

export const Tab = ({ options, active, handleChange }: Props) => {
    return (
        <div className="flex border-b border-gray border-opacity-20">
            {options.map((opt) => (
                <button
                    key={opt.title}
                    className={`w-full p-4 ${
                        active === opt.title &&
                        `border-b-4 ${colorMapping[opt.color].borderColor}`
                    }`}
                    onClick={() => handleChange(opt.title)}
                >
                    <Typography
                        variant="body3"
                        color={active === opt.title ? "indigo" : "gray"}
                        className={`${
                            active !== opt.title && "text-opacity-80"
                        }`}
                    >
                        {opt.title}
                    </Typography>
                </button>
            ))}
        </div>
    )
}
