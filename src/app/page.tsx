"use client"

import { CategoryFilter } from "@/components/CategoryFilter"
import { FrontendMentor } from "@/components/FrontendMentor"
import { RoadmapPreview } from "@/components/RoadmapPreview"
import { Drawer } from "@/components/Utils/Drawer"
import { useState } from "react"

const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]
const roadmap = { planned: 3, in_progress: 2, live: 1 }

const Home = () => {
    const [open, setOpen] = useState(false)

    return (
        <main>
            <FrontendMentor
                open={open}
                handleOpen={() => setOpen(true)}
                handleClose={() => setOpen(false)}
            />
            <div className="relative">
                <Drawer open={open} handleClose={() => setOpen(false)}>
                    <CategoryFilter categories={categories} />
                    <RoadmapPreview roadmap={roadmap} />
                </Drawer>
            </div>
        </main>
    )
}

export default Home
