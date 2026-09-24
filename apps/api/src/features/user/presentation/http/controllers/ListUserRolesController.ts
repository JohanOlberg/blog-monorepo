import { userRoles } from "../../../domain/config/roles.js";

import type {FastifyRequest, FastifyReply } from "fastify";

type UserRolesList = typeof userRoles;

class ListUserRolesController{
    constructor(private readonly roles: UserRolesList) {}

    async handle(_request: FastifyRequest, reply: FastifyReply) {
           
            return reply.status(200).send(this.roles)
    }
}

export const listUserRolesController = new ListUserRolesController(userRoles)