import { z } from "zod";

export const updateCategorySchemas = z.object({
    title: z.string().trim().min(1, "Title is required").max(20),
    slug: z.string().trim().min(1, "Slug is required").max(20),
    color: z.string().trim().min(1, "Color is required").max(7),
})