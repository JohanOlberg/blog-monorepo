import type {FastifyRequest, FastifyReply } from "fastify";
import { ListUserUseCase } from "@user/application/use-cases/list-user-use-case.js";

export class ListUserController{
    constructor(private readonly listUserUseCase:ListUserUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

            const userOutput = await this.listUserUseCase.execute()            
            return reply.status(200).send(userOutput)
    }
}