import type {FastifyRequest, FastifyReply } from "fastify";
import { UpdatePostUseCase } from "@post/application/use-cases/update-post-use-case.js";
import { updatePostSchema } from "../schemas/update-post.schema.js";
import { postIdParamSchema } from "../schemas/get-post-by-id.schema.js";

export class UpdatePostController{
    constructor(private updatePostUseCase: UpdatePostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

        const params = postIdParamSchema.parse(request.params)
        const body = updatePostSchema.parse(request.body)

        const postOutput = await this.updatePostUseCase.execute(body,params.id);
        if(postOutput){
            return reply.status(201).send(postOutput)
        }
        
    }
}