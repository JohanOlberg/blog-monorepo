import type {FastifyRequest, FastifyReply } from "fastify";
import { ArchivePostUseCase } from "@posts/application/use-cases/archive-post-use-case.js";
import { postIdParamSchema } from "@posts/application/dto/get-post-by-id.schema.js";
import { toPostOutput } from "@posts/application/mappers/post-output-mapper.js";

export class ArchivePostController{
    constructor(private archivePostUseCase: ArchivePostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
       
        const params = postIdParamSchema.parse(request.params)
        const post = await this.archivePostUseCase.execute(params.id);
        
        return reply.status(200).send(toPostOutput(post))
    }
}