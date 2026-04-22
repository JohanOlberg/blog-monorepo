import type {FastifyRequest, FastifyReply } from "fastify";
import { DraftPostUseCase } from "@post/application/use-cases/draft-post-use-case.js";
import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js";

export class DraftPostController{
    constructor(private draftPostUseCase: DraftPostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
       
        const params = postIdParamSchema.parse(request.params)
        const postOutput = await this.draftPostUseCase.execute(params.id);
        
        return reply.status(200).send(postOutput)
    }
}