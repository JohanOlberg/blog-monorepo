import {  z } from "zod";
import { authorStatusSchema } from "./authorStatusSchema.js";



export const updateAuthorSchema= z.object({
name: z.string().trim().min(1, "Name is required"),
bio: z.string().trim(),
avatarUrl: z.string().trim(),
status: authorStatusSchema,    
});