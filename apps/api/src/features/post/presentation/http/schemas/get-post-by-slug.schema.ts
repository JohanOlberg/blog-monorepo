import { z } from "zod";

export const postBySlugSchema = z.object({
  slug: z.string().trim().min(1, "Slug is required").max(50)
});