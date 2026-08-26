import { z } from "zod";
export const changeRoleUserSchema = z.object({
    role: z.enum(["EDITOR", "AUTHOR", "ADMIN"])
});
//# sourceMappingURL=change-role-schema.js.map