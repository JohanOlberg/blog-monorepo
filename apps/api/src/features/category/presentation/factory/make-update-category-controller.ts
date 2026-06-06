import { UpdateCategoryUseCase } from "../../application/use-cases/update-category-use-case.js";
import { PrismaCategoryRepository } from "../../infrastructure/persistence/prisma/repositories/prisma-category-repository.js";
import { UpdateCategoryController } from "../http/controllers/UpdateCategoryController.js";

export function makeUpdateCategoryController(){
    const prismaCategoryRepository = new PrismaCategoryRepository()
    const updateCategoryUseCase = new UpdateCategoryUseCase(prismaCategoryRepository)
    const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)
    return updateCategoryController
}