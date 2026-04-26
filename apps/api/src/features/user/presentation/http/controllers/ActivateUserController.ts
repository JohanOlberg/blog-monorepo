import type {FastifyRequest, FastifyReply } from "fastify";
import { userByIdParamSchema } from "../schemas/get-user-by-id-schemas.js";
import { ActivateUserUseCase } from "@user/application/use-cases/active-user-use-case.js";

export class ActivateUserController{
    constructor(private readonly activateUseCase:ActivateUserUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        const params = userByIdParamSchema.parse(request.params)
        const userOutput = await this.activateUseCase.execute(params.id)        
        return reply.status(200).send(userOutput)     
    }
}
