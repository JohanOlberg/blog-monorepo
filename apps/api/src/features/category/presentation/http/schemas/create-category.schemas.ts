import { z } from "zod";

export const createCategorySchemas = z.object({
    title: z.string().trim().min(1, "Title is required").max(30),
    slug: z.string().trim().min(1, "Slug is required").max(30),
    color: z.string().trim().min(1, "Color is required").max(7),
})