import { z } from "zod"

export const changePostCategorySchema = z.object({
  categoryId: z.coerce.number().int().positive(),
})