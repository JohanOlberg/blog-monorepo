import type {FastifyRequest, FastifyReply } from "fastify";
import type { UserRoles } from "@user/domain/types/user-roles.js"

export function requireRole(allowedRoles: UserRoles[]) {
  return async function (request: FastifyRequest, reply: FastifyReply) {
    const user = request.user

    if (!user) {
      return reply.status(401).send({ message: "Unauthorized" })
    }

    if (!user.role || !allowedRoles.includes(user.role)) {
      return reply.status(403).send({ message: "Forbidden" })
    }
  }
}