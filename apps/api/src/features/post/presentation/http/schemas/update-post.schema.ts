import { z } from "zod";

export const updatePostSchema= z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  categoryId: z.number(),
  authorId: z.number(),
  content: z.string(),    
});
