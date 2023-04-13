"use client"

import { CATEGORIES } from "@/lib/category"
import { Select } from "../Form/Select"
import { TextField } from "../Form/TextField"
import { Typography } from "../Utils/Typography"
import Image from "next/image"
import { FeedbackField } from "../Shared/FeedbackField"
import { EditFeedbackActions } from "./EditFeedbackActions"

const feedback = {
    title: "Add tags for solutions",
    category: "enhancement",
    description: "Easier to search for solutions based on a specific stack.",
}

export const EditFeedbackForm = () => {
    return (
        <div className="relative mt-10 space-y-6 rounded-xl bg-white p-6 pt-12">
            <Typography variant="h3">
                Editing {`'${feedback.title}'`}
            </Typography>

            <div className="absolute -top-6 -translate-y-1/2">
                <Image
                    src="/shared/icon-edit-feedback.svg"
                    alt="plus-icon"
                    width={40}
                    height={40}
                />
            </div>

            <div>
                <FeedbackField
                    title="Feedback Title"
                    description="Add a short, descriptive headline"
                    input={
                        <TextField
                            fullWidth
                            placeholder="Type your description here"
                            value={feedback.title}
                            onChange={() => {}}
                        />
                    }
                />
            </div>

            <div>
                <FeedbackField
                    title="Category"
                    description="Choose a category for your feedback"
                    input={
                        <Select
                            fullWidth
                            value="All"
                            onChange={() => {}}
                            options={CATEGORIES}
                        />
                    }
                />
            </div>

            <div>
                <FeedbackField
                    title="Update Status"
                    description="Change feedback state"
                    input={
                        <Select
                            fullWidth
                            value="All"
                            onChange={() => {}}
                            options={CATEGORIES}
                        />
                    }
                />
            </div>

            <div>
                <FeedbackField
                    title="Feedback Title"
                    description="Add a short, descriptive headline"
                    input={
                        <TextField
                            fullWidth
                            multiline
                            placeholder="Type your description here"
                            value={feedback.description}
                            onChange={() => {}}
                        />
                    }
                />
            </div>

            <div>
                <EditFeedbackActions />
            </div>
        </div>
    )
}
