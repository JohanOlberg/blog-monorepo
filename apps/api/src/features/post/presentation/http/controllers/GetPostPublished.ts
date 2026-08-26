import type {FastifyRequest, FastifyReply } from "fastify";
import { GetPostPublishedUseCase } from "@post/application/use-cases/get-post-published-use-case.js";



export class GetPostPublishedController{
    constructor(private listPostUseCase: GetPostPublishedUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        
        const posts = await this.listPostUseCase.execute();
        return reply.status(200).send(posts)

    }
}