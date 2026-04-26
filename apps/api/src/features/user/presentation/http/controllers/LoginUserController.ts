import { LoginUserUseCase } from "@user/application/use-cases/login-user-use-case.js";
import { loginUserSchema } from "../schemas/login-user-schema.js";
import type {FastifyRequest, FastifyReply } from "fastify";

export class LoginUserController{
        constructor(private loginUserUseCase:LoginUserUseCase){}
        async handle(request:FastifyRequest, reply:FastifyReply){                
                const body = loginUserSchema.parse(request.body)
                const userOutput = await this.loginUserUseCase.execute(body)
                return reply.status(200).send(userOutput)            

        }
}