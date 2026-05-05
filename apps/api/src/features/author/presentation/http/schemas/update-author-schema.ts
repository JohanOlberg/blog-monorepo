import {  z } from "zod";

export const updateAuthorSchema= z.object({
name: z.string().trim().min(1, "Name is required"),
email: z.string().trim().toLowerCase().email("Invalid email"),
bio: z.string().trim(),
avatarUrl: z.string().trim()
    
});