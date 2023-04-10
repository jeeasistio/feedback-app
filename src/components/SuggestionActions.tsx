import { AddFeedback } from "./AddFeedback"
import { SortDropdown } from "./SortDropdown"
import { SuggestionCount } from "./SuggestionCount"

export const SuggestionActions = () => {
    return (
        <div className="flex items-center justify-between bg-indigo pr-4 sm:rounded-xl sm:pl-6">
            <div className="flex gap-6">
                <SuggestionCount />
                <SortDropdown />
            </div>
            <AddFeedback />
        </div>
    )
}
