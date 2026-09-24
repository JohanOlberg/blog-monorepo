import type {FastifyRequest, FastifyReply } from "fastify";
import { CreatePostUseCase } from "../../../application/use-cases/create-post-use-case.js";
import { createPostSchema } from "../schemas/create-post.schema.js";

export class CreatePostController{
    constructor(private createPostUseCase: CreatePostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        const body = createPostSchema.parse(request.body)
        const postOutput  = await this.createPostUseCase.execute(body);
        return reply.status(201).send(postOutput)
    }
}