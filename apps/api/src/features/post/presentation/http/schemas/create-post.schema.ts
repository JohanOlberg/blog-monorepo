import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().trim().min(10, "Title is required").max(50),
  description: z.string().trim().min(30, "Description is required").max(120),
  slug: z.string().trim().min(1, "Slug is required").max(50),
  categoryId: z.number().int().positive(),
  authorId: z.number().int().positive(),
  content: z.string().trim(),
});