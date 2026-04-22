import type {FastifyRequest, FastifyReply } from "fastify";
import { ArchivePostUseCase } from "@post/application/use-cases/archive-post-use-case.js";
import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js";

export class ArchivePostController{
    constructor(private archivePostUseCase: ArchivePostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
       
        const params = postIdParamSchema.parse(request.params)
        const postOutput = await this.archivePostUseCase.execute(params.id);
        
        return reply.status(200).send(postOutput)
    }
}