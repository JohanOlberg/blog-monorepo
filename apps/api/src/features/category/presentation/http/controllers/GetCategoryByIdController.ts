import type {FastifyRequest, FastifyReply } from "fastify";
import { GetCategoryByIdUseCase } from "src/features/category/application/use-cases/get-category-by-id-use-case.js";
import { categoryIdParamSchema } from "../schemas/get-by-id-category.schemas.js";

export class GetCategotyByIdController{
    constructor(private getCategoryByIdUseCase:GetCategoryByIdUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        const params = categoryIdParamSchema.parse(request.body)
        const category = this.getCategoryByIdUseCase.execute(params.id)
        return reply.status(200).send(category)
    }
}