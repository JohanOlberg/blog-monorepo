import type {FastifyRequest, FastifyReply } from "fastify";
import { ListCategoryUseCase } from "src/features/category/application/use-cases/list-category-use-case.js";


export class ListaCategoryController{
    constructor(private listCategoryUseCase:ListCategoryUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        const category = await this.listCategoryUseCase.execute()

        return reply.status(200).send(category)
    }
}