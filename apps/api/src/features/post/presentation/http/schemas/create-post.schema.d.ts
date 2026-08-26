import { z } from "zod";
export declare const createPostSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    slug: z.ZodString;
    categoryId: z.ZodNumber;
    authorId: z.ZodNumber;
    content: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=create-post.schema.d.ts.map