import { CategoryFilter } from "@/components/Suggestion/CategoryFilter"
import { FrontendMentor } from "@/components/Suggestion/FrontendMentor"
import { RoadmapPreview } from "@/components/Suggestion/RoadmapPreview"
import { Drawer } from "@/components/Utils/Drawer"
import { SidebarProvider } from "@/contexts/sidebar"
import { SuggestionActions } from "@/components/Suggestion/SuggestionActions"
import { CategoryProvider } from "@/contexts/categories"
import SuggestionList from "@/components/Suggestion/SuggestionList"

const Home = () => {
    return (
        <main className="container mb-8 max-w-screen-xl sm:my-8 sm:px-4">
            <div className="grid-cols-10 gap-6 lg:grid">
                <CategoryProvider>
                    <div className="col-span-2 grid-cols-3 gap-4 sm:max-lg:mb-8 sm:max-lg:grid lg:grid-cols-1 lg:space-y-6">
                        <div>
                            <SidebarProvider>
                                <FrontendMentor />
                                <div className="relative">
                                    <Drawer>
                                        <div className="space-y-4">
                                            <CategoryFilter />
                                            <RoadmapPreview />
                                        </div>
                                    </Drawer>
                                </div>
                            </SidebarProvider>
                        </div>
                        <div className="hidden sm:block">
                            <CategoryFilter />
                        </div>
                        <div className="hidden sm:block">
                            <RoadmapPreview />
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="mb-6">
                            <SuggestionActions />
                        </div>
                        <div className="px-4 sm:px-0">
                            <SuggestionList />
                        </div>
                    </div>
                </CategoryProvider>
            </div>
        </main>
    )
}

export default Home
