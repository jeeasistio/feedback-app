import { SORTOPTIONS } from "@/lib/sort"
import { Dropdown } from "../Utils/Dropdown"

export const SortDropdown = () => {
    return (
        <div>
            <Dropdown options={SORTOPTIONS} label="Sort by" />
        </div>
    )
}
