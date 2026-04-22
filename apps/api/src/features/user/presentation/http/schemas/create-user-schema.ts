import { number, z } from "zod";

export const createUserSchema= z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  authorsId: z.array(number()),
  passwordHash: z.string()
    
});

export type CreatePostInput = z.infer<typeof createUserSchema>