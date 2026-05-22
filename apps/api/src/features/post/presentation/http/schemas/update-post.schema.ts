import { z } from "zod";
export const updatePostSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(30),
  description: z.string().trim().min(1, "Description is required").max(100),
  slug: z.string().trim().min(1, "Slug is required").max(50),
  content: z.string().trim(),
});