"use client"

import { CategoryFilter } from "@/components/CategoryFilter"
import { FrontendMentor } from "@/components/FrontendMentor"
import { RoadmapPreview } from "@/components/RoadmapPreview"
import { Drawer } from "@/components/Utils/Drawer"
import { SidebarProvider } from "@/contexts/sidebar"
import { CATEGORIES } from "@/lib/category"
import { CategoryProvider } from "@/contexts/categories"
import { SuggestionActions } from "@/components/SuggestionActions"
import { SuggestionCard } from "@/components/SuggestionCard"
import { NoFeedback } from "@/components/NoFeedback"

const roadmap = { planned: 3, in_progress: 2, live: 1 }

const Home = () => {
    return (
        <main className="sm:mt-4">
            <CategoryProvider>
                <div className="grid-cols-10 gap-6 lg:grid">
                    <div className="col-span-2 grid-cols-3 gap-4 sm:max-lg:mb-8 sm:max-lg:grid lg:grid-cols-1 lg:space-y-6">
                        <div>
                            <SidebarProvider>
                                <FrontendMentor />
                                <div className="relative">
                                    <Drawer>
                                        <div className="space-y-4">
                                            <CategoryFilter
                                                categories={CATEGORIES}
                                            />
                                            <RoadmapPreview roadmap={roadmap} />
                                        </div>
                                    </Drawer>
                                </div>
                            </SidebarProvider>
                        </div>
                        <div className="hidden sm:block">
                            <CategoryFilter categories={CATEGORIES} />
                        </div>
                        <div className="hidden sm:block">
                            <RoadmapPreview roadmap={roadmap} />
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="mb-6">
                            <SuggestionActions />
                        </div>
                        <div className="mb-6 px-4 sm:px-0">
                            {/* <SuggestionCard
                                title="Add tags for solutions"
                                category="enhancement"
                                upvotes={112}
                                numComments={2}
                                description="Easier to search for solutions based on a specific stack."
                            /> */}
                            <NoFeedback />
                        </div>
                    </div>
                </div>
            </CategoryProvider>
        </main>
    )
}

export default Home
