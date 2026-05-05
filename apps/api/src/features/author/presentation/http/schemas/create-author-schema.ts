import {  z } from "zod";

export const createAuthorSchema= z.object({
name: z.string().trim().min(1, "Name is required"),
email: z.string().trim().toLowerCase().email("Invalid email"),
userId: z.coerce.number().int().positive(),
bio: z.string().trim(),
avatarUrl: z.string().trim()
    
});