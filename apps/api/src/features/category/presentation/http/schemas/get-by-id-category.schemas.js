import { z } from "zod";
export const categoryIdParamSchema = z.object({
    id: z.coerce.number().int().positive()
});
//# sourceMappingURL=get-by-id-category.schemas.js.map