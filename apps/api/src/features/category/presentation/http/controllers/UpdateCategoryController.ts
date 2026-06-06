import type {FastifyRequest, FastifyReply } from "fastify";
import { UpdateCategoryUseCase } from "src/features/category/application/use-cases/update-category-use-case.js";
import { updateCategorySchemas } from "../schemas/update-category.schemas.js";

export class UpdateCategoryController{
    constructor(updateCategoryUseCase:UpdateCategoryUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        const body = updateCategorySchemas.parse(request.body)
    }
}