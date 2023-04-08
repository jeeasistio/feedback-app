"use client"

import { TagFilter } from "@/components/TagFilter"
import { FrontendMentor } from "@/components/FrontendMentor"
import { RoadmapPreview } from "@/components/RoadmapPreview"
import { Drawer } from "@/components/Utils/Drawer"
import { SidebarProvider } from "@/contexts/sidebar"
import { TAGS } from "@/lib/tag"
import { TagProvider } from "@/contexts/tags"
import { SuggestionActions } from "@/components/SuggestionActions"

const roadmap = { planned: 3, in_progress: 2, live: 1 }

const Home = () => {
    return (
        <main className="sm:mt-4">
            <TagProvider>
                <div className="grid-cols-10 lg:grid">
                    <div className="col-span-2 sm:mb-12 grid-cols-3 gap-4 sm:grid lg:grid-cols-1">
                        <div>
                            <SidebarProvider>
                                <FrontendMentor />
                                <div className="relative">
                                    <Drawer>
                                        <div className="space-y-4">
                                            <TagFilter tags={TAGS} />
                                            <RoadmapPreview roadmap={roadmap} />
                                        </div>
                                    </Drawer>
                                </div>
                            </SidebarProvider>
                        </div>
                        <div className="hidden sm:block">
                            <TagFilter tags={TAGS} />
                        </div>
                        <div className="hidden sm:block">
                            <RoadmapPreview roadmap={roadmap} />
                        </div>
                    </div>
                    <div>
                        <SuggestionActions />
                    </div>
                </div>
            </TagProvider>
        </main>
    )
}

export default Home
