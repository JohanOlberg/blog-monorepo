import { z } from "zod";
import type { CreatePostInput } from "../../../application/dto/post.input.js";

export const createPostSchema: z.ZodType<CreatePostInput> = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  categoryId: z.number(),
  authorId: z.number(),
  content: z
    .object({
      image: z.string().optional(),
      text: z.string().optional(),
    })
    .optional(),
});