import { z } from "zod";
export const nameAuthorSchema = z.object({
    name: z.string().trim().toLowerCase().min(1, "Name is required"),
});
//# sourceMappingURL=get-author-by-name.schemas.js.map