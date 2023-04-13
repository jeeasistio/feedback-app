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
        <div className="relative mt-10 space-y-6 rounded-xl bg-white p-6 pt-12 sm:p-8 sm:pt-16">
            <Typography variant="h1" className="mb-10">
                Create New Feedback
            </Typography>

            <div className="absolute -top-6 h-[40px] w-[40px] -translate-y-1/2 sm:h-[56px] sm:w-[56px]">
                <Image
                    src="/shared/icon-new-feedback.svg"
                    alt="plus-icon"
                    fill
                    sizes="(max-width: 768px) 40px, 56px"
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
