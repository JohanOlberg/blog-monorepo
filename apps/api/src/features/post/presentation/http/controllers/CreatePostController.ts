import type {FastifyRequest, FastifyReply } from "fastify";
import { CreatePostUseCase } from "src/features/post/application/use-cases/create-post-use-case.js";
import { createPostSchema } from "src/features/post/presentation/http/schemas/create-post.schema.js";

export class CreatePostController{
    constructor(private createPostUseCase: CreatePostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        const body = createPostSchema.parse(request.body)
        const postOutput  = await this.createPostUseCase.execute(body);
        return reply.status(201).send(postOutput)

    }
}