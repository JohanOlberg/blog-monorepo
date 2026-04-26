import type {FastifyRequest, FastifyReply } from "fastify";
import { ChangePasswordUserUseCase } from "@user/application/use-cases/change-password-user-use-case.js";
import { passwordUserSchema } from "../schemas/change-password-schemas.js";
import { userByIdParamSchema } from "../schemas/get-user-by-id-schemas.js";

export class ChangePasswordUserController{
    constructor(private readonly changePasswordUserUseCase:ChangePasswordUserUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
            const params = userByIdParamSchema.parse(request.params)
            const body = passwordUserSchema.parse(request.body)        
            const userOutput = await this.changePasswordUserUseCase.execute({...body,id:params.id})
            return reply.status(200).send(userOutput)
    }
}

