import type { UserRoles } from "@user/domain/types/user-roles.js";
export type TokenPayload = {
    sub: string;
    email: string;
    role?: UserRoles;
};
//# sourceMappingURL=token-payload.d.ts.map