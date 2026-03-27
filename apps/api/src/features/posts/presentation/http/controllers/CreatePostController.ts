import type {FastifyRequest, FastifyReply } from "fastify";
import { CreatePostUseCase } from "../../../application/use-cases/create-post-use-case.js";
import { type CreatePostInput } from "../../../application/dto/post.input.js";
import { createPostSchema } from "../schemas/create-post.schema.js";


export class CreatePostController{
    constructor(private createPostUseCase: CreatePostUseCase){}
    async handle(request:FastifyRequest<{Body:CreatePostInput}>, reply:FastifyReply){

        
        const body = createPostSchema.parse(request.body)// as CreatePostInput;


        await this.createPostUseCase.execute(body, new Date());

        return reply.status(201).send()

    }
}