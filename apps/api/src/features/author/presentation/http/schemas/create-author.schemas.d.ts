import { z } from "zod";
export declare const createAuthorSchema: z.ZodObject<{
    name: z.ZodString;
    userId: z.ZodCoercedNumber<unknown>;
    bio: z.ZodString;
    avatarUrl: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=create-author.schemas.d.ts.map