import type {FastifyRequest, FastifyReply } from "fastify";
import { CreatePostUseCase } from "../../../application/use-cases/create-post-use-case.js";

export class CreatePostController{
    constructor(private createPostUseCase: CreatePostUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){

    }
}