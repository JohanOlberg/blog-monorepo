import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(30),
  description: z.string().trim().min(1, "Description is required").max(100),
  slug: z.string().trim().min(1, "Slug is required").max(50),
  categoryId: z.number().int().positive(),
  authorId: z.number().int().positive(),
  content: z.string().trim(),
});