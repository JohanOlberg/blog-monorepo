import { z } from "zod";


export const nameAuthorSchema= z.object({
    userId: z.coerce.number().int().positive(),
});
