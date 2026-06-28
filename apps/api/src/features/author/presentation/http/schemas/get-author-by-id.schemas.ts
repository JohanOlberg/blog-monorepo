import { z } from "zod";

export const authorIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});