import type {FastifyRequest, FastifyReply } from "fastify";
import { CreatePostUseCase } from "@posts/application/use-cases/create-post-use-case.js";
import { createPostSchema } from "@posts/presentation/http/schemas/create-post.schema.js";
import { toPostOutput } from "@posts/application/mappers/post-output-mapper.js";

export class CreatePostController{
    constructor(private createPostUseCase: CreatePostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

        
        const body = createPostSchema.parse(request.body)

        const postOutput  = await this.createPostUseCase.execute(body);
        return reply.status(201).send(postOutput)

    }
}