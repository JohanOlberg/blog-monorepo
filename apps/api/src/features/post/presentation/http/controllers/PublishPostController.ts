import type {FastifyRequest, FastifyReply } from "fastify";
import { PublishPostUseCase } from "@post/application/use-cases/publish-post-use-case.js";
import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js";

export class PublishPostController{
    constructor(private publishPostUseCase: PublishPostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
       
        const params = postIdParamSchema.parse(request.params)
        const postOutput = await this.publishPostUseCase.execute(params.id);
        
        return reply.status(200).send(postOutput)
    }
}