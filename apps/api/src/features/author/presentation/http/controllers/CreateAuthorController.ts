import type {FastifyRequest, FastifyReply } from "fastify";
import { createAuthorSchema } from "../schemas/create-author-schema.js";
import type { CreateAuthorUseCase } from "@author/application/use-cases/create-author-use-case.js";


export class CreateAuthorController{
    constructor(private readonly createuthorUseCase:CreateAuthorUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

            const body = createAuthorSchema.parse(request.body)
            const authorOutput = await this.createuthorUseCase.execute(body)
            return reply.status(201).send(authorOutput)
        
    }
}
