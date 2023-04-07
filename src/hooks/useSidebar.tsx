import { SidebarContext } from "@/contexts/sidebar"
import { useContext } from "react"

export const useSidebar = () => useContext(SidebarContext)
