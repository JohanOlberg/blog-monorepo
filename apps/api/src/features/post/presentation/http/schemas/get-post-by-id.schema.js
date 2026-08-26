import { z } from "zod";
export const postIdParamSchema = z.object({
    id: z.coerce.number().int().positive()
});
//# sourceMappingURL=get-post-by-id.schema.js.map