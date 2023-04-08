import { SORTOPTIONS } from "@/lib/sort"
import { CustomDropdown } from "./Utils/CustomDropdown"

export const SortDropdown = () => {
    return (
        <div>
            <CustomDropdown options={SORTOPTIONS} label="Sort by" />
        </div>
    )
}
