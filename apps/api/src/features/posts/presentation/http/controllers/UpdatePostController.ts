import type {FastifyRequest, FastifyReply } from "fastify";
import { UpdatePostUseCase } from "@posts/application/use-cases/update-post-use-case.js";
import { updatePostSchema } from "@posts/presentation/http/schemas/update-post.schema.js";
import { postIdParamSchema } from "@posts/presentation/http/schemas/get-post-by-id.schema.js";
import { toPostOutput } from "@posts/application/mappers/post-output-mapper.js";

export class UpdatePostController{
    constructor(private updatePostUseCase: UpdatePostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

        const params = postIdParamSchema.parse(request.params)
        const body = updatePostSchema.parse(request.body)

        const post = await this.updatePostUseCase.execute(body,params.id);
        if(post){
            return reply.status(201).send(toPostOutput(post))
        }
        return reply.status(404).send({ message: "Post not found" })

    }
}