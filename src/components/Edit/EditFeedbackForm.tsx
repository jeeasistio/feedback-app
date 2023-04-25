"use client"

import { Select } from "../Form/Select"
import { TextField } from "../Form/TextField"
import { Typography } from "../Utils/Typography"
import Image from "next/image"
import { FeedbackField } from "../Shared/FeedbackField"
import { EditFeedbackActions } from "./EditFeedbackActions"
import { useGetCategory } from "@/hooks/useGetCategories"
import { useGetStatus } from "@/hooks/useGetStatus"
import { FeedbackEditQueryResult } from "@/helpers/feedback"
import { useForm } from "react-hook-form"
import { CategoryName, Feedback, StatusName } from "@prisma/client"
import { useRouter } from "next/navigation"

interface Props extends FeedbackEditQueryResult {}

interface EditFeedbackInputs {
    title: Feedback["title"]
    description: Feedback["description"]
    category: CategoryName
    status: StatusName
}

export const EditFeedbackForm = ({
    id,
    title,
    description,
    category,
    status,
}: Props) => {
    const router = useRouter()
    const { allCategories } = useGetCategory()
    const { allStatuses } = useGetStatus()
    const { register, handleSubmit, watch, setValue } =
        useForm<EditFeedbackInputs>({
            defaultValues: { title, description, category, status },
        })
    const onSubmit = async (data: EditFeedbackInputs) => {
        await fetch("/api/feedback", {
            method: "PUT",
            body: JSON.stringify({ ...data, id }),
        })
        router.push("/")
    }
    return (
        <div className="relative mt-10 space-y-6 rounded-xl bg-white p-6 pt-12 sm:p-8 sm:pt-16">
            <Typography variant="h1" className="mb-12">
                Editing {`'${title}'`}
            </Typography>

            <div className="absolute -top-6 h-[40px] w-[40px] -translate-y-1/2 sm:h-[56px] sm:w-[56px]">
                <Image
                    src="/shared/icon-edit-feedback.svg"
                    alt="plus-icon"
                    fill
                    sizes="(max-width: 768px) 56px, 56px"
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
                                value={watch("status")}
                                onChange={(status: {
                                    value: StatusName
                                    label: string
                                }) => setValue("status", status.value)}
                                options={allStatuses.map((status) => ({
                                    value: status.name,
                                    label: status.label,
                                }))}
                            />
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
                                register={register("description")}
                            />
                        }
                    />
                </div>

                <div>
                    <EditFeedbackActions feedbackId={id} />
                </div>
            </form>
        </div>
    )
}
