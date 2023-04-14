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
        type: string
        title: string
        color: string
    }[]
    active: string
}

export const Tab = ({ options, active }: Props) => {
    return (
        <div className="flex border-b border-gray border-opacity-20">
            {options.map((opt) => (
                <button
                    key={opt.title}
                    className={`w-full p-4 ${
                        active === opt.type &&
                        `border-b-4 ${colorMapping[opt.color].borderColor}`
                    }`}
                >
                    <Typography
                        variant="body3"
                        color={active === opt.type ? "indigo" : "gray"}
                        className={`${
                            active !== opt.type && "text-opacity-80"
                        }`}
                    >
                        {opt.title}
                    </Typography>
                </button>
            ))}
        </div>
    )
}
