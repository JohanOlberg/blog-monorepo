import type { FastifyRequest, FastifyReply } from "fastify"
import type { Permission } from "../../../application/auth/permissions.js"
import { ROLE_PERMISSIONS } from "../../../application/auth/role-permission.js"

export function requirePermission(permission: Permission) {
  return async function (request: FastifyRequest, reply: FastifyReply) {
    const user = request.user
   
    if (!user) {
      return reply.status(401).send({ message: "Unauthorized" })
    }

    

    const role = user.role

    if (!role) {
      return reply.status(403).send({ message: "Forbidden" })
    }

    const permissions = ROLE_PERMISSIONS[role]

    if (!permissions.includes(permission)) {
      return reply.status(403).send({ message: "Forbidden" })
    }
  }
}