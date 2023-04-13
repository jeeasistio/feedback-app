"use client"

import { CATEGORIES } from "@/lib/category"
import { Select } from "../Form/Select"
import { TextField } from "../Form/TextField"
import { Typography } from "../Utils/Typography"
import { NewFeedbackActions } from "./NewFeedbackActions"
import Image from "next/image"
import { FeedbackField } from "../Shared/FeedbackField"

export const NewFeedbackForm = () => {
    return (
        <div className="relative mt-10 space-y-6 rounded-xl bg-white p-6 pt-12">
            <Typography variant="h3">Create New Feedback</Typography>

            <div className="absolute -top-6 -translate-y-1/2">
                <Image
                    src="/shared/icon-new-feedback.svg"
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
                            value="123"
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
                    title="Feedback Title"
                    description="Add a short, descriptive headline"
                    input={
                        <TextField
                            fullWidth
                            multiline
                            placeholder="Type your description here"
                            value="123"
                            onChange={() => {}}
                        />
                    }
                />
            </div>

            <div>
                <NewFeedbackActions />
            </div>
        </div>
    )
}
