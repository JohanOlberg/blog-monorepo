import type {FastifyRequest, FastifyReply } from "fastify";
import { ChangeUserRoleUseCase} from "@user/application/use-cases/change-role-user-use-case.js";

import { userByIdParamSchema } from "../schemas/get-user-by-id-schema.js";
import { changeRoleUserSchema } from "../schemas/change-role-schema.js";

export class ChangeUserRoleController{
    constructor(private readonly changeUserRoleUseCase:ChangeUserRoleUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
            const params = userByIdParamSchema.parse(request.params)
            const body = changeRoleUserSchema.parse(request.body)        
            const userOutput = await this.changeUserRoleUseCase.execute({id:params.id,...body})
            return reply.status(200).send(userOutput)
    }
}

