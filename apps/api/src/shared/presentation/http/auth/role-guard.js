export function requireRole(allowedRoles) {
    return async function (request, reply) {
        const user = request.user;
        if (!user) {
            return reply.status(401).send({ message: "Unauthorized" });
        }
        if (!user.role || !allowedRoles.includes(user.role)) {
            return reply.status(403).send({ message: "Forbidden" });
        }
    };
}
//# sourceMappingURL=role-guard.js.map