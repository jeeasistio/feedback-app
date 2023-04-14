import { Typography } from "../Utils/Typography"
import { RoadmapCard } from "./RoadmapCard"

export const roadmapMapping = {
    planned: {
        title: "Planned",
        description: "Ideas prioritized for research",
        color: "orange",
    },
    in_progress: {
        title: "In-Progress",
        description: "Currently being developed",
        color: "primary",
    },
    live: {
        title: "Live",
        description: "Released features",
        color: "blue",
    },
}

interface Props {
    type: keyof typeof roadmapMapping
}

const roadmaps = [
    {
        title: "Add tags for solutions",
        category: "enhancement",
        upvotes: 112,
        commentsCount: 2,
        description:
            "Easier to search for solutions based on a specific stack.",
    },
    {
        title: "Add tags for solutions",
        category: "enhancement",
        upvotes: 112,
        commentsCount: 2,
        description:
            "Easier to search for solutions based on a specific stack.",
    },
    {
        title: "Add tags for solutions",
        category: "enhancement",
        upvotes: 112,
        commentsCount: 2,
        description:
            "Easier to search for solutions based on a specific stack.",
    },
]

export const RoadmapList = ({ type }: Props) => {
    return (
        <div>
            <div className="my-8">
                <Typography variant="h3" className="mb-1">
                    {roadmapMapping[type].title}
                </Typography>
                <Typography color="gray">
                    {roadmapMapping[type].description}
                </Typography>
            </div>

            <div className="space-y-4">
                {roadmaps.map((roadmap) => (
                    <div key={roadmap.title}>
                        <RoadmapCard type={type} {...roadmap} />
                    </div>
                ))}
            </div>
        </div>
    )
}
