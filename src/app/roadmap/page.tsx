import { RoadmapActions } from "@/components/Roadmap/RoadmapActions"
import { Roadmaps } from "@/components/Roadmap/Roadmaps"

const Roadmap = async () => {
    return (
        <main className="container mb-8 max-w-screen-xl sm:my-8 sm:px-4">
            <div>
                <RoadmapActions />
            </div>
            <div>
                <Roadmaps />
            </div>
        </main>
    )
}

export default Roadmap
