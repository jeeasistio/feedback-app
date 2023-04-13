import { AddFeedbackButton } from "../Shared/AddFeedbackButton"
import { SortDropdown } from "./SortDropdown"
import { SuggestionCount } from "./SuggestionCount"

export const FeedbackActions = () => {
    return (
        <div className="flex items-center justify-between bg-tertiary pr-4 sm:rounded-xl sm:pl-6">
            <div className="flex gap-6">
                <SuggestionCount />
                <SortDropdown />
            </div>
            <AddFeedbackButton />
        </div>
    )
}
