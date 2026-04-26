import type {FastifyRequest, FastifyReply } from "fastify";
import { CreateUserUseCase } from "@user/application/use-cases/create-user-use-case.js";
import { createUserSchema } from "../schemas/create-user-schema.js";


export class CreateUserController{
    constructor(private readonly createUserUseCase:CreateUserUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

            const body = createUserSchema.parse(request.body)
            const userOutput = await this.createUserUseCase.execute(body)
            return reply.status(201).send(userOutput)
        
    }
}
