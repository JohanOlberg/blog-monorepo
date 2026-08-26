import { z } from "zod";
export const changeAuthorUserSchema = z.object({
    userId: z.coerce.number().int().positive(),
});
//# sourceMappingURL=change-author-user.schemas.js.map