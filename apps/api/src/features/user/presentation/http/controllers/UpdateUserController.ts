import type {FastifyRequest, FastifyReply } from "fastify";
import { UpdateUserUseCase } from "@user/application/use-cases/update-user-use-case.js";
import { updateUserSchema } from "../schemas/update-user-schema.js";
import { userByIdParamSchema } from "../schemas/get-user-by-id-schemas.js";



export class UpdateUserController{
    constructor(private readonly updateUserUseCase:UpdateUserUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

    const params = userByIdParamSchema.parse(request.params)
    const body = updateUserSchema.parse(request.body)
    const userOutput = await this.updateUserUseCase.execute(body,params.id)    
    return reply.status(200).send(userOutput)

    }
}
