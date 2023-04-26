"use client"

import { Select } from "../Form/Select"
import { TextField } from "../Form/TextField"
import { Typography } from "../Utils/Typography"
import Image from "next/image"
import { FeedbackField } from "../Shared/FeedbackField"
import { SubmitHandler, useForm } from "react-hook-form"
import { CategoryName, Feedback } from "@prisma/client"
import { NewFeedbackActions } from "./NewFeedbackActions"
import { useGetCategory } from "@/hooks/useGetCategories"
import { useRouter } from "next/navigation"

const FieldLoadingFallback = () => {
    return (
        <div className="mt-4 space-y-8">
            <div className="animate-pulse">
                <div className="h-12 w-full rounded bg-gray-100" />
            </div>
        </div>
    )
}

interface NewFeedbackInputs {
    title: Feedback["title"]
    description: Feedback["description"]
    category: CategoryName
}

const initialFormValues: NewFeedbackInputs = {
    category: "FEATURE",
    title: "",
    description: "",
}

export const NewFeedbackForm = () => {
    const router = useRouter()
    const { data: allCategories, isLoading } = useGetCategory()
    const { register, handleSubmit, watch, setValue } =
        useForm<NewFeedbackInputs>({ defaultValues: initialFormValues })
    const onSubmit: SubmitHandler<NewFeedbackInputs> = async (data) => {
        await fetch("/api/feedback", {
            method: "POST",
            body: JSON.stringify(data),
        })
        router.push("/")
    }

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

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FeedbackField
                        title="Feedback Title"
                        description="Add a short, descriptive headline"
                        input={
                            <TextField
                                fullWidth
                                placeholder="Type your description here"
                                register={register("title")}
                            />
                        }
                    />
                </div>

                <div>
                    <FeedbackField
                        title="Category"
                        description="Choose a category for your feedback"
                        input={
                            <>
                                {isLoading && <FieldLoadingFallback />}
                                {allCategories && (
                                    <Select
                                        fullWidth
                                        value={watch("category")}
                                        onChange={(cat: {
                                            value: CategoryName
                                            label: string
                                        }) => setValue("category", cat.value)}
                                        options={allCategories.map((cat) => ({
                                            value: cat.name,
                                            label: cat.label,
                                        }))}
                                    />
                                )}
                            </>
                        }
                    />
                </div>

                <div>
                    <FeedbackField
                        title="Feedback Detail"
                        description="Add a short, descriptive headline"
                        input={
                            <TextField
                                fullWidth
                                multiline
                                placeholder="Type your description here"
                                register={register("title")}
                            />
                        }
                    />
                </div>

                <div>
                    <NewFeedbackActions />
                </div>
            </form>
        </div>
    )
}
