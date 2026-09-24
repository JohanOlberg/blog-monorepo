import type {FastifyRequest, FastifyReply } from "fastify";
import { GetPostBySlugUseCase } from "../../../application/use-cases/get-post-by-slug-use-case.js";
import { postBySlugSchema } from "../schemas/get-post-by-slug.schema.js";


export class GetPostBySlugController{
    constructor(private postBySlugUseCase: GetPostBySlugUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

        const params = postBySlugSchema.parse(request.params)
        const postOutput = await this.postBySlugUseCase.execute(params.slug);
        
        if(postOutput){
            return reply.status(200).send(postOutput)
        }
       
    }
}