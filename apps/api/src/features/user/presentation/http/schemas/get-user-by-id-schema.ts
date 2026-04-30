import { z } from "zod";

export const userByIdParamSchema = z.object({
  id: z.coerce.number().int().positive()
});