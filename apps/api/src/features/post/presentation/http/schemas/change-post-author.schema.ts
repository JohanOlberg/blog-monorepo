import { z } from "zod"

export const changePostAuthorSchema = z.object({
  authorId: z.coerce.number().int().positive(), 
})