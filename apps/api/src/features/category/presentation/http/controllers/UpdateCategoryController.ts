import type {FastifyRequest, FastifyReply } from "fastify";
import { UpdateCategoryUseCase } from "src/features/category/application/use-cases/update-category-use-case.js";
import { updateCategorySchemas } from "../schemas/update-category.schemas.js";
import { categoryIdParamSchema } from "../schemas/get-by-id-category.schemas.js";


export class UpdateCategoryController{
    constructor(private updateCategoryUseCase:UpdateCategoryUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        const params = categoryIdParamSchema.parse(request.params)
        const body = updateCategorySchemas.parse(request.body)

        const categoryOutput = await this.updateCategoryUseCase.execute(body, params.id)
    }
}