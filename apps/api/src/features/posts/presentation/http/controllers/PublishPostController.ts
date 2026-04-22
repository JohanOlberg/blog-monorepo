import type {FastifyRequest, FastifyReply } from "fastify";
import { PublishPostUseCase } from "@posts/application/use-cases/publish-post-use-case.js";
import { postIdParamSchema } from "@posts/presentation/http/schemas/get-post-by-id.schema.js";
import { toPostOutput } from "@posts/application/mappers/post-output-mapper.js";

export class PublishPostController{
    constructor(private publishPostUseCase: PublishPostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
       
        const params = postIdParamSchema.parse(request.params)
        const post = await this.publishPostUseCase.execute(params.id);
        
        return reply.status(200).send(toPostOutput(post))
    }
}