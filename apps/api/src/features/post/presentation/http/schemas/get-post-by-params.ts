import { z } from "zod";

export const postByParamsSchema = z.object({
  sort: z.string().optional(),
  category: z.string().optional(),
  search: z.string().optional()
});