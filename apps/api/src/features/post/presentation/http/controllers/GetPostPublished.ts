import type {FastifyRequest, FastifyReply } from "fastify";
import { GetPostPublishedUseCase } from "../../../application/use-cases/get-post-published-use-case.js";
import { postByParamsSchema } from "../schemas/get-post-by-params.js";
import {type PostsFilters} from "../../../domain/value-objects/post-params-filter.js"


export class GetPostPublishedController{
    
    constructor(private listPostUseCase: GetPostPublishedUseCase){}
    
    async handle(request:FastifyRequest, reply:FastifyReply){
        const params:PostsFilters = postByParamsSchema.parse(request.query)
        console.log(params)
        const posts = await this.listPostUseCase.execute(params);
        return reply.status(200).send(posts)

    }
}