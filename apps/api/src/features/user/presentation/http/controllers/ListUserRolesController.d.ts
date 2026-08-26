import { userRoles } from "@user/domain/config/roles.js";
import type { FastifyRequest, FastifyReply } from "fastify";
type UserRolesList = typeof userRoles;
declare class ListUserRolesController {
    private readonly roles;
    constructor(roles: UserRolesList);
    handle(_request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
export declare const listUserRolesController: ListUserRolesController;
export {};
//# sourceMappingURL=ListUserRolesController.d.ts.map