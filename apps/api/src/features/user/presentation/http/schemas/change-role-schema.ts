import { z } from "zod";


export const changeRoleUserSchema= z.object({
    role: z.enum(["USER", "AUTHOR", "ADMIN"])
});
