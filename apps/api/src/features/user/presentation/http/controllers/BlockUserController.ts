import type {FastifyRequest, FastifyReply } from "fastify";
import { userByIdParamSchema } from "../schemas/get-user-by-id-schemas.js";
import { BlockUserUseCase } from "@user/application/use-cases/block-user-use-case.js";

export class BlockUserController{
    constructor(private readonly blockUserUseCase:BlockUserUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        const params = userByIdParamSchema.parse(request.params)
        const userOutput = await this.blockUserUseCase.execute(params.id)        
        return reply.status(200).send(userOutput)
    }
}

