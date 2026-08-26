import { z } from "zod";
export const updateUserSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().trim().toLowerCase().email("Invalid email"),
});
//# sourceMappingURL=update-user-schema.js.map