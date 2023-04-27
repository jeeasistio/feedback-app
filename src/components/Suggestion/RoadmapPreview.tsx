import Link from "next/link"
import { Typography } from "../Utils/Typography"
import { getRoadmaps } from "@/helpers/feedback"

const NoDataFallback = () => {
    return (
        <div>
            <Typography color="gray">No Roadmaps</Typography>
        </div>
    )
}

const roadmapMapping: Record<string, { color: string }> = {
    Planned: {
        color: "orange",
    },
    "In-Progress": {
        color: "primary",
    },
    Live: {
        color: "blue",
    },
}

const bgColor: Record<string, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    orange: "bg-orange",
    blue: "bg-blue",
}

const fetch = async () => await getRoadmaps()

export const RoadmapPreview = async () => {
    const roadmap = await fetch()

    return (
        <div className="flex flex-wrap items-center gap-2 rounded-xl bg-white p-4 sm:max-lg:h-full">
            <div className="w-full">
                <div className="mb-5 flex items-center justify-between">
                    <Typography variant="h3">Roadmap</Typography>
                    <Typography
                        variant="body3"
                        color="secondary"
                        className="w-min underline"
                    >
                        <Link href="/roadmap">View</Link>
                    </Typography>
                </div>

                <div className="space-y-2">
                    {Object.keys(roadmap).length === 0 && <NoDataFallback />}
                    {roadmap &&
                        Object.entries(roadmap).map(([key, value]) => (
                            <div
                                key={key}
                                className="flex items-center justify-between"
                            >
                                <div
                                    key={key}
                                    className="flex items-center gap-2"
                                >
                                    <div
                                        className={`h-2 w-2 rounded-full ${
                                            bgColor[roadmapMapping[key].color]
                                        }`}
                                    />
                                    <Typography>{key}</Typography>
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
