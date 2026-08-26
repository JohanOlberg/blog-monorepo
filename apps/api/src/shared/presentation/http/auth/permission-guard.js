import { ROLE_PERMISSIONS } from "@shared/application/auth/role-permission.js";
export function requirePermission(permission) {
    return async function (request, reply) {
        const user = request.user;
        if (!user) {
            return reply.status(401).send({ message: "Unauthorized" });
        }
        const role = user.role;
        if (!role) {
            return reply.status(403).send({ message: "Forbidden" });
        }
        const permissions = ROLE_PERMISSIONS[role];
        if (!permissions.includes(permission)) {
            return reply.status(403).send({ message: "Forbidden" });
        }
    };
}
//# sourceMappingURL=permission-guard.js.map