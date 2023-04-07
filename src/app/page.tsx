"use client"

import { TagFilter } from "@/components/TagFilter"
import { FrontendMentor } from "@/components/FrontendMentor"
import { RoadmapPreview } from "@/components/RoadmapPreview"
import { Drawer } from "@/components/Utils/Drawer"
import { SidebarProvider } from "@/contexts/sidebar"
import { TAGS } from "@/lib/tag"
import { TagProvider } from "@/contexts/tags"

const roadmap = { planned: 3, in_progress: 2, live: 1 }

const Home = () => {
    return (
        <main>
            <TagProvider>
                <SidebarProvider>
                    <FrontendMentor />
                    <div className="relative">
                        <Drawer>
                            <TagFilter tags={TAGS} />
                            <RoadmapPreview roadmap={roadmap} />
                        </Drawer>
                    </div>
                </SidebarProvider>
                <TagFilter tags={TAGS} />
                <RoadmapPreview roadmap={roadmap} />
            </TagProvider>
        </main>
    )
}

export default Home
