import type { FastifyRequest, FastifyReply } from "fastify";
import type { Permission } from "@shared/application/auth/permissions.js";
export declare function requirePermission(permission: Permission): (request: FastifyRequest, reply: FastifyReply) => Promise<undefined>;
//# sourceMappingURL=permission-guard.d.ts.map