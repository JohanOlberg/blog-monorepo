import { z } from "zod";

export const postIdParamSchema = z.object({
  id: z.coerce.number()
})

export type PostIdParamSchema = z.infer<typeof postIdParamSchema>