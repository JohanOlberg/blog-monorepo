import type { FastifyRequest, FastifyReply } from "fastify";
import type { UserRoles } from "@user/domain/types/user-roles.js";
export declare function requireRole(allowedRoles: UserRoles[]): (request: FastifyRequest, reply: FastifyReply) => Promise<undefined>;
//# sourceMappingURL=role-guard.d.ts.map