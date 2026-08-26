import { z } from "zod";
export declare const changeRoleUserSchema: z.ZodObject<{
    role: z.ZodEnum<{
        ADMIN: "ADMIN";
        AUTHOR: "AUTHOR";
        EDITOR: "EDITOR";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=change-role-schema.d.ts.map