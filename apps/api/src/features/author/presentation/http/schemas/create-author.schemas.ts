import {  z } from "zod";
import { authorStatusSchema } from "./authorStatusSchema.js";


export const createAuthorSchema= z.object({
name: z.string().trim().min(1, "Name is required"),
userId: z.coerce.number().int().positive(),
bio: z.string().trim(),
avatarUrl: z.string().trim(),
//status: authorStatusSchema,  
    
});