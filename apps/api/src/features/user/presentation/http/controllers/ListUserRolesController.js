import { userRoles } from "@user/domain/config/roles.js";
class ListUserRolesController {
    roles;
    constructor(roles) {
        this.roles = roles;
    }
    async handle(_request, reply) {
        return reply.status(200).send(this.roles);
    }
}
export const listUserRolesController = new ListUserRolesController(userRoles);
//# sourceMappingURL=ListUserRolesController.js.map