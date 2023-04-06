import Link from "next/link"
import { Typography } from "./Utils/Typography"

interface Props {
    roadmap: Record<string, number>
}

const roadmapMapping: Record<string, { title: string; color: string }> = {
    planned: {
        title: "Planned",
        color: "orange",
    },
    in_progress: {
        title: "In Progress",
        color: "primary",
    },
    live: {
        title: "Live",
        color: "blue",
    },
}

const bgColor: Record<string, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    orange: "bg-orange",
    blue: "bg-blue",
}

export const RoadmapPreview = ({ roadmap }: Props) => {
    return (
        <div className="flex flex-wrap items-center gap-2 rounded-lg bg-white p-4">
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <Typography variant="h3">Roadmap</Typography>
                    <Typography
                        variant="body3"
                        color="secondary"
                        className="w-min underline hover:decoration-2"
                    >
                        <Link href="#">View</Link>
                    </Typography>
                </div>

                <div>
                    {Object.entries(roadmap).map(([key, value]) => (
                        <div
                            key={key}
                            className="flex items-center justify-between gap-2"
                        >
                            <div key={key} className="flex items-center gap-2">
                                <div
                                    className={`h-2 w-2 rounded-full ${
                                        bgColor[roadmapMapping[key].color]
                                    }`}
                                />
                                <Typography>
                                    {roadmapMapping[key].title}
                                </Typography>
                            </div>
                            <Typography className="font-bold">
                                {value}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
