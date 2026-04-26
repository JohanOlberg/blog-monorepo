import { z } from "zod";


export const emailUserSchema= z.object({
    email: z.string().trim().toLowerCase().email("Invalid email"),
});
