import { z } from "zod";
export const changePostCategorySchema = z.object({
    categoryId: z.coerce.number().int().positive(),
});
//# sourceMappingURL=change-post-category.schema.js.map