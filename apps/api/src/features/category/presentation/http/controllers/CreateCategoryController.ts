import type {FastifyRequest, FastifyReply } from "fastify";
import { CreateCategoryUseCase } from "src/features/category/application/use-cases/create-category-use-case.js";
import { createCategorySchemas } from "../schemas/create-category.schemas.js";

export class CreateCategoryController{
    constructor(private createCategoryUseCase:CreateCategoryUseCase){}
    async handle(request:FastifyRequest, reply:FastifyReply){
        const body = createCategorySchemas.parse(request.body)
        const category = this.createCategoryUseCase.execute(body)
        return reply.status(201).send(category)
    }
}