import { z } from "zod";
export declare const updateAuthorSchema: z.ZodObject<{
    name: z.ZodString;
    bio: z.ZodString;
    avatarUrl: z.ZodString;
    status: z.ZodEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        BLOCKED: "BLOCKED";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=update-author.schemas.d.ts.map