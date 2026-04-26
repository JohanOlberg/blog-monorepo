import type {FastifyRequest, FastifyReply } from "fastify";
import { userByIdParamSchema } from "../schemas/get-user-by-id-schemas.js";
import { DeactivateUserUseCase } from "@user/application/use-cases/deactivate-user-use-case.js";

export class DeactivateUserController{
    constructor(private readonly deactivateUseCase:DeactivateUserUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        const params = userByIdParamSchema.parse(request.params)
        const userOutput = await this.deactivateUseCase.execute(params.id)
        return reply.status(200).send(userOutput)
    }
}

