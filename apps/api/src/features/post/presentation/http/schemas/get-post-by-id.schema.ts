import { z } from "zod";

export const postIdParamSchema = z.object({
  id: z.coerce.number()
})
