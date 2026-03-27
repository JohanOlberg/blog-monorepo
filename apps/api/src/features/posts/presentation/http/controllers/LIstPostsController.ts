import type {FastifyRequest, FastifyReply } from "fastify";
import { PostsListUseCase } from "../../../application/use-cases/list-posts-use-case.js";
import { type PostsListInput } from "../../../application/dto/post.input.js";


export class ListPostController{
    constructor(private listPostUseCase: PostsListUseCase){}
    async handle(request:FastifyRequest<{Body:PostsListInput}>, reply:FastifyReply){

        
        await this.listPostUseCase.execute();

        return reply.status(201).send()

    }
}