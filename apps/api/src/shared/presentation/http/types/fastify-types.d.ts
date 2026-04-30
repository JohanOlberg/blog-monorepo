import "fastify"
import type { UserRoles } from "@user/domain/types/user-roles.js"
declare module "fastify" {
  interface FastifyRequest {
    user?: {
      id: string
      email?: string
      role?: UserRoles
    }
  }
}