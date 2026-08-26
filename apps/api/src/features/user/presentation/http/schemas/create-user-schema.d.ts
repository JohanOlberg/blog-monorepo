import { z } from "zod";
export declare const createUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodEnum<{
        ADMIN: "ADMIN";
        AUTHOR: "AUTHOR";
        EDITOR: "EDITOR";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=create-user-schema.d.ts.map