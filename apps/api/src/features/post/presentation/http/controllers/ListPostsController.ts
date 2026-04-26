import type {FastifyRequest, FastifyReply } from "fastify";
import { ListPostsUseCase } from "@post/application/use-cases/list-posts-use-case.js";



export class ListPostsController{
    constructor(private listPostUseCase: ListPostsUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        
        const posts = await this.listPostUseCase.execute();

        return reply.status(200).send(posts)

    }
}