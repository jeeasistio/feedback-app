import { AddFeedbackButton } from "../Shared/AddFeedbackButton"
import { UserDropdown } from "../Utils/UserDropdown"
import { SortDropdown } from "./SortDropdown"
import { SuggestionCount } from "./SuggestionCount"

export const SuggestionActions = () => {
    return (
        <div className="flex items-center justify-between bg-tertiary pr-4 sm:rounded-xl sm:pl-6">
            <div className="flex gap-6">
                <SuggestionCount />
                <SortDropdown />
            </div>
            <div className="flex items-center gap-4">
                <AddFeedbackButton />
                <div className="hidden sm:block">
                    <UserDropdown />
                </div>
            </div>
        </div>
    )
}
