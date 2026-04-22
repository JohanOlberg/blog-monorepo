import type {FastifyRequest, FastifyReply } from "fastify";
import { DraftPostUseCase } from "@posts/application/use-cases/draft-post-use-case.js";
import { postIdParamSchema } from "@posts/application/dto/get-post-by-id.schema.js";
import { toPostOutput } from "@posts/application/mappers/post-output-mapper.js";

export class DraftPostController{
    constructor(private draftPostUseCase: DraftPostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
       
        const params = postIdParamSchema.parse(request.params)
        const post = await this.draftPostUseCase.execute(params.id);
        
        return reply.status(200).send(toPostOutput(post))
    }
}