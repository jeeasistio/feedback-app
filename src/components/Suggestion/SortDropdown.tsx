import { Dropdown } from "../Utils/Dropdown"

export const SortDropdown = () => {
    return (
        <div>
            <Dropdown
                options={[
                    "Most Upvotes",
                    "Least Upvotes",
                    "Most Comments",
                    "Least Comments",
                ]}
                label="Sort by"
            />
        </div>
    )
}
