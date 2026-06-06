import { CreateCategoryUseCase } from "../../application/use-cases/create-category-use-case.js";
import { PrismaCategoryRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-category-repository.js";
import { CreateCategoryController } from "../http/controllers/CreateCategoryController.js";

export function makeCreateCategoryController(){
    const prismaCategoryRepository = new PrismaCategoryRepository()
    const createCategoryUseCase = new CreateCategoryUseCase(prismaCategoryRepository)
    const createCategoryController = new CreateCategoryController(createCategoryUseCase)

    return createCategoryController
}