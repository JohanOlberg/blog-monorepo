import type {FastifyRequest, FastifyReply } from "fastify";
import { PostsListUseCase } from "@posts/application/use-cases/list-posts-use-case.js";



export class ListPostController{
    constructor(private listPostUseCase: PostsListUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

        
        const posts = await this.listPostUseCase.execute();

        return reply.status(200).send(posts)

    }
}