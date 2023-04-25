"use client"

import { useState } from "react"
import { Tab } from "../Utils/Tab"
import { RoadmapList, roadmapMapping } from "./RoadmapList"
import { Status } from "@prisma/client"

export const Roadmaps = () => {
    const [active, setActive] = useState<Status["label"]>("Planned")
    return (
        <div>
            <div className="block sm:hidden">
                <Tab
                    options={Object.entries(roadmapMapping).map((map) => ({
                        title: map[0],
                        color: map[1].color,
                    }))}
                    active={active}
                    handleChange={(status) => setActive(status)}
                />
            </div>

            <div className="grid grid-cols-12 gap-6 px-4">
                {Object.keys(roadmapMapping).map((status) => (
                    <div
                        key={status}
                        className={`col-span-12 sm:col-span-4 sm:block 
                        ${active === status ? "block" : "hidden"}
                        `}
                    >
                        <RoadmapList status={status} />
                    </div>
                ))}
            </div>
        </div>
    )
}
