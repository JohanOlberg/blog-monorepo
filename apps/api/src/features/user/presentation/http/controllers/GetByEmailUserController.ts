import type {FastifyRequest, FastifyReply } from "fastify";
import { GetByEmailUseCase } from "@user/application/use-cases/get-by-email-user-use-case.js";
import { emailUserSchema } from "../schemas/get-user-by-email-schema.js";

export class GetByEmailUserController{
    constructor(private readonly getByEmailUserUseCase:GetByEmailUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

        const body = emailUserSchema.parse(request.body)
        const userOutput = await this.getByEmailUserUseCase.execute(body.email)
        return reply.status(200).send(userOutput)           
    }
}
