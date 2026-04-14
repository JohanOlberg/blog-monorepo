import type {FastifyRequest, FastifyReply } from "fastify";
import { CreatePostUseCase } from "../../../application/use-cases/create-post-use-case.js";
import { createPostSchema } from "../../../contracts/input/create-post.schema.js";
import { toPostOutput } from "../../../application/mappers/post-output-mapper.js";

export class CreatePostController{
    constructor(private createPostUseCase: CreatePostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

        
        const body = createPostSchema.parse(request.body)

        const post = await this.createPostUseCase.execute(body);
        return reply.status(201).send(toPostOutput(post))

    }
}