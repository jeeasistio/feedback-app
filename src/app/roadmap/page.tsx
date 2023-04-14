import { RoadmapList } from "@/components/Roadmap/RoadmapList"
import { RoadmapActions } from "@/components/Roadmap/RoadmapActions"
import { Tab } from "@/components/Utils/Tab"

const options = [
    { type: "planned", title: "Planned (2)", color: "orange" },
    { type: "in_progress", title: "In-Progress (3)", color: "primary" },
    { type: "live", title: "Live (1)", color: "blue" },
]

const types = ["planned", "in_progress", "live"] as const
const active = options[0].type

const Roadmap = () => {
    return (
        <main className="container mb-8 max-w-screen-xl sm:my-8 sm:px-4">
            <div>
                <RoadmapActions />

                <div className="block sm:hidden">
                    <Tab options={options} active={active} />
                </div>

                <div className="grid grid-cols-12 gap-6 px-4">
                    {types.map((type) => (
                        <div
                            key={type}
                            className={`col-span-12 sm:col-span-4 sm:block ${
                                active === type ? "block" : "hidden"
                            }`}
                        >
                            <RoadmapList type={type} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Roadmap
